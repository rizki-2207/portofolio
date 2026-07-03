"use client";

import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import { 
  Code2, Database, Layout, Terminal, Award, 
  Briefcase, FileText, GraduationCap, Mail, Instagram, MapPin, Phone, ExternalLink, ArrowUp, Menu, X,
  Sun, Moon // Ikon tambahan untuk toggle tema
} from "lucide-react";
import { useState, useEffect } from 'react';
import { useTheme } from "next-themes";

type Skill = {
  name: string;
  icon: React.ReactNode;
  tech: string;
};

type Certificate = {
  title: string;
  issuer: string;
  year: string;
  description: string;
  link: string;
};

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const skills: Skill[] = [
    { name: "Frontend", icon: <Layout className="w-5 h-5" />, tech: "React, Next.js, Tailwind CSS" },
    { name: "Backend", icon: <Terminal className="w-5 h-5" />, tech: "Node.js, PHP, JavaScript" },
    { name: "Database", icon: <Database className="w-5 h-5" />, tech: "MySQL, XAMPP" },
    { name: "Development", icon: <Code2 className="w-5 h-5" />, tech: "TypeScript, Git, Vercel" },
  ];

  const certificates: Certificate[] = [
    {
      title: "Ijazah S1 Pendidikan Teknologi Informasi",
      issuer: "UIN Ar-Raniry Banda Aceh",
      year: "2025",
      description: "Bukti kelulusan akademik dengan fokus pada pendidikan dan teknologi informasi.",
      link: "/docs/ijazah-s1-rizki.pdf"
    },
    {
      title: "Junior Web Developer",
      issuer: "BPVP Banda Aceh / Sertifikasi Kompetensi",
      year: "2023",
      description: "Pelatihan dasar pengembangan web, algoritma, dan struktur data.",
      link: "/docs/sertifikat-jwd-2023.pdf"
    },
    {
      title: "Pengembangan Web (Node.js & React)",
      issuer: "BPVP Banda Aceh / Sertifikasi Kompetensi",
      year: "2025",
      description: "Pelatihan intensif membangun aplikasi fullstack modern menggunakan ekosistem JavaScript.",
      link: "/docs/sertifikat-pengembangan-web-2025.pdf"
    },
    {
      title: "Sertifikat Magang",
      issuer: "Hotel Fhandika Boutique.Inc",
      year: "2025",
      description: "Penghargaan atas kontribusi pengembangan sistem informasi internal hotel selama masa magang.",
      link: "/docs/sertifikat-magang-fhandika.pdf"
    }
  ];

  const experiences = [
    {
      role: "Fullstack Developer",
      company: "Hotel Fhandika Boutique.Inc",
      location: "Banda Aceh",
      period: "2025",
      description: [
        "Mengembangkan situs web secara fullstack menggunakan lingkungan ekosistem Node.js dan React.",
        "Melakukan manajemen basis data MySQL (XAMPP) untuk integrasi dan pengelolaan data aplikasi internal hotel."
      ]
    }
  ];

  const projects = [
    {
      title: "Website Portofolio Pribadi",
      techStack: "Next.js, Tailwind CSS, TypeScript",
      description: "Merancang dan mengembangkan situs web portofolio pribadi yang responsif dengan fitur dark mode. Proyek ini di-deploy menggunakan Vercel dan dioptimalkan kinerjanya menggunakan Vercel Speed Insights.",
      link: "https://rizkiananda.my.id"
    }
  ];

  useEffect(() => {
    setMounted(true);
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);

    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!mounted) return null;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-sans scroll-smooth transition-colors duration-300">
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Image 
            src="/images/logo1.svg" // Path ke file logo Anda
            alt="Logo Rizki Ananda" // Teks alternatif untuk aksesibilitas
            width={150} // Lebar dasar
            height={50} // Tinggi dasar
            className="h-11 w-auto" // Mengatur tinggi tetap dengan Tailwind
            priority // Mengoptimalkan pemuatan logo karena di atas lipatan
          />
          
          <div className="flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-xl bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors border border-gray-200 dark:border-gray-800"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Hamburger Button Mobile */}
            <button 
              className="md:hidden text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6 text-sm font-medium text-gray-500 dark:text-gray-400">
              {['about', 'skills', 'education', 'experience', 'certificates'].map((item) => (
                <a 
                  key={item}
                  href={`#${item}`} 
                  onClick={(e) => handleSmoothScroll(e, item)}
                  className="hover:text-blue-500 transition-colors capitalize relative group"
                >
                  {item === 'about' ? 'Tentang' : 
                   item === 'skills' ? 'Keahlian' : 
                   item === 'education' ? 'Pendidikan' : 
                   item === 'experience' ? 'Pengalaman' : 'Sertifikat'}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-4 ml-4">
              <a href="/docs/cv-rizki.pdf" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                <FileText className="w-4 h-4" /> Lihat CV
              </a>
              <a href="mailto:Rizkiananda2207@gmail.com" className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-500 transition shadow-lg shadow-blue-900/20">
                Kontak
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden bg-white dark:bg-gray-950 border-gray-200 dark:border-gray-800 flex flex-col gap-5 overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-[500px] px-6 py-6 border-b opacity-100" : "max-h-0 px-6 py-0 opacity-0 pointer-events-none"
          }`}
        >
          {['about', 'skills', 'education', 'experience', 'certificates'].map((item) => (
            <a 
              key={item}
              href={`#${item}`} 
              onClick={(e) => {
                handleSmoothScroll(e, item);
                setIsMenuOpen(false);
              }}
              className="text-gray-600 dark:text-gray-400 hover:text-blue-500 text-lg font-medium transition-colors"
            >
              {item === 'about' ? 'Tentang' : 
               item === 'skills' ? 'Keahlian' : 
               item === 'education' ? 'Pendidikan' : 
               item === 'experience' ? 'Pengalaman' : 'Sertifikat'}
            </a>
          ))}
          <div className="flex flex-col gap-4 pt-6 border-t border-gray-200 dark:border-gray-800">
            <a href="/docs/cv-rizki.pdf" className="text-gray-500 dark:text-gray-400 flex items-center gap-2 text-sm">
              <FileText className="w-4 h-4"/> Lihat CV (PDF)
            </a>
            <a href="mailto:Rizkiananda2207@gmail.com" className="text-blue-600 dark:text-blue-500 text-sm font-bold uppercase tracking-widest">
              Hubungi Saya
            </a>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="about" className="pt-40 pb-20 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="w-48 h-48 rounded-3xl overflow-hidden border-2 border-gray-200 dark:border-gray-800 shadow-2xl flex-shrink-0 transition-transform duration-500 hover:scale-105 relative">
            <Image 
              src="/images/profil.jpg" 
              alt="Rizki Ananda" 
              fill
              className="object-cover bg-gray-100 dark:bg-gray-900"
              priority
              sizes="(max-width: 768px) 192px, 192px"
            />
          </div>
          <div className="text-left">
            <h1 className="text-6xl font-extrabold mb-3 tracking-tight bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-500 bg-clip-text text-transparent">
              Rizki Ananda
            </h1>
            
            <div className="text-blue-600 dark:text-blue-400 font-mono text-xl mb-4 h-8">
              <Typewriter
                options={{
                  strings: ['Fullstack Developer', 'React & Next.js Enthusiast', 'Lulusan UIN Ar-Raniry', 'Alumni BPVP Banda Aceh'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 max-w-xl text-left md:text-justify">
              Halo, saya Rizki Ananda. Saya adalah seorang Fullstack Developer yang antusias dalam membangun solusi web digital yang fungsional dan modern. Saya terbiasa menggunakan ekosistem JavaScript seperti React dan Node.js, serta mampu bekerja secara disiplin dan teliti, baik secara mandiri maupun dalam tim.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-xs text-gray-500 dark:text-gray-500 uppercase tracking-widest">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-500" /> Blang Oi, Banda Aceh
              </span>
              <a href="mailto:Rizkiananda2207@gmail.com" className="flex items-center gap-2 hover:text-blue-500 transition">
                <Mail className="w-4 h-4 text-blue-500" /> Rizkiananda2207@gmail.com
              </a>
              <a href="tel:+6282369392577" className="flex items-center gap-2 hover:text-blue-500 transition">
                <Phone className="w-4 h-4 text-blue-500" /> 0823 6939 2577
              </a>
              <a href="https://instagram.com/rizki_0700" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-500 transition">
                <Instagram className="w-4 h-4 text-blue-500" /> @rizki_0700
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- SKILLS SECTION --- */}
      <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900/20 px-6 border-t border-gray-100 dark:border-gray-900 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm font-bold text-blue-600 dark:text-blue-500 uppercase tracking-[0.3em] mb-12 italic">Keahlian Teknis</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {skills.map((skill, i) => (
              <div key={i} className="flex flex-col items-center p-6 rounded-2xl bg-white dark:bg-gray-900/40 border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:bg-gray-900 transition group shadow-sm">
                <div className="text-blue-600 dark:text-blue-500 mb-4 group-hover:scale-110 transition-transform">{skill.icon}</div>
                <h3 className="font-bold text-gray-800 dark:text-gray-200">{skill.name}</h3>
                <p className="text-[10px] text-gray-500 mt-1 uppercase">{skill.tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- EDUCATION SECTION --- */}
      <section id="education" className="py-20 bg-white dark:bg-gray-950 px-6 border-t border-gray-100 dark:border-gray-900 text-left">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-10 flex items-center gap-3 text-gray-900 dark:text-white">
            <GraduationCap className="text-blue-600 dark:text-blue-500" /> Pendidikan
          </h2>
          <div className="space-y-8">
            <div className="relative pl-8 border-l-2 border-blue-600">
              <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-1 shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>
              <h3 className="text-xl font-bold italic text-gray-800 dark:text-gray-100">S1 Pendidikan Teknologi Informasi</h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium">UIN Ar-Raniry (2018 - 2025)</p>
            </div>
            <div className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-800 text-gray-500">
              <h3 className="text-xl font-bold text-gray-700 dark:text-gray-400">SMA Negeri 2 Meulaboh</h3>
              <p className="font-medium">Lulus Tahun 2018</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- PORTOFOLIO / PROJECTS SECTION ---
      <section id="portofolio" className="py-24 px-6 border-t border-gray-100 dark:border-gray-900 bg-white dark:bg-gray-950 text-left">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-12 flex items-center gap-3 text-gray-900 dark:text-white">
            <Code2 className="text-blue-600 dark:text-blue-500" /> Proyek Portofolio
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <a 
                key={i}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 p-8 rounded-3xl hover:border-blue-500 dark:hover:border-blue-500 transition-colors shadow-sm"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                  </div>
                  <p className="text-xs font-mono text-blue-600 dark:text-blue-500 mb-4 uppercase tracking-wider">
                    {project.techStack}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section> */}

      {/* --- EXPERIENCE SECTION --- */}
      <section id="experience" className="py-24 px-6 border-t border-gray-100 dark:border-gray-900 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-12 flex items-center gap-3 text-gray-900 dark:text-white">
            <Briefcase className="text-blue-600 dark:text-blue-500" /> Pengalaman Profesional
          </h2>
          
          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <div key={i} className="bg-white dark:bg-gray-900 p-10 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-sm">
                <div className="flex flex-col md:flex-row justify-between mb-8 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white italic">{exp.role}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">{exp.company} ({exp.period})</p>
                  </div>
                  <span className="text-gray-500 font-mono text-sm bg-gray-100 dark:bg-gray-800 px-4 py-1 rounded-full self-start">
                    {exp.location}
                  </span>
                </div>
                <ul className="space-y-4 text-gray-600 dark:text-gray-400 text-sm">
                  {exp.description.map((desc, j) => (
                    <li key={j} className="flex gap-3 text-left">
                      <span className="text-blue-600 dark:text-blue-500 font-bold mt-0.5">»</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- CERTIFICATES SECTION --- */}
      <section id="certificates" className="py-24 bg-white dark:bg-gray-900/30 px-6 border-t border-gray-100 dark:border-gray-900">
        <div className="max-w-6xl mx-auto text-left">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 flex items-center gap-3">
            <Award className="text-blue-600 dark:text-blue-500 w-8 h-8" /> Sertifikasi & Pengalaman
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certificates.map((cert, i) => (
              <a 
                key={i} 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-8 rounded-3xl hover:border-blue-500/50 hover:bg-white dark:hover:bg-gray-900/80 transition-all duration-300 block relative overflow-hidden shadow-sm"
              >
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-4 h-4 text-blue-500" />
                </div>

                <div className="flex justify-between items-start mb-6 text-left">
                  <div className="p-3 bg-white dark:bg-gray-800 rounded-2xl group-hover:bg-blue-600 transition-colors border border-gray-100 dark:border-gray-700">
                    <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:text-white" />
                  </div>
                  <span className="text-xs font-mono text-gray-400 dark:text-gray-500">{cert.year}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">{cert.title}</h3>
                <p className="text-blue-600 dark:text-blue-500 text-sm font-medium mb-4">{cert.issuer}</p>
                <p className="text-gray-500 dark:text-gray-500 text-sm leading-relaxed">{cert.description}</p>
                
                <div className="mt-6 text-xs font-bold text-blue-500/50 group-hover:text-blue-600 dark:group-hover:text-blue-500 transition uppercase tracking-widest">
                  Klik untuk melihat
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-16 text-center text-gray-500 dark:text-gray-600 text-xs border-t border-gray-100 dark:border-gray-900 bg-white dark:bg-gray-950">
        <p className="mb-2 uppercase tracking-[0.3em] font-light">Rizki Ananda • Banda Aceh • Indonesia</p>
        <p className="opacity-50">© 2026 Developed with Next.js 16 & Tailwind.</p>
      </footer>
    
      {/* --- BACK TO TOP BUTTON --- */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-4 bg-blue-600 text-white rounded-2xl shadow-2xl transition-all duration-300 z-50 hover:bg-blue-500 hover:-translate-y-2 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </div>
  );
}