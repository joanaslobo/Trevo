
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { fadeIn } from "@/lib/animations";

const TeachersPage = () => {
  const { t } = useLanguage();
  const colors = useThemeColors();

  const teachers = [
    {
      name: "Laura",
      instrument: t("teachers.instrument.strings"),
      bio: t("teachers.bio.laura"),
      image: "https://placehold.co/400x500",
    },
    {
      name: "Chico",
      instrument: t("teachers.instrument.guitar"),
      bio: t("teachers.bio.chico"),
      image: "https://placehold.co/400x500",
    },
    {
      name: "João",
      instrument: t("teachers.instrument.voice"),
      bio: t("teachers.bio.joao"),
      image: "https://placehold.co/400x500",
    },
    {
      name: "Luke",
      instrument: t("teachers.instrument.percussion"),
      bio: t("teachers.bio.luke"),
      image: "https://placehold.co/400x500",
    },
  ];

  const TeacherInfo = ({ teacher }: { teacher: typeof teachers[0] }) => (
    <div className="p-6 flex flex-col justify-center">
      <h3 className="text-2xl font-serif font-semibold mb-2" style={{ color: colors.primary }}>
        {teacher.name}
      </h3>
      <p className="mb-3" style={{ color: colors.secondary }}>{teacher.instrument}</p>
      <p style={{ color: colors.text }}>{teacher.bio}</p>
    </div>
  );

  const TeacherImage = ({ teacher }: { teacher: typeof teachers[0] }) => (
    <img
      src={teacher.image}
      alt={teacher.name}
      className="w-full h-[400px] object-cover"
    />
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1
        className="text-4xl md:text-5xl font-serif text-center mb-12"
        variants={fadeIn(0.2)}
        initial="hidden"
        animate="visible"
      >
        {t("teachers.title")}
      </motion.h1>

      <div className="space-y-8">
        {teachers.map((teacher, index) => (
          <motion.div
            key={teacher.name}
            variants={fadeIn((index + 1) * 0.1)}
            initial="hidden"
            animate="visible"
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-6">
              {index % 2 === 0 ? (
                <>
                  <TeacherInfo teacher={teacher} />
                  <TeacherImage teacher={teacher} />
                </>
              ) : (
                <>
                  <TeacherImage teacher={teacher} />
                  <TeacherInfo teacher={teacher} />
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
