import { LuFolderOpen, LuHouse, LuMail, LuUserRound } from 'react-icons/lu'
import viteLogo from '../assets/vite.svg'

export const sectionPlaceholderImage = viteLogo

export const sectionLinks = [
  { label: 'Home', href: '#home', icon: LuHouse },
  { label: 'About', href: '#about', icon: LuUserRound },
  { label: 'Projects', href: '#projects', icon: LuFolderOpen },
  { label: 'Contact', href: '#contact', icon: LuMail },
] as const
