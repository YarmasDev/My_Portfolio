import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base font-mono text-primary mb-4 tracking-widest uppercase"
        >
          {t.hero.greeting}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-6xl sm:text-8xl lg:text-9xl font-bold font-display tracking-tight mb-8"
        >
          <span className="text-gradient">{t.hero.name}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href="#experience"
            className="px-10 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-lg hover:shadow-[var(--shadow-neon-strong)] transition-shadow duration-300"
          >
            {t.hero.cta1}
          </a>
          <a
            href="#contact"
            className="px-10 py-4 rounded-lg neon-border text-primary font-semibold text-lg hover:bg-primary/10 transition-colors duration-300"
          >
            {t.hero.cta2}
          </a>
        </motion.div>
      </div>

    </section>
  );
};

export default HeroSection;
