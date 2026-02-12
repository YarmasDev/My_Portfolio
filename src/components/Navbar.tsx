import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";

const navLinks = ["about", "experience", "projects", "skills", "contact"];

const Navbar = () => {
  const { lang, t, toggle } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass-strong"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="text-xl font-bold text-gradient font-display">
          NY.
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((key) => (
            <a
              key={key}
              href={`#${key}`}
              className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              {t.nav[key]}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={toggle}
            className="px-3 py-1.5 rounded-md text-xs font-mono font-semibold neon-border text-primary hover:bg-primary/10 transition-colors"
            aria-label="Toggle language"
          >
            {lang === "en" ? "ES" : "EN"}
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-strong border-t border-border"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((key) => (
                <a
                  key={key}
                  href={`#${key}`}
                  onClick={() => setOpen(false)}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t.nav[key]}
                </a>
              ))}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => { toggleTheme(); setOpen(false); }}
                  className="p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                </button>
                <button
                  onClick={() => { toggle(); setOpen(false); }}
                  className="px-3 py-1.5 rounded-md text-xs font-mono font-semibold neon-border text-primary"
                >
                  {lang === "en" ? "ES" : "EN"}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
