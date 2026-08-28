'use client';

import { useEffect, useState } from 'react';
import { profile } from '../data/profile';
import { localeOptions, type Locale } from '../data/translations';

type SystemChromeProps = {
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
  labels: {
    skip: string;
    home: string;
    navLabel: string;
    status: string;
    index: string;
    close: string;
    mobileIndex: string;
  };
  navigation: string[];
};

export function SystemChrome({ locale, onLocaleChange, labels, navigation }: SystemChromeProps) {
  const [active, setActive] = useState('profile');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const updateProgress = () => {
      const distance = root.scrollHeight - window.innerHeight;
      root.style.setProperty('--scroll-progress', String(distance > 0 ? window.scrollY / distance : 0));
    };
    const sections = document.querySelectorAll<HTMLElement>('section[id]');
    const sectionObserver = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible && visible.target.id !== 'top') setActive(visible.target.id);
    }, { rootMargin: '-25% 0px -60% 0px', threshold: [0, 0.1, 0.4] });
    const reveals = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible'));
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    sections.forEach((section) => sectionObserver.observe(section));
    reveals.forEach((element) => revealObserver.observe(element));
    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    return () => {
      sectionObserver.disconnect();
      revealObserver.disconnect();
      window.removeEventListener('scroll', updateProgress);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  return (
    <>
      <a className="skip-link" href="#main-content">{labels.skip}</a>
      <div className="scroll-progress" aria-hidden="true"><span /></div>
      <div className="system-telemetry" aria-hidden="true">
        <span>CH.07</span><i /><span>LINK / STABLE</span><span>DATA FLOW</span>
      </div>
      <header className="site-header">
        <a className="brand-mark" href="#top" aria-label={labels.home} onClick={() => setMenuOpen(false)}>
          <span>H</span><span className="brand-copy">HUBERT / ENGINEERING PROFILE</span>
        </a>
        <nav className="primary-nav" aria-label={labels.navLabel}>
          {profile.navigation.map((item, index) => <a key={item.href} href={item.href} aria-current={active === item.href.slice(1) ? 'location' : undefined}>{navigation[index]}</a>)}
        </nav>
        <div className="header-end">
          <div className="system-status" aria-label={labels.status}><span className="status-dot" /> {labels.status}</div>
          <label className="language-control">
            <span className="sr-only">Language</span>
            <select value={locale} onChange={(event) => onLocaleChange(event.target.value as Locale)} aria-label="Language">
              {localeOptions.map((option) => <option value={option.code} key={option.code}>{option.short} — {option.name}</option>)}
            </select>
          </label>
          <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen((value) => !value)}>{menuOpen ? labels.close : labels.index}</button>
        </div>
      </header>
      <nav className={`mobile-navigation ${menuOpen ? 'is-open' : ''}`} id="mobile-navigation" aria-label={labels.navLabel}>
        <span className="mobile-nav-label">{labels.mobileIndex}</span>
        {profile.navigation.map((item, index) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}><b>{String(index + 1).padStart(2, '0')}</b>{navigation[index]}</a>)}
      </nav>
    </>
  );
}
