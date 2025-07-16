import lfolLogo from '../assets/lfol-logo.svg';
import '../styles/components/Hero.scss';

const Hero = () => {

    return (
        <section className="hero">
            <div className="hero__wrapper">
                <span className="hero__title">Lacanian Forum of London</span>
                <div className="hero__logo">
                    <img src={lfolLogo} alt="Lacanian Forum of London Logo" />
                </div>
            </div>
        </section>
    );
};

export default Hero; 