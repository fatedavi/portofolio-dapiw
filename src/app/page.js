"use client";
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, Menu, X, Code, Palette, Smartphone, Star, Zap } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    
    // Mouse tracking untuk parallax effect
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Scroll tracking untuk scroll-based animations
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };
  

  const projects = [
    {
      title: "Invoice Management System & Human Resource Management",
      description: "Full-stack Invoice Management System dan HR Management dengan Laravel, Mysql, dan Tailwind CSS yang terintergrasi dengan Database lama",
      tech: ["Laravel", "Tailwind CSS", "Vue", "MySQL", ],
      image: "/images/project.png",
      github: "https://github.com/fatedavi/MPA-project",
      live: "https://epower.multipowerabadi.co.id/",
      featured: true
    },
    {
      title: "Dashboard sekolah berbasis web",
      description: "Dashboard sekolah berbasis web dengan fitur manajemen siswa, kelas,absen dan nilai",
      tech: ["laravel", "vue", "Mysql",],
      image: "/images/project2.png",
      github: "https://github.com/fatedavi/akademik-app",
      live: "#",
      featured: true
    },
    {
      title: "Aplikasi Web POS",
      description: "Web Pos menggunakan CI3 aplikasi kasir sederhana untuk toko",
      tech: ["CodeIgneter 3", ],
      image: "/images/Ci3.png",
      github: "#",
      live: "#",
      featured: true
    },
      {
      title: "Project Team Digital Agency",
      description: "Web Creative Digital Agency berbasi web dengan Module manajemen project, Accounting, dan HR Management",
      tech: ["Laravel", "Figma","MongoDb", "Symfony", "Tailwind CSS", "Vue","MySQL","Php Native"],
      image: "/images/Fastrack.png",
      github: "#",
      live: "#",
      featured: true
    },
  ];

  const skills = [
    { 
      name: "Frontend Development", 
      icon: Code, 
      color: "from-blue-500 via-cyan-500 to-teal-500",
      technologies: ["Next.js", "Vue.js", "Tailwind CSS"],
      level: 80
    },
    { 
      name: "UI/UX Design", 
      icon: Palette, 
      color: "from-purple-500 via-pink-500 to-rose-500",
      technologies: ["Figma"],
      level: 70
    },
    { 
      name: "Backend Development", 
      icon: Smartphone, 
      color: "from-green-500 via-emerald-500 to-cyan-500",
      technologies: ["Node.js", "PHP Native", "MySQL", "Laravel", "MongoDB"],
      level: 80
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager at TechCorp",
      content: "John delivered exceptional work on our e-commerce platform. His attention to detail and technical expertise exceeded our expectations.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      role: "CTO at StartupXYZ",
      content: "Working with John was a game-changer for our product. He brought innovative solutions and delivered on time, every time.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden relative">
      
      {/* Animated Cursor Follower */}
      <div 
        className="fixed w-6 h-6 bg-purple-400 rounded-full pointer-events-none z-50 mix-blend-difference transition-all duration-100 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(${isMenuOpen ? 2 : 1})`
        }}
      />

      {/* Floating Particles Background */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/20 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Navigation */}


      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <div 
            className={`transform transition-all duration-1500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
            style={{
              transform: `translateY(${scrollY * 0.1}px)`
            }}
          >
            {/* Glitch effect untuk nama */}
            <div className="relative mb-6">
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent relative z-10 hover:scale-105 transition-transform duration-300">
                Achmad Dafi
              </h1>


            </div>

            <div className="relative">
              <p className="text-xl md:text-3xl mb-8 text-gray-300 font-light tracking-wide">
                <span className="inline-block animate-bounce" style={{ animationDelay: '0s' }}>J</span>
                <span className="inline-block animate-bounce" style={{ animationDelay: '0.1s' }}>u</span>
                <span className="inline-block animate-bounce" style={{ animationDelay: '0.2s' }}>n</span>
                <span className="inline-block animate-bounce" style={{ animationDelay: '0.3s' }}>i</span>
                <span className="inline-block animate-bounce" style={{ animationDelay: '0.5s' }}>o</span>
                <span className="inline-block animate-bounce" style={{ animationDelay: '0.6s' }}>r</span>
                <span className="mx-4">🚀</span>
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Developer</span>
              </p>
            </div>

            <div className="flex justify-center space-x-6 mb-12">
              {[
                { Icon: Github, href: "https://github.com/fatedavi/", delay: "0s" },
                { Icon: Linkedin, href: "#", delay: "0.2s" },
                { Icon: Mail, href: "#", delay: "0.4s" }
              ].map(({ Icon, href, delay }, index) => (
                <a 
                  key={index}
                  href={href} 
                  className="group relative p-4 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-125 hover:rotate-12"
                  style={{ animationDelay: delay }}
                >
                  <Icon size={24} className="group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </a>
              ))}
            </div>

            <div className="space-y-6">
              <button
                onClick={() => scrollToSection('projects')}
                className="group relative inline-flex items-center space-x-3 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 px-8 py-4 rounded-full text-white font-semibold overflow-hidden hover:scale-110 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50"
              >
                <span className="relative z-10">Lihat Portfolio</span>
                <Zap size={20} className="relative z-10 group-hover:rotate-12 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-pink-700 to-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>

              <div className="animate-bounce mt-8">
                <button onClick={() => scrollToSection('about')} className="group">
                  <ChevronDown size={40} className="text-purple-400 group-hover:text-pink-400 transition-colors duration-300 group-hover:scale-125" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
            style={{
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
            }}
          ></div>
          <div 
            className="absolute bottom-1/4 right-1/4 w-128 h-128 bg-pink-500/20 rounded-full blur-3xl animate-pulse"
            style={{
              animationDelay: '1s',
              transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * -0.03}px)`
            }}
          ></div>
          <div 
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-2xl animate-ping"
            style={{
              animationDelay: '2s',
              transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
            }}
          ></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div 
              className="text-center mb-16"
              style={{
                transform: `translateY(${Math.max(0, (scrollY - 800) * -0.1)}px)`
              }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
                About Me
              </h2>Saya
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div className="space-y-6">
                <div className="group">
                  <p className="text-xl text-gray-300 mb-6 leading-relaxed group-hover:text-white transition-colors duration-300">
                    Saya adalah seorang <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">Junior Developer</span> dengan passion untuk menciptakan 
                    solusi digital yang inovatif dan user-friendly. Dengan pengalaman lebih dari 
                    <span className="text-cyan-400 font-bold"> 3 tahun</span>, saya fokus pada pengembangan skill web modern menggunakan 
                    teknologi terdepan.
                  </p>
                </div>
                
                <div className="group">
                  <p className="text-xl text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                    Saya percaya bahwa kombinasi antara <span className="text-purple-400 font-semibold">desain yang menarik</span> dan <span className="text-pink-400 font-semibold">fungsionalitas 
                    yang solid</span> adalah kunci untuk menciptakan produk digital yang sukses dan memberikan 
                    impact positif bagi penggunanya.
                  </p>
                </div>

                <div className="pt-6">
                  <h3 className="text-2xl font-semibold mb-4 text-purple-400">Pencapaian</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { number: "10+", label: "Projects" },
                      { number: "3+", label: "Years Exp" },
                    ].map((stat, index) => (
                      <div key={index} className="text-center group hover:scale-110 transition-transform duration-300">
                        <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                          {stat.number}
                        </div>
                        <div className="text-gray-400 text-sm">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="relative">
                  <div className="w-80 h-80 mx-auto bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 rounded-full p-2 group-hover:scale-110 transition-all duration-500 group-hover:rotate-3">
                    <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-full flex items-center justify-center relative overflow-hidden">
                      <div className="text-8xl group-hover:scale-110 transition-transform duration-300">i
                        <img src="/images/profile.jpg" alt="Description" className="w-full h-full object-cover" />
                      </div>
                      
                      {/* Floating Icons */}
                      <div className="absolute top-4 right-4 p-2 bg-white/10 rounded-full backdrop-blur-sm animate-bounce" style={{ animationDelay: '0s' }}>
                        <Code size={16} className="text-purple-400" />
                      </div>
                      <div className="absolute bottom-4 left-4 p-2 bg-white/10 rounded-full backdrop-blur-sm animate-bounce" style={{ animationDelay: '0.5s' }}>
                        <Palette size={16} className="text-pink-400" />
                      </div>
                      <div className="absolute top-1/2 left-2 p-2 bg-white/10 rounded-full backdrop-blur-sm animate-bounce" style={{ animationDelay: '1s' }}>
                        <Star size={16} className="text-cyan-400" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Orbiting Elements */}
                  <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
                      <div className="w-4 h-4 bg-purple-400 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  <div className="absolute inset-0 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
                    <div className="absolute bottom-0 right-0 transform translate-x-2 translate-y-2">
                      <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Skills Section */}
            <div className="space-y-12">
              <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Skills & Expertise
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                {skills.map((skill, index) => (
                  <div key={index} className="group relative">
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:-translate-y-2 relative overflow-hidden">
                      
                      {/* Skill Icon */}
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${skill.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 relative z-10`}>
                        <skill.icon size={28} className="text-white" />
                      </div>

                      {/* Content */}
                      <h3 className="text-2xl font-semibold mb-4 group-hover:text-purple-400 transition-colors duration-300">{skill.name}</h3>
                      
                      {/* Progress Bar */}
                      <div className="mb-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-gray-400">Proficiency</span>
                          <span className="text-sm font-semibold text-purple-400">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 delay-300`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="space-y-2">
                        <p className="text-sm text-gray-400 mb-3">Technologies:</p>
                        <div className="flex flex-wrap gap-2">
                          {skill.technologies.map((tech, techIndex) => (
                            <span 
                              key={techIndex} 
                              className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300 border border-white/20 hover:border-purple-400/50 hover:bg-purple-500/20 transition-all duration-300 hover:scale-105"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Animated Background */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Latest Projects
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Berikut adalah beberapa project yang telah saya kerjakan dengan passion dan dedikasi tinggi
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mt-6 rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className={`group relative ${project.featured ? 'md:col-span-2' : ''}`}
                style={{
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-purple-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:-translate-y-4 hover:shadow-2xl hover:shadow-purple-500/25 relative">
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 z-20">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-400 px-3 py-1 rounded-full text-xs font-bold text-black flex items-center space-x-1">
                        <Star size={12} />
                        <span>FEATURED</span>
                      </div>
                    </div>
                  )}

                  {/* Image Container */}
                  <div className="relative overflow-hidden h-64 md:h-72">
                    <img
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Overlay Content */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="flex space-x-4">
                        <a 
                          href={project.github} 
                          className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
                        >
                          <Github size={24} />
                        </a>
                        <a 
                          href={project.live} 
                          className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
                        >
                          <ExternalLink size={24} />
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {project.description}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full text-sm text-purple-300 border border-purple-500/30 hover:border-purple-400/50 hover:bg-purple-500/30 transition-all duration-300 hover:scale-105"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Action Links */}
                    <div className="flex space-x-4">
                      <a 
                        href={project.github} 
                        className="flex items-center space-x-2 text-gray-400 hover:text-white transition-all duration-300 hover:scale-105 group/link"
                      >
                        <Github size={18} className="group-hover/link:rotate-12 transition-transform duration-300" />
                        <span className="text-sm font-medium">Source Code</span>
                      </a>
                      <a 
                        href={project.live} 
                        className="flex items-center space-x-2 text-gray-400 hover:text-white transition-all duration-300 hover:scale-105 group/link"
                      >
                        <ExternalLink size={18} className="group-hover/link:rotate-12 transition-transform duration-300" />
                        <span className="text-sm font-medium">Live Demo</span>
                      </a>
                    </div>
                  </div>

                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <p className="text-gray-400 mb-6">Ingin melihat lebih banyak project?</p>
            <a 
              href="https://github.com/fatedavi/" 
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 group"
            >
              <Github size={20} className="group-hover:rotate-12 transition-transform duration-300" />
              <span>GitHub Repository</span>
            </a>
          </div>
        </div>
      </section>

     

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Mari Berkolaborasi
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Punya project menarik atau ide brilian? Mari diskusikan bagaimana kita bisa bekerja sama 
                untuk mewujudkan visi Anda menjadi kenyataan digital yang luar biasa.
              </p>
            </div>
            
            <div className="space-y-8">
              {/* Main CTA */}
              <div className="group relative inline-block">
                <a 
                  href="mailto:achmaddviii@gmail.com" 
                  className="inline-flex items-center space-x-4 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 px-10 py-5 rounded-full text-white font-bold text-lg hover:from-purple-700 hover:via-pink-700 hover:to-red-700 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50 relative overflow-hidden group"
                >
                  <Mail size={24} className="group-hover:rotate-12 transition-transform duration-300" />
                  <span>Mari Bicara Project!</span>
                  <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></div>
                </a>
              </div>

              {/* Alternative Contact Methods */}
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <a 
                  href="https://github.com/fatedavi/" 
                  className="flex items-center space-x-2 bg-white/10 px-6 py-3 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105 group border border-white/20 hover:border-purple-400/50"
                >
                  <Github size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                  <span>GitHub</span>
                </a>
                <a 
                  href="#" 
                  className="flex items-center space-x-2 bg-white/10 px-6 py-3 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105 group border border-white/20 hover:border-purple-400/50"
                >
                  <Linkedin size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                  <span>LinkedIn</span>
                </a>
              </div>

              {/* Contact Info */}
              <div className="pt-8 space-y-4">
                <div className="flex flex-wrap justify-center gap-8 text-gray-400">
                  <div className="flex items-center space-x-2 hover:text-white transition-colors duration-300">
                    <Mail size={18} />
                    <span>achmaddviii@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-2 hover:text-white transition-colors duration-300">
                    <span>📍</span>
                    <span>Surabaya, Indonesia</span>
                  </div>
                </div>
                
                <p className="text-gray-500 text-sm">
                  Response time: Usually within 24 hours ⚡
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Contact Cards */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-10 animate-float">
            <div className="bg-purple-500/10 backdrop-blur-sm rounded-lg p-4 border border-purple-500/20">
              <Code size={24} className="text-purple-400" />
            </div>
          </div>
          <div className="absolute top-1/3 right-10 animate-float" style={{ animationDelay: '1s' }}>
            <div className="bg-pink-500/10 backdrop-blur-sm rounded-lg p-4 border border-pink-500/20">
              <Palette size={24} className="text-pink-400" />
            </div>
          </div>
          <div className="absolute bottom-1/4 left-1/4 animate-float" style={{ animationDelay: '2s' }}>
            <div className="bg-cyan-500/10 backdrop-blur-sm rounded-lg p-4 border border-cyan-500/20">
              <Zap size={24} className="text-cyan-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-6">
            {/* Logo/Brand */}
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:scale-105 transition-transform cursor-pointer">
              <span className="inline-block hover:rotate-12 transition-transform duration-300">⚡</span>
              Achmad Dafi Ihsannudin
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              {[
                { Icon: Github, href: "#" },
                { Icon: Linkedin, href: "#" },
                { Icon: Mail, href: "#" }
              ].map(({ Icon, href }, index) => (
                <a 
                  key={index}
                  href={href} 
                  className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:rotate-12 group"
                >
                  <Icon size={20} className="group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-gray-400 space-y-2">
              <p>&copy; 2024 Achmad Dafi. Dibuat di Surabaya</p>
              <p className="text-sm">
                Powered by <span className="text-purple-400">Next.js</span> • 
                Styled with <span className="text-cyan-400">Tailwind CSS</span> • 
                Deployed on <span className="text-pink-400">Vercel</span>
              </p>
            </div>
          </div>
        </div>

        {/* Animated Footer Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600"></div>
        </div>
      </footer>

      {/* Custom Styles for Additional Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(30, 41, 59, 0.5);
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #8b5cf6, #ec4899);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #7c3aed, #db2777);
        }

        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }

        /* Glitch effect keyframes */
        @keyframes glitch-1 {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
        }

        @keyframes glitch-2 {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(2px, -2px); }
          40% { transform: translate(2px, 2px); }
          60% { transform: translate(-2px, -2px); }
          80% { transform: translate(-2px, 2px); }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;