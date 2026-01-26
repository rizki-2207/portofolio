export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl w-full bg-white shadow-xl rounded-2xl p-10 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Halo, Selamat Datang Di Portofolio Saya!</h1>
        <p className="text-lg text-gray-600 mb-8">
          Saya membangun aplikasi web modern menggunakan Next.js dan JavaScript.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          <div className="p-4 border rounded-lg hover:border-blue-500 transition">
            <h3 className="font-bold">Proyek 1</h3>
            <p className="text-sm text-gray-500">Aplikasi E-commerce dengan React.</p>
          </div>
          <div className="p-4 border rounded-lg hover:border-blue-500 transition">
            <h3 className="font-bold">Proyek 2</h3>
            <p className="text-sm text-gray-500">Dashboard Admin menggunakan Tailwind.</p>
          </div>
        </div>

        <div className="mt-10">
          <a 
            href="mailto:emailanda@example.com"
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition"
          >
            Hubungi Saya
          </a>
        </div>
      </div>
    </main>
  );
}