import { Link } from 'react-router-dom';
import QuickEventItem from '../components/QuickEventItem';
import { events } from '../data/events';
import '../styles/pages/Home.scss';

const Events = () => {
  // Optional: Sort events by date, assuming dates are valid
  const sortedEvents = [...events].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="home-page">
      <div className="events-list">
        <h2>Events</h2>
        {sortedEvents.length > 0 ? (
          sortedEvents.map((event) => (
            <div key={event.id} className="event-item-container">
              <QuickEventItem
                title={event.title}
                date={new Date(event.date).toLocaleDateString()}
                description={event.description}
              />
              <Link to={`/events/${event.id}`} className="event-item__link">
                Go To Event
              </Link>
            </div>
          ))
        ) : (
          <p>Upcoming and past events will be listed here. Stay tuned for updates!</p>
        )}
      </div>
    </div>
  );
};

export default Events; 