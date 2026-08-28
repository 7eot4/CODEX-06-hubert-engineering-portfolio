'use client';

import { useEffect, useState } from 'react';
import { AnomalousCube } from './components/anomalous-cube';
import { SystemChrome } from './components/system-chrome';
import { profile, type Status } from './data/profile';
import { localeOptions, translations, type Locale } from './data/translations';

const localeCodes = new Set<string>(localeOptions.map((locale) => locale.code));

function SectionHeading({ code, kicker, children }: { code: string; kicker: string; children: React.ReactNode }) {
  return <div className="section-heading reveal"><p className="section-index"><span>{code}</span>{kicker}</p><h2>{children}</h2></div>;
}

export default function Home() {
  const [locale, setLocale] = useState<Locale>('en');
  const copy = translations[locale];

  useEffect(() => {
    const stored = window.localStorage.getItem('hubert-portfolio-locale');
    const browser = window.navigator.language.toLowerCase().split('-')[0];
    const preferred = stored && localeCodes.has(stored) ? stored : localeCodes.has(browser) ? browser : 'en';
    const timer = window.setTimeout(() => setLocale(preferred as Locale), 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem('hubert-portfolio-locale', locale);
  }, [locale]);

  function StatusLabel({ status }: { status: Status }) {
    return <span className={`project-status status-${status}`}>{copy.work.statuses[status]}</span>;
  }

  return (
    <>
      <SystemChrome locale={locale} onLocaleChange={setLocale} labels={copy.chrome} navigation={copy.navigation} />
      <main id="main-content">
        <section className="hero" id="top" aria-labelledby="hero-heading">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-scan" aria-hidden="true" />
          <div className="signal-traces" aria-hidden="true"><span /><span /><span /></div>
          <div className="hero-coordinates hero-coordinates-left" aria-hidden="true">SYS.01<br />51.1079° N<br />17.0385° E</div>
          <div className="hero-coordinates hero-coordinates-right" aria-hidden="true">PHYSICAL / DIGITAL<br />SIGNAL ACTIVE<br />REV. 001</div>
          <div className="cube-field"><AnomalousCube /></div>
          <div className="hero-copy">
            <p className="eyebrow"><span>01</span> {copy.hero.eyebrow}</p>
            <h1 id="hero-heading">{copy.hero.line1}<br /><em>{copy.hero.line2}</em></h1>
            <div className="hero-footer"><p className="hero-summary">{copy.hero.summary}</p><a className="signal-link" href="#profile">{copy.hero.enter} <span aria-hidden="true">↓</span></a></div>
          </div>
          <div className="discipline-rail" aria-label={copy.hero.expertise}>
            {copy.hero.disciplines.map((discipline, index) => <span key={discipline}><b>{String(index + 1).padStart(2, '0')}</b>{discipline}</span>)}
          </div>
        </section>

        <section className="section profile-section" id="profile" aria-labelledby="profile-heading">
          <div className="section-circuit" aria-hidden="true" />
          <SectionHeading code="SYS.02" kicker={copy.profile.kicker}><span id="profile-heading">{copy.profile.heading1}</span><br />{copy.profile.heading2}</SectionHeading>
          <div className="profile-layout reveal">
            <div className="profile-signal" aria-hidden="true"><span>H</span><i /><small>{copy.profile.node.split('\n').map((line) => <span key={line}>{line}<br /></span>)}</small></div>
            <div className="profile-copy">{copy.profile.bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
            <dl className="profile-facts">{copy.profile.facts.map(([term, value]) => <div key={term}><dt>{term}</dt><dd>{value}</dd></div>)}</dl>
          </div>
        </section>

        <section className="section stack-section" id="stack" aria-labelledby="stack-heading">
          <SectionHeading code="SYS.03" kicker={copy.stack.kicker}><span id="stack-heading">{copy.stack.heading1}</span><br />{copy.stack.heading2}</SectionHeading>
          <div className="stack-grid">
            {profile.stack.map((group, index) => <article className="stack-module reveal" key={group.code} style={{ '--delay': `${index * 55}ms` } as React.CSSProperties}>
              <header><span>{group.code}</span><b>0{index + 1}</b></header><h3>{copy.stack.titles[index]}</h3><p>{copy.stack.descriptions[index]}</p><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>)}
          </div>
        </section>

        <section className="section experience-section" id="experience" aria-labelledby="experience-heading">
          <SectionHeading code="SYS.04" kicker={copy.experience.kicker}><span id="experience-heading">{copy.experience.heading1}</span><br />{copy.experience.heading2}</SectionHeading>
          <div className="experience-map reveal"><div className="experience-line" aria-hidden="true" />
            {profile.experience.map((entry, index) => <article className="experience-node" key={entry.location}>
              <div className="node-marker"><span>{String(index + 1).padStart(2, '0')}</span></div>
              <div className="experience-meta"><span>{copy.experience.locations[index]}</span><small>{entry.signal}</small></div><h3>{copy.experience.stages[index]}</h3><p>{copy.experience.scopes[index]}</p>
            </article>)}
          </div>
        </section>

        <section className="section work-section" id="work" aria-labelledby="work-heading">
          <SectionHeading code="SYS.05" kicker={copy.work.kicker}><span id="work-heading">{copy.work.heading1}</span><br />{copy.work.heading2}</SectionHeading>
          <div className="project-grid">
            {profile.projects.map((project, index) => <article className="project-card reveal" key={project.code} style={{ '--delay': `${index * 70}ms` } as React.CSSProperties}>
              <header><span>{project.code} / {copy.work.categories[index]}</span><StatusLabel status={project.status} /></header>
              <div className="project-visual" aria-hidden="true"><span className="visual-axis axis-x" /><span className="visual-axis axis-y" /><i className={`visual-object visual-object-${index + 1}`} /><b>{String(index + 1).padStart(2, '0')}</b></div>
              <h3>{copy.work.titles[index]}</h3><p>{copy.work.descriptions[index]}</p><ul>{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
            </article>)}
          </div>
        </section>

        <section className="section trajectory-section" id="trajectory" aria-labelledby="trajectory-heading">
          <SectionHeading code="SYS.06" kicker={copy.trajectory.kicker}><span id="trajectory-heading">{copy.trajectory.heading1}</span><br />{copy.trajectory.heading2}</SectionHeading>
          <div className="trajectory-diagram reveal">{profile.trajectory.map((step, index) => <div className={`trajectory-step trajectory-${step.state}`} key={step.number}>
            <span>{step.number}</span><h3>{copy.trajectory.labels[index]}</h3><small>{copy.trajectory.states[index]}</small>{index < profile.trajectory.length - 1 && <i aria-hidden="true">↓</i>}
          </div>)}</div>
        </section>

        <section className="section credentials-section" id="credentials" aria-labelledby="credentials-heading">
          <SectionHeading code="SYS.07" kicker={copy.credentials.kicker}><span id="credentials-heading">{copy.credentials.heading1}</span><br />{copy.credentials.heading2}</SectionHeading>
          <div className="credentials-layout">
            <div className="education-list reveal"><h3>{copy.credentials.education}</h3>{profile.education.map((item, index) => <article key={item.level}><span>EDU.0{index + 1}</span><div><small>{copy.credentials.levels[index]}</small><h4>{copy.credentials.fields[index]}</h4></div><b>{copy.credentials.educationStatuses[index]}</b></article>)}</div>
            <div className="certification-list reveal"><div className="verification-notice"><span>{copy.credentials.integrity}</span><p>{copy.credentials.integrityText}</p></div>{profile.certifications.map((item, index) => <div className="certificate-row" key={item.name}><strong>{item.name}</strong><span>{copy.credentials.certificateStatuses[index]}</span></div>)}</div>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-heading">
          <div className="contact-grid" aria-hidden="true" /><p className="section-index"><span>SYS.08</span>{copy.contact.kicker}</p><h2 id="contact-heading">{copy.contact.heading}</h2>
          <p className="contact-lead">{copy.contact.lead}</p>
          <div className="contact-console">
            {profile.contact.email ? <a href={`mailto:${profile.contact.email}`}>Email <span>↗</span></a> : <span>{copy.contact.emailMissing}</span>}
            {profile.contact.linkedin ? <a href={profile.contact.linkedin}>LinkedIn <span>↗</span></a> : <span>{copy.contact.linkedinMissing}</span>}
            {profile.contact.github ? <a href={profile.contact.github}>GitHub <span>↗</span></a> : <span>{copy.contact.githubLabel}</span>}
          </div>
          <footer><span>{copy.contact.footer}</span><span>© {new Date().getFullYear()}</span><a href="#top">{copy.contact.return} ↑</a></footer>
        </section>
      </main>
    </>
  );
}
