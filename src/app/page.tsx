"use client";

import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import { 
  Code2, Database, Layout, Terminal, Cpu, Award, 
  Briefcase, FileText, GraduationCap, Mail, Instagram, MapPin, Phone, ExternalLink, ArrowUp, Menu, X
} from "lucide-react";
import { useState, useEffect } from 'react';

export default function Home() {
  const skills = [
  { name: "Frontend", icon: <Layout className="w-5 h-5" />, tech: "React, Next.js, Tailwind" },
  { name: "Backend", icon: <Terminal className="w-5 h-5" />, tech: "Node.js, PHP, JavaScript" },
  { name: "Database", icon: <Database className="w-5 h-5" />, tech: "MySQL, XAMPP" },
  { name: "Development", icon: <Code2 className="w-5 h-5" />, tech: "TypeScript, Git, Vercel" },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    // Memaksa halaman kembali ke atas saat refresh
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);

    // Logika untuk mendeteksi posisi gulir
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const certificates = [
    {
      title: "Ijazah S1 Pendidikan Teknologi Informasi",
      issuer: "UIN Ar-Raniry Banda Aceh",
      year: "2025",
      description: "Bukti kelulusan akademik dengan fokus pada pendidikan dan teknologi informasi.",
      link: "/ijazah-s1-rizki.pdf" // Simpan file ijazah di folder public
    },
    {
      title: "Junior Web Developer",
      issuer: "BPVP Banda Aceh / Sertifikasi Kompetensi",
      year: "2023",
      description: "Pelatihan dasar pengembangan web, algoritma, dan struktur data.",
      link: "/sertifikat-jwd-2023.pdf" // Ganti sesuai nama file Anda di folder public
    },
    {
      title: "Pengembangan Web (Node.js & React)",
      issuer: "BPVP Banda Aceh / Sertifikasi Kompetensi",
      year: "2025",
      description: "Pelatihan intensif membangun aplikasi fullstack modern menggunakan ekosistem JavaScript.",
      link: "/sertifikat-pengembangan-web-2025.pdf" // Ganti sesuai nama file Anda di folder public
    },
    {
      title: "Sertifikat Magang",
      issuer: "Hotel Fhandika Boutique.Inc",
      year: "2025",
      description: "Penghargaan atas kontribusi pengembangan sistem informasi internal hotel selama masa magang.",
      link: "/sertifikat-magang-fhandika.pdf" // Ganti sesuai nama file Anda di folder public
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans scroll-smooth">
      {/* --- NAVBAR --- */}
<nav className="fixed top-0 w-full bg-gray-950/80 backdrop-blur-md border-b border-gray-800 z-50">
  <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
    <span className="font-bold text-xl tracking-tighter text-blue-500 hover:text-blue-400 transition-colors cursor-default">
      RIZKI<span className="text-white">.DEV</span>
    </span>
    
    {/* Tombol Hamburger Mobile */}
    <button 
      className="md:hidden text-gray-400 hover:text-white transition-colors"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
    </button>

    {/* Menu Navigasi Desktop */}
    <div className="hidden md:flex space-x-6 text-sm font-medium text-gray-400">
      {['about', 'skills', 'education', 'experience', 'certificates'].map((item) => (
        <a 
          key={item}
          href={`#${item}`} 
          onClick={(e) => handleSmoothScroll(e, item)}
          className="hover:text-blue-400 transition-colors capitalize relative group"
        >
          {item === 'about' ? 'Tentang' : 
           item === 'skills' ? 'Keahlian' : 
           item === 'education' ? 'Pendidikan' : 
           item === 'experience' ? 'Pengalaman' : 'Sertifikat'}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
        </a>
      ))}
    </div>

    {/* Tombol Kontak Desktop */}
    <div className="hidden md:flex items-center gap-4">
      <a href="/cv-rizki.pdf" target="_blank" className="flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-blue-400 transition">
        <FileText className="w-4 h-4" /> CV
      </a>
      <a href="mailto:Rizkiananda2207@gmail.com" className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-500 transition shadow-lg shadow-blue-900/20">
        Kontak
      </a>
    </div>
  </div>

  {/* Menu Navigasi Mobile (Dropdown) */}
  {isMenuOpen && (
    <div className="md:hidden bg-gray-950 border-b border-gray-800 px-6 py-6 flex flex-col gap-5 animate-in fade-in slide-in-from-top-5 duration-300">
      {['about', 'skills', 'education', 'experience', 'certificates'].map((item) => (
        <a 
          key={item}
          href={`#${item}`} 
          onClick={(e) => {
            handleSmoothScroll(e, item);
            setIsMenuOpen(false); // Tutup menu setelah klik
          }}
          className="text-gray-400 hover:text-blue-400 text-lg font-medium transition-colors"
        >
          {item === 'about' ? 'Tentang' : 
           item === 'skills' ? 'Keahlian' : 
           item === 'education' ? 'Pendidikan' : 
           item === 'experience' ? 'Pengalaman' : 'Sertifikat'}
        </a>
      ))}
      <div className="flex flex-col gap-4 pt-6 border-t border-gray-800">
        <a href="/cv-rizki.pdf" className="text-gray-400 flex items-center gap-2 text-sm">
          <FileText className="w-4 h-4"/> Lihat CV (PDF)
        </a>
        <a href="mailto:Rizkiananda2207@gmail.com" className="text-blue-500 text-sm font-bold uppercase tracking-widest">
          Hubungi Saya
        </a>
      </div>
    </div>
  )}
</nav>

      {/* --- HERO SECTION --- */}
      <section id="about" className="pt-40 pb-20 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="w-48 h-48 rounded-3xl overflow-hidden border-2 border-gray-800 shadow-2xl flex-shrink-0 transition-transform duration-500 hover:scale-105 relative">
            <Image 
              src="/profil.jpg" 
              alt="Rizki Ananda" 
              fill
              className="object-cover bg-gray-900"
              priority
              sizes="(max-width: 768px) 192px, 192px"
            />
          </div>
          <div className="text-left">
            <h1 className="text-6xl font-extrabold mb-3 tracking-tight bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
              Rizki Ananda
            </h1>
            
            <div className="text-blue-400 font-mono text-xl mb-4 h-8">
              <Typewriter
                options={{
                  strings: ['Fullstack Developer', 'React & Next.js Enthusiast', 'Lulusan UIN Ar-Raniry', 'Alumni BPVP Banda Aceh'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>

            <p className="text-gray-400 leading-relaxed mb-6 max-w-xl">
              Lulusan S1 Pendidikan Teknologi Informasi yang ahli dalam membangun solusi digital fungsional. 
              Mampu bekerja secara disiplin, teliti, dan tekun baik secara mandiri maupun tim.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-xs text-gray-500 uppercase tracking-widest">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-500" /> Blang Oi, Banda Aceh
              </span>
              <a href="mailto:Rizkiananda2207@gmail.com" className="flex items-center gap-2 hover:text-blue-400 transition">
                <Mail className="w-4 h-4 text-blue-500" /> Rizkiananda2207@gmail.com
              </a>
              <a href="tel:+6282369392577" className="flex items-center gap-2 hover:text-blue-400 transition">
                <Phone className="w-4 h-4 text-blue-500" /> 0823 6939 2577
              </a>
              <a href="https://instagram.com/rizki_0700" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-400 transition">
                <Instagram className="w-4 h-4 text-blue-500" /> @rizki_0700
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- SKILLS SECTION --- */}
      <section id="skills" className="py-20 bg-gray-900/20 px-6 border-t border-gray-900 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm font-bold text-blue-500 uppercase tracking-[0.3em] mb-12 italic">Keahlian Teknis</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {skills.map((skill, i) => (
              <div key={i} className="flex flex-col items-center p-6 rounded-2xl bg-gray-900/40 border border-gray-800 hover:bg-gray-900 transition group">
                <div className="text-blue-500 mb-4 group-hover:scale-110 transition-transform">{skill.icon}</div>
                <h3 className="font-bold text-gray-200">{skill.name}</h3>
                <p className="text-[10px] text-gray-500 mt-1 uppercase">{skill.tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- EDUCATION SECTION --- */}
      <section id="education" className="py-20 bg-gray-950 px-6 border-t border-gray-900 text-left">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-10 flex items-center gap-3 text-white">
            <GraduationCap className="text-blue-500" /> Pendidikan
          </h2>
          <div className="space-y-8">
            <div className="relative pl-8 border-l-2 border-blue-600">
              <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-1 shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>
              <h3 className="text-xl font-bold italic">S1 Pendidikan Teknologi Informasi</h3>
              <p className="text-blue-400 font-medium">UIN Ar-Raniry (2018 - 2025)</p>
            </div>
            <div className="relative pl-8 border-l-2 border-gray-800 text-gray-500">
              <h3 className="text-xl font-bold">SMA Negeri 2 Meulaboh</h3>
              <p className="font-medium">Lulus Tahun 2018</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- EXPERIENCE SECTION --- */}
      <section id="experience" className="py-24 px-6 border-t border-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-12 flex items-center gap-3 text-white">
            <Briefcase className="text-blue-500" /> Pengalaman Profesional
          </h2>
          <div className="bg-gray-900 p-10 rounded-3xl border border-gray-800">
            <div className="flex flex-col md:flex-row justify-between mb-8 gap-4">
              <div>
                <h3 className="text-2xl font-bold text-white italic">Fullstack Developer</h3>
                <p className="text-blue-400 font-medium">Hotel Fhandika Boutique.Inc (2025)</p>
              </div>
              <span className="text-gray-500 font-mono text-sm bg-gray-800 px-4 py-1 rounded-full self-start">Banda Aceh</span>
            </div>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex gap-3">
                <span className="text-blue-500 font-bold">»</span>
                <span>Fullstack development website menggunakan Node.js dan React.</span>
              </li>
              <li className="flex gap-3 text-left">
                <span className="text-blue-500 font-bold">»</span>
                <span>Manajemen database MySQL (XAMPP) untuk integrasi data aplikasi hotel.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- CERTIFICATES SECTION --- */}
      <section id="certificates" className="py-24 bg-gray-900/30 px-6 border-t border-gray-900">
        <div className="max-w-6xl mx-auto text-left">
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
            <Award className="text-blue-500 w-8 h-8" /> Sertifikasi & Pengalaman
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certificates.map((cert, i) => (
              <a 
                key={i} 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-gray-900 border border-gray-800 p-8 rounded-3xl hover:border-blue-500/50 hover:bg-gray-900/80 transition-all duration-300 block relative overflow-hidden"
              >
                {/* Ikon panah kecil saat hover */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-4 h-4 text-blue-500" />
                </div>

                <div className="flex justify-between items-start mb-6 text-left">
                  <div className="p-3 bg-gray-800 rounded-2xl group-hover:bg-blue-600 transition-colors">
                    <FileText className="w-6 h-6 text-blue-400 group-hover:text-white" />
                  </div>
                  <span className="text-xs font-mono text-gray-500">{cert.year}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition">{cert.title}</h3>
                <p className="text-blue-500 text-sm font-medium mb-4">{cert.issuer}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{cert.description}</p>
                
                <div className="mt-6 text-xs font-bold text-blue-500/50 group-hover:text-blue-500 transition uppercase tracking-widest">
                  Klik untuk melihat
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-16 text-center text-gray-600 text-xs border-t border-gray-900">
        <p className="mb-2 uppercase tracking-[0.3em] font-light">Rizki Ananda • Banda Aceh • Indonesia</p>
        <p className="opacity-50">© 2026 Developed with Next.js 15 & Tailwind</p>
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