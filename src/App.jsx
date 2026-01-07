import Section from './Section'

function App() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      {/* Hero Section - Name */}
      <Section>
        <div className="absolute bottom-8 left-8">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-black lowercase">
            josh hedstrom
          </h1>
        </div>
      </Section>

      {/* About Section */}
      <Section>
        <div className="absolute left-8 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-light mb-8 text-black">About</h2>
          <p className="text-lg md:text-xl leading-relaxed text-black mb-6">
            I'm an accomplished Engineering Manager with proven experience of leading teams through complex technical modernization and transformation. I've architected and implemented cutting-edge, composable tech stacks that drive business agility and scalability.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-black">
            I lead with rapid execution and clear communication across all organizational levels. I've successfully orchestrated cross-department initiatives to deliver business critical projects. I lead agile, fast moving teams that ship modern products to serve as a catalyst for business growth.
          </p>
        </div>
      </Section>

      {/* Contact Section */}
      <Section>
        <div className="absolute left-8 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-light mb-8 text-black">let's connect</h2>
          <div className="space-y-4">
            <a
              href="mailto:your.email@example.com"
              className="block text-lg text-black hover:underline"
            >
              josh.hedstrom@protonmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/josh-hedstrom/"
              className="block text-lg text-black hover:underline"
            >
              linkedin
            </a>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default App
