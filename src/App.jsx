export default function PortfolioWebsite() {
  return (
    <div className="bg-slate-950 text-white min-h-screen font-sans scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-slate-950/90 backdrop-blur-md border-b border-slate-800 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-cyan-400">Hilmii.dev</h1>

          <ul className="hidden md:flex gap-8 text-sm font-medium">
            <li><a href="#home" className="hover:text-cyan-400 transition">Home</a></li>
            <li><a href="#about" className="hover:text-cyan-400 transition">About</a></li>
            <li><a href="#skills" className="hover:text-cyan-400 transition">Skills</a></li>
            <li><a href="#projects" className="hover:text-cyan-400 transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-6 pt-24"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-cyan-400 text-lg mb-3">Hello, I'm</p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Muhammad Hilmii <br />
              <span className="text-cyan-400">Saliim</span>
            </h1>

            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Mahasiswa Sistem Informasi angkatan 2025 di Universitas Brawijaya.
              Memiliki minat pada UI/UX Design, Web Development, dan teknologi digital.
            </p>

            <div className="flex gap-4 flex-wrap">
              <a
                href="#projects"
                className="bg-cyan-400 text-slate-950 px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition"
              >
                Lihat Project
              </a>

              <a
                href="#contact"
                className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-2xl font-semibold hover:bg-cyan-400 hover:text-slate-950 transition"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-400 blur-3xl opacity-30 rounded-full"></div>

              <img
                src={`${import.meta.env.BASE_URL}profile.jpg`}
                alt="Muhammad Hilmii Saliim"
                className="w-64 h-64 rounded-full object-cover border-4 border-blue-500 shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 bg-slate-900">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-cyan-400">About Me</h2>

          <p className="text-slate-300 text-lg leading-relaxed">
            Saya adalah mahasiswa semester 2 Program Studi Sistem Informasi Universitas Brawijaya.
            Saya tertarik dalam pengembangan website, desain antarmuka pengguna (UI/UX),
            serta teknologi digital yang dapat membantu menyelesaikan berbagai permasalahan.
            Saat ini saya sedang mempelajari HTML, CSS, JavaScript, Laravel, dan MySQL.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-14 text-cyan-400">
            Skills
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "Laravel",
              "MySQL",
              "UI/UX Design",
            ].map((skill) => (
              <div
                key={skill}
                className="bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:border-cyan-400 hover:-translate-y-2 transition duration-300"
              >
                <h3 className="text-2xl font-semibold text-cyan-400 mb-3">
                  {skill}
                </h3>

                <p className="text-slate-300">
                  Memiliki pemahaman dasar dan terus mengembangkan kemampuan dalam bidang ini.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-14 text-cyan-400">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "CRUD Laravel",
                desc: "Membuat sistem CRUD menggunakan Laravel untuk mengelola data posting.",
              },
              {
                title: "Sistem Manajemen Kos",
                desc: "Project SQL untuk mengelola data penghuni, pembayaran, dan kamar kos.",
              },
              {
                title: "UI/UX Design",
                desc: "Merancang tampilan antarmuka yang modern, responsif, dan user friendly.",
              },
              {
                title: "BPMN Business Process",
                desc: "Membuat model proses bisnis menggunakan BPMN dalam studi kasus organisasi.",
              },
            ].map((project) => (
              <div
                key={project.title}
                className="bg-slate-950 border border-slate-800 p-8 rounded-3xl hover:border-cyan-400 transition"
              >
                <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
                  {project.title}
                </h3>

                <p className="text-slate-300 leading-relaxed">
                  {project.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-cyan-400">Contact</h2>

          <p className="text-slate-300 text-lg mb-10">
            Terima kasih telah mengunjungi portfolio saya.
            Silakan hubungi saya melalui media berikut.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800">
              <h3 className="text-cyan-400 font-semibold text-xl mb-2">Email</h3>
              <p className="text-slate-300">muhammadhilmiisaliim01@gmail.com</p>
            </div>

            <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800">
              <h3 className="text-cyan-400 font-semibold text-xl mb-2">Instagram</h3>
              <p className="text-slate-300">@liim_miii</p>
            </div>

            <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800">
              <h3 className="text-cyan-400 font-semibold text-xl mb-2">GitHub</h3>
              <p className="text-slate-300">github.com/mhilmiisaliim</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-slate-400 text-sm">
        © 2026 Muhammad Hilmii Saliim — Portfolio Website
      </footer>
    </div>
  );
}
