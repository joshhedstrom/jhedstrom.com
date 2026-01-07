import Section from './Section'

function App() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      {/* Hero Section - Name */}
      <Section>
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-light tracking-tight text-black">
            Josh Hedstrom
          </h1>
        </div>
      </Section>

      {/* About Section */}
      <Section>
        <div className="max-w-2xl px-8">
          <h2 className="text-4xl md:text-5xl font-light mb-8 text-black">About</h2>
          <p className="text-lg md:text-xl leading-relaxed text-black">
            Your about content goes here. Add information about yourself, your work,
            your interests, or whatever you'd like to share with visitors.
          </p>
        </div>
      </Section>

      {/* Contact Section */}
      <Section>
        <div className="max-w-2xl px-8">
          <h2 className="text-4xl md:text-5xl font-light mb-8 text-black">Contact</h2>
          <p className="text-lg md:text-xl leading-relaxed text-black mb-6">
            Let's get in touch. Reach out via email or connect on social media.
          </p>
          <div className="space-y-4">
            <a
              href="mailto:your.email@example.com"
              className="block text-lg text-black hover:underline"
            >
              your.email@example.com
            </a>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default App
