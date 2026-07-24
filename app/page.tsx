import Image from 'next/image'
import {
  ArrowDownRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from 'lucide-react'

const capabilities = [
  'Full-stack products',
  'Applied machine learning',
  'Game development',
  'Data systems',
]

const currentWork = [
  {
    index: '01',
    name: 'Intelligent applications',
    description:
      'Full-stack products that bring complex workflows, useful context, and focused interfaces together in one dependable experience.',
    focus: 'Product + engineering',
  },
  {
    index: '02',
    name: 'Applied AI systems',
    description:
      'Practical uses of machine learning and language models that help people find information, understand signals, and make better decisions.',
    focus: 'Models + human judgment',
  },
  {
    index: '03',
    name: 'Platforms and automation',
    description:
      'Internal tools and connected systems that reduce repetitive work, improve reliability, and make technical operations easier to manage.',
    focus: 'Infrastructure + operations',
  },
]

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="section-label" aria-hidden="true">
      <span>{children}</span>
      <span className="section-label-line" />
    </div>
  )
}

export default function HomePage() {
  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Brandon Valadez, home">
          BV<span>.</span>
        </a>
        <nav className="site-nav" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <a
          className="header-link"
          href="mailto:brandon.valadez1337@gmail.com"
        >
          Let&apos;s talk <ArrowUpRight size={15} strokeWidth={1.8} />
        </a>
      </header>

      <main id="top">
        <section className="hero page-shell">
          <div className="hero-kicker reveal reveal-1">
            <span>Software developer</span>
            <span>Des Moines, IA / San Antonio, TX</span>
          </div>

          <div className="hero-grid">
            <div className="hero-copy">
              <h1 className="reveal reveal-2">
                Brandon
                <br />
                <span>Valadez</span>
              </h1>
              <p className="hero-statement reveal reveal-3">
                I build software that makes complex systems{' '}
                <em>clear, useful, and human.</em>
              </p>
            </div>

            <div className="hero-portrait reveal reveal-3">
              <div className="portrait-frame">
                <Image
                  src="/img/brandonValadez.jpg"
                  alt="Brandon Valadez"
                  fill
                  priority
                  sizes="(max-width: 760px) 72vw, 31vw"
                  className="portrait-image"
                />
              </div>
              <p>
                Computer Science + Mathematics
                <br />
                Drake University
              </p>
            </div>
          </div>

          <a className="scroll-cue reveal reveal-4" href="#work">
            What I build <ArrowDownRight size={18} />
          </a>
        </section>

        <div className="capability-strip" aria-label="Areas of expertise">
          <div className="capability-track">
            {[...capabilities, ...capabilities].map((capability, index) => (
              <span key={`${capability}-${index}`}>
                {capability} <i>+</i>
              </span>
            ))}
          </div>
        </div>

        <section className="work-section page-shell" id="work">
          <SectionLabel>01 / What I build now</SectionLabel>

          <div className="current-work-intro">
            <h2>
              Complex software,
              <br />
              <em>made practical.</em>
            </h2>
            <p>
              I create focused digital products that connect data, automation,
              and thoughtful interfaces. The goal is simple: make difficult
              work feel clear.
            </p>
          </div>

          <div className="current-work-grid">
            {currentWork.map((item) => (
              <article className="current-work-card" key={item.name}>
                <div className="current-work-card-top">
                  <span>{item.index}</span>
                  <span>{item.focus}</span>
                </div>
                <div className="current-work-symbol" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>

          <div className="work-process" aria-label="How Brandon approaches projects">
            <span>Understand the real problem</span>
            <i />
            <span>Shape the system</span>
            <i />
            <span>Ship something useful</span>
          </div>

          <div className="independent-heading">
            <h2>Independent work</h2>
            <p>
              Products shaped from the first idea through implementation.
            </p>
          </div>

          <div className="game-grid">
            <article className="game-card stayover-card">
              <div className="game-image">
                <Image
                  src="/img/theStayover.jpg"
                  alt="The Stayover title treatment"
                  fill
                  sizes="(max-width: 760px) 100vw, 50vw"
                  className="stayover-image"
                />
                <div className="game-number">01</div>
                <div className="stayover-door">
                  <span />
                </div>
              </div>
              <div className="game-copy">
                <div>
                  <p className="eyebrow">Unreal Engine 5 / Horror</p>
                  <h3>The Stayover</h3>
                </div>
                <p>
                  A first-person 3D horror escape-room game built around
                  environmental tension, exploration, and puzzle-driven
                  progression. Developed from the ground up as an independent
                  game project.
                </p>
              </div>
            </article>

            <article className="game-card hood-dice-card">
              <div className="game-image dice-stage">
                <div className="game-number">02</div>
                <div className="phone">
                  <div className="phone-speaker" />
                  <div className="phone-screen">
                    <span className="hood-label">HOOD</span>
                    <strong>DICE</strong>
                    <div className="dice-pair">
                      <span className="die die-one">
                        <i />
                        <i />
                        <i />
                        <i />
                        <i />
                      </span>
                      <span className="die die-two">
                        <i />
                        <i />
                        <i />
                      </span>
                    </div>
                    <span className="roll-button">ROLL</span>
                  </div>
                </div>
                <span className="chalk chalk-a">POINT</span>
                <span className="chalk chalk-b">7 / 11</span>
              </div>
              <div className="game-copy">
                <div>
                  <p className="eyebrow">iOS / Mobile game</p>
                  <h3>Hood Dice</h3>
                </div>
                <p>
                  A street craps game designed for quick, tactile play on iOS.
                  The project translates the pace and personality of the
                  sidewalk game into a focused mobile experience.
                </p>
              </div>
            </article>
          </div>

        </section>

        <section className="about-section" id="about">
          <div className="page-shell about-grid">
            <SectionLabel>03 / About</SectionLabel>
            <div className="about-lead">
              <p>
                I&apos;m a computer science and mathematics student at Drake
                University with a minor in artificial intelligence.
              </p>
            </div>
            <div className="about-body">
              <p>
                My work sits where product design, data, and engineering meet.
                I enjoy taking technically dense systems and finding the
                interface, architecture, or model that makes them genuinely
                useful.
              </p>
              <p>
                That has meant building full-stack products, applied AI
                systems, developer tools, mobile games, and mathematical
                research. Across each project, I care about the same things:
                clear thinking, dependable execution, and details that earn
                trust.
              </p>
            </div>
            <dl className="about-facts">
              <div>
                <dt>Focus</dt>
                <dd>Full-stack, ML, games</dd>
              </div>
              <div>
                <dt>Education</dt>
                <dd>Drake University</dd>
              </div>
              <div>
                <dt>Home base</dt>
                <dd>Des Moines / San Antonio</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="contact-section page-shell" id="contact">
          <SectionLabel>04 / Contact</SectionLabel>
          <div className="contact-grid">
            <h2>
              Have an ambitious project?
              <br />
              <em>Let&apos;s make it real.</em>
            </h2>
            <div className="contact-links">
              <a href="mailto:brandon.valadez1337@gmail.com">
                <span>
                  <Mail size={18} /> Email
                </span>
                <ArrowUpRight size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/brandon-valadez-84973225b/"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  <Linkedin size={18} /> LinkedIn
                </span>
                <ArrowUpRight size={18} />
              </a>
              <a
                href="https://github.com/brandonv1337"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  <Github size={18} /> GitHub
                </span>
                <ArrowUpRight size={18} />
              </a>
              <p>
                <MapPin size={18} />
                Open to opportunities and collaborations.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>&copy; 2026 Brandon C. Valadez</span>
        <span>Designed and built with intention.</span>
        <a href="#top">Back to top</a>
      </footer>
    </>
  )
}
