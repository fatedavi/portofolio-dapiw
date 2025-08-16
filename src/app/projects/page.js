export default function Projects() {
  const projects = [
    { name: "Sistem Absensi Karyawan", desc: "App berbasis Laravel + MongoDB" },
    { name: "Fruit Sando Website", desc: "E-commerce kecil untuk jualan roti buah" },
    { name: "Portfolio Next.js", desc: "Website pribadi dengan Next.js + Tailwind" },
  ];

  return (
    <section className="mt-10">
      <h2 className="text-3xl font-bold mb-4">Proyek Saya</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <div key={i} className="p-6 bg-white rounded-lg shadow hover:shadow-lg">
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p className="text-gray-600 mt-2">{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
