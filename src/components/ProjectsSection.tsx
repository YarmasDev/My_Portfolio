import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const ProjectsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="section-padding max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-bold font-display mb-14"
      >
        <span className="text-gradient">{t.projects.title}</span>
      </motion.h2>

      <div className="grid gap-8 md:grid-cols-3">
        {t.projects.items.map((project: any, idx: number) => (
          <motion.a
            key={idx}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: idx * 0.12 }}
            className="group glass rounded-xl p-8 glow-card neon-border flex flex-col relative overflow-hidden cursor-pointer"
          >
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10 flex flex-col flex-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-primary animate-glow-pulse" />
                <h3 className="text-lg font-bold text-foreground leading-tight">{project.name}</h3>
              </div>

              <p className="text-muted-foreground mb-6 flex-1 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t: string) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ExternalLink size={16} />
                {(t as any).projects?.viewProject ?? "View Project"}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
