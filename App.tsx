
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Handle Hash Changes for basic routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as Page;
      if (['home', 'services', 'about', 'portfolio', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial check

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update URL hash when state changes
  useEffect(() => {
    if (window.location.hash !== `#${currentPage}`) {
      window.location.hash = currentPage;
    }
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home setCurrentPage={setCurrentPage} />;
      case 'services': return <Services setCurrentPage={setCurrentPage} />;
      case 'about': return <About setCurrentPage={setCurrentPage} />;
      case 'portfolio': return <Portfolio setCurrentPage={setCurrentPage} />;
      case 'contact': return <Contact />;
      default: return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-zinc-50">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main className="flex-grow">
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 ease-out">
          {renderPage()}
        </div>
      </main>

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default App;
