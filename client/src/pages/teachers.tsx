import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { fadeIn } from "@/lib/animations";
import { useThemeColors } from "@/lib/theme-colors";

const TeachersPage = () => {
  const { t } = useLanguage();
  const colors = useThemeColors();

  // Updated subjects data structure with descriptions
  const subjects = [
    {
      name: "Bass",
      teachers: ["Bruno Eurico"],
      assistants: ["Luke Carey", "Jorge Loura"],
      description: "Learn the fundamentals and techniques of playing bass guitar, focusing on rhythm and groove.",
    },
    {
      name: "Drums",
      teachers: ["Francisco Beirão"],
      assistants: ["João Martins"],
      description: "Develop your drumming skills and learn different percussion styles, focusing on coordination and timing.",
    },
    {
      name: "Guitar",
      teachers: ["Jorge Loura"],
      assistants: ["Luke Carey"],
      description: "Master the guitar with lessons on technique, theory, and performance.",
    },
    {
      name: "Piano",
      teachers: ["Luke Carey"],
      assistants: ["Joana Castro", "Dalila Teixeira"],
      description: "Learn to play the piano, focusing on music theory, chords, and keyboard technique.",
    },
    {
      name: "Saxophone",
      teachers: ["João Guimarães", "Gabriel Neves"],
      assistants: [],
      description: "Play the saxophone with a focus on both classical and jazz techniques.",
    },
    {
      name: "Ukulele",
      teachers: ["Luke Carey"],
      assistants: [],
      description: "Learn to play the ukulele with lessons on chord progressions and rhythm patterns.",
    },
    {
      name: "Vocals",
      teachers: ["Joana Castro"],
      assistants: ["Dalila Teixeira"],
      description: "Improve your vocal technique, pitch, and performance skills for any style of music.",
    },
    {
      name: "Combo",
      teachers: ["Luke Carey", "Jorge Loura", "Bruno Eurico", "Francisco Beirão"],
      assistants: [],
      description: "Play in a group setting, developing ensemble playing skills and music communication.",
    },
    {
      name: "Musical Entertainment",
      teachers: ["Joana Castro"],
      assistants: ["Dalila Teixeira"],
      description: "Explore different music genres and entertainment concepts, focusing on stage presence and performance.",
    },
    {
      name: "Music Production",
      teachers: ["Luke Carey", "Rui Ferreira"],
      assistants: [],
      description: "Learn how to produce music using industry-standard software, focusing on mixing, editing, and mastering.",
    },
    {
      name: "Exam preparation (e.g. Rockschool)",
      teachers: ["Available for all subjects"],
      assistants: ["Personalized support"],
      description: "Prepare for your music exams with personalized lessons tailored to your exam board and grade level.",
    },
  ];

  const SubjectInfo = ({ subject }: { subject: typeof subjects[0] }) => (
    <div className="p-6 flex flex-col justify-center">
      <h3
        className="text-2xl font-serif font-semibold mb-2"
        style={{ color: colors.primary }}
      >
        {subject.name}
      </h3>
      <p className="mb-3" style={{ color: colors.secondary }}>
        Teachers: {subject.teachers.join(", ")}
      </p>
      {subject.assistants.length > 0 && (
        <p style={{ color: colors.text }}>
          Assistants: {subject.assistants.join(", ")}
        </p>
      )}
      <p className="mt-4" style={{ color: colors.text }}>
        {subject.description}
      </p>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-12">
    <div className="h-24"></div>
      <motion.h1
        className="text-4xl md:text-5xl font-serif text-center mb-12"
        variants={fadeIn(0.2)}
        initial="hidden"
        animate="visible"
      >
        {t("teachers.title")}
      </motion.h1>

      <div className="space-y-8">
        {subjects.map((subject, index) => (
          <motion.div
            key={subject.name}
            variants={fadeIn((index + 1) * 0.1)}
            initial="hidden"
            animate="visible"
            className="rounded-lg shadow-lg overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-6">
              {index % 2 === 0 ? (
                <>
                  <SubjectInfo subject={subject} />
                  <div className="w-full h-[400px] object-cover bg-gray-200"></div> {/* Placeholder for images */}
                </>
              ) : (
                <>
                  <div className="w-full h-[400px] object-cover bg-gray-200"></div> {/* Placeholder for images */}
                  <SubjectInfo subject={subject} />
                </>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TeachersPage;
