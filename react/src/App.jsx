import { useEffect, useState } from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const autoTheme = () => {
      const hour = new Date().getHours();
      return hour >= 7 && hour < 21 ? 'light' : 'dark';
    };
    let last = autoTheme();
    setTheme(last);

    const id = setInterval(() => {
      const current = autoTheme();
      if (current !== last) {
        last = current;
        setTheme(current);
      }
    }, 60000);
    return () => clearInterval(id);
  }, []);

  const isDark = theme === 'dark';

  return (
    <div
      className={`min-h-screen py-10 px-4 text-white transition-colors ${
        isDark ? 'dark bg-[#14121f]' : 'bg-[#9d5bff]'
      }`}
    >
      <button
        type="button"
        onClick={() => setTheme(isDark ? 'light' : 'dark')}
        className="fixed top-3 right-3 z-50 cursor-pointer rounded-lg border-2 border-white bg-black/30 px-4 py-2 text-white backdrop-blur"
      >
        {isDark ? 'Денна тема' : 'Нічна тема'}
      </button>

      <div className="max-w-6xl mx-auto">
        <Header />
      </div>

      <div className="max-w-4xl mx-auto">
        <main className="flex flex-col gap-8">
          <AboutMe />
          <Skills />
          <Experience />
          <Reviews />
        </main>
        <Footer />
      </div>

      <ContactForm />
    </div>
  );
}

export default App;
