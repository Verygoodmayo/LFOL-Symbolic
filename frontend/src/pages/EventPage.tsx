import React from 'react';
import { useParams } from 'react-router-dom';
import { events } from '../data/events';
import '../styles/pages/Home.scss'; // Re-using styles for now

const EventPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const event = events.find(e => e.id === id);

  if (!event) {
    return (
      <div className="home-page" style={{ padding: '2rem' }}>
        <h2>Event not found</h2>
        <p>The event you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="home-page" style={{ padding: '2rem' }}>
      <div className="event-full-content">
        <h1>{event.title}</h1>
        <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
        <hr style={{ margin: '1rem 0' }}/>
        <p>{event.fullContent}</p>
      </div>
    </div>
  );
};

export default EventPage; 