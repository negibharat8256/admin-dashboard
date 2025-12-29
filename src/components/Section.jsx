const Section = ({ title, children }) => {
  return (
    <section className="section">
      <div className="section-header">
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
};

export default Section;
