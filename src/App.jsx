import React, { useEffect, useState } from 'react';
import portrait from './assets/img-002.png';
import logo from './assets/logo.svg';

const Icon = ({ children, size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
);

const icons = {
  leaf: <Icon><path d="M20.5 3.5C13 3.5 7.5 7 5 12.5c-1 2.3-.7 4.5.5 6"/><path d="M4 20c3-5 7.3-8.8 13-11.5"/><path d="M13 4.8c2.1 2.4 3 5 2.7 7.8"/></Icon>,
  pulse: <Icon><path d="M3 12h4l2-6 4 12 2-6h6"/></Icon>,
  herb: <Icon><path d="M12 21V10"/><path d="M12 13c-4.5 0-7-2.5-7-7 4.5 0 7 2.5 7 7Z"/><path d="M12 16c4.5 0 7-2.5 7-7-4.5 0-7 2.5-7 7Z"/></Icon>,
  yoga: <Icon><circle cx="12" cy="5" r="2"/><path d="m6 11 6-3 6 3"/><path d="M12 8v6"/><path d="m9 20 3-6 3 6"/><path d="M4 17c2.5-1.5 5.2-1.7 8-1.1 2.8-.6 5.5-.4 8 1.1"/></Icon>,
  heart: <Icon><path d="M20.8 4.6c-1.8-1.8-4.7-1.8-6.5 0L12 6.9 9.7 4.6a4.6 4.6 0 0 0-6.5 6.5L12 20l8.8-8.9a4.6 4.6 0 0 0 0-6.5Z"/></Icon>,
  cap: <Icon><path d="m2 10 10-5 10 5-10 5L2 10Z"/><path d="M6 12.5V17c3.5 2.6 8.5 2.6 12 0v-4.5"/></Icon>,
  mail: <Icon><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></Icon>,
  phone: <Icon><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9Z"/></Icon>,
  pin: <Icon><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></Icon>,
  arrow: <Icon size={18}><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></Icon>,
  menu: <Icon size={26}><path d="M4 7h16M4 12h16M4 17h16"/></Icon>,
  close: <Icon size={26}><path d="m6 6 12 12M18 6 6 18"/></Icon>
};

const expertise = [
  { icon: icons.pulse, title: 'Ayurvedic Consultation & Assessment', text: 'Patient consultation, observation, health-history assessment, pulse diagnosis and personalised treatment planning.' },
  { icon: icons.heart, title: 'Personalised Ayurvedic Treatment', text: 'Individualised therapeutic programmes combining traditional therapies, herbal guidance, diet, lifestyle and wellness practices.' },
  { icon: icons.herb, title: 'Panchakarma & Traditional Therapies', text: 'Practical experience providing traditional Ayurvedic treatments and Panchakarma-related therapeutic care while monitoring progress.' },
  { icon: icons.leaf, title: 'Ayurvedic Herbal Medicine', text: 'Clinical guidance on Ayurvedic medicines alongside professional exposure to pharmacy, manufacturing and quality processes.' },
  { icon: icons.leaf, title: 'Diet & Lifestyle Guidance', text: 'Personalised guidance around healthy routines, lifestyle modification and preventive health practices.' },
  { icon: icons.yoga, title: 'Yoga & Holistic Wellness', text: 'Yoga classes, wellness education and lifestyle awareness integrated into a broader whole-person approach.' },
  { icon: icons.pulse, title: 'Acupuncture & Integrative Wellness', text: 'Experience with Acupuncture as part of broader holistic and integrative wellness approaches rooted in Ayurveda.' },
  { icon: icons.cap, title: 'Health Education & Prevention', text: 'Patient education about diet, wellness, disease prevention and traditional approaches to maintaining health.' },
];

const approach = [
  ['Understand', 'Begin by understanding the individual, their health concerns, symptoms, lifestyle, diet and wider wellbeing.'],
  ['Assess', 'Use clinical observation and appropriate Ayurvedic assessment methods to develop a clearer picture of individual needs.'],
  ['Personalise', 'Develop an individualised therapeutic approach incorporating Ayurvedic treatment, herbal guidance, diet, lifestyle and wellness practices.'],
  ['Support', 'Help the individual understand the reasoning behind lifestyle and wellness recommendations so care extends beyond the treatment setting.'],
  ['Review', 'Monitor the response to therapeutic care and adapt the approach where appropriate.'],
];

const career = [
  {
    years: 'October 2023 — Present',
    role: 'Senior Care Assistant / Shift In-Charge',
    place: 'Thornton Lodge Residential Care Home, Croydon, UK',
    details: 'Lead care staff during shifts, coordinate person-centred support, monitor residents’ health and wellbeing, oversee medication administration, maintain care documentation and liaise with GPs, pharmacists, nurses and other healthcare professionals.'
  },
  {
    years: '22 August 2021 — 31 August 2023',
    role: 'Medical Officer',
    place: '4U Ayurveda Medical Centre & Pharmacy, Sri Lanka',
    details: ['Conducted Ayurvedic patient consultations and clinical assessments.', 'Applied traditional diagnostic approaches, including observation and pulse diagnosis.', 'Developed personalised Ayurvedic treatment programmes and provided traditional therapies.', 'Worked with Panchakarma-related approaches and Ayurvedic herbal medicines.', 'Advised patients on diet, lifestyle modification, prevention and long-term wellbeing.', 'Monitored patient progress, adapted care and supported Yoga and wellness activities.', 'Educated patients about Ayurveda and healthy lifestyle practices.']
  },
  {
    years: '2 September 2020 — 15 October 2021',
    role: 'Medical Officer In-Charge',
    place: 'SETRAMED Institute Pvt Ltd, Sri Lanka',
    details: ['Provided Ayurvedic treatments and therapeutic care.', 'Supported quality-control activities within an Ayurvedic drug-manufacturing environment.', 'Provided professional guidance to pharmacy staff and supported quality medicine provision.', 'Coordinated courses and educational activities for Ayurvedic medical students.', 'Provided lifestyle and wellness guidance consistent with Ayurvedic principles.']
  },
  {
    years: '16 January 2019 — 31 August 2020',
    role: 'Residential Doctor',
    place: 'Lake Escapes Health Care Resort — Ay Service (Pvt) Ltd, Sri Lanka',
    details: ['Assessed clients and identified health and wellness concerns.', 'Diagnosed and treated ailments according to Ayurvedic principles.', 'Provided Ayurvedic therapeutic care and supported holistic health programmes.', 'Educated clients about disease prevention and healthy-lifestyle guidance.', 'Conducted and supported Yoga classes and wellness practices.', 'Communicated Ayurvedic health concepts to local and international clients.', 'Managed staff within the Ayurvedic section.']
  },
  {
    years: 'Clinical Internship',
    role: 'Intern Medical Officer',
    place: 'Ayurvedic Teaching Hospital, Borella, Sri Lanka',
    details: ['Completed an intensive one-year clinical internship as part of the BAMS programme.', 'Developed practical experience in patient handling, communication, assessment and Ayurvedic diagnosis.', 'Prescribed medicines and treatments while observing patient response and therapeutic progress.', 'Applied Ayurvedic principles within a professional hospital environment.']
  }
];

const qualifications = [
  ['Master of Science in Public Health', 'York St John University, London Campus · Public health, health promotion, prevention and population wellbeing', '2023 — 2024'],
  ['Bachelor of Ayurvedic Medicine & Surgery (BAMS)', 'Faculty of Indigenous Medicine, University of Colombo, Sri Lanka · Five years academic study and one-year clinical internship · Second Upper Division', '2012 — 2018'],
  ['Certificate of Practicing Ayurveda in UK', 'London College of Ayurvedic Medicine', 'March 2025'],
  ['Care Certificate', 'South West London Training Hub', 'September — December 2024'],
  ['Diploma in Psychology & Counselling', 'SITC Campus, Sri Lanka · One-year theoretical and practical diploma', '2021 — 2022'],
  ['Certificate in Proficiency of Ayurveda', 'Continuing professional development', 'Currently undertaking']
];

const research = [
  ['Traditional Medicinal Knowledge & Health Promotion · Postgraduate Research', 'Literature review exploring the utilisation of traditional medicinal knowledge in health promotion among the general population in South Asia.'],
  ['Traditional Ayurvedic Formulations · Undergraduate Individual Research', 'Literature review examining traditional medicinal formulations for urinary calculi documented in the “Thalpathe Piliyam” book series.'],
  ['Traditional Diet & Non-Communicable Diseases · Internship Group Research', 'Literature review examining the potential of traditional diets in the management of non-communicable diseases.']
];

function App() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <div>
      <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <div className="container nav__inner">
          <button className="brand" onClick={() => go('home')} aria-label="Home">
            <img className="brand__logo" src={logo} alt="Ayurveda" />
            <span><strong>Dr. Thilini</strong><small>Ayurveda Doctor</small></span>
          </button>

          <nav className={`nav__links ${open ? 'open' : ''}`} aria-label="Main navigation">
            {['about', 'expertise', 'experience', 'qualifications', 'research'].map((id) => (
              <button key={id} onClick={() => go(id)}>{id[0].toUpperCase() + id.slice(1)}</button>
            ))}
            <button className="button button--small nav__contact" onClick={() => go('contact')}>Contact</button>
          </nav>

          <button className="menu" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
            {open ? icons.close : icons.menu}
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero__orb hero__orb--1" />
          <div className="hero__orb hero__orb--2" />
          <div className="container hero__grid">
            <div className="hero__copy reveal">
              <div className="eyebrow"><span>{icons.leaf}</span> Ayurveda • Panchakarma • Herbal Medicine • Holistic Wellness • Preventive Health</div>
              <h1>Traditional Ayurvedic wisdom. <em>Personalised for modern wellbeing.</em></h1>
              <p className="hero__lead">Dr. Thilini Mapa Rallage is a qualified Ayurveda Doctor with a Bachelor of Ayurvedic Medicine and Surgery (BAMS) from the University of Colombo and an MSc in Public Health from York St John University, London.</p>
              <p className="hero__lead">Her professional journey spans Ayurvedic medical centres, residential wellness practice, Ayurvedic medicine and pharmacy environments, teaching-hospital training, patient education and holistic wellness.</p>
              <div className="hero__actions">
                <button className="button" onClick={() => go('expertise')}>Explore Ayurveda expertise {icons.arrow}</button>
                <button className="button button--ghost" onClick={() => go('contact')}>Professional enquiries</button>
              </div>
              <div className="hero__meta">
                <div><strong>BAMS</strong><span>University of Colombo</span></div>
                <div><strong>MSc</strong><span>Public Health</span></div>
                <div><strong>8+ Years</strong><span>Clinical & healthcare experience</span></div>
                <div><strong>UK</strong><span>Ayurveda practice certificate</span></div>
              </div>
            </div>

            <div className="portrait-wrap reveal reveal--delay">
              <div className="portrait-card">
                <div className="portrait-card__frame"><img src={portrait} alt="Dr. Thilini Mapa Rallage" /></div>
                <div className="portrait-card__label">
                  <span>Dr. Thilini Mapa Rallage</span>
                  <small>Ayurveda Doctor · BAMS · MSc Public Health</small>
                </div>
              </div>
              <div className="floating-note"><span className="floating-note__icon">✦</span><div><b>Holistic approach</b><small>Assessment · Treatment · Prevention</small></div></div>
            </div>
          </div>
        </section>

        <section className="section section--soft" id="about">
          <div className="container split">
            <div>
              <p className="kicker">About</p>
              <h2>Ayurveda centred on the individual, not simply the condition.</h2>
            </div>
            <div className="about-copy">
              <p className="large">Dedicated Ayurveda Doctor with extensive experience in Ayurvedic consultation, patient assessment, traditional diagnosis, treatment planning, herbal medicine, therapeutic procedures, Panchakarma, dietary guidance, lifestyle counselling, Yoga and holistic wellness.</p>
              <p>Her clinical journey began with rigorous academic and hospital-based training in Sri Lanka and developed through progressively responsible roles as an Intern Medical Officer, Residential Doctor, Medical Officer and Medical Officer In-Charge.</p>
              <p>Working with both local and international clients has strengthened her ability to understand different health concerns, lifestyles and wellness goals while communicating Ayurvedic concepts in a practical and approachable way.</p>
              <p>Her professional philosophy combines treatment, prevention and wellbeing. Her postgraduate education in Public Health complements this perspective through a focus on health promotion, disease prevention, population health and patient education.</p>
              <div className="membership">{icons.heart}<span><b>Professional Membership</b> Member of the Ayurvedic Medical Council, Sri Lanka.</span></div>
            </div>
          </div>
        </section>

        <section className="section" id="expertise">
          <div className="container">
            <div className="section-heading">
              <p className="kicker">Clinical Expertise</p>
              <h2>A comprehensive approach to Ayurvedic health and wellbeing.</h2>
              <p>Dr. Thilini’s experience covers the patient journey from initial consultation and assessment through treatment planning, therapeutic care, lifestyle support and ongoing review.</p>
            </div>
            <div className="cards">
              {expertise.map((item, i) => (
                <article className="card" key={item.title}>
                  <span className="card__number">0{i + 1}</span>
                  <div className="card__icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
            <div className="principles">
              {approach.map(([title, text], i) => <div key={title}><span>0{i + 1}</span><b>{title}</b><small>{text}</small></div>)}
            </div>
          </div>
        </section>

        <section className="section section--dark" id="experience">
          <div className="container experience-grid">
            <div className="experience-intro">
              <p className="kicker kicker--light">Ayurveda Experience</p>
              <h2>A professional journey through clinical Ayurveda, wellness, medicine and education.</h2>
              <p>Dr. Thilini’s experience brings together clinical Ayurveda, traditional treatment, pharmacy operations, quality processes, patient education and preventive wellness.</p>
            </div>
            <div className="timeline">
              {career.map((item) => (
                <article className="timeline__item" key={item.role + item.place}>
                  <div className="timeline__dot" />
                  <div className="timeline__year">{item.years}</div>
                  <h3>{item.role}</h3>
                  <h4>{item.place}</h4>
                  <ul>{item.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="qualifications">
          <div className="container qualifications-grid">
            <div>
              <p className="kicker">Education & Credentials</p>
              <h2>Traditional medical training strengthened by public-health knowledge.</h2>
              <p className="muted">A comprehensive BAMS pathway including clinical internship, followed by postgraduate public health study and additional professional learning.</p>
            </div>
            <div className="qualification-list">
              {qualifications.map(([title, school, date]) => (
                <div className="qualification" key={title}>
                  <div className="qualification__icon">{icons.cap}</div>
                  <div><h3>{title}</h3><p>{school}</p><small>{date}</small></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--sand" id="research">
          <div className="container">
            <div className="research-head">
              <div><p className="kicker">Research & Academic Interests</p><h2>Exploring traditional medicine through research, prevention and public health.</h2></div>
              <p>Academic work exploring traditional medicine, health promotion, prevention, diet and long-term wellbeing.</p>
            </div>
            <div className="research-grid">
              {research.map(([label, item], i) => <article key={item}><span>0{i + 1}</span><small>{label}</small><p>{item}</p></article>)}
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="container contact__grid">
            <div>
              <p className="kicker kicker--light">Contact</p>
              <h2>Connect with Dr. Thilini.</h2>
              <p>For professional enquiries relating to Ayurveda, holistic wellness, Ayurvedic health education, traditional medicine, research or professional collaboration.</p>
            </div>
            <div className="contact__card">
              <a href="mailto:tikbandara@gmail.com">{icons.mail}<span><small>Email</small>tikbandara@gmail.com</span></a>
              <a href="tel:+447823758376">{icons.phone}<span><small>Phone</small>+44 78 2375 8376</span></a>
              <div>{icons.pin}<span><small>Based in</small>Sutton, United Kingdom</span></div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer__inner">
          <div><b>Dr. Thilini Mapa Rallage</b><span>Ayurveda Doctor · BAMS · MSc Public Health</span></div>
          <p>Traditional knowledge. Personalised care. A whole-person approach to wellbeing. · © {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
