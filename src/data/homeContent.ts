import { LuFolderOpen, LuHouse, LuMail, LuUserRound } from 'react-icons/lu'
import viteLogo from '../assets/vite.svg'
import heroImage from '../assets/heroImage.jpg'
import contactImage from '../assets/contactImage.jpg'
import projectsImage from '../assets/projectsImage.png'
import aboutImage from '../assets/aboutMe.jpg'

export const sectionPlaceholderImage = viteLogo
export const heroSectionImage = heroImage
export const aboutSectionImage = aboutImage
export const projectsSectionImage = projectsImage
export const contactSectionImage = contactImage

export const sectionLinks = [
  { label: 'Home', href: '#home', icon: LuHouse },
  { label: 'About', href: '#about', icon: LuUserRound },
  { label: 'Projects', href: '#projects', icon: LuFolderOpen },
  { label: 'Contact', href: '#contact', icon: LuMail },
] as const
