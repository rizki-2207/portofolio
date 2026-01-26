import { Code2, Database, Layout, Terminal, Cpu, Award, Briefcase, FileText, GraduationCap } from "lucide-react";

export default function Home() {
  const skills = [
    { name: "Frontend", icon: <Layout className="w-5 h-5" />, tech: "React, Next.js, Tailwind" },
    { name: "Backend", icon: <Terminal className="w-5 h-5" />, tech: "Node.js, Express, JWT" },
    { name: "Database", icon: <Database className="w-5 h-5" />, tech: "Prisma, Google Sheets, MySQL" },
    { name: "Tools", icon: <Cpu className="w-5 h-5" />, tech: "Git, Vercel, Apps Script" },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans scroll-smooth">
      {/* --- MENU BAR --- */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-xl tracking-tighter text-blue-600">RIZKI.DEV</span>
          
          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-6 text-sm font-medium">
            <a href="#about" className="hover:text-blue-600 transition">Tentang</a>
            <a href="#experience" className="hover:text-blue-600 transition">Magang & Pelatihan</a>
            <a href="#certificates" className="hover:text-blue-600 transition">Sertifikat</a>
            <a href="#projects" className="hover:text-blue-600 transition">Proyek</a>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="/cv-rizki.pdf" // Simpan file CV Anda di folder public dengan nama ini
              target="_blank"
              className="flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-blue-600 transition"
            >
              <FileText className="w-4 h-4" /> CV
            </a>
            <a href="mailto:rizkiananda2207@gmail.com" className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition">
              Kontak
            </a>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="about" className="pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-50 bg-gray-100 shadow-sm">
            <img src="/profil.jpg" alt="Rizki Ananda" />
          </div>
          <h1 className="text-5xl font-extrabold mb-4 tracking-tight">Rizki Ananda</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Web Developer yang berfokus pada efisiensi koding dan solusi digital kreatif.
          </p>
        </div>
      </section>

      {/* --- SECTION: MAGANG & PELATIHAN --- */}
      <section id="experience" className="py-16 bg-gray-50 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-10 flex items-center gap-2">
            <Briefcase className="text-blue-600" /> Magang & Pelatihan
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <span className="text-blue-600 font-bold text-xs uppercase">Magang (OJT)</span>
              <h3 className="text-lg font-bold mt-1">Web Developer di Atlanta Group</h3>
              <p className="text-sm text-gray-500 mb-4">Membangun portal pegawai dan integrasi database Sheets.</p>
              <p className="text-xs text-gray-400 italic">Oktober 2025 - Selesai</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <span className="text-green-600 font-bold text-xs uppercase">Pelatihan</span>
              <h3 className="text-lg font-bold mt-1">Fullstack Web Development</h3>
              <p className="text-sm text-gray-500 mb-4">Fokus pada React, Node.js, dan optimasi database Prisma.</p>
              <p className="text-xs text-gray-400 italic">2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION: SERTIFIKAT --- */}
      <section id="certificates" className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-10 flex items-center gap-2">
            <Award className="text-blue-600" /> Sertifikasi
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {["Javascript Modern", "React & Next.js Expert", "Database Management"].map((cert, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl border aspect-video flex flex-col items-center justify-center bg-gray-50 hover:bg-blue-50 transition">
                <FileText className="w-8 h-8 text-gray-300 group-hover:text-blue-400 mb-2" />
                <p className="font-bold text-sm px-4 text-center">{cert}</p>
                <span className="text-[10px] text-gray-400 mt-1 uppercase tracking-widest">Lihat Sertifikat</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION: SKILLS (Ringkas) --- */}
      <section className="py-16 bg-blue-600 text-white px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, i) => (
            <div key={i} className="flex flex-col items-center">
              {skill.icon}
              <h3 className="font-bold mt-2">{skill.name}</h3>
              <p className="text-[10px] opacity-80">{skill.tech}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 text-center text-gray-400 text-xs border-t">
        <p>© {new Date().getFullYear()} Rizki Ananda. Dibuat dengan semangat.</p>
      </footer>
    </div>
  );
}