import InMemory from '../components/InMemory';
import DecorativeBanner from '../components/DecorativeBanner';
import ForumInfo from '../components/ForumInfo';
import '../styles/pages/Home.scss';

const Programme = () => {
  return (
    <div className="home-page">
      <InMemory />
      <DecorativeBanner />
      <ForumInfo />
      <h2>Programme</h2>
      <p>The full programme of studies for 2024 will be available here soon.</p>
    </div>
  );
};

export default Programme; 