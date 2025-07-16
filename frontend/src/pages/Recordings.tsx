import InMemory from '../components/InMemory';
import DecorativeBanner from '../components/DecorativeBanner';
import ForumInfo from '../components/ForumInfo';
import '../styles/pages/Home.scss';

const Recordings = () => {
  return (
    <div className="home-page">
      <InMemory />
      <DecorativeBanner />
      <ForumInfo />
      <h2>Recordings</h2>
      <p>Audio and video recordings of past events will be available here.</p>
    </div>
  );
};

export default Recordings; 