import { useState } from 'react';
import './App.css';

function App() {
  const [language, setLanguage] = useState('en');

  const content = {
    en: {
      nav: {
        services: 'Services',
        about: 'About',
        contact: 'Contact'
      },
      hero: {
        title: 'Strategic Industrial Restructuring & M&A Solutions',
        subtitle: 'Expert consulting services for complex corporate transformations and mergers & acquisitions',
        cta: 'Get in Touch'
      },
      services: {
        title: 'Our Services',
        items: [
          {
            title: 'Industrial Restructuring',
            description: 'Strategic planning and execution of organizational transformation, operational efficiency, and business model optimization.'
          },
          {
            title: 'Mergers & Acquisitions',
            description: 'End-to-end M&A advisory services including target identification, due diligence, valuation, and deal structuring.'
          },
          {
            title: 'Management Consulting',
            description: 'Comprehensive business consulting covering strategic planning, operational improvement, and organizational development.'
          }
        ]
      },
      about: {
        title: 'About Gregal International',
        description: 'Since 2017, Gregal International has been providing expert consulting services in industrial restructuring and mergers & acquisitions. We help businesses navigate complex transformations with strategic insight and operational excellence.'
      },
      contact: {
        title: 'Contact Us',
        company: 'Gregal International Di Maric Mato & C. S.A.S.',
        address: 'Via Angelo Maj, 16',
        city: 'Bergamo (BG), Italy',
        vat: 'P.IVA: 04253060166'
      }
    },
    it: {
      nav: {
        services: 'Servizi',
        about: 'Chi Siamo',
        contact: 'Contatti'
      },
      hero: {
        title: 'Soluzioni Strategiche di Ristrutturazione Industriale e M&A',
        subtitle: 'Servizi di consulenza esperti per trasformazioni aziendali complesse e fusioni e acquisizioni',
        cta: 'Contattaci'
      },
      services: {
        title: 'I Nostri Servizi',
        items: [
          {
            title: 'Ristrutturazione Industriale',
            description: 'Pianificazione strategica ed esecuzione di trasformazione organizzativa, efficienza operativa e ottimizzazione del modello di business.'
          },
          {
            title: 'Fusioni e Acquisizioni',
            description: 'Servizi di consulenza M&A end-to-end inclusi identificazione del target, due diligence, valutazione e strutturazione dell\'operazione.'
          },
          {
            title: 'Consulenza Gestionale',
            description: 'Consulenza aziendale completa che copre pianificazione strategica, miglioramento operativo e sviluppo organizzativo.'
          }
        ]
      },
      about: {
        title: 'Chi è Gregal International',
        description: 'Dal 2017, Gregal International fornisce servizi di consulenza esperti nella ristrutturazione industriale e nelle fusioni e acquisizioni. Aiutiamo le aziende a navigare trasformazioni complesse con intuizione strategica ed eccellenza operativa.'
      },
      contact: {
        title: 'Contatti',
        company: 'Gregal International Di Maric Mato & C. S.A.S.',
        address: 'Via Angelo Maj, 16',
        city: 'Bergamo (BG), Italia',
        vat: 'P.IVA: 04253060166'
      }
    }
  };

  const t = content[language];

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="nav">
        <div className="container">
          <div className="nav-content">
            <div className="logo">Gregal International</div>
            <div className="nav-links">
              <a href="#services">{t.nav.services}</a>
              <a href="#about">{t.nav.about}</a>
              <a href="#contact">{t.nav.contact}</a>
              <button
                className="lang-toggle"
                onClick={() => setLanguage(language === 'en' ? 'it' : 'en')}
              >
                {language === 'en' ? 'IT' : 'EN'}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">{t.hero.title}</h1>
          <p className="hero-subtitle">{t.hero.subtitle}</p>
          <a href="#contact" className="cta-button">{t.hero.cta}</a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2 className="section-title">{t.services.title}</h2>
          <div className="services-grid">
            {t.services.items.map((service, index) => (
              <div key={index} className="service-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">{t.about.title}</h2>
          <p className="about-text">{t.about.description}</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">{t.contact.title}</h2>
          <div className="contact-info">
            <p><strong>{t.contact.company}</strong></p>
            <p>{t.contact.address}</p>
            <p>{t.contact.city}</p>
            <p>{t.contact.vat}</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Gregal International Di Maric Mato & C. S.A.S. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
