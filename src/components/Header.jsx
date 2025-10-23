import { useState, useEffect, useRef } from 'react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <>
      <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] flex justify-between items-center bg-black/80 backdrop-blur-xl px-6 py-3 rounded-2xl z-50">
        <div className="text-3xl font-bold text-white cursor-pointer">Portfolio.</div>
        
        <nav className="hidden md:block">
          <ul className="flex gap-8 list-none">
            {navItems.map(item => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`text-xl font-medium transition-colors duration-500 ${
                    activeSection === item.id ? 'text-yellow-400' : 'text-white hover:text-yellow-400'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <button
          ref={menuRef}
          onClick={(e) => {
            e.stopPropagation();
            setMobileMenuOpen(!mobileMenuOpen);
          }}
          className="md:hidden text-yellow-400 text-2xl bg-transparent border-none cursor-pointer"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </header>

      {mobileMenuOpen && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 w-[90%] bg-black/95 backdrop-blur-xl text-white flex flex-col gap-4 text-center p-6 rounded-2xl z-40">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="py-3 hover:text-yellow-400 transition-colors font-medium bg-transparent border-none text-white cursor-pointer text-base"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default Header