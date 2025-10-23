import { useRef } from 'react';

const ProjectsSection = () => {
  const sliderRef = useRef(null);

  const projects = [
    {
      image: '/images/student-planner.png',
      title: 'Student Planner',
      tech: ['React', 'Typescript', 'Tailwind CSS'],
      liveUrl: 'https://student-planner-plum.vercel.app/',
      repoUrl: 'https://github.com/Stephanie-ib/student-planner'
    },
    {
      image: '/images/fullvine-millers.png',
      title: 'Fullvine Miller',
      tech: ['React', 'Typescript', 'Tailwind CSS'],
      liveUrl: 'https://fullviner-millers.vercel.app/',
      repoUrl: 'https://github.com/Stephanie-ib/fullviner-millers'
    },
    {
      image: '/images/coffee-shop.png',
      title: 'E-Commerce Coffee Shop Website',
      tech: ['React', 'TypeScript', 'Tailwind'],
      liveUrl: 'https://coffee-shop-website-lovat.vercel.app/',
      repoUrl: 'https://github.com/Stephanie-ib/coffee-shop-website'
    },
    {
      image: '/images/rock paper scissors game.png',
      title: 'Rock Paper Scissors',
      tech: ['Html', 'Css', 'Javascript'],
      liveUrl: 'https://rock-paper-scissor-nu-murex.vercel.app/',
      repoUrl: 'https://github.com/Stephanie-ib/rock-paper-scissor'
    },
    {
      image: '/images/music-player.png',
      title: 'Music Player',
      tech: ['Html', 'Css', 'Javascript'],
      liveUrl: 'https://music-player-five-lemon.vercel.app/',
      repoUrl: 'https://github.com/Stephanie-ib/music-player'
    },
    {
      image: '/images/quiz-app.png',
      title: 'Quiz App',
      tech: ['React', 'Javascript'],
      liveUrl: 'https://quiz-app-one-tawny.vercel.app/',
      repoUrl: 'https://github.com/Stephanie-ib/quiz-app'
    },
    {
      image: '/images/notes-app.png',
      title: 'Notes App',
      tech: ['Html', 'Css', 'Javascript'],
      liveUrl: 'https://notes-app-seven-alpha-71.vercel.app/',
      repoUrl: 'https://github.com/Stephanie-ib/notes-app'
    },
    {
      image: '/images/guess game.png',
      title: 'Guess Game',
      tech: ['Html', 'Css', 'JavaScript'],
      liveUrl: 'https://guess-game-ochre.vercel.app/',
      repoUrl: 'https://github.com/Stephanie-ib/Guess-Game'
    },
    {
      image: '/images/egg-timer.png',
      title: 'Egg Timer',
      tech: ['Html', 'Css', 'Javascript'],
      liveUrl: 'https://egg-timer-flax.vercel.app/',
      repoUrl: 'https://github.com/Stephanie-ib/Egg-Timer'
    }
  ];
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
  const slideLeft = () => {
    if (sliderRef.current) {
      const cardWidth = 300 + 32;
      sliderRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      const cardWidth = 300 + 32;
      sliderRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-20 px-6 md:px-32">
      <h2 className="text-center text-5xl font-bold text-white mb-14">Recent Projects</h2>
      
      <div className="relative overflow-visible w-full">
        <button
          onClick={slideLeft}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-yellow-400 text-white border-none p-4 rounded-full cursor-pointer z-20 transition-colors hover:bg-black"
        >
          &#10094;
        </button>

        <div
          ref={sliderRef}
          className="flex gap-8 overflow-x-auto scroll-smooth py-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-yellow-400 min-w-[300px] h-[380px] flex-none p-5 rounded-2xl flex flex-col cursor-pointer items-start transition-transform duration-300 text-white hover:scale-105 hover:shadow-[0_5px_15px_rgba(255,215,0,0.6)] hover:bg-black"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[180px] object-cover rounded-2xl mb-4 flex-shrink-0"
              />
              <h3 className="text-xl font-semibold text-yellow-400 mb-2 flex-shrink-0">{project.title}</h3>
              <div className="flex gap-2 mb-4 flex-wrap flex-shrink-0">
                {project.tech.map((tech, i) => (
                  <p key={i} className="border border-yellow-400 px-4 py-1 rounded-2xl text-sm">
                    {tech}
                  </p>
                ))}
              </div>
              <div className="flex gap-2 flex-wrap mt-auto w-full">
                <button className="flex-1 px-6 py-2 border border-yellow-400 rounded-2xl font-semibold text-white bg-transparent cursor-pointer transition-all hover:bg-yellow-400 hover:text-[#1f2424]">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-sm whitespace-nowrap">
                    Live Demo
                  </a>
                </button>
                <button className="flex-1 px-6 py-2 border border-yellow-400 rounded-2xl font-semibold text-white bg-transparent cursor-pointer transition-all hover:bg-yellow-400 hover:text-[#1f2424]">
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-sm whitespace-nowrap">
                    GitHub Repo
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={slideRight}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-yellow-400 text-white border-none p-4 rounded-full cursor-pointer z-20 transition-colors hover:bg-black"
        >
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default ProjectsSection