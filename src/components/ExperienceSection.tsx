import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

const ExperienceSection = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="section-padding max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-bold font-display mb-14"
      >
        <span className="text-gradient">{t.experience.title}</span>
      </motion.h2>

      <div className="relative">
        <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-14">
          {t.experience.items.map((item: any, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative pl-8 md:pl-20"
            >
              <div className="absolute left-0 md:left-8 top-2 w-3 h-3 rounded-full bg-primary shadow-[var(--shadow-neon)] -translate-x-[5px]" />

              <div className="glass rounded-xl p-8 glow-card neon-border">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-2">
                  <h3 className="text-2xl font-bold text-foreground">{item.company}</h3>
                  <span className="text-sm font-mono text-primary">{item.period}</span>
                </div>
                <p className="text-base text-secondary mb-5 font-medium">{item.role}</p>
                <ul className="space-y-4">
                  {item.achievements.map((a: string, i: number) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i + 0.3 }}
                      className="text-base text-muted-foreground leading-relaxed flex gap-3"
                    >
                      <span className="text-primary mt-1 shrink-0">▹</span>
                      <span>{a}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
