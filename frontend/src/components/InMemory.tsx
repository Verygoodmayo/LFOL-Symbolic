import '../styles/components/InMemory.scss';

const InMemory = () => {
  return (
    <section className="in-memory">
      <div className="in-memory__content">
        <h2 className="in-memory__title">In Fond Memory of Dr. Nestor Tamarin</h2>
        <div className="in-memory__text">
          <p>
            The Forum of London deeply regrets the sad loss of our very dear friend and mentor, Dr Nestor Tamarin. Nestor’s unflagging commitment to the cause of psychoanalysis and the sheer generosity of his spirit in sharing this have touched and inspired many of us.
          </p>
          <p>
            This was his founding act in the creation of our forum and it shall remain his legacy to us, both as a collective and as individuals, who have gained so much from his energy, his enthusiasm and his sincere friendship. We remember Nestor with respect and love.
          </p>
          <p>
            Our thoughts and sympathies are with Daphne, Mia and the rest of his family.
          </p>
        </div>
        <div className="in-memory__decorator" />
      </div>
    </section>
  );
};

export default InMemory;
