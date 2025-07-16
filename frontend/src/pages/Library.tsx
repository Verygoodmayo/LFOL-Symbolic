import InMemory from '../components/InMemory';
import DecorativeBanner from '../components/DecorativeBanner';
import ForumInfo from '../components/ForumInfo';
import '../styles/pages/Home.scss';

const Library = () => {
  return (
    <div className="home-page">
      <InMemory />
      <DecorativeBanner />
      <ForumInfo />
      <h2>Library</h2>
      <p>Library resources and recommended readings will be listed here.</p>
    </div>
  );
};

export default Library; 