import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* --- MENU BAR --- */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b z-50">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-xl tracking-tighter">RIZKI.DEV</span>
          <div className="space-x-8 text-sm font-medium">
            <a href="#about" className="hover:text-blue-600 transition">Tentang</a>
            <a href="#projects" className="hover:text-blue-600 transition">Proyek</a>
            <a href="mailto:emailanda@example.com" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
              Kontak
            </a>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION (Foto & Deskripsi) --- */}
      <section id="about" className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* FOTO PROFIL */}
          <div className="relative w-32 h-32 mx-auto mb-6">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-blue-50 bg-gray-200">
               {/* Ganti URL di bawah dengan foto Anda nanti */}
              <img 
                src="/profil.jpg" 
                alt="Foto Profil Rizki Ananda"
                className="object-cover"
              />
            </div>
          </div>

          <h1 className="text-5xl font-extrabold mb-4 tracking-tight">
            Halo, Saya Rizki Ananda
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Seorang Web Developer yang berfokus pada pembangunan aplikasi modern menggunakan 
            <span className="text-blue-600 font-semibold"> React, Node.js, dan Next.js</span>. 
            Saya senang mengubah ide rumit menjadi solusi digital yang sederhana dan fungsional.
          </p>
        </div>
      </section>

      {/* --- PROYEK SECTION --- */}
      <section id="projects" className="py-20 bg-gray-50 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-10 text-center">Proyek Unggulan</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Kartu Proyek 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border hover:shadow-md transition">
              <span className="text-blue-600 text-sm font-bold uppercase">Web App</span>
              <h3 className="text-xl font-bold mt-2 mb-3">Sistem Inventaris Barang</h3>
              <p className="text-gray-600 mb-4">Membangun sistem manajemen barang menggunakan Node.js dan Prisma untuk efisiensi operasional.</p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-gray-100 rounded-md text-xs">Next.js</span>
                <span className="px-3 py-1 bg-gray-100 rounded-md text-xs">Prisma</span>
              </div>
            </div>

            {/* Kartu Proyek 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border hover:shadow-md transition">
              <span className="text-blue-600 text-sm font-bold uppercase">Creative</span>
              <h3 className="text-xl font-bold mt-2 mb-3">Portal Pegawai Atlanta Group</h3>
              <p className="text-gray-600 mb-4">Pengembangan dashboard portal pegawai terintegrasi dengan Google Apps Script dan Sheets.</p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-gray-100 rounded-md text-xs">Apps Script</span>
                <span className="px-3 py-1 bg-gray-100 rounded-md text-xs">JavaScript</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-10 text-center border-t text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} Rizki Ananda. Dibuat dengan Next.js & Vercel.</p>
      </footer>
    </div>
  );
}