import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

const categoryIcons: Record<string, string> = {
  "AI & Automation": "🤖",
  "IA & Automatización": "🤖",
  "Backend": "⚙️",
  "Frontend": "🎨",
  "Tools & DB": "🔧",
  "Herramientas & BD": "🔧",
};

const SkillsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="section-padding max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-bold font-display mb-14"
      >
        <span className="text-gradient">{t.skills.title}</span>
      </motion.h2>

      <div className="grid gap-8 sm:grid-cols-2">
        {t.skills.categories.map((cat: any, idx: number) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="glass rounded-xl p-8 glow-card neon-border"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="text-2xl">{categoryIcons[cat.name] || "💡"}</span>
              <h3 className="text-lg font-bold text-foreground">{cat.name}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((skill: string, i: number) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * i + 0.2 }}
                  className="text-sm font-mono px-3 py-1.5 rounded-md bg-muted text-muted-foreground border border-border hover:border-primary/40 hover:text-primary transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
