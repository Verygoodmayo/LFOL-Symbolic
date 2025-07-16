import React from 'react';
import '../styles/components/QuickEventItem.scss';

interface QuickEventItemProps {
  title: string;
  date: string;
  description?: string;
}

const QuickEventItem: React.FC<QuickEventItemProps> = ({ title, date, description }) => {
  return (
    <div className="quick-event-item">
      <h4 className="quick-event-item__title">{title}</h4>
      {description && <p className="quick-event-item__description">{description}</p>}
      <p className="quick-event-item__date">{date}</p>
    </div>
  );
};

export default QuickEventItem; 