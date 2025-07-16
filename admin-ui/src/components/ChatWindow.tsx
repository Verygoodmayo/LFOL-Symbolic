import React, { useState } from 'react';
import Message from './Message';
import ChatInput from './ChatInput';

interface MessageData {
  text: string;
  sender: 'user' | 'ai';
}

// New state for conversational context
type SessionState = object | null;

// Mirror the backend's AiPlan and Action structures
interface AiPlan {
  action: {
    CREATE?: { path: string; content: string };
    READ?: { path: string };
    UPDATE?: { path: string; content: string };
    DELETE?: { path: string };
    MODIFY?: { path: string; find: string; replace: string };
    SEARCH?: { query: string };
    CONFIRM?: { user_response: boolean; original_plan: AiPlan };
  };
}

const ChatWindow: React.FC = () => {
  const [messages, setMessages] = useState<MessageData[]>([]);
  const [pendingConfirmation, setPendingConfirmation] = useState<AiPlan | null>(null);
  const [sessionState, setSessionState] = useState<SessionState>(null);

  const handleSendMessage = async (input: string) => {
    const userMessage: MessageData = { text: input, sender: 'user' };
    setMessages(prevMessages => [...prevMessages, userMessage]);

    const isConfirmationFlow = pendingConfirmation !== null;
    let body;

    if (isConfirmationFlow) {
      body = {
        query: JSON.stringify({
          action: {
            CONFIRM: {
              user_response: input.toLowerCase() === 'yes',
              original_plan: pendingConfirmation,
            },
          },
        }),
        session_state: null
      };
      setPendingConfirmation(null); // Clear confirmation state
      setSessionState(null); // Also clear session state
    } else {
      // Regular message, send with current session state
      body = {
        query: input,
        session_state: sessionState,
      };
      // Clear session state after sending
      setSessionState(null);
    }

    try {
      const response = await fetch('http://127.0.0.1:3000/ai-update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'An unknown error occurred.');
      }

      let aiText = '';
      
      // If the backend sent back a session_state, it's a conversational reply.
      if (data.session_state) {
        setSessionState(data.session_state);
      }

      // New conversational response handling
      if (data.response_type === 'question') {
        aiText = data.message;
      } else if (data.status === 'success') {
        // This could be a SEARCH result or our new event confirmation
        if (data.data && data.data.confirmation_prompt) {
          aiText = data.data.confirmation_prompt;
          setPendingConfirmation(data.data.plan_to_execute);
        } else if (data.message) {
          aiText = data.message;
        } else if (data.data && data.data.content) {
          aiText = `Content of ${data.data.path}:\n\n${data.data.content}`;
        } else {
          aiText = 'Action completed successfully.';
        }
      } else { // status === 'error'
        aiText = data.message || 'An unknown error occurred on the backend.';
      }

      const aiResponseMessage: MessageData = { text: aiText, sender: 'ai' };
      setMessages(prevMessages => [...prevMessages, aiResponseMessage]);

    } catch (error) {
      console.error('Error fetching from backend:', error);
      let errorMessage = 'Failed to connect to the AI. Is the backend running?';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      const errorResponse: MessageData = { text: errorMessage, sender: 'ai' };
      setMessages(prevMessages => [...prevMessages, errorResponse]);
    }
  };

  return (
    <div className="chat-window">
      <div className="messages-list">
        {messages.map((msg, index) => (
          <Message key={index} text={msg.text} sender={msg.sender} />
        ))}
      </div>
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatWindow; 