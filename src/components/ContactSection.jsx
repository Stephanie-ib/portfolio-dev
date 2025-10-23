import { useState } from 'react';

const ContactSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (email) {
      alert(`Email submitted: ${email}`);
      setEmail('');
    }
  };

  return (
    <section id="contact" className="py-16 px-6 md:px-20">
      <h2 className="text-center text-white text-5xl font-bold mb-8">Contact Me</h2>
      
      <div className="flex flex-col items-center gap-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example@gmail.com"
          className="border border-black text-white-300 bg-white px-10 py-2 rounded-2xl w-full max-w-md"
        />
        <button
          onClick={handleSubmit}
          className="border border-yellow-400 px-8 py-2 rounded-2xl font-semibold text-white bg-transparent cursor-pointer transition-all hover:text-white hover:border-white hover:scale-110"
        >
          Submit
        </button>
      </div>
    </section>
  );
};

export default ContactSection