import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { fadeIn } from "@/lib/animations";

const TeachersPage = () => {
  const { t } = useLanguage();

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

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teachers.map((teacher, index) => (
          <motion.div
            key={teacher.name}
            variants={fadeIn((index + 1) * 0.1)}
            initial="hidden"
            animate="visible"
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={teacher.image}
              alt={teacher.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-serif font-semibold mb-2">
                {teacher.name}
              </h3>
              <p className="text-[#c66b3e] mb-3">{teacher.instrument}</p>
              <p className="text-[#333333]">{teacher.bio}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TeachersPage;
