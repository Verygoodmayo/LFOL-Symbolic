import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Sidebar.scss';
import QuickEventItem from './QuickEventItem';
import { events } from '../data/events';

const pastEvents = [
  {
    title: "Quick Event Item Name",
    date: "May 3, 2024"
  },
  {
    title: "Quick Event Item Name",
    date: "May 3, 2024"
  },
  {
    title: "Quick Event Item Name",
    date: "May 3, 2024"
  }
];

const Sidebar: React.FC = () => {
  const latestEvents = events.filter(event => event.isPrimary);

  return (
    <aside className="sidebar">
      <div className="sidebar__section">
        <h3 className="sidebar__title">Latest Event</h3>
        <div className="sidebar__event-list">
          {latestEvents.map((event) => (
            <Link to={`/events/${event.id}`} key={event.id} className="sidebar__event-link">
              <QuickEventItem 
                title={event.title}
                date={new Date(event.date).toLocaleDateString()}
                description={event.description}
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="sidebar__section">
        <h3 className="sidebar__title">Past Events</h3>
        <div className="sidebar__event-list">
          {pastEvents.map((event, index) => (
            <QuickEventItem 
              key={index}
              title={event.title}
              date={event.date}
            />
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;