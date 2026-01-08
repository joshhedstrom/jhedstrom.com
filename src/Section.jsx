function Section({ children }) {
  return (
    <section className="h-screen flex items-center justify-center relative z-20">
      {children}
    </section>
  );
}

export default Section;
