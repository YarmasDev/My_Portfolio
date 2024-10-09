import styled from 'styled-components';
import { motion } from 'framer-motion';
import { RiUserVoiceLine } from "react-icons/ri";
import { GiClothes } from "react-icons/gi";
import { MdGTranslate } from "react-icons/md";
import { TbPhotoAi } from "react-icons/tb";
import { GiFamilyHouse } from "react-icons/gi";
import { RiRobot3Line } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { SiTensorflow } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { SiStreamlit } from "react-icons/si";

export const Container = styled.div`
  background: linear-gradient(120deg, #0b0b2b, #002);
  color: #FFFFFF;
  font-family: 'Poppins', sans-serif;
`;

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #FF5757, #FFAE00);
  color: #FFFFFF;
  text-align: center;
  h1 {
    font-size: 5rem;
    font-weight: 800;
  }
  p {
    font-size: 2rem;
    margin: 20px 0;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgba(0, 37, 118, 0.2);
  padding: 10px 0;
  z-index: 1000;
`;

export const NavLink = styled(motion.a)`
  color: #FFFFFF;
  font-size: 1.2rem;
  margin: 0 15px;
  padding: 8px 15px;
  border-radius: 20px;
  transition: background-color 0.3s;
  text-decoration: none;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: scale(1.05);
  }
`;

export const IconLink = styled(motion.a)`
  color: #FFFFFF;
  font-size: 2rem;
  margin-left: 15px;
  transition: color 0.3s;
  &:hover {
    color: #FFAE00;
    transform: scale(1.05);
  }
`;

export const Section = styled.section`
  padding: 80px 20px;
  text-align: center;
  background-color: ${props => props.bg || 'transparent'};
`;

export const Title = styled(motion.h2)`
  font-size: 4rem;
  color: #FFAE00;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  color: #FFFFFF;
`;

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 40px; /* This reduces the space between the elements */
  padding: 0 2rem; /* Adds padding to the sides to prevent elements from being too close to the edges of the screen */
  max-width: 1200px; /* Limits the maximum width of the section */
  margin: 0 auto; /* Centers the section on the page */
`;

export const ProjectCard = styled(motion.div)`
  background: linear-gradient(0deg, #FF5757, #FFAE00); /* Project background */
  padding: 15px;
  border-radius: 10px;
  transition: transform 0.3s ease; /* Adds a smooth animation on hover */
`;

export const ProjectLink = styled.a`
  display: flex;
  justify-content: space-between; /* Spaces elements to the sides */
  align-items: center; /* Vertically centers the elements */
  text-decoration: none;
  color: inherit;
`;

export const VoiceIcon = styled(RiUserVoiceLine)`
  font-size: 12rem; /* Or the size you prefer */
  color: white;
  margin: 0 1rem;
  margin-bottom: 1.6rem;
  min-width: 100px;
`;

export const ClothesIcon = styled(GiClothes)`
  font-size: 12rem; /* Or the size you prefer */
  color: white;
  margin: 0 1rem;
  margin-bottom: 1.6rem;
  min-width: 100px;
`;

export const TranslateIcon = styled(MdGTranslate)`
  font-size: 12rem; /* Or the size you prefer */
  color: white;
  margin: 0 1rem;
  margin-bottom: 1.6rem;
  min-width: 100px;
`;

export const ImageIcon = styled(TbPhotoAi)`
  font-size: 12rem; /* Or the size you prefer */
  color: white;
  margin: 0 1rem;
  margin-bottom: 1.6rem;
  min-width: 100px;
`;

export const HouseIcon = styled(GiFamilyHouse)`
  font-size: 12rem; /* Or the size you prefer */
  color: white;
  margin: 0 1rem;
  margin-bottom: 1.6rem;
  min-width: 100px;
`;

export const ChatbotIcon = styled(RiRobot3Line)`
  font-size: 12rem; /* Or the size you prefer */
  color: white;
  margin: 0 1rem;
  margin-bottom: 1.6rem;
  min-width: 100px;
`;

export const ProjectTitle = styled.h3`
  font-size: 1.6rem; /* Increase the size to your preference */
  font-weight: bold; /* Increase the font weight if necessary */
  margin: 5px; /* Remove margin if not desired */
  text-align: center;
`;

// Styles for the project description
export const ProjectDescription = styled.p`
  font-size: 1.1rem; /* Increase the size to your preference */
  margin: 10px 10px; /* Spacing around the text */
  text-align: start;
  line-height: 1.5; /* Adjust line spacing if necessary */
  margin-bottom: 15px;
`;

export const TechList = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 10px;
  margin: 10px 10px;
  flex-wrap: wrap;
`;

export const TechBadge = styled.div`
  padding: 5px 10px;
  background-color: #FFAE00;
  color: white;
  border-radius: 5px;
  font-size: 0.9rem;
`;

export const SkillsGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: auto;
`;

export const SkillBadge = styled(motion.div)`
  display: flex;  /* Aligns the icon and text in a line */
  align-items: center;  /* Vertically centers the content */
  padding: 25px 30px;  /* Adjusts padding for a balanced look */
  background: #FFAE00;
  color: white;
  border-radius: 50px;
  font-size: 1.8rem;
  transition: transform 0.3s;
  &:hover {
    background: #FFAE00;
    transform: scale(1.1);
  }
`;

export const PythonIcon = styled(FaPython)`
  font-size: 3rem;  /* Adjusts icon size */
  margin-left: 10px;  /* Adds space between the icon and text */
  color: white;
`;

export const TensorFlowIcon = styled(SiTensorflow)`
  font-size: 3rem;  /* Adjusts icon size */
  margin-left: 10px;  /* Adds space between the icon and text */
  color: white;
`;

export const ReactIcon = styled(FaReact)`
  font-size: 3rem;  /* Adjusts icon size */
  margin-left: 10px;  /* Adds space between the icon and text */
  color: white;
`;

export const JavaScriptIcon = styled(SiJavascript)`
  font-size: 3rem;  /* Adjusts icon size */
  margin-left: 10px;  /* Adds space between the icon and text */
  color: white;
`;

export const HtmlIcon = styled(FaHtml5)`
  font-size: 3rem;  /* Adjusts icon size */
  margin-left: 10px;  /* Adds space between the icon and text */
  color: white;
`;

export const CssIcon = styled(SiCss3)`
  font-size: 3rem;  /* Adjusts icon size */
  margin-left: 10px;  /* Adds space between the icon and text */
  color: white;
`;

export const NodeJsIcon = styled(DiNodejs)`
  font-size: 3rem;  /* Adjusts icon size */
  margin-left: 10px;  /* Adds space between the icon and text */
  color: white;
`;

export const StreamlitIcon = styled(SiStreamlit)`
  font-size: 3rem;  /* Adjusts icon size */
  margin-left: 10px;  /* Adds space between the icon and text */
  color: white;
`;


export const ContactForm = styled.form`
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 10rem;

`;

export const SubmitButton = styled(motion.button)`
  background-color: #FF5757;
  color: white;
  border: none;
  padding: 30px 60px;
  border-radius: 50px;
  font-size: 2rem;
  &:hover {
    background-color: #FFAE00;
  }
    background: linear-gradient(90deg, #FF5757, #FFAE00)
`;

export const Footer = styled.footer`
  padding: 20px 0;
  text-align: center;
  background: rgb(255,255,255, 0.1);
  font-size: 0.9rem;
`;
