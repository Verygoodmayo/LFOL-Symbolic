import '../styles/components/ForumInfo.scss';

const ForumInfo = () => {
  return (
    <section className="forum-info">
      <div className="forum-info__content">
        <h2 className="forum-info__title">The Lacanian Forum of London</h2>
        <p>
          The Lacanian Forum of London was founded in 2014. The Forum is dedicated to the study and transmission of the theory and practice of Lacanian psychoanalysis in the UK.
        </p>
        <p>
          Our activities include regular reading seminars of Lacanian texts, cartels, and Clinical and School spaces. Our full programme of studies for 2024 can be viewed <a href="/programme">here</a>.
        </p>
        <p>
          The Forum is affiliated with the <a href="http://www.champlacanien.net/public/2/ifInstances.php?language=2&menu=1" target="_blank" rel="noopener noreferrer">International of the Forums of the School of Psychoanalysis of the Lacanian Field (IF-SPFLF)</a>, an international federation of forums based in Paris, France.
        </p>
        <hr className="forum-info__divider" />
        <p>
          Following Lacan’s dissolution of his School, the EFP (École freudienne de Paris) in 1980, a number of forums emerged in various countries. The aim of these forums was to ensure continuation of the study of psychoanalysis and to help shape its practice.
        </p>
        <p>
          After a split in the World Association of Psychoanalysis (AMP), the Forums of the Lacanian Field were created with the aim of forming a school of psychoanalysis. In December 2001, <a href="/the-school">The School of Psychoanalysis of the Forums of the Lacanian Field (SPFLF)</a> was established at the Second Meeting of the IF.
        </p>
        <p>
          The forums look to establish lines of communication between psychoanalysis and other discourses, such as health care, political movements, science, philosophy and religion.
        </p>
        <p>
          If you are interested in getting involved in the activities of the forum, please email us at <a href="mailto:forumoflondon@gmail.com">forumoflondon@gmail.com</a>.
        </p>
      </div>
    </section>
  );
};

export default ForumInfo; 