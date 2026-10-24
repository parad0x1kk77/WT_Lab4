import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#9d5bff] text-white py-10 px-4">
      
      <div className="max-w-6xl mx-auto">
          <Header />
      </div>
      
      <div className="max-w-4xl mx-auto">
        <main className="flex flex-col gap-8">
          <AboutMe />
          <Skills />
          <Experience />
        </main>
        <Footer />
      </div>

    </div>
  );
}

export default App;