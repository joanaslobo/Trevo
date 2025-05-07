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
  en: {
    // Teachers page
    "teachers.title": "Meet Our Teachers",
    "teachers.instrument.strings": "Strings",
    "teachers.instrument.guitar": "Guitar",
    "teachers.instrument.voice": "Voice",
    "teachers.instrument.percussion": "Percussion",
    "teachers.bio.laura":
      "Bla bla bla bla. Bla bla. Bla bla bla bla. Bla bla. Bla bla bla bla. Bla bla. Bla bla bla bla. Bla bla.",
    "teachers.bio.joao":
      "Bla bla bla bla. Bla bla. Bla bla bla bla. Bla bla. Bla bla bla bla. Bla bla. Bla bla bla bla. Bla bla.",
    "teachers.bio.chico":
      "Bla bla bla bla. Bla bla. Bla bla bla bla. Bla bla. Bla bla bla bla. Bla bla. Bla bla bla bla. Bla bla.",
    "teachers.bio.luke":
      "Bla bla bla bla. Bla bla. Bla bla bla bla. Bla bla. Bla bla bla bla. Bla bla. Bla bla bla bla. Bla bla.",

    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.teachers": "Teachers",
    "nav.programs": "Programs",
    "nav.fees": "Fees",
    "nav.contact": "Contacts",
    "nav.joinUs": "Join Us",

    // Home page
    "home.title": "Trevo – Where Music Grows",
    "home.subtitle":
      "A music school & collective in the heart of Porto, bringing together Irish and Portuguese musical traditions.",
    "home.cta.join": "Join the COOLlectivo",
    "home.cta.explore": "Explore Programs",

    // About page
    "about.title": "About Trevo",
    "about.fusion.title": "A fusion of Irish & Portuguese musical passion",
    "about.fusion.p1":
      "Trevo (Portuguese for shamrock) was born from the unique collaboration between an Irish musician and four Portuguese talents. Our name symbolizes the cultural bridge we've built between these two rich musical traditions.",
    "about.fusion.p2":
      "Located in the vibrant city of Porto, we provide a space where traditional techniques meet contemporary expression, creating a distinctive sound that honors our diverse heritage.",
    "about.collective.title": "COOLlectivo – More than a school",
    "about.collective.p1":
      'COOLlectivo is our creative community - a playful fusion of "cool," "lectivo" (academic), and "colectivo" (collective). We\'re not just teaching music; we\'re building a family of creators who inspire and support each other.',
    "about.collective.p2":
      "Through performances, workshops, and collaborative projects, we foster an environment where passion and expertise flow freely between teachers, students, and the wider Porto community.",
    "about.card.irish": "Irish Roots",
    "about.card.irish.desc":
      "Traditional Celtic music meeting contemporary Portuguese styles",
    "about.card.portuguese": "Portuguese Flair",
    "about.card.portuguese.desc":
      "Bringing the soul of fado and Portuguese rhythms to our teaching",
    "about.card.team": "Our Team",
    "about.card.team.desc":
      "5 passionate musicians with international performance experience",
    "about.card.community": "Community",
    "about.card.community.desc":
      "Join our ever-growing family of musicians in Porto",

    // Programs page
    "programs.title": "Our Programs",
    "programs.subtitle":
      "Discover your musical voice through our diverse range of programs designed for all ages and skill levels.",

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
  pt: {
    // Teachers page
    "teachers.title": "Conhece os Nossos Professores",
    "teachers.instrument.strings": "Cordas",
    "teachers.instrument.guitar": "Guitarra",
    "teachers.instrument.voice": "Voz",
    "teachers.instrument.percussion": "Percussão",
    "teachers.bio.laura":
      "Bla bla bla bla. Bla bla. Bla bla bla bla. Bla bla. Bla bla bla bla. Bla bla. Bla bla bla bla. Bla bla.",
    "teachers.bio.chico":
      "Bla bla bla bla. Bla bla. Bla bla bla bla. Bla bla. Bla bla bla bla. Bla bla. Bla bla bla bla. Bla bla.",
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
