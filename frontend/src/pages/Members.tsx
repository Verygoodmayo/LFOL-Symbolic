import InMemory from '../components/InMemory';
import DecorativeBanner from '../components/DecorativeBanner';
import ForumInfo from '../components/ForumInfo';
import '../styles/pages/Home.scss';

const Members = () => {
  return (
    <div className="home-page">
      <InMemory />
      <DecorativeBanner />
      <ForumInfo />
      <h2>Members</h2>
      <p>Details about forum members and membership will be available here.</p>
    </div>
  );
};

export default Members; 