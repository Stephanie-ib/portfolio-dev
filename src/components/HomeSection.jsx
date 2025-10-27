import { useState, useEffect } from 'react';

const HomeSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 480);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const texts = isMobile 
    ? ['Frontend Dev', 'Backend Dev', 'Full Stack Dev', 'Writer']
    : ['Frontend Developer', 'Backend Developer', 'Full Stack Developer', 'Writer'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [texts.length]);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/files/Stephanie-Ibrahim-CV.pdf';
    link.download = 'Stephanie-Ibrahim-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="flex flex-col md:flex-row items-center min-h-screen gap-12 px-6 md:px-[9%] pt-24 md:pt-12 text-white">
      <div className="flex-1 w-full">
        <h1 className="text-4xl md:text-5xl lg:text-[55px] font-bold">Stephanie Ibrahim</h1>
        <h2 className="text-2xl md:text-3xl lg:text-[32px] mt-2 mb-5">
          I'm a <span className="text-transparent font-bold" style={{ WebkitTextStroke: '0.7px #ffd700' }}>{texts[currentIndex]}</span>
        </h2>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={handleDownloadCV}
            className="px-8 py-4 bg-yellow-400 border-2 border-yellow-400 rounded-full shadow-[0_0_10px_#ffd700] text-base text-gray-900 font-semibold transition-all duration-600 hover:bg-transparent hover:text-yellow-400 hover:shadow-none cursor-pointer"
          >
            Download CV
          </button>
          
          <div className="flex gap-2">
            {[
              { icon: 'fa-github', url: 'https://github.com/Stephanie-ib' },
              { icon: 'fa-linkedin', url: 'https://www.linkedin.com/in/stephanie-ibrahim-715a4b292/' },
              { icon: 'fa-square-x-twitter', url: 'https://x.com/StephanieI62699' },
              { icon: 'fa-instagram', url: 'https://www.instagram.com/steph.anieib/' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex p-2 border-2 border-yellow-400 rounded-full text-xl transition-all duration-500 hover:bg-yellow-400 hover:text-gray-900"
              >
                <i className={`fa-brands ${social.icon}`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="relative w-[80vw] h-[80vw] md:w-[32vw] md:h-[32vw] max-w-[400px] max-h-[400px]">
        <div className="relative w-full h-full rounded-full p-[5px] flex items-center justify-center overflow-hidden">
          <div className="absolute w-full h-full bg-[conic-gradient(transparent,transparent,transparent,#ffd700)] animate-spin" style={{ animationDuration: '10s' }}></div>
          <div className="absolute w-full h-full bg-[conic-gradient(transparent,transparent,transparent,#ffd700)] animate-spin" style={{ animationDuration: '10s', animationDelay: '-5s' }}></div>
          <div className="relative w-full h-full bg-[#1f2424] rounded-full border border-[#1f2424] flex justify-center overflow-hidden z-10">
            <img
              src="/images/profile.png"
              alt="profile"
              className="absolute top-8 w-[85%] object-cover mix-blend-lighten"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection