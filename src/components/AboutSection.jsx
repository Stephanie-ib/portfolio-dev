const AboutSection = () => {
  return (
    <section id="about" className="bg-[#1f2424] py-24 px-[5%] text-white">
      <h2 className="text-center text-5xl font-bold mb-14">About Me</h2>
      
      <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20 max-w-6xl mx-auto">
        <div className="flex-1 relative flex items-center justify-center md:justify-start">
          <div className="absolute w-[280px] h-[280px] md:w-[300px] md:h-[300px] bg-gradient-to-br from-yellow-400 to-yellow-300 -rotate-[15deg] rounded-3xl transition-all duration-400 hover:-rotate-12 hover:scale-105 hover:shadow-[0_15px_30px_rgba(255,215,0,0.4)]"></div>
          <img
            src="/images/profile.png"
            alt="Stephanie Ibrahim"
            className="relative w-[250px] h-[250px] md:w-[270px] md:h-[270px] object-contain rounded-3xl -rotate-[15deg] z-10 transition-all duration-400 hover:-rotate-12 hover:scale-105 hover:shadow-[0_10px_25px_rgba(255,215,0,0.5)]"
          />
        </div>

        <div className="flex-1">
          <p className="text-lg leading-relaxed text-gray-300 mb-5 text-center md:text-left">
            Hi! I'm Stephanie Ibrahim, a passionate frontend developer skilled in{' '}
            <strong className="text-yellow-400">HTML, CSS, React, TypeScript and Tailwind CSS.</strong> I'm currently
            expanding my skills in backend development to become a well-rounded full-stack developer. When I'm not
            coding, you'll find me gardening, writing, or teaching others how to build beautiful and functional web
            pages. I also have a love for fashion, great movies and series, and I'm a huge fan of{' '}
            <strong className="text-yellow-400">Hamilton</strong> (the musical, not F1!😅). I believe in blending
            creativity with code to create projects that are not just functional, but fun and engaging.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection