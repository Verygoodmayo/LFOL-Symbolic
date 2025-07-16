import React from 'react';

interface MessageProps {
  text: string;
  sender: 'user' | 'ai';
}

const Message: React.FC<MessageProps> = ({ text, sender }) => {
  return (
    <div className={`message ${sender}`}>
      <p>{text}</p>
    </div>
  );
};

export default Message; 