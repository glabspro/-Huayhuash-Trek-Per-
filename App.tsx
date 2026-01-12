import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Treks } from './components/Treks';
import { AiPlanner } from './components/AiPlanner';
import { Contact } from './components/Contact';
import { Language } from './types';
import { TEXTS } from './constants';

function App() {
  const [lang, setLang] = useState<Language>('en');
  // Initialize theme based on system preference or default to dark
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  const t = TEXTS[lang];

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <main className="min-h-screen overflow-x-hidden selection:bg-brand-green selection:text-brand-dark transition-colors duration-500">
      <Navbar lang={lang} setLang={setLang} t={t.nav} theme={theme} toggleTheme={toggleTheme} />
      <Hero t={t} theme={theme} />
      <Treks t={t.treks} lang={lang} />
      <AiPlanner t={t.ai} lang={lang} />
      <Contact t={t.contact} />
    </main>
  );
}

export default App;