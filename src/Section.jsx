function Section({ children }) {
  return (
    <section className="h-screen flex items-center justify-start relative z-20 snap-start">
      {children}
    </section>
  );
}

export default Section;
