import { useState } from 'react';
import './App.css';

function App() {
  const [language, setLanguage] = useState('en');

  const content = {
    en: {
      nav: {
        services: 'Services',
        about: 'About',
        leadership: 'Leadership',
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
        description: 'Founded in 2017 and led by CEO Mato Maric, Gregal International provides expert consulting services in industrial restructuring and mergers & acquisitions. We help businesses navigate complex transformations with strategic insight and operational excellence, delivering tailored solutions for sustainable growth.'
      },
      leadership: {
        title: 'Leadership',
        ceoName: 'Mato Maric',
        ceoTitle: 'CEO & Founder',
        highlights: [
          '30 years leading and restructuring multi-million euro manufacturing organizations',
          'Generated over €50 million in cost savings career-wide',
          'International experience across Europe, USA, Asia, Latin America, and South Africa',
          'Expert in Lean organization, turnaround management, and operational excellence',
          'Former leadership roles at PwC, Continental, SKF, and leading industrial groups'
        ]
      },
      partners: {
        title: 'Our Partners',
        description: 'We collaborate with leading technology and consulting firms to deliver comprehensive solutions',
        items: [
          {
            name: 'PugliAI',
            description: 'Leader in artificial intelligence for Italian businesses. AI infrastructures, intelligent agents, and strategic consulting.',
            url: 'https://pugliai.com'
          },
          {
            name: 'Niuexa',
            description: 'AI consulting and artificial intelligence solutions specializing in process automation and intelligent agent development.',
            url: 'https://niuexa.ai'
          }
        ]
      },
      contact: {
        title: 'Contact Us',
        company: 'Gregal International Di Maric Mato & C. S.A.S.',
        address: 'Via Angelo Maj, 16',
        city: 'Bergamo (BG), Italy',
        vat: 'P.IVA: 04253060166',
        email: 'mato.maric@yahoo.com',
        phone: '+39 335 475 812'
      }
    },
    it: {
      nav: {
        services: 'Servizi',
        about: 'Chi Siamo',
        leadership: 'Leadership',
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
        description: 'Fondata nel 2017 e guidata dal CEO Mato Maric, Gregal International fornisce servizi di consulenza esperti nella ristrutturazione industriale e nelle fusioni e acquisizioni. Aiutiamo le aziende a navigare trasformazioni complesse con intuizione strategica ed eccellenza operativa, fornendo soluzioni su misura per una crescita sostenibile.'
      },
      leadership: {
        title: 'Leadership',
        ceoName: 'Mato Maric',
        ceoTitle: 'CEO e Fondatore',
        highlights: [
          '30 anni di esperienza nella gestione e ristrutturazione di organizzazioni manifatturiere multi-milionarie',
          'Generato oltre 50 milioni di euro di risparmi sui costi durante la carriera',
          'Esperienza internazionale in Europa, USA, Asia, America Latina e Sud Africa',
          'Esperto in organizzazione Lean, gestione del turnaround ed eccellenza operativa',
          'Ex ruoli di leadership presso PwC, Continental, SKF e gruppi industriali leader'
        ]
      },
      partners: {
        title: 'I Nostri Partner',
        description: 'Collaboriamo con aziende leader nella tecnologia e consulenza per offrire soluzioni complete',
        items: [
          {
            name: 'PugliAI',
            description: 'Leader nell\'intelligenza artificiale per le imprese italiane. Infrastrutture AI, agenti intelligenti e consulenza strategica.',
            url: 'https://pugliai.com'
          },
          {
            name: 'Niuexa',
            description: 'Consulenza AI e soluzioni di intelligenza artificiale specializzate in automazione dei processi e sviluppo di agenti intelligenti.',
            url: 'https://niuexa.ai'
          }
        ]
      },
      contact: {
        title: 'Contatti',
        company: 'Gregal International Di Maric Mato & C. S.A.S.',
        address: 'Via Angelo Maj, 16',
        city: 'Bergamo (BG), Italia',
        vat: 'P.IVA: 04253060166',
        email: 'mato.maric@yahoo.com',
        phone: '+39 335 475 812'
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
            <img src="/logo.png" alt="Gregal International" className="logo-image" />
            <div className="nav-links">
              <a href="#services">{t.nav.services}</a>
              <a href="#about">{t.nav.about}</a>
              <a href="#leadership">{t.nav.leadership}</a>
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

      {/* Leadership Section */}
      <section id="leadership" className="leadership">
        <div className="container">
          <h2 className="section-title">{t.leadership.title}</h2>
          <div className="leadership-content">
            <div className="ceo-image-container">
              <img src="/ceo-mato-maric.png" alt={t.leadership.ceoName} className="ceo-image" />
            </div>
            <div className="ceo-info">
              <h3 className="ceo-name">{t.leadership.ceoName}</h3>
              <p className="ceo-title">{t.leadership.ceoTitle}</p>
              <ul className="ceo-highlights">
                {t.leadership.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="partners">
        <div className="container">
          <h2 className="section-title">{t.partners.title}</h2>
          <p className="partners-description">{t.partners.description}</p>
          <div className="partners-grid">
            {t.partners.items.map((partner, index) => (
              <a
                key={index}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="partner-card"
              >
                <h3>{partner.name}</h3>
                <p>{partner.description}</p>
              </a>
            ))}
          </div>
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
            <p><a href={`mailto:${t.contact.email}`} className="contact-link">{t.contact.email}</a></p>
            <p><a href={`tel:${t.contact.phone}`} className="contact-link">{t.contact.phone}</a></p>
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
