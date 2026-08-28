import { AnomalousCube } from './components/anomalous-cube';
import { SystemChrome } from './components/system-chrome';
import { profile, type Status } from './data/profile';

const disciplines = ['Electrical engineering', 'Industrial systems', 'Automation', 'Software', 'Artificial intelligence'];

function SectionHeading({ code, kicker, children }: { code: string; kicker: string; children: React.ReactNode }) {
  return <div className="section-heading reveal"><p className="section-index"><span>{code}</span>{kicker}</p><h2>{children}</h2></div>;
}

function StatusLabel({ status }: { status: Status }) {
  const labels: Record<Status, string> = { active: 'FIELD EXPERIENCE', developing: 'IN DEVELOPMENT', concept: 'SYSTEM CONCEPT', verify: 'TO VERIFY' };
  return <span className={`project-status status-${status}`}>{labels[status]}</span>;
}

export default function Home() {
  return (
    <>
      <SystemChrome />
      <main id="main-content">
        <section className="hero" id="top" aria-labelledby="hero-heading">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-coordinates hero-coordinates-left" aria-hidden="true">SYS.01<br />51.1079° N<br />17.0385° E</div>
          <div className="hero-coordinates hero-coordinates-right" aria-hidden="true">PHYSICAL / DIGITAL<br />SIGNAL ACTIVE<br />REV. 001</div>
          <div className="cube-field"><AnomalousCube /></div>
          <div className="hero-copy">
            <p className="eyebrow"><span>01</span> Integrated engineering profile</p>
            <h1 id="hero-heading">From electrical systems<br />to <em>intelligent systems.</em></h1>
            <div className="hero-footer"><p className="hero-summary">{profile.identity.summary}</p><a className="signal-link" href="#profile">Enter system <span aria-hidden="true">↓</span></a></div>
          </div>
          <div className="discipline-rail" aria-label="Areas of expertise">
            {disciplines.map((discipline, index) => <span key={discipline}><b>{String(index + 1).padStart(2, '0')}</b>{discipline}</span>)}
          </div>
        </section>

        <section className="section profile-section" id="profile" aria-labelledby="profile-heading">
          <div className="section-circuit" aria-hidden="true" />
          <SectionHeading code="SYS.02" kicker="Profile"><span id="profile-heading">Built in the field.</span><br />Designed for what comes next.</SectionHeading>
          <div className="profile-layout reveal">
            <div className="profile-signal" aria-hidden="true"><span>H</span><i /><small>ENGINEERING<br />NODE / 01</small></div>
            <div className="profile-copy">{profile.identity.bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
            <dl className="profile-facts">
              <div><dt>Current environment</dt><dd>Marine / industrial</dd></div>
              <div><dt>Operating range</dt><dd>Poland → Norway</dd></div>
              <div><dt>System objective</dt><dd>Physical + digital</dd></div>
            </dl>
          </div>
        </section>

        <section className="section stack-section" id="stack" aria-labelledby="stack-heading">
          <SectionHeading code="SYS.03" kicker="Engineering stack"><span id="stack-heading">One system.</span><br />Multiple layers of competence.</SectionHeading>
          <div className="stack-grid">
            {profile.stack.map((group, index) => <article className="stack-module reveal" key={group.code} style={{ '--delay': `${index * 55}ms` } as React.CSSProperties}>
              <header><span>{group.code}</span><b>0{index + 1}</b></header><h3>{group.title}</h3><p>{group.description}</p><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>)}
          </div>
        </section>

        <section className="section experience-section" id="experience" aria-labelledby="experience-heading">
          <SectionHeading code="SYS.04" kicker="Experience signal"><span id="experience-heading">International fieldwork.</span><br />A continuous engineering trajectory.</SectionHeading>
          <div className="experience-map reveal"><div className="experience-line" aria-hidden="true" />
            {profile.experience.map((entry, index) => <article className="experience-node" key={entry.location}>
              <div className="node-marker"><span>{String(index + 1).padStart(2, '0')}</span></div>
              <div className="experience-meta"><span>{entry.location}</span><small>{entry.signal}</small></div><h3>{entry.stage}</h3><p>{entry.scope}</p>
            </article>)}
          </div>
        </section>

        <section className="section work-section" id="work" aria-labelledby="work-heading">
          <SectionHeading code="SYS.05" kicker="Selected systems"><span id="work-heading">Not isolated devices.</span><br />Systems with a purpose.</SectionHeading>
          <div className="project-grid">
            {profile.projects.map((project, index) => <article className="project-card reveal" key={project.code} style={{ '--delay': `${index * 70}ms` } as React.CSSProperties}>
              <header><span>{project.code} / {project.category}</span><StatusLabel status={project.status} /></header>
              <div className="project-visual" aria-hidden="true"><span className="visual-axis axis-x" /><span className="visual-axis axis-y" /><i className={`visual-object visual-object-${index + 1}`} /><b>{String(index + 1).padStart(2, '0')}</b></div>
              <h3>{project.title}</h3><p>{project.description}</p><ul>{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
            </article>)}
          </div>
        </section>

        <section className="section trajectory-section" id="trajectory" aria-labelledby="trajectory-heading">
          <SectionHeading code="SYS.06" kicker="Current trajectory"><span id="trajectory-heading">Expanding the engineering stack.</span><br />From energy to intelligence.</SectionHeading>
          <div className="trajectory-diagram reveal">{profile.trajectory.map((step, index) => <div className={`trajectory-step trajectory-${step.state}`} key={step.number}>
            <span>{step.number}</span><h3>{step.label}</h3><small>{step.state}</small>{index < profile.trajectory.length - 1 && <i aria-hidden="true">↓</i>}
          </div>)}</div>
        </section>

        <section className="section credentials-section" id="credentials" aria-labelledby="credentials-heading">
          <SectionHeading code="SYS.07" kicker="Education / credentials"><span id="credentials-heading">Verified foundations.</span><br />Future capacity in progress.</SectionHeading>
          <div className="credentials-layout">
            <div className="education-list reveal"><h3>Education</h3>{profile.education.map((item, index) => <article key={item.level}><span>EDU.0{index + 1}</span><div><small>{item.level}</small><h4>{item.field}</h4></div><b>{item.status}</b></article>)}</div>
            <div className="certification-list reveal"><div className="verification-notice"><span>DATA INTEGRITY</span><p>Credentials are not presented as confirmed until their exact scope and validity are entered.</p></div>{profile.certifications.map((item) => <div className="certificate-row" key={item.name}><strong>{item.name}</strong><span>{item.status}</span></div>)}</div>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-heading">
          <div className="contact-grid" aria-hidden="true" /><p className="section-index"><span>SYS.08</span>Contact / network</p><h2 id="contact-heading">Open channel.</h2>
          <p className="contact-lead">Available for international engineering, automation and technology-focused opportunities.</p>
          <div className="contact-console">
            {profile.contact.email ? <a href={`mailto:${profile.contact.email}`}>Email <span>↗</span></a> : <span>Email / AVAILABLE ON REQUEST</span>}
            {profile.contact.linkedin ? <a href={profile.contact.linkedin}>LinkedIn <span>↗</span></a> : <span>LinkedIn / PROFILE TO ADD</span>}
            {profile.contact.github ? <a href={profile.contact.github}>GitHub <span>↗</span></a> : <span>GitHub / SOURCE REPOSITORY</span>}
          </div>
          <footer><span>HUBERT / ENGINEERING PROFILE</span><span>© {new Date().getFullYear()}</span><a href="#top">RETURN TO CORE ↑</a></footer>
        </section>
      </main>
    </>
  );
}
