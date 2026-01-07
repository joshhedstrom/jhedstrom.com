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
          {/* <h2 className="text-4xl md:text-5xl font-light mb-8 text-black">About</h2> */}
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
        <div className="absolute left-8">
          <h2 className="text-4xl md:text-5xl font-light mb-8 text-black">connect</h2>
          <div className="flex gap-8">
            <a
              href="mailto:josh.hedstrom@protonmail.com"
              className="text-black hover:opacity-60 transition-opacity"
              aria-label="Email"
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/josh-hedstrom/"
              className="text-black hover:opacity-60 transition-opacity"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default App
