export type Language = "en" | "es";

export const translations: Record<Language, Record<string, any>> = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello, I'm",
      name: "Nickolas Yarmas",
      subtitle: "Architecting Intelligent Agents & Scalable Systems",
      cta1: "View Experience",
      cta2: "Contact Me",
    },
    about: {
      title: "About Me",
      bio: "AI & Full Stack Developer specializing in building autonomous agents and RAG architectures. Proven experience integrating generative models (GPT-4o, Flux, Veo) and orchestrating workflows (n8n) in production SaaS environments. Passionate about intelligent automation and scalable software development using NestJS and React.",
      location: "Ica, Peru — Open to Remote",
      education: "Systems Engineering — San Luis Gonzaga University",
    },
    experience: {
      title: "Experience",
      items: [
        {
          company: "Promolider",
          role: "AI & Full Stack Developer",
          period: "Nov 2025 — Feb 2026",
          achievements: [
            "Reengineered the Educational Virtual Assistant using RAG (Pinecone + GPT-4o), achieving 100% accuracy on corporate data. Includes dynamic PDF generation and chat history management.",
            'Designed an "AI Media Pipeline" with n8n orchestrating autonomous video (Veo), image (Flux), and audio (ElevenLabs) generation, reducing creative production time by 70%.',
            'Developed "Sponsored Brands" modules for JungleClick SaaS (External Client), optimizing mass Amazon Ads campaign creation.',
          ],
        },
        {
          company: "OpenMed",
          role: "Intern Full Stack Developer",
          period: "Apr 2025 — Jun 2025",
          achievements: [
            "Improved commercial team efficiency by 40% via dynamic React/TypeScript forms for the sales portal.",
            "Documented NestJS endpoints using Swagger for complete API understanding.",
            "Fixed 5+ critical bugs in frontend and backend that affected platform stability.",
            "Version control management with Git/GitHub using branching flows (feature/release).",
          ],
        },
      ],
    },
    projects: {
      title: "Featured Projects",
      viewProject: "View Project",
      items: [
        {
          name: "High-Performance Conversational Agent using Llama 3 & Groq",
          tech: ["Python", "Groq", "Llama 3", "Streamlit"],
          description: "Developed a fully customizable chatbot using Groq API and Llama 3, allowing for personality definition. Optimized for real-time latency and context retention using RAG principles. Integrated with Streamlit for the interface.",
          link: "https://github.com/YarmasDev/Customizable-chatbot",
        },
        {
          name: "Real-Time Multilingual Audio Intelligence System",
          tech: ["Streamlit", "Python", "Whisper-large-v3", "Groq"],
          description: "Implemented a real-time audio transcription and translation engine using Whisper-large-v3 and Groq. Achieved a 30% reduction in processing time for immediate multilingual support.",
          link: "https://github.com/YarmasDev/Audio_to_text",
        },
        {
          name: "Deep Learning Image Restoration utilizing Autoencoders",
          tech: ["TensorFlow", "Keras", "Python", "OpenCV"],
          description: "Developed a convolutional autoencoder to denoise images via supervised learning. Applied advanced regularization and hyperparameter tuning to prevent overfitting, demonstrating deep understanding of matrix-level pixel manipulation.",
          link: "https://github.com/YarmasDev/Denoising_images",
        },
      ],
    },
    skills: {
      title: "Technical Arsenal",
      categories: [
        {
          name: "AI & Automation",
          items: ["OpenAI API", "RAG", "Pinecone", "LangChain", "n8n", "Replicate", "ElevenLabs", "Prompt Engineering"],
        },
        {
          name: "Backend",
          items: ["NestJS", "Node.js", "Python", "TypeScript", "Swagger"],
        },
        {
          name: "Frontend",
          items: ["React", "Vue 3", "Tailwind CSS", "HTML5/CSS3"],
        },
        {
          name: "Tools & DB",
          items: ["Git/GitHub", "Docker", "MySQL", "Webhooks"],
        },
      ],
    },
    contact: {
      title: "Get in Touch",
      subtitle: "Have a project in mind? Let's connect.",
      email: "nickolasyarmas@gmail.com",
      phone: "+51 950 639 822",
      location: "View more on LinkedIn!",
      copySuccess: "Email copied!",
      copySuccessPhone: "Number copied!", 
      ctaPhone: "Copy Number",
      cta: "Copy Email",
      emailLabel: "Email",
      phoneLabel: "Phone",
      locationLabel: "LinkedIn",
      ctalinkedin: "View LinkedIn Profile",
    },
  },
  es: {
    nav: {
      about: "Sobre Mí",
      experience: "Experiencia",
      projects: "Proyectos",
      skills: "Habilidades",
      contact: "Contacto",
    },
    hero: {
      greeting: "Hola, soy",
      name: "Nickolas Yarmas",
      subtitle: "Arquitecto de Agentes Inteligentes y Sistemas Escalables",
      cta1: "Ver Proyectos",
      cta2: "Contáctame",
    },
    about: {
      title: "Sobre Mí",
      bio: "Desarrollador AI & Full Stack especializado en la creación de agentes autónomos y arquitecturas RAG. Experiencia probada integrando modelos generativos (GPT-4o, Flux, Veo) y orquestación de flujos (n8n) en entornos de producción SaaS. Apasionado por la automatización inteligente y el desarrollo de software escalable con NestJS y React.",
      location: "Ica, Perú — Disponible para Remoto",
      education: "Ingeniería de Sistemas — Universidad San Luis Gonzaga",
    },
    experience: {
      title: "Experiencia",
      items: [
        {
          company: "Promolider",
          role: "Desarrollador AI & Full Stack",
          period: "Nov 2025 — Feb 2026",
          achievements: [
            "Reingeniería total del Asistente Virtual Educativo implementando RAG (Pinecone + GPT-4o), logrando 100% de precisión en datos corporativos. Incluye generación dinámica de PDF y gestión de historial.",
            'Diseñé un "AI Media Pipeline" con n8n orquestando generación autónoma de video (Veo), imagen (Flux) y audio (ElevenLabs), reduciendo el tiempo de producción creativa un 70%.',
            'Desarrollé módulos "Sponsored Brands" para JungleClick SaaS (Cliente Externo), optimizando la creación masiva de campañas en Amazon Ads.',
          ],
        },
        {
          company: "OpenMed",
          role: "Practicante Full Stack",
          period: "Abr 2025 — Jun 2025",
          achievements: [
            "Mejoré la eficiencia del equipo comercial un 40% mediante formularios dinámicos en React/TypeScript.",
            "Documenté endpoints de NestJS usando Swagger para comprensión completa de la API.",
            "Corregí 5+ bugs críticos en frontend y backend que afectaban la estabilidad de la plataforma.",
          ],
        },
      ],
    },
    projects: {
      title: "Proyectos Destacados",
      viewProject: "Ver Proyecto",
      items: [
        {
          name: "Agente Conversacional de Alto Rendimiento con Llama 3 & Groq",
          tech: ["Python", "Groq", "Llama 3", "Streamlit"],
          description: "Desarrollé un chatbot completamente personalizable usando Groq API y Llama 3, permitiendo definición de personalidad. Optimizado para latencia en tiempo real y retención de contexto usando principios RAG. Integrado con Streamlit.",
          link: "https://github.com/YarmasDev/Customizable-chatbot",
        },
        {
          name: "Sistema de Inteligencia de Audio Multilingüe en Tiempo Real",
          tech: ["Streamlit", "Python", "Whisper-large-v3", "Groq"],
          description: "Implementé un motor de transcripción y traducción de audio en tiempo real usando Whisper-large-v3 y Groq. Logré una reducción del 30% en tiempo de procesamiento para soporte multilingüe inmediato.",
          link: "https://github.com/YarmasDev/Audio_to_text",
        },
        {
          name: "Restauración de Imágenes con Deep Learning usando Autoencoders",
          tech: ["TensorFlow", "Keras", "Python", "OpenCV"],
          description: "Desarrollé un autoencoder convolucional para eliminar ruido de imágenes mediante aprendizaje supervisado. Apliqué regularización avanzada y ajuste de hiperparámetros para prevenir sobreajuste.",
          link: "https://github.com/YarmasDev/Denoising_images",
        },
      ],
    },
    skills: {
      title: "Arsenal Técnico",
      categories: [
        {
          name: "IA & Automatización",
          items: ["OpenAI API", "RAG", "Pinecone", "LangChain", "n8n", "Replicate", "ElevenLabs", "Prompt Engineering"],
        },
        {
          name: "Backend",
          items: ["NestJS", "Node.js", "Python", "TypeScript", "Swagger"],
        },
        {
          name: "Frontend",
          items: ["React", "Vue 3", "Tailwind CSS", "HTML5/CSS3"],
        },
        {
          name: "Herramientas & BD",
          items: ["Git/GitHub", "Docker", "MySQL", "Webhooks"],
        },
      ],
    },
    contact: {
      title: "Contáctame",
      subtitle: "¿Tienes un proyecto en mente? Conectemos.",
      email: "nickolasyarmas@gmail.com",
      phone: "+51 950 639 822",
      location: "Ve más en LinkedIn!",
      copySuccess: "¡Email copiado!",
      cta: "Copiar Email",
      copySuccessPhone: "¡Número copiado!",
      ctaPhone: "Copiar Número",
      emailLabel: "Email",
      phoneLabel: "Teléfono",
      locationLabel: "LinkedIn",
      ctalinkedin: "Ver Perfil de LinkedIn"
    },
  },
};
