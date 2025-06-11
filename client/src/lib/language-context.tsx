import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type Language = "en" | "pt";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

// Translations
const translations: Record<Language, Record<string, string>> = {
  pt: {
    // Teachers page
    "teachers.title": "A Equipa",
    "teachers.instruments": "Instrumentos",
    "teachers.location": "Local",
    "teachers.luke.name": "Luke Carey",
    "teachers.luke.instruments": "Piano, Guitar, Ukulele, Music Production",
    "teachers.luke.bio": "Luke Carey é um multi-instrumentista, que toca principalmente piano,  guitarra,  ukulele, baixo, e bateria.",
    "teachers.luke.bio2": "Originalmente de Dublin, Irlanda, estudou Música e Literatura Inglesa na Trinity College Dublin, explorando teoria, composição, e tecnologia de música. Para além do seu percurso académico, desenvolveu  experiência na prática de música fora da sala de aula, participando em varias bandas e projectos, festivais de música, e até escreveu um musical.",
    "teachers.luke.bio3": "Chegou a Portugal em 2021, onde tem dado aulas particulares a alunos de qualquer idade, nacionalidade e cultura. É fluente em Português e Inglês",
    "teachers.luke.location": "Porto",
    "teachers.joao.name": "João Guimarães",
    "teachers.joao.instruments": "Saxophone",
    "teachers.joao.bio": "João specializes in saxophone, bringing years of experience in both classical and jazz.",
    "teachers.joao.location": "Porto",
    "teachers.francisco.name": "Francisco Beirão",
    "teachers.francisco.instruments": "Drums",
    "teachers.francisco.bio": "Francisco Beirão (\"El Killo\", 1981, Aveiro, Portugal), professor de Música desde 2004 em diversas escolas e instituições de intervenção social, em particular com um longo trabalho realizado no projecto educativo da Qualificar para Incluir.",
    "teachers.francisco.bio2": "A viver no Porto desde 1999, onde já cheguei de baquetas na mão, dividi o meu tempo entre a conclusão de uma licenciatura em Sociologia, muitas garagens e escolas de música em diferentes países, onde aprofundei uma relação umbilical com a bateria e aprendi outros idiomas.",
    "teachers.francisco.bio3":"Adepto fervoroso de Música em geral e de Rock em particular, iniciei o meu percurso profissional em 2005 com Funkyard, tendo comandado nos anos seguintes as secções rítmicas de TOURO, Mi Ku Bô, Teia e integrado projectos como Retimbrar e Papercutz, assim como outros de inclusão social no serviço educativo da Casa da Música, em várias orquestras comunitárias, etc.  Membro fundador, baterista e vocalista de 47 de Fevereiro, toco também com Ghosts of Port Royal e sou membro da equipa de We Tum Tum em diferentes espectáculos.",
  
    "teachers.francisco.location": "Porto",
    "teachers.jorge.name": "Jorge Loura",
    "teachers.jorge.instruments": "Guitar",
    "teachers.jorge.bio": "Jorge brings expertise in guitar across multiple genres.",
    "teachers.jorge.location": "Porto e Aveiro",
    "teachers.eurico.name": "Eurico",
    "teachers.eurico.instruments": "Guitar",
    "teachers.eurico.bio": "Eurico is a passionate guitarist with a strong background in both traditional and contemporary styles.",
    "teachers.eurico.location": "Porto",
      
    // Navigation
    "nav.home": "Home",
    "nav.about": "Sobre Nós",
    "nav.teachers": "Equipa",
    "nav.programs": "Programas",
    "nav.methodology": "Métodos",
    "nav.fees": "Fees",
    "nav.contact": "Contactos",
    "nav.events": "Eventos",
    "nav.joinUs": "Junta-te",

    // Home page
    "home.title": "Trevo Colectivo",
    "home.subtitle":
      "Trevo Coolectivo is a collaborative music teaching network connecting students and teachers across Porto, Ovar, and Ílhavo through shared learning, creativity, and a passion for all things music.",
    "home.cta.join": "Join the COOLlectivo!",
    "home.cta.explore": "About us",

    // About page
    "about.title": "About Trevo",
    "about.fusion.title": "Music and Community",
    "about.fusion.p1":
      "Trevo Coolectivo was born from the combined efforts of four musicians who, although they had played and worked together in bands, had been teaching individually. They felt that together they could offer more - and that's how this cooperative teaching network between Porto, Ovar and Ílhavo came about.",
    "about.fusion.p2":
      "We combine years of experience in music with a common methodology, offering students more than just lessons: we promote connections between students of various instruments, creativity, sharing and a true collective spirit.",
    "about.collective.title": "COOLlectivo – More than a school",
    "about.collective.p1":
      'We believe that music teaching should be accessible and inspiring. That is why we offer the first lesson at half price - so that anyone can experience the energy of our collective',
    "about.collective.p2":
      "We set out to grow enthusiasm for music in all its forms in our students, not only by learning an instrument in individual or group lessons, but also by encouraging a taste for collecting music in physical format, books about artists and bands, posters, merchandise and other items for music lovers.",
    "about.card.instrument": "Learning an Instrument",
    "about.card.instrument.desc": "To enable students to master an instrument in its technical and timbral aspects, understanding its functions in groups and ensembles of different musical styles.",

    "about.card.sharing": "Bringing Students Together",
    "about.card.sharing.desc": "Promoting the sharing of skills, combating the isolation of individual study and helping to overcome fears and doubts in the learning process.",

    "about.card.collective": "Strengthening Group Work",
    "about.card.collective.desc": "Making students believe in the strength of the collective, where each person's virtues are enhanced and shortcomings are filled by the group.",

    "about.card.creativity": "Stimulating Creativity and Autonomy",
    "about.card.creativity.desc": "Encouraging exploration, mixing and experimentation, ensuring that students acquire the tools to develop their musical path independently.",

    "about.card.passion": "Nurturing Passion",
    "about.card.passion.desc": "Awakening a love of music through practice, theory and the discovery of artists and musical works.",


    // Programs page
    "programs.title": "Metodologia",
    "programs.subtitle": "At Trevo Coolectivo, our methodology centers on fun, collaboration, and personalization, ensuring each student learns in an engaging way tailored to their needs.",
    "programs.methodology.title": "Our Pillars",
    "programs.methodology.customPlan": "Customized Plan",
    "programs.methodology.customPlan.desc": "Each student co-creates their study plan with the teacher, defining goals that may include playing for pleasure, performing on stage, pursuing a career, or preparing for music curriculum exams like Rockschool.",
    "programs.methodology.exploration": "Instrument Exploration",
    "programs.methodology.exploration.desc": "All students participate in two annual lessons with a different instrument (e.g., a guitarist tries drums) to broaden horizons and gain versatility.",
    "programs.methodology.collaborative": "Collaborative Practice",
    "programs.methodology.collaborative.desc": "Combo classes bring together students of various instruments to form bands, with recordings of original songs or covers at the end of the year, shared with the community. We also hold regular events like public jam sessions where students and local musicians play together.",
    "programs.methodology.discovery": "Musical Discovery",
    "programs.methodology.discovery.desc": "We recommend musical works and artists weekly, plus books on theory, music history, and biographies, encouraging physical format music collection.",
    "programs.methodology.production": "Production Basics",
    "programs.methodology.production.desc": "We teach basic recording and editing using tools like GarageBand and Reaper, integrated into combo classes and music production course.",
    "programs.methodology.monitoring": "Regular Monitoring",
    "programs.methodology.monitoring.desc": "We provide quarterly reports with student progress, clear goals, and personalized tips.",
    
    "programs.disciplines.title": "Disciplines and Faculty",
    "programs.disciplines.desc": "Our team consists of experienced musicians with diverse backgrounds, bringing energy and inspiration to classes.",
    
    "programs.locations.title": "Locations",
    "programs.locations.desc": "Classes take place in welcoming spaces along the Porto - Ovar - Ílhavo axis, with plans for expansion.",
    "programs.locations.porto": "Porto: CC Stop",
    "programs.locations.ilhavo": "Ílhavo: Coming soon",
    "programs.locations.ovar": "Ovar: Coming soon",
    
    "programs.benefits.title": "Benefits",
    "programs.benefits.individual": "1-hour individual lessons with make-up classes for justified absences",
    "programs.benefits.materials": "Free materials including sheet music, theory guides, and personalized playlists",
    "programs.benefits.club": "Participation in the collectors' club with regular meetings to exchange and discuss physical music, books, and memorabilia",
    
    "programs.vision.title": "Future Vision",
    "programs.vision.desc": "Trevo Coolectivo aspires to be a meeting point for music lovers, uniting creativity, community, and energy.",

    // Fees page
    "fees.title": "Fees & Schedule",
    "fees.subtitle":
      "Transparent pricing and flexible scheduling to fit your lifestyle and musical journey.",
    "fees.schedule": "Class Schedule",
    "fees.schedule.day": "Day",
    "fees.schedule.morning": "Morning",
    "fees.schedule.afternoon": "Afternoon",
    "fees.schedule.evening": "Evening",
    "fees.schedule.note":
      "Schedule subject to seasonal changes. Please check with our reception for the most up-to-date information.",

    // Contact page
    "contact.title": "Contact Us",
    "contact.subtitle":
      "Reach out to join our COOLlectivo or get more information about our programs.",
    "contact.form.title": "Send Us a Message",
    "contact.form.name": "Your Name",
    "contact.form.email": "Email Address",
    "contact.form.subject": "Subject",
    "contact.form.phone": "Phone Number",
    "contact.form.message": "Your Message",
    "contact.form.send": "Send Message",
    "contact.form.sending": "Sending...",
    "contact.find.title": "Find Us",
    "contact.find.address": "Address",
    "contact.find.email": "Email",
    "contact.find.phone": "Phone",
    "contact.find.hours": "Hours",
    "contact.connect.title": "Connect With Us",
  },
  en: {
    // Teachers page
    "teachers.title": "Conhece os Nossos Professores",
    "teachers.instrument.strings": "Cordas",
    "teachers.instrument.guitar": "Guitarra",
    "teachers.instrument.voice": "Voz",
    "teachers.instrument.percussion": "Percussão",
    "teachers.bio.luke":
      "Luke Carey é um multi-instrumentista, que toca principalmente o piano, a guitarra, o ukulele, o baixo, e a bateria. \nOriginalmente de Dublin, Irlanda, ele estudou Música e Literatura Inglesa na Trinity College Dublin, explorando a teoria, composição, e tecnologia de música. Para além do seu percurso académico, também desenvolveu bastante experiência na prática de música fora da sala de aula, participando em varias bandas e projectos, festivais de música, e até escreveu um musical. \n Chegou a Portugal em 2021, onde tem dado aulas particulares a alunos de qualquer idade, nacionalidade e cultura.",
    "teachers.bio.chico":
      "Francisco Beirão (\"El Killo\", 1981, Aveiro, Portugal), professor de Música desde 2004 em diversas escolas e instituições de intervenção social, em particular com um longo trabalho realizado no projecto educativo da Qualificar para Incluir. \n A viver no Porto desde 1999, onde já cheguei de baquetas na mão, dividi o meu tempo entre a conclusão de uma licenciatura em Sociologia, muitas garagens e escolas de música em diferentes países, onde aprofundei uma relação umbilical com a bateria e aprendi outros idiomas. \n Adepto fervoroso de Música em geral e de Rock em particular, iniciei o meu percurso profissional em 2005 com Funkyard, tendo comandado nos anos seguintes as secções rítmicas de TOURO, Mi Ku Bô, Teia e integrado projectos como Retimbrar e Papercutz, assim como outros de inclusão social no serviço educativo da Casa da Música, em várias orquestras comunitárias, etc \n Membro fundador, baterista e vocalista de 47 de Fevereiro, toco também com Ghosts of Port Royal e sou membro da equipa de We Tum Tum em diferentes espectáculos.",
    "teachers.bio.joao":
      "Bla bla bla bla. Bla bla. Bla bla bla bla. Bla bla. Bla bla bla bla. Bla bla. Bla bla bla bla. Bla bla.",
    "teachers.bio.luke":
      "Bla bla bla bla. Bla bla. Bla bla bla bla. Bla bla. Bla bla bla bla. Bla bla. Bla bla bla bla. Bla bla.",

    // Navigation
    "nav.home": "Início",
    "nav.about": "Sobre",
    "nav.teachers": "Professores",
    "nav.programs": "Programas",
    "nav.fees": "Preços",
    "nav.contact": "Contacto",
    "nav.joinUs": "Junte-se",

    // Home page
    "home.title": "Trevo – Onde a Música Cresce",
    "home.subtitle":
      "Uma escola de música & coletivo no coração do Porto, reunindo tradições musicais irlandesas e portuguesas.",
    "home.cta.join": "Junta-te ao COOLlectivo",
    "home.cta.explore": "Explorar Programas",

    // About page
    "about.title": "Sobre o Trevo",
    "about.fusion.title": "Bla bla bla bla. Bla bla. Bla bla bla bla. Bla bla. Bla bla bla bla.",
    "about.fusion.p1":
      "Bla bla bla bla. Bla bla. Bla bla bla bla. Bla bla. Bla bla bla bla. Bla bla bla bla. Bla bla. Bla bla bla bla. Bla bla. Bla bla bla bla.",
    "about.fusion.p2":
      "Bla bla bla bla. Bla bla. Bla bla bla bla. Bla bla. Bla bla bla bla.Bla bla bla bla. Bla bla. Bla bla bla bla. Bla bla. Bla bla bla bla.",
    "about.collective.title": "COOLlectivo – Mais do que uma escola",
    "about.collective.p1":
      'COOLlectivo é a nossa comunidade criativa - uma fusão divertida de "cool", "lectivo", e "colectivo". Não estamos apenas a ensinar música; estamos a construir uma família de criadores que se inspiram e apoiam mutuamente.',
    "about.collective.p2":
      "Bla bla bla bla. Bla bla. Bla bla bla bla. Bla bla. Bla bla bla bla.Bla bla bla bla. Bla bla. Bla bla bla bla. Bla bla. Bla bla bla bla.",
    "about.card.irish": "Raízes Irlandesas",
    "about.card.irish.desc":
      "Música celta tradicional encontrando estilos portugueses contemporâneos",
    "about.card.portuguese": "Estilo Português",
    "about.card.portuguese.desc":
      "Bla bla bla bla. Bla bla. Bla bla bla bla. Bla bla. Bla bla bla bla.",
    "about.card.team": "A Equipa",
    "about.card.team.desc":
      "Bla bla bla bla. Bla bla. Bla bla bla bla. Bla bla. Bla bla bla bla.",
    "about.card.community": "Comunidade",
    "about.card.community.desc":
      "Bla bla bla bla. Bla bla. Bla bla bla bla. Bla bla. Bla bla bla bla.",

    // Programs page
    "programs.title": "Os Nossos Programas",
    "programs.subtitle":
      "Bla bla bla bla. Bla bla. Bla bla bla bla. Bla bla. Bla bla bla bla..",

    // Fees page
    "fees.title": "Preços",
    "fees.subtitle":
      "Bla bla bla bla. Bla bla. Bla bla bla bla. Bla bla. Bla bla bla bla.",
    "fees.schedule": "Horário de Aulas",
    "fees.schedule.day": "Dia",
    "fees.schedule.morning": "Manhã",
    "fees.schedule.afternoon": "Tarde",
    "fees.schedule.evening": "Noite",
    "fees.schedule.note":
      "Horário sujeito a alterações sazonais. Por favor, consulte a nossa receção para a informação mais atualizada.",

    // Contact page
    "contact.title": "Contacta-nos",
    "contact.subtitle":
      "Entra em contacto para te juntares ao nosso COOLlectivo ou obter mais informações sobre os nossos programas.",
    "contact.form.title": "Envia-nos uma Mensagem",
    "contact.form.name": "O Teu Nome",
    "contact.form.email": "Endereço de Email",
    "contact.form.subject": "Assunto",
    "contact.form.message": "A Tua Mensagem",
    "contact.form.send": "Enviar Mensagem",
    "contact.form.sending": "A enviar...",
    "contact.find.title": "Encontra-nos",
    "contact.find.address": "Morada",
    "contact.find.email": "Email",
    "contact.find.phone": "Telefone",
    "contact.find.hours": "Horário",
    "contact.connect.title": "Conecta-te Connosco",
  },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // Try to get language from localStorage with safely check
    try {
      const savedLanguage = localStorage.getItem("language");
      return savedLanguage === "pt" ? "pt" : "en"; // Default to 'en' if not saved or invalid
    } catch (error) {
      // In case localStorage is not available (e.g., in SSR or when cookies are disabled)
      return "en";
    }
  });

  useEffect(() => {
    // Save to localStorage whenever language changes with safety check
    try {
      localStorage.setItem("language", language);
    } catch (error) {
      // Handle case where localStorage is not available
      console.warn("Could not save language preference to localStorage");
    }
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    // Get the translation based on the current language
    const translationObj = translations[language];
    return translationObj[key as keyof typeof translationObj] || key; // Return the key itself if translation not found
  };

  const contextValue = {
    language,
    setLanguage,
    t,
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
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
