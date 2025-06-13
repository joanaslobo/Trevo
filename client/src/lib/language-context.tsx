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
    "teachers.luke.instruments": "Piano, Guitarra, Ukulele, Produção Musical",
    "teachers.luke.bio": "Luke Carey é um multi-instrumentista, que toca principalmente piano,  guitarra,  ukulele, baixo, e bateria.",
    "teachers.luke.bio2": "Originalmente de Dublin, Irlanda, estudou Música e Literatura Inglesa na Trinity College Dublin, explorando teoria, composição, e tecnologia de música. Para além do seu percurso académico, desenvolveu  experiência na prática de música fora da sala de aula, participando em varias bandas e projectos, festivais de música, e até escreveu um musical.",
    "teachers.luke.bio3": "Chegou a Portugal em 2021, onde tem dado aulas particulares a alunos de qualquer idade, nacionalidade e cultura. É fluente em Português e Inglês",
    "teachers.luke.location": "Porto",
    "teachers.joao.name": "João Guimarães",
    "teachers.joao.instruments": "Saxophone",
    "teachers.joao.bio": "João specializes in saxophone, bringing years of experience in both classical and jazz.",
    "teachers.joao.location": "Porto",
    "teachers.francisco.name": "Francisco Beirão",
    "teachers.francisco.instruments": "Bateria",
    "teachers.francisco.bio": "Francisco Beirão (\"El Killo\", 1981, Aveiro, Portugal), professor de Música desde 2004 em diversas escolas e instituições de intervenção social, em particular com um longo trabalho realizado no projecto educativo da Qualificar para Incluir.",
    "teachers.francisco.bio2": "A viver no Porto desde 1999, onde já cheguei de baquetas na mão, dividi o meu tempo entre a conclusão de uma licenciatura em Sociologia, muitas garagens e escolas de música em diferentes países, onde aprofundei uma relação umbilical com a bateria e aprendi outros idiomas.",
    "teachers.francisco.bio3":"Adepto fervoroso de Música em geral e de Rock em particular, iniciei o meu percurso profissional em 2005 com Funkyard, tendo comandado nos anos seguintes as secções rítmicas de TOURO, Mi Ku Bô, Teia e integrado projectos como Retimbrar e Papercutz, assim como outros de inclusão social no serviço educativo da Casa da Música, em várias orquestras comunitárias, etc.  Membro fundador, baterista e vocalista de 47 de Fevereiro, toco também com Ghosts of Port Royal e sou membro da equipa de We Tum Tum em diferentes espectáculos.",
  
    "teachers.francisco.location": "Porto",
    "teachers.jorge.name": "Jorge Loura",
    "teachers.jorge.instruments": "Guitarra",
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
      "O Trevo Coolectivo é uma rede colaborativa de ensino de música que liga alunos e professores do Porto, Ovar e Ílhavo através da partilha de aprendizagem, criatividade e paixão pela música.",
    "home.cta.join": "Junta-te ao COOLlectivo!",
    "home.cta.explore": "Sobre nós",

    // About page
    "about.title": "Sobre o Trevo",
    "about.fusion.title": "Musica e Comunidade",
    "about.fusion.p1":
      "O Trevo Coletivo nasceu da união de esforços de quatro músicos que, apesar de terem tocado e trabalhado juntos em bandas, davam aulas individualmente. Sentiram que juntos poderiam oferecer mais - e foi assim que surgiu esta rede de ensino cooperativo entre Porto, Ovar e Ílhavo.",
    "about.fusion.p2":
      "Combinamos anos de experiência na música com uma metodologia comum, oferecendo aos alunos mais do que apenas aulas: promovemos a ligação entre alunos de vários instrumentos, a criatividade, a partilha e um verdadeiro espírito coletivo.",
    "about.collective.title": "COOLlectivo – Mais que uma escola",
    "about.collective.p1":
      'Acreditamos que o ensino da música deve ser acessível e inspirador. É por isso que oferecemos a primeira aula a metade do preço - para que qualquer pessoa possa experimentar a energia do nosso coletivo',
    "about.collective.p2":
      "Pretendemos fazer crescer nos nossos alunos o entusiasmo pela música em todas as suas formas, não só através da aprendizagem de um instrumento em aulas individuais ou em grupo, mas também incentivando o gosto pela coleção de música em formato físico, livros sobre artistas e bandas, posters, merchandise e outros artigos para os amantes da música.",
    "about.card.instrument": "Instrumentos",
    "about.card.instrument.desc": "Ajudar os alunos a dominar um instrumento, tanto na parte técnica como no som, compreendendo como funciona em grupo e conjuntos de diferentes estilos musicais.",

    "about.card.sharing": "Aproximar Alunos",
    "about.card.sharing.desc":"Promover a partilha de competências, combater o isolamento do estudo individual e ajudar a ultrapassar medos e dúvidas no processo de aprendizagem.",

    "about.card.collective": "Fortalecer Colaborações",
    "about.card.collective.desc": "Fazer com que os alunos acreditem na força do coletivo, onde as virtudes de cada um são potenciadas e as falhas são colmatadas pelo grupo.",

    "about.card.creativity": "Estimular a Criatividade e a Autonomia",
    "about.card.creativity.desc": "Incentivar a exploração, a mistura e a experimentação, garantindo que os alunos adquirem as ferramentas para desenvolver o seu percurso musical de forma independente.",

    "about.card.passion": "Alimentar a paixão",
    "about.card.passion.desc": "Despertar o amor pela música através da prática, da teoria e da descoberta de artistas e obras musicais",


    // Programs page
    "programs.title": "Metodologia",
    "programs.subtitle": "No Trevo Coolectivo, a nossa metodologia centra-se na diversão, colaboração e personalização, garantindo que cada aluno aprende de forma envolvente e adaptada às suas necessidades.",
    "programs.methodology.title": "Os Nossos Pilares",
    "programs.methodology.customPlan": "Plano Personalizado",
    "programs.methodology.customPlan.desc": "Cada aluno co-cria o seu plano de estudos com o professor, definindo objectivos que podem incluir tocar por prazer, atuar em palco, seguir uma carreira ou preparar-se para exames curriculares de música (ex.: Rockschool)",
    "programs.methodology.exploration": "Exploração de Instrumentos",
    "programs.methodology.exploration.desc": "Todos os alunos participam em duas aulas anuais com um instrumento diferente (ex.: um guitarrista experimenta bateria) para alargar horizontes e ganhar versatilidade.",
    "programs.methodology.collaborative": "Prática Colaborativa",
    "programs.methodology.collaborative.desc": "As aulas de combo juntam alunos de vários instrumentos para formar bandas, com gravações de músicas originais ou covers no final do ano, partilhadas com a comunidade. Também realizamos eventos regulares como jam sessions abertas onde alunos e músicos locais tocam juntos.",
    "programs.methodology.discovery": "Descoberta Musical",
    "programs.methodology.discovery.desc": "Recomendamos semanalmente obras e artistas musicais, bem como livros de teoria, história da música e biografias, incentivando a colecção de música em formato físico.",
    "programs.methodology.production": "Noções de Produção",
    "programs.methodology.production.desc": "Ensinamos os princípios básicos de gravação e edição com ferramentas como o GarageBand e o Reaper, integrados nas aulas de combo e no curso de produção musical.",
    "programs.methodology.monitoring": "Acompanhamento Regular",
    "programs.methodology.monitoring.desc": "Fornecemos relatórios trimestrais com a evolução do aluno, objectivos claros e dicas personalizadas.",

    "programs.disciplines.title": "Disciplinas e Corpo Docente",
    "programs.disciplines.desc": "A nossa equipa é composta por músicos experientes e com percursos diversos, trazendo energia e inspiração às aulas.",

    "programs.locations.title": "Locais",
    "programs.locations.desc": "As aulas decorrem em espaços acolhedores ao longo do eixo Porto - Ovar - Ílhavo, com planos de expansão.",
    "programs.locations.porto": "Porto: CC Stop",
    "programs.locations.ilhavo": "Ílhavo: Brevemente",
    "programs.locations.ovar": "Ovar: Brevemente",

    "programs.benefits.title": "Vantagens",
    "programs.benefits.individual": "Aulas individuais de 1 hora com reposição em caso de faltas justificadas",
    "programs.benefits.materials": "Materiais gratuitos, incluindo partituras, guias teóricos e playlists personalizadas",
    "programs.benefits.club": "Participação no clube de colecionadores com encontros regulares para trocar e discutir música física, livros e memorabilia",

    "programs.vision.title": "Visão de Futuro",
    "programs.vision.desc": "O Trevo Coolectivo aspira a ser um ponto de encontro para amantes de música, unindo criatividade, comunidade e energia.",

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
    "nav.joinUs": "Junta-te!",

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
