import React from 'react';
import logo from './assets/images/logo.png';

const ProjectCard = ({ color, icon, title, description, link }) => {
  return (
    <div className="relative group w-72 h-72 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      {/* Base colored card with icon */}
      <div 
        className="w-full h-full flex items-center justify-center"
        style={{ backgroundColor: color }}
      >
        <div className="w-16 h-16 text-white">
          {icon}
        </div>
      </div>
      
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-center mb-4">{description}</p>
        <a 
          href={link}
          className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200 transition-colors"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      color: '#E57373',
      icon: <div className="text-4xl">❓</div>,
      title: "Quiz Project",
      description: "Interactive learning platform with customizable quizzes and real-time feedback",
      link: "/quiz"
    },
    {
      color: '#81C784',
      icon: <div className="text-4xl">🎵</div>,
      title: "Music Project",
      description: "Digital music creation and collaboration tools",
      link: "/music"
    },
    {
      color: '#64B5F6',
      icon: <div className="text-4xl">📚</div>,
      title: "Library Project",
      description: "Digital book collection and reading progress tracker",
      link: "/library"
    },
    {
      color: '#5C6BC0',
      icon: <div className="text-4xl">🧠</div>,
      title: "Learning Project",
      description: "AI-powered learning assistant and study tools",
      link: "/learning"
    },
    {
      color: '#BA68C8',
      icon: <div className="text-4xl">👥</div>,
      title: "Community Project",
      description: "Connect and collaborate with like-minded individuals",
      link: "/community"
    },
    {
      color: '#FFD54F',
      icon: <div className="text-4xl">❤️</div>,
      title: "Health Project",
      description: "Wellness tracking and healthy lifestyle resources",
      link: "/health"
    }
  ];

  return (
    <div className="min-h-screen bg-cream-50 p-8">
      <div className="flex items-center justify-between mb-12">
        {/* Logo placeholder */}
        <a href="{logo}" className="flex items-center space-x-2">
          {/* Logo Image */}
            <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
                <img src={logo} alt="Logo" className="w-full h-full object-cover rounded" />
            </div>
        </a>
        
        {/* Navigation */}
        <nav>
          <ul className="flex gap-8">
            <li><a href="/" className="text-gray-600 hover:text-black">Welcome</a></li>
            <li><a href="/projects" className="font-bold">Projects</a></li>
            <li><a href="/reads" className="text-gray-600 hover:text-black">Favorite Reads</a></li>
            <li><a href="/blog" className="text-gray-600 hover:text-black">Blog</a></li>
            <li><a href="/contact" className="text-gray-600 hover:text-black">Contact</a></li>
          </ul>
        </nav>
      </div>
      
      <h1 className="text-4xl font-bold mb-12">Projects</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;