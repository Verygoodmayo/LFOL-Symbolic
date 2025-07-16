import React from 'react';
import decorativeBanner from '../assets/decorative-banner.png';
import '../styles/components/DecorativeBanner.scss';

const DecorativeBanner: React.FC = () => {
    return (
        <section className="decorative-banner">
            <div 
                className="decorative-banner__image" 
                style={{ backgroundImage: `url('${decorativeBanner}')` }} 
            />
        </section>
    );
};

export default DecorativeBanner; 