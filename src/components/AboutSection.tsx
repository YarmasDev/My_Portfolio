import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { MapPin, GraduationCap } from "lucide-react";

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-padding max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold font-display mb-10">
          <span className="text-gradient">{t.about.title}</span>
        </h2>

        <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-4xl">
          {t.about.bio}
        </p>

        <div className="flex flex-wrap gap-8 text-base text-muted-foreground">
          <div className="flex items-center gap-3">
            <MapPin size={20} className="text-primary" />
            <span>{t.about.location}</span>
          </div>
          <div className="flex items-center gap-3">
            <GraduationCap size={20} className="text-primary" />
            <span>{t.about.education}</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
