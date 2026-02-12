import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Copy, Check, ExternalLink } from "lucide-react"; // Cambiamos MapPin por Linkedin y ExternalLink

const ContactSection = () => {
  const { t } = useLanguage();
  const [copiedEmail, setCopiedEmail] = useState(false); 
  const [copiedPhone, setCopiedPhone] = useState(false); 

  const copyEmail = () => {
    navigator.clipboard.writeText(t.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhoneNumber = () => {
    navigator.clipboard.writeText(t.contact.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const cards = [
    {
      icon: <Mail size={28} />,
      label: t.contact.emailLabel,
      value: t.contact.email,
      action: copyEmail,
      actionLabel: copiedEmail ? t.contact.copySuccess : t.contact.cta,
      actionIcon: copiedEmail ? <Check size={14} /> : <Copy size={14} />,
    },
    {
      icon: <Phone size={28} />,
      label: t.contact.phoneLabel,
      value: t.contact.phone,
      href: `tel:+51950639822`,
      action: copyPhoneNumber,
      actionLabel: copiedPhone ? t.contact.copySuccessPhone : t.contact.ctaPhone,
      actionIcon: copiedPhone ? <Check size={14} /> : <Copy size={14} />,
    },
    {
      icon: <Linkedin size={28} />, // Icono de LinkedIn
      label: t.contact.locationLabel,
      value: t.contact.location,
      href: "https://www.linkedin.com/in/nickolas-antonio-yarmas-guevara-9b48302b6", // Tu perfil
      isExternal: true, // Nueva propiedad para identificar links externos
      actionLabel: t.contact.ctalinkedin,
      actionIcon: <ExternalLink size={14} />,
    },
  ];

  return (
    <section id="contact" className="section-padding max-w-6xl mx-auto py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl sm:text-5xl font-bold font-display mb-4">
          <span className="text-gradient">{t.contact.title}</span>
        </h2>
        <p className="text-lg text-muted-foreground">{t.contact.subtitle}</p>
      </motion.div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: idx * 0.12 }}
            className="glass rounded-xl p-8 glow-card neon-border flex flex-col items-center text-center gap-4"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
              {card.icon}
            </div>
            <h3 className="text-xl font-bold text-foreground">{card.label}</h3>
            
            {card.href ? (
              <a 
                href={card.href} 
                target={card.isExternal ? "_blank" : undefined} 
                rel={card.isExternal ? "noopener noreferrer" : undefined}
                className="text-muted-foreground hover:text-primary transition-colors break-all"
              >
                {card.value}
              </a>
            ) : (
              <p className="text-muted-foreground break-all">{card.value}</p>
            )}

            {/* Renderizado de botón para acciones o enlaces externos */}
            {card.action ? (
              <button
                onClick={card.action}
                className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:shadow-[var(--shadow-neon-strong)] transition-all duration-300"
              >
                {card.actionIcon}
                {card.actionLabel}
              </button>
            ) : card.isExternal ? (
              <a
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:shadow-[var(--shadow-neon-strong)] transition-all duration-300"
              >
                {card.actionIcon}
                {card.actionLabel}
              </a>
            ) : null}
          </motion.div>
        ))}
      </div>

      <div className="mt-24 pt-8 border-t border-border text-xs text-muted-foreground font-mono text-center">
        © {new Date().getFullYear()} Nickolas Yarmas. All rights reserved.
      </div>
    </section>
  );
};

export default ContactSection;