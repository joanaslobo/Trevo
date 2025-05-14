
import { motion } from "framer-motion";
import { useThemeColors } from "@/lib/theme-colors";
import { useLanguage } from "@/lib/language-context";
import { Card } from "@/components/ui/card";

const Events = () => {
  const colors = useThemeColors();
  const { t } = useLanguage();

  const upcomingEvents = [
    {
      title: "Summer Jam Session",
      date: "2024-07-15",
      time: "18:00",
      description: "Join us for an evening of improvisation and musical exploration.",
      location: "Trevo Studio - Porto"
    },
    {
      title: "Student Showcase",
      date: "2024-08-20",
      time: "19:30",
      description: "Our students present their progress in a public performance.",
      location: "Cultural Center - Ovar"
    },
    {
      title: "Workshop: Irish Traditional Music",
      date: "2024-09-10",
      time: "15:00",
      description: "Learn about Irish music traditions and instruments.",
      location: "Trevo Studio - Ílhavo"
    }
  ];

  const pastEvents = [
    {
      title: "Spring Concert 2024",
      date: "2024-03-20",
      image: "https://images.unsplash.com/photo-1501612780327-45045538702b?w=800&auto=format"
    },
    {
      title: "Guitar Workshop",
      date: "2024-02-15",
      image: "https://images.unsplash.com/photo-1525201548942-d8732f6617a0?w=800&auto=format"
    },
    {
      title: "Winter Recital",
      date: "2024-01-10",
      image: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=800&auto=format"
    }
  ];

  return (
    <div className="min-h-screen py-24" style={{ background: colors.bgGradientFrom }}>
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-serif text-center mb-12"
          style={{ color: colors.primary }}
        >
          Events at Trevo
        </motion.h1>

        {/* Upcoming Events */}
        <section className="mb-20">
          <h2 className="text-3xl font-serif mb-8" style={{ color: colors.secondary }}>
            Upcoming Events
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6" style={{ backgroundColor: colors.cardBg }}>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: colors.primary }}>
                    {event.title}
                  </h3>
                  <p className="text-sm mb-2" style={{ color: colors.accent }}>
                    {new Date(event.date).toLocaleDateString()} at {event.time}
                  </p>
                  <p className="mb-2" style={{ color: colors.text }}>
                    {event.description}
                  </p>
                  <p className="text-sm" style={{ color: colors.textLight }}>
                    {event.location}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Past Events Gallery */}
        <section>
          <h2 className="text-3xl font-serif mb-8" style={{ color: colors.secondary }}>
            Past Events Gallery
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="aspect-video overflow-hidden rounded-lg">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div>
                      <h3 className="text-white text-xl font-semibold">
                        {event.title}
                      </h3>
                      <p className="text-white text-sm">
                        {new Date(event.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Events;
