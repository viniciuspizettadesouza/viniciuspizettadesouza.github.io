import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const experienceHighlights = [
  {
    title: "Product platforms",
    description:
      "Lead frontend development for multi-tenant and AI-powered products, with a focus on architecture, developer experience, and modular systems.",
  },
  {
    title: "Full-stack financial services",
    description:
      "Built customer, dashboard, and back-office systems. Developed REST APIs, JWT authentication, SMS and email integrations, and a FastAPI service backed by DynamoDB.",
  },
  {
    title: "Public transport platform",
    description:
      "Built themeable, accessible interfaces for a platform used by more than 60 public transport companies and associations in Germany.",
  },
  {
    title: "Commerce and performance",
    description:
      "Developed Stripe payment flows, maintained multilingual content, supported AWS deployments, and helped the site achieve a Lighthouse score above 95 on desktop.",
  },
];

const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Astro", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend and data",
    skills: [
      "Node.js",
      "Express",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "DynamoDB",
      "REST APIs",
    ],
  },
  {
    title: "Testing and delivery",
    skills: ["Vitest", "Playwright", "Docker", "GitHub Actions"],
  },
  {
    title: "Additional focus",
    skills: [
      "Accessibility",
      "Code review",
      "Technical planning",
      "Mentoring",
      "Developer experience",
    ],
  },
];

export default function HomePage() {
  return (
    <main className="portfolio-shell min-h-screen px-6 md:px-10">
      <div className="mx-auto w-full max-w-6xl">
        <header className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Portfolio · 2026</p>
            <h1 className="display-name">Vinicius Souza</h1>
            <p className="role-title">Senior Full-Stack Engineer</p>
            <p className="hero-description">
              I build web applications from the interface through to APIs,
              databases, testing, and deployment. My strongest background is
              frontend architecture with React and TypeScript.
            </p>
            <p className="experience-line">
              12+ years working in technology, including 8+ years building
              software.
            </p>

            <nav aria-label="Contact links" className="social-links">
              <a
                href="https://linkedin.com/in/viniciuspizettadesouza"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                title="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/viniciuspizettadesouza"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                title="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="mailto:viniciuspzt@gmail.com"
                aria-label="Send email"
                title="Email"
              >
                <FaEnvelope />
              </a>
            </nav>
          </div>

          <div className="monogram-stage" aria-hidden="true">
            <span className="orbit orbit-outer" />
            <span className="orbit orbit-inner" />
            <span className="axis axis-horizontal" />
            <span className="axis axis-vertical" />
            <img src="/monogram.png" alt="" width="512" height="512" />
          </div>
        </header>

        <section aria-labelledby="about-heading" className="editorial-section about-layout">
          <div className="section-intro">
            <span aria-hidden="true">01</span>
            <h2 id="about-heading">About</h2>
          </div>
          <p className="section-copy">
            I enjoy turning complex requirements into clear, maintainable
            products. My strongest experience is in frontend architecture, but
            I have also built backend services, REST APIs, authentication flows,
            and data integrations with Node.js, Python, PostgreSQL, and DynamoDB.
            I support teams through code reviews, technical decisions, and
            knowledge sharing. I also worked as a full-stack development tutor,
            teaching and mentoring 14 students through practical exercises.
          </p>
        </section>

        <section aria-labelledby="experience-heading" className="editorial-section">
          <div className="section-intro">
            <span aria-hidden="true">02</span>
            <h2 id="experience-heading">Professional experience</h2>
          </div>
          <div className="experience-grid">
            {experienceHighlights.map((highlight) => (
              <article key={highlight.title} className="experience-card">
                <h3>{highlight.title}</h3>
                <p>{highlight.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="skills-heading" className="editorial-section">
          <div className="section-intro">
            <span aria-hidden="true">03</span>
            <h2 id="skills-heading">Skills</h2>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <div key={group.title} className="skill-group">
                <h3>{group.title}</h3>
                <ul>
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
