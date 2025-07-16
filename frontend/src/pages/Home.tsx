import InMemory from '../components/InMemory';
import DecorativeBanner from '../components/DecorativeBanner';
import ForumInfo from '../components/ForumInfo';
import '../styles/pages/Home.scss';

const Home = () => {
  return (
    <div className="home-page">
      <InMemory />
      <DecorativeBanner />
      <ForumInfo />
    </div>
  );
};

export default Home;
