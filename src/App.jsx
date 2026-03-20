import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [language, setLanguage] = useState('en');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [formStatus, setFormStatus] = useState(null); // 'success', 'error', null
  const [submitting, setSubmitting] = useState(false);

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setFormStatus(null);
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '696099b6-87e7-4b98-95a8-960202419a36',
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
          subject: `New inquiry from ${formData.name} - Gregal International`,
        }),
      });
      const data = await response.json();
      if (data.success) {
        setFormStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
    setSubmitting(false);
  };

  // Scroll detection for nav styling
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [language]);

  const content = {
    en: {
      nav: {
        services: 'Services',
        about: 'About',
        leadership: 'Leadership',
        contact: 'Contact'
      },
      hero: {
        badge: 'Industrial Excellence',
        title: 'Strategic Industrial Restructuring',
        titleHighlight: '& M&A Solutions',
        subtitle: 'Empowering businesses through global expertise and strategic vision. We navigate complex transitions to unlock sustainable value and growth.',
        cta: 'Get in Touch'
      },
      services: {
        tag: 'Our Expertise',
        title: 'Navigating Complex Transitions',
        subtitle: 'Delivering strategic solutions tailored to your organization\'s unique challenges',
        items: [
          {
            icon: '⚙️',
            title: 'Industrial Restructuring',
            description: 'Strategic planning and execution of organizational transformation, operational efficiency, and business model optimization for long-term viability.'
          },
          {
            icon: '🤝',
            title: 'Mergers & Acquisitions',
            description: 'End-to-end M&A advisory services including target identification, due diligence, valuation, and complex deal structuring.'
          },
          {
            icon: '📊',
            title: 'Management Consulting',
            description: 'Comprehensive business consulting covering strategic planning, operational improvement, and organizational development.'
          }
        ]
      },
      about: {
        tag: 'Our Story',
        title: 'Elite Strategic Vision for Industrial Challenges',
        description: 'Founded in 2017 by CEO Mato Maric, Gregal International was established with a singular mission: to provide the high-level strategic intervention typically reserved for global conglomerates to industrial enterprises facing critical transitions.',
        description2: 'Based in the heart of Lombardy\'s industrial hub, Bergamo, we combine local agility with international reach, bringing decades of boardroom experience to the factory floor.',
        quote: '"Transformation is not just about changing processes, it\'s about shifting mindsets toward sustainable profitability."',
        stats: [
          { value: '2017', label: 'Established' },
          { value: 'Italy', label: 'Bergamo Base' },
          { value: '€50M+', label: 'Cost Savings' },
          { value: 'Global', label: 'Reach' }
        ]
      },
      leadership: {
        tag: 'Leadership',
        title: 'The Visionary Behind Gregal',
        subtitle: 'Decades of international industrial expertise',
        ceoName: 'Mato Maric',
        ceoTitle: 'CEO & Founder',
        ceoBio: 'A seasoned turnaround specialist with an impeccable track record in restructuring underperforming industrial assets across Europe and beyond. Mato combines analytical rigor with hands-on leadership to deliver immediate operational impact.',
        highlights: [
          '30 years leading and restructuring multi-million euro manufacturing organizations',
          'Generated over €50 million in cost savings career-wide',
          'International experience across Europe, USA, Asia, Latin America, and South Africa',
          'Expert in Lean organization, turnaround management, and operational excellence',
          'Former leadership roles at PwC, Continental, SKF, and leading industrial groups'
        ]
      },
      partners: {
        tag: 'Strategic Partners',
        title: 'Our Partners',
        description: 'We collaborate with leading technology and consulting firms to deliver comprehensive solutions',
        items: [
          {
            name: 'PugliAI',
            badge: 'Intelligence Partner',
            description: 'Leader in artificial intelligence for Italian businesses. AI infrastructures, intelligent agents, and strategic consulting for southern Italy.',
            url: '/partners/pugliai-ai-partner-south-italy/'
          },
          {
            name: 'Niuexa',
            badge: 'Strategy Network',
            description: 'AI consulting and artificial intelligence solutions specializing in process automation and intelligent agent development for Milan and northern Italy.',
            url: '/partners/niuexa-ai-partner-milan/'
          }
        ]
      },
      faq: {
        tag: 'FAQ',
        title: 'Frequently Asked Questions',
        subtitle: 'Common questions about our services and expertise',
        items: [
          {
            q: 'What is Gregal International?',
            a: 'Gregal International is an industrial restructuring and M&A consulting firm based in Bergamo, Italy. Founded in 2017 by CEO Mato Maric, we provide high-level strategic intervention for industrial enterprises facing critical transitions, including turnaround management, mergers & acquisitions advisory, and operational excellence consulting.'
          },
          {
            q: 'What services does Gregal International offer?',
            a: 'We offer three core services: Industrial Restructuring (turnaround management, Lean implementation, cost reduction), Mergers & Acquisitions advisory (target identification, due diligence, valuation, deal structuring), and Management Consulting (strategic planning, operational improvement, organizational development).'
          },
          {
            q: 'Who is Mato Maric?',
            a: 'Mato Maric is the CEO and Founder of Gregal International. He is a turnaround specialist with over 30 years of experience restructuring multi-million euro manufacturing organizations across Europe, USA, Asia, Latin America, and South Africa. He has generated over €50 million in career-wide cost savings and previously held leadership roles at PwC, Continental, and SKF.'
          },
          {
            q: 'What industries does Gregal International serve?',
            a: 'We primarily serve industrial and manufacturing enterprises facing critical transitions. This includes companies in need of turnaround management, operational restructuring, Lean implementation, and M&A advisory across diverse manufacturing sectors.'
          },
          {
            q: 'Where is Gregal International located?',
            a: 'Our headquarters are at Via Angelo Maj 16, 24121 Bergamo (BG), Italy — in the heart of Lombardy\'s industrial hub. While based in Italy, we operate internationally across Europe, USA, Asia, Latin America, and South Africa.'
          },
          {
            q: 'How can I contact Gregal International?',
            a: 'You can reach us by phone at +39 335 475 812, by email at mato.maric@yahoo.com, or through the contact form on our website. We typically respond within 24 hours.'
          }
        ]
      },
      contact: {
        tag: 'Contact Us',
        title: 'Ready to Transform Your Business?',
        subtitle: 'Schedule a confidential consultation with our team',
        company: 'Gregal International Di Maric Mato & C. S.A.S.',
        address: 'Via Angelo Maj, 16',
        city: '24121 Bergamo (BG), Italy',
        vat: '04253060166',
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
        badge: 'Eccellenza Industriale',
        title: 'Ristrutturazione Industriale Strategica',
        titleHighlight: '& Soluzioni M&A',
        subtitle: 'Potenziamo le imprese attraverso competenze globali e visione strategica. Navighiamo transizioni complesse per sbloccare valore e crescita sostenibile.',
        cta: 'Contattaci'
      },
      services: {
        tag: 'La Nostra Competenza',
        title: 'Navigare Transizioni Complesse',
        subtitle: 'Soluzioni strategiche su misura per le sfide uniche della tua organizzazione',
        items: [
          {
            icon: '⚙️',
            title: 'Ristrutturazione Industriale',
            description: 'Pianificazione strategica ed esecuzione di trasformazione organizzativa, efficienza operativa e ottimizzazione del modello di business.'
          },
          {
            icon: '🤝',
            title: 'Fusioni e Acquisizioni',
            description: 'Servizi di consulenza M&A end-to-end inclusi identificazione del target, due diligence, valutazione e strutturazione dell\'operazione.'
          },
          {
            icon: '📊',
            title: 'Consulenza Gestionale',
            description: 'Consulenza aziendale completa che copre pianificazione strategica, miglioramento operativo e sviluppo organizzativo.'
          }
        ]
      },
      about: {
        tag: 'La Nostra Storia',
        title: 'Visione Strategica d\'Elite per Sfide Industriali',
        description: 'Fondata nel 2017 dal CEO Mato Maric, Gregal International è stata creata con una missione unica: fornire l\'intervento strategico di alto livello tipicamente riservato ai conglomerati globali alle imprese industriali che affrontano transizioni critiche.',
        description2: 'Con sede nel cuore del polo industriale lombardo, Bergamo, uniamo l\'agilità locale alla portata internazionale, portando decenni di esperienza ai livelli operativi.',
        quote: '"La trasformazione non riguarda solo il cambiamento dei processi, ma lo spostamento della mentalità verso una redditività sostenibile."',
        stats: [
          { value: '2017', label: 'Fondata' },
          { value: 'Italia', label: 'Base Bergamo' },
          { value: '€50M+', label: 'Risparmi' },
          { value: 'Globale', label: 'Portata' }
        ]
      },
      leadership: {
        tag: 'Leadership',
        title: 'Il Visionario Dietro Gregal',
        subtitle: 'Decenni di competenza industriale internazionale',
        ceoName: 'Mato Maric',
        ceoTitle: 'CEO e Fondatore',
        ceoBio: 'Uno specialista esperto di turnaround con un curriculum impeccabile nella ristrutturazione di asset industriali sottoperformanti in Europa e oltre. Mato combina rigore analitico con leadership pratica per un impatto operativo immediato.',
        highlights: [
          '30 anni di esperienza nella gestione e ristrutturazione di organizzazioni manifatturiere multi-milionarie',
          'Generato oltre 50 milioni di euro di risparmi sui costi durante la carriera',
          'Esperienza internazionale in Europa, USA, Asia, America Latina e Sud Africa',
          'Esperto in organizzazione Lean, gestione del turnaround ed eccellenza operativa',
          'Ex ruoli di leadership presso PwC, Continental, SKF e gruppi industriali leader'
        ]
      },
      partners: {
        tag: 'Partner Strategici',
        title: 'I Nostri Partner',
        description: 'Collaboriamo con aziende leader nella tecnologia e consulenza per offrire soluzioni complete',
        items: [
          {
            name: 'PugliAI',
            badge: 'Partner Intelligence',
            description: 'Leader nell\'intelligenza artificiale per le imprese italiane. Infrastrutture AI, agenti intelligenti e consulenza strategica per il Sud Italia.',
            url: '/partners/pugliai-ai-partner-south-italy/'
          },
          {
            name: 'Niuexa',
            badge: 'Rete Strategica',
            description: 'Consulenza AI e soluzioni di intelligenza artificiale specializzate in automazione dei processi e sviluppo di agenti intelligenti per Milano e il Nord Italia.',
            url: '/partners/niuexa-ai-partner-milan/'
          }
        ]
      },
      faq: {
        tag: 'FAQ',
        title: 'Domande Frequenti',
        subtitle: 'Risposte alle domande più comuni sui nostri servizi',
        items: [
          {
            q: 'Cos\'è Gregal International?',
            a: 'Gregal International è una società di consulenza specializzata in ristrutturazione industriale e M&A con sede a Bergamo, Italia. Fondata nel 2017 dal CEO Mato Maric, forniamo interventi strategici di alto livello per imprese industriali che affrontano transizioni critiche, inclusi gestione del turnaround, consulenza M&A ed eccellenza operativa.'
          },
          {
            q: 'Quali servizi offre Gregal International?',
            a: 'Offriamo tre servizi principali: Ristrutturazione Industriale (gestione del turnaround, implementazione Lean, riduzione dei costi), Consulenza Fusioni e Acquisizioni (identificazione target, due diligence, valutazione, strutturazione dell\'operazione) e Consulenza Gestionale (pianificazione strategica, miglioramento operativo, sviluppo organizzativo).'
          },
          {
            q: 'Chi è Mato Maric?',
            a: 'Mato Maric è il CEO e Fondatore di Gregal International. È uno specialista di turnaround con oltre 30 anni di esperienza nella ristrutturazione di organizzazioni manifatturiere multi-milionarie in Europa, USA, Asia, America Latina e Sud Africa. Ha generato oltre 50 milioni di euro di risparmi e ha ricoperto ruoli di leadership presso PwC, Continental e SKF.'
          },
          {
            q: 'Quali settori serve Gregal International?',
            a: 'Serviamo principalmente imprese industriali e manifatturiere che affrontano transizioni critiche. Questo include aziende che necessitano di gestione del turnaround, ristrutturazione operativa, implementazione Lean e consulenza M&A in diversi settori manifatturieri.'
          },
          {
            q: 'Dove si trova Gregal International?',
            a: 'La nostra sede è in Via Angelo Maj 16, 24121 Bergamo (BG), Italia — nel cuore del polo industriale lombardo. Pur avendo sede in Italia, operiamo a livello internazionale in Europa, USA, Asia, America Latina e Sud Africa.'
          },
          {
            q: 'Come posso contattare Gregal International?',
            a: 'Puoi contattarci telefonicamente al +39 335 475 812, via email a mato.maric@yahoo.com o tramite il modulo di contatto sul nostro sito. Di solito rispondiamo entro 24 ore.'
          }
        ]
      },
      contact: {
        tag: 'Contatti',
        title: 'Pronti a Trasformare la Vostra Azienda?',
        subtitle: 'Programma una consulenza riservata con il nostro team',
        company: 'Gregal International Di Maric Mato & C. S.A.S.',
        address: 'Via Angelo Maj, 16',
        city: '24121 Bergamo (BG), Italia',
        vat: '04253060166',
        email: 'mato.maric@yahoo.com',
        phone: '+39 335 475 812'
      }
    }
  };

  const t = content[language];

  const closeMenu = () => setMenuOpen(false);

  // Update html lang attribute for SEO
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`} aria-label="Main navigation">
        <div className="container">
          <div className="nav-content">
            <img src="/logo-white.png" alt="Gregal International — Industrial Restructuring & M&A Consulting" className="logo-image" />
            <button
              className="mobile-menu-btn"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? '✕' : '☰'}
            </button>
            <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
              <a href="#services" onClick={closeMenu}>{t.nav.services}</a>
              <a href="#about" onClick={closeMenu}>{t.nav.about}</a>
              <a href="#leadership" onClick={closeMenu}>{t.nav.leadership}</a>
              <a href="#contact" onClick={closeMenu}>{t.nav.contact}</a>
              <button
                className="lang-toggle"
                onClick={() => { setLanguage(language === 'en' ? 'it' : 'en'); closeMenu(); }}
              >
                {language === 'en' ? '🇮🇹 IT' : '🇬🇧 EN'}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            {t.hero.badge}
          </div>
          <h1 className="hero-title">
            {t.hero.title}<br />
            <span className="highlight">{t.hero.titleHighlight}</span>
          </h1>
          <p className="hero-subtitle">{t.hero.subtitle}</p>
          <a href="#contact" className="cta-button">
            {t.hero.cta}
            <span className="arrow">→</span>
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">{t.services.tag}</span>
            <h2 className="section-title">{t.services.title}</h2>
            <p className="section-subtitle">{t.services.subtitle}</p>
          </div>
          <div className="services-grid stagger-children">
            {t.services.items.map((service, index) => (
              <div key={index} className="service-card reveal">
                <div className="service-icon">{service.icon}</div>
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
          <div className="about-content">
            <div className="about-text-block reveal">
              <span className="section-tag">{t.about.tag}</span>
              <h2 className="section-title">{t.about.title}</h2>
              <p className="about-description">{t.about.description}</p>
              <p className="about-description">{t.about.description2}</p>
              <div className="about-stats">
                {t.about.stats.map((stat, index) => (
                  <div key={index} className="stat-item">
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="about-visual reveal">
              <div className="about-visual-bg">
                <img src="/mato-headshot.png" alt="Mato Maric, CEO and Founder of Gregal International, industrial restructuring and M&A specialist based in Bergamo, Italy" className="about-headshot" />
              </div>
              <div className="about-quote">
                <div className="about-quote-content">
                  <p>{t.about.quote}</p>
                  <span className="about-quote-author">— Mato Maric, CEO & Founder</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="leadership">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">{t.leadership.tag}</span>
            <h2 className="section-title">{t.leadership.title}</h2>
            <p className="section-subtitle">{t.leadership.subtitle}</p>
          </div>
          <div className="leadership-content">
            <div className="ceo-image-container reveal">
              <img src="/ceo-mato-maric.png" alt={`${t.leadership.ceoName} — ${t.leadership.ceoTitle}, Gregal International`} className="ceo-image" />
            </div>
            <div className="ceo-info reveal">
              <h3 className="ceo-name">{t.leadership.ceoName}</h3>
              <p className="ceo-title">{t.leadership.ceoTitle}</p>
              <p className="ceo-bio">{t.leadership.ceoBio}</p>
              <ul className="ceo-highlights">
                {t.leadership.highlights.map((highlight, index) => (
                  <li key={index}>
                    <span className="highlight-check">✓</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="partners">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">{t.partners.tag}</span>
            <h2 className="section-title">{t.partners.title}</h2>
          </div>
          <p className="partners-description reveal">{t.partners.description}</p>
          <div className="partners-grid stagger-children">
            {t.partners.items.map((partner, index) => (
              <a
                key={index}
                href={partner.url}
                className="partner-card reveal"
              >
                <span className="partner-badge">{partner.badge}</span>
                <h3>{partner.name}</h3>
                <p>{partner.description}</p>
                <span className="partner-link">
                  {language === 'en' ? 'Learn More' : 'Scopri di Più'} →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="faq">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">{t.faq.tag}</span>
            <h2 className="section-title">{t.faq.title}</h2>
            <p className="section-subtitle">{t.faq.subtitle}</p>
          </div>
          <div className="faq-grid">
            {t.faq.items.map((item, index) => (
              <article key={index} className="faq-item reveal" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <h3 itemProp="name">{item.q}</h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p itemProp="text">{item.a}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      </main>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">{t.contact.tag}</span>
            <h2 className="section-title">{t.contact.title}</h2>
            <p className="section-subtitle">{t.contact.subtitle}</p>
          </div>
          <div className="contact-layout">
            {/* Contact Form */}
            <div className="contact-form-card reveal">
              <h3>{language === 'en' ? 'Send Us a Message' : 'Inviaci un Messaggio'}</h3>
              <p className="form-intro">{language === 'en' ? 'Fill out the form below and we\'ll get back to you within 24 hours.' : 'Compila il modulo e ti risponderemo entro 24 ore.'}</p>
              {formStatus === 'success' && (
                <div className="form-alert form-alert-success">
                  <span>✓</span> {language === 'en' ? 'Message sent successfully! We\'ll be in touch soon.' : 'Messaggio inviato con successo! Ti contatteremo presto.'}
                </div>
              )}
              {formStatus === 'error' && (
                <div className="form-alert form-alert-error">
                  <span>✕</span> {language === 'en' ? 'Something went wrong. Please try again or email us directly.' : 'Qualcosa è andato storto. Riprova o inviaci un\'email.'}
                </div>
              )}
              <form onSubmit={handleFormSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">{language === 'en' ? 'Full Name' : 'Nome Completo'} *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      placeholder={language === 'en' ? 'Your full name' : 'Il tuo nome completo'}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">{language === 'en' ? 'Email Address' : 'Indirizzo Email'} *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      placeholder={language === 'en' ? 'your@email.com' : 'tua@email.com'}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="company">{language === 'en' ? 'Company' : 'Azienda'}</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleFormChange}
                    placeholder={language === 'en' ? 'Your company name' : 'Nome della tua azienda'}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">{language === 'en' ? 'Message' : 'Messaggio'} *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleFormChange}
                    placeholder={language === 'en' ? 'Tell us about your project or inquiry...' : 'Raccontaci del tuo progetto o della tua richiesta...'}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="form-submit" disabled={submitting}>
                  {submitting
                    ? (language === 'en' ? 'Sending...' : 'Invio in corso...')
                    : (language === 'en' ? 'Send Message →' : 'Invia Messaggio →')}
                </button>
              </form>
            </div>

            {/* Contact Info Sidebar */}
            <div className="contact-sidebar">
              <div className="contact-card reveal">
                <h3>{language === 'en' ? 'Contact Details' : 'Dettagli di Contatto'}</h3>
                <div className="contact-item">
                  <div className="contact-item-icon">📍</div>
                  <div className="contact-item-text">
                    <span className="contact-item-label">{language === 'en' ? 'Address' : 'Indirizzo'}</span>
                    <span className="contact-item-value">{t.contact.address}, {t.contact.city}</span>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-item-icon">✉️</div>
                  <div className="contact-item-text">
                    <span className="contact-item-label">Email</span>
                    <a href={`mailto:${t.contact.email}`} className="contact-link">{t.contact.email}</a>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-item-icon">📞</div>
                  <div className="contact-item-text">
                    <span className="contact-item-label">{language === 'en' ? 'Phone' : 'Telefono'}</span>
                    <a href={`tel:${t.contact.phone}`} className="contact-link">{t.contact.phone}</a>
                  </div>
                </div>
              </div>
              <div className="contact-corporate reveal">
                <h3>{language === 'en' ? 'Corporate Info' : 'Info Aziendali'}</h3>
                <div className="corporate-item">
                  <span className="corporate-label">{language === 'en' ? 'VAT' : 'P.IVA'}</span>
                  <span className="corporate-value">IT{t.contact.vat}</span>
                </div>
                <div className="corporate-item">
                  <span className="corporate-label">{language === 'en' ? 'Registry' : 'Registro'}</span>
                  <span className="corporate-value">CCIAA Bergamo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>&copy; {new Date().getFullYear()} Gregal International Di Maric Mato & C. S.A.S. All rights reserved.</p>
            <div className="footer-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Legal Mentions</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
