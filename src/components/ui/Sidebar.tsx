import {
  Calendar,
  Book,
  Clapperboard,
  DollarSign,
  ChevronLeft,
  ChevronRight,
  Github
} from 'lucide-react';
import { Section } from '../../types/global';

interface Props {
  isOpen: boolean;
  activeSection: Section;
  setIsOpen: (v: boolean) => void;
  setActiveSection: (s: Section) => void;
  logInIsSuccessful :number;
}

export default function Sidebar({
  isOpen,
  activeSection,
  setIsOpen,
  setActiveSection,
  logInIsSuccessful
  
}: Props) {
  const navItems=logInIsSuccessful?[
            { key: 'calendar', icon: <Calendar />, label: 'Calendar' },
            { key: 'books', icon: <Book />, label: 'Books' },
            { key: 'movies', icon: <Clapperboard />, label: 'Movies' },
            { key: 'finance', icon: <DollarSign />, label: 'Finance' },
          ]:[
            { key: 'calendar', icon: <Calendar />, label: 'Calendar' },
 
          ];
  return (
    <div
      className={`bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white transition-all duration-300 ${
        isOpen ? 'w-64' : 'w-20'
      } min-h-screen relative`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute -right-3 top-6 bg-white rounded-full p-1 shadow-lg border"
      >
        {isOpen ? <ChevronLeft color='blue' /> : <ChevronRight color='blue' />}
        {/* dss */}
      </button>

      <div className="p-4">
        <h1 className={`font-bold text-xl mb-8 ${!isOpen && 'scale-0'}`}>
          Plynr
        </h1>

        <nav className="space-y-2">
          {navItems.map(item => (
            <button
              key={item.key}
              onClick={() => setActiveSection(item.key as Section)}
              className={`flex items-center space-x-3 w-full p-3 rounded-lg transition-all ${
                activeSection === item.key
                  ? 'bg-white bg-opacity-20'
                  : 'hover:bg-white hover:bg-opacity-10'
              }`}
            >
              {item.icon}
              <span className={`${!isOpen && 'hidden'}`}>
                {item.label}
              </span>
            </button>
          ))}
        </nav>
      </div>

      <div className="absolute bottom-4 left-4">
        <a
          href="https://github.com/Mahdi-n7"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2"
        >
          <Github />
          <span className={`${!isOpen && 'hidden'}`}>About Me</span>
        </a>
      </div>
    </div>
  );
}
