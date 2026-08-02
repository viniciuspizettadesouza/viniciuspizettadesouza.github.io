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
  const theme = {
    bgPrimary: "#111D3B",
    accentSecondary: "#E4B94F",
    accentSpecial: "#D39E3E",
    textLight: "#F2F2F2",
  };

  return (
    <main
      className="min-h-screen px-6 py-12 transition-colors duration-700 md:px-8 md:py-16"
      style={{ backgroundColor: theme.bgPrimary, color: theme.textLight }}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center">
        <header className="flex max-w-4xl flex-col items-center text-center">
          <h1 className="mb-4 font-outfit text-5xl font-bold md:text-6xl">
            Vinicius Souza
          </h1>
          <p
            className="mb-6 font-outfit text-2xl font-semibold md:text-3xl"
            style={{ color: theme.accentSecondary }}
          >
            Senior Full-Stack Engineer
          </p>
          <p className="mb-4 max-w-3xl font-poppins text-lg leading-relaxed md:text-xl">
            I build web applications from the interface through to APIs,
            databases, testing, and deployment. My strongest background is
            frontend architecture with React and TypeScript.
          </p>
          <p className="mb-10 font-poppins text-base text-white/75 md:text-lg">
            12+ years working in technology, including 8+ years building
            software.
          </p>

          <nav aria-label="Contact links" className="mb-16 flex gap-8 text-4xl">
            <a
              href="https://linkedin.com/in/viniciuspizettadesouza"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              aria-label="LinkedIn profile"
              className="rounded-sm transition-transform duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E4B94F] focus-visible:ring-offset-4 focus-visible:ring-offset-[#111D3B] motion-reduce:transform-none"
              style={{ color: theme.accentSecondary }}
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/viniciuspizettadesouza"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              aria-label="GitHub profile"
              className="rounded-sm transition-transform duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E4B94F] focus-visible:ring-offset-4 focus-visible:ring-offset-[#111D3B] motion-reduce:transform-none"
              style={{ color: theme.accentSecondary }}
            >
              <FaGithub />
            </a>
            <a
              href="mailto:viniciuspzt@gmail.com"
              title="Email"
              aria-label="Send email"
              className="rounded-sm transition-transform duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E4B94F] focus-visible:ring-offset-4 focus-visible:ring-offset-[#111D3B] motion-reduce:transform-none"
              style={{ color: theme.accentSecondary }}
            >
              <FaEnvelope />
            </a>
          </nav>
        </header>

        <section aria-labelledby="about-heading" className="mb-20 max-w-4xl text-center">
          <h2
            id="about-heading"
            className="mb-5 font-outfit text-4xl font-bold"
            style={{ color: theme.accentSecondary }}
          >
            About
          </h2>
          <p className="font-poppins text-lg leading-relaxed">
            I enjoy turning complex requirements into clear, maintainable
            products. My strongest experience is in frontend architecture, but
            I have also built backend services, REST APIs, authentication flows,
            and data integrations with Node.js, Python, PostgreSQL, and
            DynamoDB. I support teams through code reviews, technical decisions,
            and knowledge sharing. I also worked as a full-stack development
            tutor, teaching and mentoring 14 students through practical
            exercises.
          </p>
        </section>

        <section aria-labelledby="experience-heading" className="mb-20 w-full">
          <h2
            id="experience-heading"
            className="mb-10 text-center font-outfit text-4xl font-bold"
            style={{ color: theme.accentSecondary }}
          >
            Professional Experience Highlights
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {experienceHighlights.map((highlight) => (
              <article
                key={highlight.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-7"
              >
                <h3 className="mb-3 font-poppins text-xl font-semibold">
                  {highlight.title}
                </h3>
                <p className="font-poppins leading-relaxed text-white/85">
                  {highlight.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="skills-heading" className="w-full">
          <h2
            id="skills-heading"
            className="mb-10 text-center font-outfit text-4xl font-bold"
            style={{ color: theme.accentSecondary }}
          >
            Skills
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3
                  className="mb-4 font-poppins text-xl font-semibold"
                  style={{ color: theme.accentSpecial }}
                >
                  {group.title}
                </h3>
                <ul className="space-y-2 font-poppins text-white/85">
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
