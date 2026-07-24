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

const additionalProjects = [
  {
    index: '05',
    name: 'Deploy Manager',
    type: 'Developer tooling',
    description:
      'Contributed to an internal deployment console that brings IIS releases, promotion workflows, live logs, backups, and release notes into one operator-focused interface.',
    tags: ['React', 'Express', 'IIS automation'],
    visual: 'deploy',
  },
  {
    index: '06',
    name: 'Robber Haul',
    type: 'Mathematical research',
    description:
      'Co-authored a Drake University research project extending Cops and Robbers on graphs with weighted edges, new pursuit-game invariants, and analysis of cycles and the Petersen graph.',
    tags: ['Graph theory', 'LaTeX', 'Research'],
    visual: 'graph',
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
            Selected work <ArrowDownRight size={18} />
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
          <SectionLabel>01 / Selected work</SectionLabel>

          <article className="case-study case-study-signal">
            <div className="case-meta">
              <span>01</span>
              <span>Full-stack contributor</span>
              <span>2026</span>
            </div>
            <div className="case-copy">
              <p className="eyebrow">Commercial real estate intelligence</p>
              <h2>Signal Desk</h2>
              <p className="case-lede">
                A daily decision system for commercial real estate brokers,
                connecting market signals, CRM data, scoring models, and an
                AI-assisted research workflow.
              </p>
              <div className="case-details">
                <p>
                  My contributions span full-stack feature development, data
                  integration, model-backed ranking, assistant behavior, and
                  product reliability across the platform.
                </p>
                <ul aria-label="Signal Desk technologies">
                  <li>React</li>
                  <li>.NET + Node.js</li>
                  <li>SQL Server</li>
                  <li>LLM orchestration</li>
                </ul>
              </div>
            </div>
            <div className="signal-visual" aria-label="Abstract Signal Desk interface">
              <div className="signal-toolbar">
                <span className="signal-mark">SD</span>
                <span>Morning Brief</span>
                <span className="signal-live">Live</span>
              </div>
              <div className="signal-body">
                <div className="signal-sidebar">
                  <span className="active" />
                  <span />
                  <span />
                  <span />
                </div>
                <div className="signal-content">
                  <div className="signal-heading">
                    <span>WHO TO CALL TODAY</span>
                    <span>DES MOINES</span>
                  </div>
                  {[92, 87, 81].map((score, index) => (
                    <div className="signal-row" key={score}>
                      <span className="signal-rank">0{index + 1}</span>
                      <span className="signal-avatar" />
                      <span className="signal-lines">
                        <i />
                        <i />
                      </span>
                      <strong>{score}</strong>
                    </div>
                  ))}
                  <div className="signal-chart">
                    <span style={{ height: '31%' }} />
                    <span style={{ height: '48%' }} />
                    <span style={{ height: '39%' }} />
                    <span style={{ height: '72%' }} />
                    <span style={{ height: '61%' }} />
                    <span style={{ height: '88%' }} />
                    <span style={{ height: '77%' }} />
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article className="case-study case-study-ml">
            <div className="case-meta">
              <span>02</span>
              <span>Machine learning engineer</span>
              <span>2026</span>
            </div>
            <div className="ml-visual" aria-label="Abstract model performance visualization">
              <div className="metric-card metric-primary">
                <span>Walk-forward AUC</span>
                <strong>0.866</strong>
                <small>+/- 0.026</small>
              </div>
              <div className="calibration-card">
                <div className="chart-labels">
                  <span>CALIBRATION</span>
                  <span>ACTUAL / PREDICTED</span>
                </div>
                <div className="chart-field">
                  <span className="chart-grid chart-grid-a" />
                  <span className="chart-grid chart-grid-b" />
                  <span className="chart-diagonal" />
                  <span className="chart-curve" />
                  <i className="dot dot-a" />
                  <i className="dot dot-b" />
                  <i className="dot dot-c" />
                  <i className="dot dot-d" />
                </div>
              </div>
              <div className="metric-card metric-secondary">
                <span>Calibrated Brier score</span>
                <strong>0.079</strong>
                <small>from 0.130</small>
              </div>
            </div>
            <div className="case-copy">
              <p className="eyebrow">Predictive tenant analytics</p>
              <h2>Multifamily Churn</h2>
              <p className="case-lede">
                A production modeling pipeline that helps property teams
                identify tenant renewal risk early enough to act.
              </p>
              <div className="case-details">
                <p>
                  Built and iterated on the renewal-window data design,
                  LightGBM model, probability calibration, walk-forward
                  validation, and explainability pipeline.
                </p>
                <ul aria-label="Multifamily churn technologies">
                  <li>Python</li>
                  <li>LightGBM</li>
                  <li>SHAP</li>
                  <li>SQL Server</li>
                </ul>
              </div>
            </div>
          </article>

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
                <div className="game-number">03</div>
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
                <div className="game-number">04</div>
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

          <div className="more-work">
            <SectionLabel>02 / More contributions</SectionLabel>
            {additionalProjects.map((project) => (
              <article className="project-row" key={project.name}>
                <span className="project-index">{project.index}</span>
                <div className="project-title">
                  <p>{project.type}</p>
                  <h3>{project.name}</h3>
                </div>
                <p className="project-description">{project.description}</p>
                <ul className="project-tags" aria-label={`${project.name} technologies`}>
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <div className={`project-miniature ${project.visual}`} aria-hidden="true">
                  {project.visual === 'deploy' ? (
                    <>
                      <span />
                      <i />
                      <span />
                      <i />
                      <span />
                    </>
                  ) : (
                    <>
                      <i className="node n1" />
                      <i className="node n2" />
                      <i className="node n3" />
                      <i className="node n4" />
                      <span className="edge e1" />
                      <span className="edge e2" />
                      <span className="edge e3" />
                      <span className="edge e4" />
                    </>
                  )}
                </div>
              </article>
            ))}
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
                That has meant building broker intelligence software,
                production ML pipelines, developer tools, mobile games, and
                mathematical research. Across each project, I care about the
                same things: clear thinking, dependable execution, and details
                that earn trust.
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
