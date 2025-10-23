const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Service' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <footer className="bg-[#4a4f55] py-8 text-white">
      <ul className="flex justify-center gap-8 mb-4 list-none p-0 flex-wrap">
        {navItems.map(item => (
          <li key={item.id}>
            <button
              onClick={() => scrollToSection(item.id)}
              className="relative font-semibold hover:after:w-full after:content-[''] after:absolute after:left-0 after:top-[25px] after:w-0 after:h-1 after:rounded after:bg-yellow-400 after:transition-all after:duration-500 bg-transparent border-none text-white cursor-pointer text-base"
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
      <p className="text-center font-medium text-xl">&copy; All Rights Reserved / Ibrahim Stephanie</p>
    </footer>
  );
};

export default Footer