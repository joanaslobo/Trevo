import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'pt';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translations
const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.programs': 'Programs',
    'nav.fees': 'Fees & Schedule',
    'nav.contact': 'Contact',
    'nav.joinUs': 'Join Us',
    
    // Home page
    'home.title': 'Trevo – Where Music Grows',
    'home.subtitle': 'A music school & collective in the heart of Porto, bringing together Irish and Portuguese musical traditions.',
    'home.cta.join': 'Join the COOLlectivo',
    'home.cta.explore': 'Explore Programs',
    
    // About page
    'about.title': 'About Trevo',
    'about.fusion.title': 'A fusion of Irish & Portuguese musical passion',
    'about.fusion.p1': 'Trevo (Portuguese for shamrock) was born from the unique collaboration between an Irish musician and four Portuguese talents. Our name symbolizes the cultural bridge we've built between these two rich musical traditions.',
    'about.fusion.p2': 'Located in the vibrant city of Porto, we provide a space where traditional techniques meet contemporary expression, creating a distinctive sound that honors our diverse heritage.',
    'about.collective.title': 'COOLlectivo – More than a school',
    'about.collective.p1': 'COOLlectivo is our creative community - a playful fusion of "cool," "lectivo" (academic), and "colectivo" (collective). We're not just teaching music; we're building a family of creators who inspire and support each other.',
    'about.collective.p2': 'Through performances, workshops, and collaborative projects, we foster an environment where passion and expertise flow freely between teachers, students, and the wider Porto community.',
    'about.card.irish': 'Irish Roots',
    'about.card.irish.desc': 'Traditional Celtic music meeting contemporary Portuguese styles',
    'about.card.portuguese': 'Portuguese Flair',
    'about.card.portuguese.desc': 'Bringing the soul of fado and Portuguese rhythms to our teaching',
    'about.card.team': 'Our Team',
    'about.card.team.desc': '5 passionate musicians with international performance experience',
    'about.card.community': 'Community',
    'about.card.community.desc': 'Join our ever-growing family of musicians in Porto',
    
    // Programs page
    'programs.title': 'Our Programs',
    'programs.subtitle': 'Discover your musical voice through our diverse range of programs designed for all ages and skill levels.',
    
    // Fees page
    'fees.title': 'Fees & Schedule',
    'fees.subtitle': 'Transparent pricing and flexible scheduling to fit your lifestyle and musical journey.',
    'fees.schedule': 'Class Schedule',
    'fees.schedule.day': 'Day',
    'fees.schedule.morning': 'Morning',
    'fees.schedule.afternoon': 'Afternoon',
    'fees.schedule.evening': 'Evening',
    'fees.schedule.note': 'Schedule subject to seasonal changes. Please check with our reception for the most up-to-date information.',
    
    // Contact page
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Reach out to join our COOLlectivo or get more information about our programs.',
    'contact.form.title': 'Send Us a Message',
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Email Address',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Your Message',
    'contact.form.send': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.find.title': 'Find Us',
    'contact.find.address': 'Address',
    'contact.find.email': 'Email',
    'contact.find.phone': 'Phone',
    'contact.find.hours': 'Hours',
    'contact.connect.title': 'Connect With Us',
  },
  pt: {
    // Navigation
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.programs': 'Programas',
    'nav.fees': 'Preços & Horários',
    'nav.contact': 'Contacto',
    'nav.joinUs': 'Junte-se',
    
    // Home page
    'home.title': 'Trevo – Onde a Música Cresce',
    'home.subtitle': 'Uma escola de música & coletivo no coração do Porto, reunindo tradições musicais irlandesas e portuguesas.',
    'home.cta.join': 'Junte-se ao COOLlectivo',
    'home.cta.explore': 'Explorar Programas',
    
    // About page
    'about.title': 'Sobre o Trevo',
    'about.fusion.title': 'Uma fusão de paixão musical irlandesa & portuguesa',
    'about.fusion.p1': 'Trevo nasceu da colaboração única entre um músico irlandês e quatro talentos portugueses. O nosso nome simboliza a ponte cultural que construímos entre estas duas ricas tradições musicais.',
    'about.fusion.p2': 'Localizado na vibrante cidade do Porto, proporcionamos um espaço onde técnicas tradicionais encontram expressão contemporânea, criando um som distintivo que honra a nossa herança diversa.',
    'about.collective.title': 'COOLlectivo – Mais do que uma escola',
    'about.collective.p1': 'COOLlectivo é a nossa comunidade criativa - uma fusão divertida de "cool", "lectivo", e "colectivo". Não estamos apenas a ensinar música; estamos a construir uma família de criadores que se inspiram e apoiam mutuamente.',
    'about.collective.p2': 'Através de performances, workshops e projetos colaborativos, fomentamos um ambiente onde a paixão e a perícia fluem livremente entre professores, alunos e a comunidade mais ampla do Porto.',
    'about.card.irish': 'Raízes Irlandesas',
    'about.card.irish.desc': 'Música celta tradicional encontrando estilos portugueses contemporâneos',
    'about.card.portuguese': 'Estilo Português',
    'about.card.portuguese.desc': 'Trazendo a alma do fado e ritmos portugueses para o nosso ensino',
    'about.card.team': 'Nossa Equipa',
    'about.card.team.desc': '5 músicos apaixonados com experiência internacional de performance',
    'about.card.community': 'Comunidade',
    'about.card.community.desc': 'Junte-se à nossa família de músicos em crescimento no Porto',
    
    // Programs page
    'programs.title': 'Nossos Programas',
    'programs.subtitle': 'Descubra a sua voz musical através da nossa diversa gama de programas concebidos para todas as idades e níveis de competência.',
    
    // Fees page
    'fees.title': 'Preços & Horários',
    'fees.subtitle': 'Preços transparentes e horários flexíveis para se adaptarem ao seu estilo de vida e jornada musical.',
    'fees.schedule': 'Horário de Aulas',
    'fees.schedule.day': 'Dia',
    'fees.schedule.morning': 'Manhã',
    'fees.schedule.afternoon': 'Tarde',
    'fees.schedule.evening': 'Noite',
    'fees.schedule.note': 'Horário sujeito a alterações sazonais. Por favor, consulte a nossa receção para a informação mais atualizada.',
    
    // Contact page
    'contact.title': 'Contacte-nos',
    'contact.subtitle': 'Entre em contacto para se juntar ao nosso COOLlectivo ou obter mais informações sobre os nossos programas.',
    'contact.form.title': 'Envie-nos uma Mensagem',
    'contact.form.name': 'O Seu Nome',
    'contact.form.email': 'Endereço de Email',
    'contact.form.subject': 'Assunto',
    'contact.form.message': 'A Sua Mensagem',
    'contact.form.send': 'Enviar Mensagem',
    'contact.form.sending': 'A enviar...',
    'contact.find.title': 'Encontre-nos',
    'contact.find.address': 'Morada',
    'contact.find.email': 'Email',
    'contact.find.phone': 'Telefone',
    'contact.find.hours': 'Horário',
    'contact.connect.title': 'Conecte-se Connosco',
  }
};

export const LanguageProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // Try to get language from localStorage
    const savedLanguage = localStorage.getItem('language') as Language;
    return savedLanguage === 'pt' ? 'pt' : 'en'; // Default to 'en' if not saved or invalid
  });

  useEffect(() => {
    // Save to localStorage whenever language changes
    localStorage.setItem('language', language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    // Get the translation based on the current language
    const translationObj = translations[language];
    return translationObj[key] || key; // Return the key itself if translation not found
  };

  const contextValue = {
    language,
    setLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};