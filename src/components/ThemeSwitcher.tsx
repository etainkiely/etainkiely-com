import React, { useEffect, useState } from 'react';

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<'teal'|'gold'|'auto'>('teal');

  useEffect(() => {
    const stored = localStorage.getItem('preferredTheme');
    if (stored === 'gold' || stored === 'teal') setTheme(stored as 'gold'|'teal');
    else setTheme('auto');

    applyTheme(stored as string | null);
  }, []);

  function applyTheme(pref: string | null) {
    const root = document.documentElement;
    if (pref === 'gold') root.classList.add('theme-gold');
    else root.classList.remove('theme-gold');
  }

  function choose(t: 'teal'|'gold'|'auto'){
    if (t === 'auto'){
      localStorage.removeItem('preferredTheme');
      setTheme('auto');
      applyTheme(null);
    } else {
      localStorage.setItem('preferredTheme', t);
      setTheme(t);
      applyTheme(t);
    }
  }

  return (
    <div style={{display:'inline-flex',gap:8,alignItems:'center'}}>
      <button aria-pressed={theme==='teal'} onClick={() => choose('teal')} style={{padding:'8px 12px',borderRadius:8}}>Teal</button>
      <button aria-pressed={theme==='gold'} onClick={() => choose('gold')} style={{padding:'8px 12px',borderRadius:8}}>Gold</button>
      <button aria-pressed={theme==='auto'} onClick={() => choose('auto')} style={{padding:'8px 12px',borderRadius:8}}>Auto</button>
    </div>
  )
}