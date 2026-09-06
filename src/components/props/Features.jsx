import React, { useState } from 'react';

// Data Skills
const skillList = [
  { name: 'React.js', level: 'Advanced', icon: '⚛️' },
  { name: 'Tailwind CSS', level: 'Advanced', icon: '🎨' },
  { name: 'JavaScript (ES6+)', level: 'Advanced', icon: '🟨' },
  { name: 'HTML5 & CSS3', level: 'Expert', icon: '🌐' },
  { name: 'Git & GitHub', level: 'Intermediate', icon: '📦' },
  { name: 'Responsive Design', level: 'Expert', icon: '📱' },
];

// Data Portfolio Projects
const projects = [
  {
    title: 'E-Commerce Dashboard',
    category: 'Web Application',
    description: 'Modern admin dashboard built with React and Tailwind CSS featuring interactive charts.',
    tags: ['React', 'Tailwind CSS'],
  },
  {
    title: 'Personal Portfolio',
    category: 'Landing Page',
    description: 'A slick, responsive, and performance-optimized portfolio website.',
    tags: ['React', 'Tailwind CSS'],
  },
  {
    title: 'Task Management App',
    category: 'Productivity Tool',
    description: 'Interactive kanban-style task board with smooth user interactions.',
    tags: ['React', 'JavaScript'],
  },
];

export default function Features() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="space-y-24 py-12">
      
      {/* 1. FEATURE: SKILLS SECTION */}
      <section id="skills" className="px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">Skills & Tech Stack</h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Technologies and tools I use to build modern web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skillList.map((skill, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-2xl">
                {skill.icon}
              </div>
              <div>
                <h3 className="font-bold text-gray-900">{skill.name}</h3>
                <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                  {skill.level}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. FEATURE: PORTFOLIO SECTION */}
      <section id="portfolio" className="px-8 py-20 bg-gray-100/60">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">Featured Work</h2>
            <p className="mt-4 text-gray-600 max-w-xl mx-auto">
              Here are some of the projects I have crafted recently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="p-6">
                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">{project.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{project.description}</p>
                </div>

                <div className="px-6 pb-6 pt-0">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs bg-gray-100 text-gray-700 font-medium px-2.5 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="w-full py-2.5 text-sm font-semibold text-blue-600 bg-blue-50 hover:bg-blue-600 hover:text-white rounded-xl transition-all cursor-pointer">
                    View Project →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURE: CONTACT SECTION */}
      <section id="contact" className="px-8 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">Get In Touch</h2>
          <p className="mt-4 text-gray-600">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-xl">
          {submitted ? (
            <div className="p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl text-center font-medium">
              ✅ Thank you! Your message has been sent successfully.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Your Email</label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea
                  rows="4"
                  required
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl hover:shadow-lg hover:shadow-blue-500/30 active:scale-95 transition-all cursor-pointer"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>

    </div>
  );
}