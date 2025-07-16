import footerTexture from '../assets/footer-texture.png';
import '../styles/components/Footer.scss';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const NAV_ITEMS = [
  { name: 'Home', href: '/', selected: true },
  { name: 'Events', href: '/events' },
  { name: 'Programme', href: '/programme' },
  { name: 'The School', href: '/school' },
  { name: 'Members', href: '/members' },
  { name: 'Library', href: '/library' },
  { name: 'Recordings', href: '/recordings' },
];

const Footer: React.FC = () => {
  const underlineRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const handleMouseEnter = (idx: number) => {
    const el = underlineRefs.current[idx];
    if (el) {
      gsap.to(el, { scaleX: 1, duration: 0.4, ease: 'power2.out' });
    }
  };

  const handleMouseLeave = (idx: number, selected: boolean) => {
    const el = underlineRefs.current[idx];
    if (el && !selected) {
      gsap.to(el, { scaleX: 0, duration: 0.4, ease: 'power2.in' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer__nav-wrapper">
        <div className="footer__title">Lacanian Forum of London</div>
        <nav className="footer__nav" aria-label="Footer Navigation">
          <ul className="footer__nav-list">
            {NAV_ITEMS.map((item, idx) => (
              <li
                key={item.name}
                className={`footer__nav-item${item.selected ? ' selected' : ''}`}
                onMouseEnter={() => handleMouseEnter(idx)}
                onMouseLeave={() => handleMouseLeave(idx, !!item.selected)}
              >
                <Link to={item.href}>{item.name}</Link>
                <span
                  className="footer__nav-underline"
                  ref={el => { underlineRefs.current[idx] = el; }}
                  style={item.selected ? { transform: 'scaleX(1)' } : undefined}
                />
              </li>
            ))}
          </ul>
        </nav>
        <div className="footer__social">
          <span className="footer__social-label">Follow us on social</span>
          <div className="footer__social-icons">
            {/* <img src={SOCIAL_ICON} alt="Social Icon 1" className="footer__icon" />
            <img src={SOCIAL_ICON} alt="Social Icon 2" className="footer__icon" />
            <img src={SOCIAL_ICON} alt="Social Icon 3" className="footer__icon" /> */}
          </div>
        </div>
      </div>
      <div className="footer__texture" aria-hidden="true" style={{backgroundImage: `url(${footerTexture})`}}>
        {/* Texture is now a background, img hidden for accessibility */}
        <img src={footerTexture} alt="Footer Texture" style={{display: 'none'}}/>
      </div>
    </footer>
  );
};

export default Footer; 