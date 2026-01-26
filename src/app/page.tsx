"use client";

import Typewriter from 'typewriter-effect';
import { 
  Code2, Database, Layout, Terminal, Cpu, Award, 
  Briefcase, FileText, GraduationCap, Mail, Instagram, MapPin, Phone, ExternalLink 
} from "lucide-react";

export default function Home() {
  const skills = [
    { name: "Frontend", icon: <Layout className="w-5 h-5" />, tech: "React, HTML, CSS, Tailwind/Bootstrap" },
    { name: "Backend", icon: <Terminal className="w-5 h-5" />, tech: "Node.js, PHP, JavaScript" },
    { name: "Database", icon: <Database className="w-5 h-5" />, tech: "MySQL, XAMPP" },
    { name: "Tools", icon: <Cpu className="w-5 h-5" />, tech: "VS Code, Git, Vercel" },
  ];

  const certificates = [
    {
      title: "Web Developer",
      issuer: "BPVP Banda Aceh",
      year: "2025",
      description: "Pelatihan intensif pengembangan aplikasi web berbasis industri.",
    },
    {
      title: "S1 Pendidikan Teknologi Informasi",
      issuer: "UIN Ar-Raniry",
      year: "2025",
      description: "Gelar sarjana dengan fokus pada teknologi instruksional dan pemrograman.",
    },
    {
      title: "Javascript Modern",
      issuer: "Dicoding / Coursera",
      year: "2024",
      description: "Pemahaman mendalam tentang ES6+, Asynchronous, dan DOM.",
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans scroll-smooth">
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full bg-gray-950/80 backdrop-blur-md border-b border-gray-800 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-xl tracking-tighter text-blue-500 underline decoration-blue-500/20">RIZKI.DEV</span>
          
          <div className="hidden md:flex space-x-6 text-sm font-medium text-gray-400">
            <a href="#about" className="hover:text-white transition">Tentang</a>
            <a href="#skills" className="hover:text-white transition">Keahlian</a>
            <a href="#education" className="hover:text-white transition">Pendidikan</a>
            <a href="#experience" className="hover:text-white transition">Pengalaman</a>
            <a href="#certificates" className="hover:text-white transition">Sertifikat</a>
          </div>

          <div className="flex items-center gap-4">
            {/* MENU CV DIKEMBALIKAN */}
            <a 
              href="/cv-rizki.pdf" // Pastikan file CV Anda ada di folder 'public' dengan nama ini
              target="_blank" 
              className="flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-blue-400 transition"
            >
              <FileText className="w-4 h-4" /> CV
            </a>
            <a href="mailto:Rizkiananda2207@gmail.com" className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-500 transition shadow-lg shadow-blue-900/20">
              Kontak
            </a>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="about" className="pt-40 pb-20 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="w-48 h-48 rounded-3xl overflow-hidden border-2 border-gray-800 shadow-2xl flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-500">
            <img src="/profil.jpg" alt="Rizki Ananda" className="bg-gray-900" />
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
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-500" /> Blang Oi, Banda Aceh</span>
              <span className="flex items-center gap-2"><Mail className="w-4 h-4 text-blue-500" /> Rizkiananda2207@gmail.com</span>
              <span className="flex items-center gap-2"><Phone className="w-4 h-4 text-blue-500" /> 0823 6939 2577</span>
              <span className="flex items-center gap-2"><Instagram className="w-4 h-4 text-blue-500" /> @rizki_0700</span>
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
            <Award className="text-blue-500 w-8 h-8" /> Sertifikasi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certificates.map((cert, i) => (
              <div key={i} className="group bg-gray-900 border border-gray-800 p-8 rounded-3xl hover:border-blue-500/50 transition-all duration-300">
                <div className="flex justify-between items-start mb-6 text-left">
                  <div className="p-3 bg-gray-800 rounded-2xl group-hover:bg-blue-600 transition-colors">
                    <FileText className="w-6 h-6 text-blue-400 group-hover:text-white" />
                  </div>
                  <span className="text-xs font-mono text-gray-500">{cert.year}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                <p className="text-blue-500 text-sm font-medium mb-4">{cert.issuer}</p>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-16 text-center text-gray-600 text-xs border-t border-gray-900">
        <p className="mb-2 uppercase tracking-[0.3em] font-light">Rizki Ananda • Banda Aceh • Indonesia</p>
        <p className="opacity-50">© 2026 Developed with Next.js 15 & Tailwind</p>
      </footer>
    </div>
  );
}