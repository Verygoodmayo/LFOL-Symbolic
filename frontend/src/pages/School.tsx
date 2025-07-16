import InMemory from '../components/InMemory';
import DecorativeBanner from '../components/DecorativeBanner';
import ForumInfo from '../components/ForumInfo';
import '../styles/pages/Home.scss';

const School = () => {
  return (
    <div className="home-page">
      <InMemory />
      <DecorativeBanner />
      <ForumInfo />
      <h2>The School</h2>
      <p>Information about the School of Psychoanalysis of the Forums of the Lacanian Field (SPFLF) will be provided here.</p>
    </div>
  );
};

export default School; 