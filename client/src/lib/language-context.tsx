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
    "teachers.subtitle": "Conhece a nossa equipa",
    "teachers.instruments": "Instrumentos",
    "teachers.location": "Local",
    "teachers.luke.name": "Luke Carey",
    "teachers.luke.instruments":
      "Piano, Guitarra, Ukulele, Produção Musical e Teoria",
    "teachers.luke.bio":
      "Luke Carey é um multi-instrumentista e produtor de música a viver em Portugal desde 2021.",
    "teachers.luke.bio2":
      "Originalmente de Dublin, Irlanda, começou a sua viagem musical em criança aprendendo piano e guitarra na Royal Irish Academy of Musica. Depois, estudou Música e Literatura Inglesa na Trinity College Dublin, explorando teoria, composição, e tecnologia de música. Para além do seu percurso académico, desenvolveu  experiência na prática de música participando em varias bandas e projectos, como Big Sleep, Lü Tysky, Paulo Edson, Ordem da Saturno, e the ZirkusMonde Circus Band em Lisboa. Tocou em vários festivais de música, e até escreveu dois musicais.",
    "teachers.luke.bio3":
      "Quando chegou a Portugal, começou a dar aulas particulares a tempo inteiro a alunos de qualquer idade, nacionalidade e cultura. É fluente em Português e Inglês.",
    "teachers.luke.location": "Porto",
    "teachers.francisco.name": "Francisco Beirão",
    "teachers.francisco.instruments": "Bateria",
    "teachers.francisco.bio":
      'Francisco Beirão ("El Killo", 1981, Aveiro, Portugal), professor de Música desde 2004 em diversas escolas e instituições de intervenção social, em particular com um longo trabalho realizado no projecto educativo da Qualificar para Incluir.',
    "teachers.francisco.bio2":
      "A viver no Porto desde 1999, onde já chegou de baquetas na mão, dividiu o seu tempo entre a conclusão de uma licenciatura em Sociologia, muitas garagens e escolas de música em diferentes países, onde aprofundou uma relação umbilical com a bateria e aprendeu outros idiomas.",
    "teachers.francisco.bio3":
      "Adepto fervoroso de Música em geral e de Rock em particular, iniciou o seu percurso profissional em 2005 com Funkyard, tendo comandado nos anos seguintes as secções rítmicas de TOURO, Mi Ku Bô, Teia e integrado projectos como Retimbrar e Papercutz, assim como outros de inclusão social no serviço educativo da Casa da Música, em várias orquestras comunitárias, etc.  Membro fundador, baterista e vocalista de 47 de Fevereiro, toca também com Ghosts of Port Royal e é membro da equipa de We Tum Tum em diferentes espectáculos.",

    "teachers.francisco.location": "Porto",
    "teachers.jorge.name": "Jorge Loura",
    "teachers.jorge.instruments": "Guitarra",
    "teachers.jorge.bio":
      "Jorge brings expertise in guitar across multiple genres.",
    "teachers.jorge.location": "Ovar, Ílhavo",
    "teachers.eurico.name": "Bruno Eurico",
    "teachers.eurico.instruments": "Baixo",
    "teachers.eurico.bio":
      "Iniciou os estudos de música na OMA (Oficina de Música de Aveiro), em 2001, nas      disciplinas de formação musical, harmonia e prática de instrumento (viola baixo) com o professor António Ferro e Edamir Costa. Mais tarde ingressou na escola de jazz do Porto, formação de 3 anos com os professores João André e Alberto Jorge. Terminado os 3 anos continuou em aulas com o professor Alberto Jorge que era a principal referência e motivação para o desenvolver do instrumento.",
    "teachers.eurico.bio2":
      "Membro em vários projetos musicais (como Turn Off, Fadomorse, Souq,      Moonshiners, Paul da Silva, Le Bruit, Victor Hugo, Delta Blues, Só Vicente, Coro Etnográfico das Barrocas, entre outros) com sessões em estúdio e performances ao vivo passando por alguns sítios emblemáticos como Casa da Música, Coliseu do Porto, Aula Magna e pelos mais diversos festivais nacionais e internacionais.",
    "teachers.eurico.bio3":
      "Professor nas escolas de música de São Bernardo, musica.com e enxame de letras.",
    "teachers.eurico.location": "Ovar, Ílhavo",

    "teachers.gabriel.name": "Gabriel Simões",
    "teachers.gabriel.instruments": "Saxofone",
    "teachers.gabriel.bio":
      "Gabriel Simões Neves nasceu a 01 de janeiro de 1990 em Amora, concelho do Seixal.         Em 2010 ingressou no Curso Profissional de Instrumentista de Jazz, com o instrumento saxofone. Neste período teve aulas com os professores Carl Minnemann, Demian Cabaud (Combo), João Martins, José Pedro Coelho e Rui Teixeira (saxofone). Frequentou várias formações em contexto de trabalho na área do Jazz com músicos como Voro Garcia, Jesus Santandreu, Toni Belenguer, entre outros. ",
    "teachers.gabriel.bio2":
      "Durante o seu percurso como saxofonista colaborou, em concertos, Azeitonas, Hérman José, Jacinta, João Martins Quarteto, José Cid, Rui Veloso, Moonshiners, Siricaia, Vitorino, Orquestra de Jazz do Porto, Hugo Carvalhais, entre outros. Já atuou em variadas salas e festivais do país, entre os quais, Teatro São Luíz, Casa da Música, Teatro Circo, Teatro da Trindade, Meo Sudoeste e Reverence Valada. ",
    "teachers.gabriel.bio3":
      "Em 2017, juntamente com os músicos Jorge Loura e João Martins criou a banda Troll’s Toy com a qual já editou três discos. Atualmente também é membro da banda Souq. ",

    "teachers.gabriel.location": "Porto",

    "teachers.rui.name": "Rui Pedro Martelo",
    "teachers.rui.instruments": "Baixo",
    "teachers.rui.bio":
      "Rui Pedro Martelo é um músico Português nascido a 29 de Abril de 1988 em Castelo de Paiva.         Iniciou se no mundo da música em 2004, começando por estudar baixo eléctrico na escola de Jazz do Porto.         Entre 2008 e 2011 frequentou o curso de Produção e Tecnologias da Música na Escola Superior de Música e Artes do Espectáculo no Porto.",
    "teachers.rui.bio2":
      "Desde então inicia a sua carreira no mundo música tendo desenvolvido trabalho na area do som ao vivo, produção musical e como contrabaixista e baixista. Colaborou ao vivo e em estúdio com bandas e artistas como Vespa, Elias, Pterossauros, Mesa, Filipe Pinto, Barrako27, Puro L entre outros.",
    "teachers.rui.bio3":
      " Actualmente integra as bandas CobraFuma, Greengo, Kyrpto, O Bom O Mau e O Azevedo, Santa Muerte e Três Tristes Tigres",

    "teachers.rui.location": "Porto",

    "teachers.loura.name": "Jorge Loura",
    "teachers.loura.instruments": "Guitarra",
    "teachers.loura.bio":
      "Jorge Loura é guitarrista, autor e professor de música, com carreira desde 1994. Integra atualmente os Souq, 47 de Fevereiro, Troll’s Toy, Taxi, Retimbrar e Ricardo Azevedo, atuando em palcos nacionais e internacionais.",
    "teachers.loura.bio2":
      "Colaborou com Zen, Mesa, Black Company e Mikkel Solnado, entre muitos outros. Em 2018, a Arte Sonora destacou-o como um dos 10 guitarristas portugueses mais influentes da década.",
    "teachers.loura.bio3":
      "Finaliza o Mestrado em Performance em Jazz na Universidade de Aveiro.",
    "teachers.loura.location": "Ovar, Ílhavo",

    // Navigation
    "nav.home": "Home",
    "nav.about": "Sobre Nós",
    "nav.teachers": "Equipa",
    "nav.programs": "Programas",
    "nav.methodology": "Metodologia",
    "nav.fees": "Fees",
    "nav.contact": "Contactos",
    "nav.events": "Eventos e Galeria",
    "nav.joinUs": "Junta-te",

    //Events
    "events.title": "Eventos",
    "events.upcoming": "Próximos Eventos",
    "events.gallery": "Galeria",
    "events.past": "Eventos Passados",
    "events.moreInfo": "Mais Info",
    "events.summer.title": "Sessão de Verão",
    "events.summer.desc":
      "Junta-te a nós para uma noite de improvisação e exploração musical.",
    "events.showcase.title": "Showcase de Alunos",
    "events.showcase.desc":
      "Os nossos alunos apresentam o seu progresso numa performance pública.",
    "events.workshop.title": "Workshop: Música Tradicional Irlandesa",
    "events.workshop.desc":
      "Aprende sobre as tradições e instrumentos da música irlandesa.",
    "events.spring.title": "Concerto de Primavera 2024",
    "events.guitar.title": "Workshop de Guitarra",
    "events.winter.title": "Recital de Inverno",
    "events.upcoming.session.title": "Sessão de Jam Aberta",
    "events.upcoming.session.description":
      "Junta-te a nós para uma noite de improvisação e exploração musical num ambiente descontraído.",
    "events.upcoming.showcase.title": "Showcase de Alunos",
    "events.upcoming.showcase.description":
      "Os nossos alunos apresentam o seu progresso numa performance pública especial.",
    "events.upcoming.workshop.title": "Workshop: Música Tradicional Irlandesa",
    "events.upcoming.workshop.description":
      "Aprende sobre as tradições e instrumentos únicos da música irlandesa com Luke Carey.",

    // Home page
    "home.title": "Trevo Coolectivo",
    "home.subtitle":
      "O Trevo Coolectivo é uma rede colaborativa de ensino de música que liga alunos e professores do Porto, Ovar e Ílhavo através da partilha de aprendizagem, criatividade e paixão pela música.",
    "home.cta.join": "Junta-te ao Coolectivo!",
    "home.cta.explore": "Sobre nós",

    // About page
    "about.title": "Sobre o Trevo",
    "about.fusion.title": "Sobre o Coolectivo",
    "about.fusion.p1":
      "O Trevo Coletivo nasceu da união de esforços de quatro músicos que, apesar de terem tocado e trabalhado juntos em bandas, davam aulas individualmente. Sentiram que juntos poderiam oferecer mais - e foi assim que surgiu esta rede de ensino cooperativo entre Porto, Ovar e Ílhavo.",
    "about.fusion.p2":
      "Combinamos anos de experiência na música com uma metodologia comum, oferecendo aos alunos mais do que apenas aulas: promovemos a ligação entre alunos de vários instrumentos, a criatividade, a partilha e um verdadeiro espírito coletivo.",
    "about.collective.title": "Coolectivo",
    "about.collective.p1":
      "Acreditamos que o ensino da música deve ser acessível e inspirador. É por isso que oferecemos a primeira aula a metade do preço - para que qualquer pessoa possa experimentar a energia do nosso coletivo.",
    "about.collective.p2":
      "Pretendemos fazer crescer nos nossos alunos o entusiasmo pela música em todas as suas formas, não só através da aprendizagem de um instrumento em aulas individuais ou em grupo, mas também incentivando o gosto pela discussão e coleção de música em formato físico: livros sobre artistas e bandas, posters, merchandise e outros artigos para os amantes da música.",
    "about.card.instrument": "Instrumentos",
    "about.card.instrument.desc":
      "Ajudar os alunos a dominar um instrumento, tanto na parte técnica como no som, compreendendo como funciona em grupo e conjuntos de diferentes estilos musicais.",

    "about.card.sharing": "Aproximar Alunos",
    "about.card.sharing.desc":
      "Promover a partilha de competências, combater o isolamento do estudo individual e ajudar a ultrapassar medos e dúvidas no processo de aprendizagem.",

    "about.card.collective": "Fortalecer Colaborações",
    "about.card.collective.desc":
      "Fazer com que os alunos acreditem na força do coletivo, onde as virtudes de cada um são potenciadas e as falhas são colmatadas pelo grupo.",

    "about.card.creativity": "Estimular a Autonomia",
    "about.card.creativity.desc":
      "Incentivar a exploração de tecnologia de música, garantindo que os alunos adquirem as ferramentas para desenvolver o seu percurso musical de forma independente fora das aulas.",

    // Programs page
    "programs.title": "Metodologia",
    "programs.subtitle":
      "No Trevo Coolectivo, a nossa metodologia centra-se na diversão, colaboração e personalização, garantindo que cada aluno aprende de forma envolvente e adaptada às suas necessidades.",
    "programs.methodology.title": "Os Nossos Pilares",
    "programs.methodology.customPlan": "Plano Personalizado",
    "programs.methodology.customPlan.desc":
      "Cada aluno co-cria o seu plano de estudos com o professor, definindo objectivos que podem incluir tocar por prazer, atuar em palco, seguir uma carreira ou preparar-se para exames curriculares de música (ex.: Rockschool)",
    "programs.methodology.exploration": "Exploração de Instrumentos",
    "programs.methodology.exploration.desc":
      "Todos os alunos participam em duas aulas anuais com um instrumento diferente (ex.: um guitarrista experimenta bateria) para alargar horizontes e ganhar versatilidade.",
    "programs.methodology.collaborative": "Prática Colaborativa",
    "programs.methodology.collaborative.desc":
      "As aulas de combo juntam alunos de vários instrumentos para formar bandas, com gravações de músicas originais ou covers no final do ano, partilhadas com a comunidade. Também realizamos eventos regulares como jam sessions abertas onde alunos e músicos locais tocam juntos.",
    "programs.methodology.discovery": "Descoberta Musical",
    "programs.methodology.discovery.desc":
      "Recomendamos semanalmente obras e artistas musicais, bem como livros de teoria, história da música e biografias, incentivando a colecção de música em formato físico.",
    "programs.methodology.production": "Noções de Produção",
    "programs.methodology.production.desc":
      "Ensinamos os princípios básicos de gravação e edição com ferramentas como o GarageBand e o Reaper, integrados nas aulas de combo e no curso de produção musical.",
    "programs.methodology.monitoring": "Acompanhamento Regular",
    "programs.methodology.monitoring.desc":
      "Fornecemos relatórios trimestrais com a evolução do aluno, objectivos claros e dicas personalizadas.",

    "programs.disciplines.title": "Disciplinas e Corpo Docente",
    "programs.disciplines.desc":
      "A nossa equipa é composta por músicos experientes e com percursos diversos, trazendo energia e inspiração às aulas.",

    "programs.locations.title": "Locais",
    "programs.locations.desc":
      "As aulas decorrem em espaços acolhedores ao longo do eixo Porto - Ovar - Ílhavo, com planos de expansão.",
    "programs.locations.porto": "Porto: CC Stop",
    "programs.locations.ilhavo": "Ílhavo: Brevemente",
    "programs.locations.ovar": "Ovar: Brevemente",

    "programs.benefits.title": "Vantagens",
    "programs.benefits.individual":
      "Aulas individuais de 1 hora com reposição em caso de faltas justificadas",
    "programs.benefits.materials":
      "Materiais gratuitos, incluindo partituras, guias teóricos e playlists personalizadas",
    "programs.benefits.club":
      "Participação no clube de colecionadores com encontros regulares para trocar e discutir música física, livros e memorabilia",

    "programs.vision.title": "Visão de Futuro",
    "programs.vision.desc":
      "O Trevo Coolectivo aspira a ser um ponto de encontro para amantes de música, unindo criatividade, comunidade e energia.",

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
    "contact.title": "Contactos",
    "contact.subtitle":
      "Entra em contacto connosco para te juntares ao Coolectivo ou para obteres mais informações sobre os nossos programas.",
    "contact.form.title": "Send Us a Message",
    "contact.form.name": "Nome",
    "contact.form.email": "Email",
    "contact.form.subject": "Subject",
    "contact.form.phone": "Número de telemovel",
    "contact.form.message": "Comentários",
    "contact.form.send": "Enviar",
    "contact.form.sending": "Sending...",
    "contact.find.title": "Find Us",
    "contact.find.address": "Address",
    "contact.find.email": "Email",
    "contact.find.phone": "Phone",
    "contact.find.hours": "Hours",
    "contact.connect.title": "Connect With Us",
    "contact.form.classtype": "Seleciona o tipo de aula",
    "contact.form.classtypeheader": "Tipo de Aula",
    "contact.form.instrumentheader": "Instrumento",
    "contact.form.locationheader": "Local",
    "contact.form.instrument": "Seleciona o teu instrumento",
    "contact.form.location": "Seleciona onde queres praticar",
    "contact.form.age": "Idade",
    "contact.form.comments": "Comentários",
    "contact.instrument.guitar": "Guitarra",
    "contact.instrument.piano": "Piano",
    "contact.instrument.drums": "Bateria",
    "contact.instrument.sax": "Saxofone",
    "contact.instrument.other": "Outro",
    "contact.instrument.bass": "Baixo",
    "contact.instrument.ukulele": "Ukulele",

    // Footer
    "footer.tagline":
      "Onde a tradição irlandesa encontra a paixão portuguesa no coração do Porto.",
    "footer.quickLinks": "Links Rápidos",
    "footer.programs": "Programas",
    "footer.programs.private": "Aulas Particulares",
    "footer.programs.group": "Aulas de Grupo",
    "footer.programs.workshops": "Workshops",
    "footer.programs.combo": "Aulas de Combo",
    "footer.programs.openDays": "Dias Abertos",
    "footer.contact": "Contactos",
    "footer.newsletter.title": "Junta-te à Nossa Newsletter",
    "footer.newsletter.placeholder": "O teu endereço de email",
    "footer.copyright":
      "Trevo Music School & Coolectivo. Todos os direitos reservados.",
  },
  en: {
    // Teachers page
    "teachers.title": "The Team",
    "teachers.subtitle": "Meet our team",
    "teachers.instruments": "Instruments",
    "teachers.location": "Location",
    "teachers.luke.name": "Luke Carey",
    "teachers.luke.instruments":
      "Piano, Guitar, Ukulele, Music Production and Theory",
    "teachers.luke.bio":
      "Luke Carey is a multi-instrumentalist and music producer living in Portugal since 2021.",
    "teachers.luke.bio2":
      "Originally from Dublin, Ireland, he began his musical journey at a young age learning piano and guitar at the Royal Irish Academy of Music. He then studied Music and English Literature at Trinity College Dublin, exploring musical theory, composition, and technology. Alongside his academic background, he also developed experience in musical performance participating in several bands and projects, such as Big Sleep, Lü Tysky, Paulo Edson, Ordem de Saturno, and the ZirkusMonde Circus Band in Lisboa. He has played at several music festivals, and even wrote two musicals.",
    "teachers.luke.bio3":
      "On arriving to Portugal, he began giving private lessons full-time to students of all ages, nationalities, and cultures. He is fluent in Portuguese and English.",
    "teachers.luke.location": "Porto",
    "teachers.francisco.name": "Francisco Beirão",
    "teachers.francisco.instruments": "Drums",
    "teachers.francisco.bio":
      "Francisco Beirão (\"El Killo\", 1981, Aveiro, Portugal), music teacher since 2004 in various schools and social intervention institutions, particularly with a long-standing contribution to the educational project 'Qualificar para Incluir'.",
    "teachers.francisco.bio2":
      "Living in Porto since 1999, where he arrived with drumsticks in hand, he divided his time between completing a degree in Sociology, many garages, and music schools in different countries, deepening an umbilical relationship with the drums and learning other languages.",
    "teachers.francisco.bio3":
      "A fervent fan of music in general and rock in particular, he started his professional career in 2005 with Funkyard and in the following years led the rhythm sections of TOURO, Mi Ku Bô, Teia and participated in projects like Retimbrar and Papercutz, as well as others focused on social inclusion within the educational service of Casa da Música, in various community orchestras, etc. Founding member, drummer, and vocalist of 47 de Fevereiro, he also plays with Ghosts of Port Royal and is part of the We Tum Tum team in different shows.",
    "teachers.francisco.location": "Porto",
    "teachers.jorge.name": "Jorge Loura",
    "teachers.jorge.instruments": "Guitar",
    "teachers.jorge.bio":
      "Jorge brings expertise in guitar across multiple genres.",
    "teachers.jorge.location": "Ovar, Ílhavo",
    "teachers.eurico.name": "Bruno Eurico",
    "teachers.eurico.instruments": "Bass",
    "teachers.eurico.bio":
      "He began his music studies at OMA (Oficina de Música de Aveiro) in 2001 in music theory, harmony, and instrument practice (bass guitar) with professors António Ferro and Edamir Costa. Later, he joined the jazz school of Porto, a 3-year course with professors João André and Alberto Jorge. After completing the 3 years, he continued lessons with professor Alberto Jorge, who was his main reference and motivation for developing the instrument.",
    "teachers.eurico.bio2":
      "Member of various musical projects (such as Turn Off, Fadomorse, Souq, Moonshiners, Paul da Silva, Le Bruit, Victor Hugo, Delta Blues, Só Vicente, Coro Etnográfico das Barrocas, among others), with studio sessions and live performances at iconic venues such as Casa da Música, Coliseu do Porto, Aula Magna, and various national and international festivals.",
    "teachers.eurico.bio3":
      "Teacher at the music schools of São Bernardo, musica.com, and Enxame de Letras.",
    "teachers.eurico.location": "Ovar, Ílhavo",
    "teachers.gabriel.name": "Gabriel Simões",
    "teachers.gabriel.instruments": "Saxophone",
    "teachers.gabriel.bio":
      "Gabriel Simões Neves was born on January 1st, 1990 in Amora, municipality of Seixal. In 2010, he joined the Professional Jazz Instrumentalist Course, with the saxophone as his instrument. During this period, he had classes with professors Carl Minnemann, Demian Cabaud (Combo), João Martins, José Pedro Coelho, and Rui Teixeira (saxophone). He attended various work-based training sessions in jazz with musicians such as Voro Garcia, Jesus Santandreu, Toni Belenguer, among others.",
    "teachers.gabriel.bio2":
      "Throughout his career as a saxophonist, he has collaborated in concerts with Azeitonas, Hérman José, Jacinta, João Martins Quartet, José Cid, Rui Veloso, Moonshiners, Siricaia, Vitorino, Orquestra de Jazz do Porto, Hugo Carvalhais, among others. He has performed in several venues and festivals across the country, including Teatro São Luíz, Casa da Música, Teatro Circo, Teatro da Trindade, MEO Sudoeste, and Reverence Valada.",
    "teachers.gabriel.bio3":
      "In 2017, together with musicians Jorge Loura and João Martins, he created the band Troll’s Toy, with which he has released three albums. He is currently also a member of the band Souq.",
    "teachers.gabriel.location": "Porto",
    "teachers.rui.name": "Rui Pedro Martelo",
    "teachers.rui.instruments": "Bass",
    "teachers.rui.bio":
      "Rui Pedro Martelo is a Portuguese musician born on April 29, 1988 in Castelo de Paiva. He entered the world of music in 2004, starting to study electric bass at the Porto Jazz School. Between 2008 and 2011, he attended the course in Music Production and Technologies at the School of Music and Performing Arts in Porto.",
    "teachers.rui.bio2":
      "Since then, he began his career in the music world, having developed work in live sound, music production, and as a double bassist and bassist. He has collaborated live and in studio with bands and artists such as Vespa, Elias, Pterossauros, Mesa, Filipe Pinto, Barrako27, Puro L, among others.",
    "teachers.rui.bio3":
      "He currently plays in the bands CobraFuma, Greengo, Krypto, O Bom O Mau e O Azevedo, Santa Muerte, and Três Tristes Tigres.",
    "teachers.rui.location": "Porto",
    "teachers.loura.name": "Jorge Loura",
    "teachers.loura.instruments": "Guitar",
    "teachers.loura.bio":
      "Jorge Loura is a guitarist, songwriter, and music teacher, with a career since 1994. He is currently part of Souq, 47 de Fevereiro, Troll’s Toy, Taxi, Retimbrar, and Ricardo Azevedo, performing on national and international stages.",
    "teachers.loura.bio2":
      "He has collaborated with Zen, Mesa, Black Company, and Mikkel Solnado, among many others. In 2018, Arte Sonora named him one of the 10 most influential Portuguese guitarists of the decade.",
    "teachers.loura.bio3":
      "He is finishing his Master's degree in Jazz Performance at the University of Aveiro.",
    "teachers.loura.location": "Ovar, Ílhavo",

    // Navigation
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.teachers": "Team",
    "nav.programs": "Programs",
    "nav.methodology": "Methodology",
    "nav.fees": "Fees",
    "nav.contact": "Contacts",
    "nav.events": "Events and Gallery",
    "nav.joinUs": "Join Us",

    // Events
    "events.title": "Events",
    "events.upcoming": "Upcoming Events",
    "events.gallery": "Gallery",
    "events.past": "Past Events",
    "events.moreInfo": "More Info",
    "events.summer.title": "Summer Session",
    "events.summer.desc":
      "Join us for a night of improvisation and musical exploration.",
    "events.showcase.title": "Student Showcase",
    "events.showcase.desc":
      "Our students present their progress in a public performance.",
    "events.workshop.title": "Workshop: Traditional Irish Music",
    "events.workshop.desc":
      "Learn about the traditions and instruments of Irish music.",
    "events.spring.title": "Spring Concert 2024",
    "events.guitar.title": "Guitar Workshop",
    "events.winter.title": "Winter Recital",
    "events.upcoming.session.title": "Open Jam Session",
    "events.upcoming.session.description":
      "Join us for a night of improvisation and musical exploration in a relaxed atmosphere.",
    "events.upcoming.showcase.title": "Student Showcase",
    "events.upcoming.showcase.description":
      "Our students present their progress in a special public performance.",
    "events.upcoming.workshop.title": "Workshop: Traditional Irish Music",
    "events.upcoming.workshop.description":
      "Learn about the unique traditions and instruments of Irish music with Luke Carey.",

    // Home page
    "home.title": "Trevo Coolectivo",
    "home.subtitle":
      "Trevo Coolectivo is a collaborative music teaching network connecting students and teachers from Porto, Ovar, and Ílhavo through shared learning, creativity, and a passion for music.",
    "home.cta.join": "Join the Coolective!",
    "home.cta.explore": "About us",

    // About page
    "about.title": "About Trevo",
    "about.fusion.title": "About the Coolective",
    "about.fusion.p1":
      "Trevo Colectivo was born from a group of musicians who, although having played in various bands and other live projects, were all teaching individually. They felt they could offer more together – and thus, this cooperative teaching network between Porto, Ovar, and Ílhavo was formed.",
    "about.fusion.p2":
      "We combine years of music teaching experience with a shared methodology, offering students more than just lessons: we foster connection among students of various instruments, creativity, sharing, and a true collective spirit.",
    "about.collective.title": "Coolective",
    "about.collective.p1":
      "We believe music education should be accessible and inspiring. That’s why we offer the first class at half price – so anyone can experience the energy of our collective.",
    "about.collective.p2":
      "We aim to inspire our students with passion for music in all its forms, not only through individual or group lessons, but also by encouraging interest in musical discussion and collecting physical music: books about artists and bands, posters, merchandise, and other music-lover memorabilia.",
    "about.card.instrument": "Instruments",
    "about.card.instrument.desc":
      "Helping students master an instrument, both technically and sonically, while also understanding its function within a group and across different musical styles.",
    "about.card.sharing": "Bringing Students Together",
    "about.card.sharing.desc":
      "Group lessons encouraging skills-sharing, reducing the isolation of individual study, and helping students overcome fears and doubts and build confidence in musical performance.",
    "about.card.collective": "Strengthening Collaborations",
    "about.card.collective.desc":
      "Helping students believe in the power of the collective, where individual strengths are amplified and weaknesses are supported by the group.",
    "about.card.creativity": "Fostering Autonomy",
    "about.card.creativity.desc":
      "Encouraging exploration in music technology, ensuring students gain the tools to develop their musical journey independently outside of the classroom.",

    // Programs page
    "programs.title": "Methodology",
    "programs.subtitle":
      "At Trevo Coolectivo, our methodology focuses on fun, collaboration, and personalization, ensuring every student learns in an engaging and tailored way.",
    "programs.methodology.title": "Our Pillars",
    "programs.methodology.customPlan": "Personalized Plan",
    "programs.methodology.customPlan.desc":
      "Each student co-creates their study plan with the teacher, setting goals that can include playing for fun, performing on stage, pursuing a career, or preparing for music curriculum exams (e.g. Rockschool).",
    "programs.methodology.exploration": "Instrument Exploration",
    "programs.methodology.exploration.desc":
      "All students can participate in two yearly lessons with a different instrument (e.g., a guitarist tries drums) to broaden horizons and gain versatility.",
    "programs.methodology.collaborative": "Collaborative Practice",
    "programs.methodology.collaborative.desc":
      "Combo classes bring together students of various instruments to form bands, culminating in recordings of original songs or covers at the end of the year, shared with the community. We also host regular events like open jam sessions where students and local musicians play together.",
    "programs.methodology.discovery": "Musical Discovery",
    "programs.methodology.discovery.desc":
      "We recommend weekly works and musical artists, as well as theory books, music history, and biographies, encouraging physical music collection.",
    "programs.methodology.production": "Production Basics",
    "programs.methodology.production.desc":
      "We teach the basics of recording and editing using tools like GarageBand and Reaper, integrated into combo classes and the music production course.",
    "programs.methodology.monitoring": "Regular Monitoring",
    "programs.methodology.monitoring.desc":
      "We provide quarterly reports with the student’s progress, clear goals, and personalized tips.",

    "programs.disciplines.title": "Subjects and Teaching Staff",
    "programs.disciplines.desc":
      "Our team is made up of experienced musicians with diverse backgrounds, bringing energy and inspiration to the lessons.",

    "programs.locations.title": "Locations",
    "programs.locations.desc":
      "Lessons take place in cozy spaces in Porto – Ovar – Ílhavo , with plans to expand.",
    "programs.locations.porto": "Porto: CC Stop",
    "programs.locations.ilhavo": "Ílhavo: ____",
    "programs.locations.ovar": "Ovar: ____",

    "programs.benefits.title": "Benefits",
    "programs.benefits.individual":
      "One-hour individual classes with make-up lessons for justified absences",
    "programs.benefits.materials":
      "Free materials including sheet music, theory guides, and personalized playlists",
    "programs.benefits.club":
      "Participation in the collectors’ club with regular meetings to trade and discuss physical music, books, and memorabilia",

    "programs.vision.title": "Future Vision",
    "programs.vision.desc":
      "Trevo Coolectivo aspires to be a meeting point for music lovers, uniting creativity, community, and energy.",

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
    "contact.title": "Contacts",
    "contact.subtitle":
      "Get in touch to join the Coolective or to learn more about our programs.",
    "contact.form.title": "Send Us a Message",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.subject": "Subject",
    "contact.form.phone": "Phone Number",
    "contact.form.message": "Comments",
    "contact.form.send": "Send",
    "contact.form.sending": "Sending...",
    "contact.find.title": "Find Us",
    "contact.find.address": "Address",
    "contact.find.email": "Email",
    "contact.find.phone": "Phone",
    "contact.find.hours": "Hours",
    "contact.connect.title": "Connect With Us",
    "contact.form.classtype": "Select the type of class",
    "contact.form.classtypeheader": "Class Type",
    "contact.form.instrumentheader": "Instrument",
    "contact.form.locationheader": "Location",
    "contact.form.instrument": "Select your instrument",
    "contact.form.location": "Select your location",
    "contact.form.age": "Age",
    "contact.form.comments": "Comments",
    "contact.instrument.guitar": "Guitar",
    "contact.instrument.piano": "Piano",
    "contact.instrument.drums": "Drums",
    "contact.instrument.sax": "Saxophone",
    "contact.instrument.bass": "Bass",
    "contact.instrument.ukulele": "Ukulele",
    "contact.instrument.other": "Other",

    // Footer
    "footer.tagline":
      "Where Irish tradition meets Portuguese passion in the heart of Porto.",
    "footer.quickLinks": "Quick Links",
    "footer.programs": "Programs",
    "footer.programs.private": "Private Lessons",
    "footer.programs.group": "Group Classes",
    "footer.programs.workshops": "Workshops",
    "footer.programs.combo": "Combo Classes",
    "footer.programs.openDays": "Open Days",
    "footer.contact": "Contacts",
    "footer.newsletter.title": "Join Our Newsletter",
    "footer.newsletter.placeholder": "Your email address",
    "footer.copyright": "Trevo Music School & Coolectivo. All rights reserved.",
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
