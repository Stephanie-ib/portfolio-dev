const ServicesSection = () => {
  const services = [
    {
      icon: 'fa-code',
      title: 'Frontend Development',
      period: '2024-2025',
      description: 'Frontend developer skilled with building responsive web pages with tools like react, tailwind.'
    },
    {
      icon: 'fa-folder-open',
      title: 'Open Source Contributor',
      period: '2025',
      description: 'Open source contributor who loves to help innovate and improve others developers ideas.'
    },
    {
      icon: 'fa-chalkboard-user',
      title: 'Instructor',
      period: '2025',
      description: 'An instructor in teaching others the basics of how to build web pages.'
    }
  ];

  return (
    <section id="services" className="py-20 px-6 md:px-32">
      <h2 className="text-center text-white text-5xl font-bold mb-14">Services</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="border border-yellow-400 p-8 rounded-2xl flex flex-col items-start cursor-pointer text-white mb-5 transition-all duration-300 hover:scale-105 hover:shadow-[0_5px_15px_rgba(255,215,0,0.6)] hover:bg-black"
          >
            <i className={`fa-solid ${service.icon} text-3xl mb-4`}></i>
            <h3 className="text-yellow-400 text-2xl font-semibold mb-1">{service.title}</h3>
            <h4 className="mb-2">{service.period}</h4>
            <p className="leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection