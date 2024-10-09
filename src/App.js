import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { ClothesIcon, VoiceIcon, TranslateIcon,ImageIcon, HouseIcon, ChatbotIcon, PythonIcon, TensorFlowIcon, StreamlitIcon, JavaScriptIcon, ReactIcon, NodeJsIcon, HtmlIcon, CssIcon   } from './styled';


import {
  Container,
  HeroSection,
  Nav,
  NavLink,
  IconLink,
  Section,
  Title,
  Description,
  ProjectGrid,
  ProjectCard,
  ProjectLink,
  SkillsGrid,
  SkillBadge,
  ContactForm,
  SubmitButton,
  Footer,
  TechList,
  TechBadge,
  ProjectTitle,
  ProjectDescription
} from './styled';

const App = () => {
  return (
    <Container>
      {/* Hero Section */}
      <HeroSection>
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Nickolas Yarmas
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: -30 }}
          transition={{ duration: 1.2 }}
        >
          Systems Engineer & AI Developer
        </motion.p>
      </HeroSection>

      {/* Navigation */}
      <Nav>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#skills">Skills</NavLink>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#contact">Contact</NavLink>
        <IconLink href="https://github.com/YarmasDev" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </IconLink>
        <IconLink href="https://www.linkedin.com/in/nickolas-antonio-yarmas-guevara-9b48302b6/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </IconLink>
      </Nav>

      {/* Projects Section */}
      <Section id="projects">
        <Title>Projects</Title>
        <ProjectGrid>
        <ProjectCard whileHover={{ scale: 1.05 }}>
  <ProjectLink href="https://github.com/YarmasDev/Customizable-chatbot" target="_blank" rel="noopener noreferrer">
    <div>
      <ProjectTitle>Customizable Chatbot</ProjectTitle>
      <ProjectDescription>
        Built with the Groq API and the Llama 3 language model. Users can define the bot's personality and response style.
      </ProjectDescription>
      <TechList>
        <TechBadge>Python</TechBadge>
        <TechBadge>Groq</TechBadge>
        <TechBadge>Llama 3</TechBadge>
        <TechBadge>Streamlit</TechBadge>
      </TechList>
    </div>
    <ChatbotIcon />
  </ProjectLink>
</ProjectCard>

<ProjectCard whileHover={{ scale: 1.05 }}>
  <ProjectLink href="https://github.com/YarmasDev/Clothing-Classifier" target="_blank" rel="noopener noreferrer">
    <div>
      <ProjectTitle>Clothing Classifier</ProjectTitle>
      <ProjectDescription>
        Built with TensorFlow and Keras, this Clothing Classifier uses a convolutional neural network to accurately predict clothing types from images.
      </ProjectDescription>
      <TechList>
        <TechBadge>TensorFlow</TechBadge>
        <TechBadge>Keras</TechBadge>
        <TechBadge>Python</TechBadge>
        <TechBadge>Matplotlib</TechBadge>
      </TechList>
    </div>
    <ClothesIcon /> 
  </ProjectLink>
</ProjectCard>


  <ProjectCard whileHover={{ scale: 1.05 }}>
    <ProjectLink href="https://github.com/YarmasDev/Text-to-Speech" target="_blank" rel="noopener noreferrer">
      <div>
        <ProjectTitle>Text to Speech</ProjectTitle>
        <ProjectDescription>
          Uses the PlayHT API and Streamlit. Users can input text and select a voice with a specific accent to convert their text into audio.
        </ProjectDescription>
        <TechList>
          <TechBadge>Streamlit</TechBadge>
          <TechBadge>PlayHT</TechBadge>
          <TechBadge>Python</TechBadge>
        </TechList>
      </div>
      <VoiceIcon/> 
    </ProjectLink>
  </ProjectCard>

  <ProjectCard whileHover={{ scale: 1.05 }}>
    <ProjectLink href="https://github.com/YarmasDev/Audio_to_text" target="_blank" rel="noopener noreferrer">
      <div>
        <ProjectTitle>Audio Transcription and Translation</ProjectTitle>
        <ProjectDescription>
          Uses the Groq API, the Whisper model, and Streamlit. Users can upload audio files or record their voice to be transcribed and translated.
        </ProjectDescription>
        <TechList>
          <TechBadge>Streamlit-mic-recorder</TechBadge>
          <TechBadge>Python</TechBadge>
          <TechBadge>whisper-large-v3</TechBadge>
        </TechList>
      </div>
      <TranslateIcon />
    </ProjectLink>
  </ProjectCard>

  <ProjectCard whileHover={{ scale: 1.05 }}>
    <ProjectLink href="https://github.com/YarmasDev/Denoising_images" target="_blank" rel="noopener noreferrer">
      <div>
        <ProjectTitle>Denoising Images</ProjectTitle>
        <ProjectDescription>
          Built with TensorFlow and Keras to implement an autoencoder for denoising images. Users can add noise to images and see how the autoencoder restores them.
        </ProjectDescription>
        <TechList>
          <TechBadge>TensorFlow</TechBadge>
          <TechBadge>NumPy</TechBadge>
          <TechBadge>Python</TechBadge>
          <TechBadge>Matplotlib</TechBadge>
        </TechList>
      </div>
      <ImageIcon />
    </ProjectLink>
  </ProjectCard>

  <ProjectCard whileHover={{ scale: 1.05 }}>
    <ProjectLink href="https://github.com/YarmasDev/Property-Estimator" target="_blank" rel="noopener noreferrer">
      <div>
        <ProjectTitle>Property Estimator</ProjectTitle>
        <ProjectDescription>
          Built with TensorFlow and Python, this app predicts property prices based on various features like square footage, bedrooms, bathrooms, etc.
        </ProjectDescription>
        <TechList>
          <TechBadge>TensorFlow</TechBadge>
          <TechBadge>Pandas</TechBadge>
          <TechBadge>Python</TechBadge>
          <TechBadge>NumPy</TechBadge>
          <TechBadge>Seaborn</TechBadge>
          <TechBadge>Scikit-learn</TechBadge>
        </TechList>
      </div>
      <HouseIcon />
    </ProjectLink>
  </ProjectCard>
</ProjectGrid>

      </Section>

      {/* Skills Section */}
      <Section id="skills">
        <Title>Skills</Title>
        <SkillsGrid>
          <SkillBadge>Python
          <PythonIcon />
          </SkillBadge>

          <SkillBadge>TensorFlow
            <TensorFlowIcon/>
          </SkillBadge>

          <SkillBadge>Streamlit
            <StreamlitIcon/>
          </SkillBadge>

          <SkillBadge>React
            <ReactIcon/>
          </SkillBadge>

          <SkillBadge>JavaScript
            <JavaScriptIcon/>
          </SkillBadge>

          <SkillBadge>Node.js
            <NodeJsIcon/>
          </SkillBadge>

          <SkillBadge>HTML5
            <HtmlIcon/>
          </SkillBadge>

          <SkillBadge>CSS3
            <CssIcon/>
          </SkillBadge>

        </SkillsGrid>
      </Section>



      {/* Contact Section */}
      <Section id="contact">
        <Title>Contact</Title>
        <ContactForm>
        <SubmitButton
  whileHover={{ scale: 1.1 }}
  onClick={() => window.location.href = 'mailto:nickolasyarmas@gmail.com'}
>
Send Your Message    </SubmitButton>
  </ContactForm>
      </Section>

      <Footer>&copy; {new Date().getFullYear()} Nickolas Yarmas. All rights reserved.</Footer>
    </Container>
  );
};

export default App;
