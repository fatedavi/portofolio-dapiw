export default function Contact() {
  return (
    <section className="mt-10 text-center">
      <h2 className="text-3xl font-bold mb-4">Kontak</h2>
      <p className="text-gray-700 mb-4">
        Ingin berkolaborasi? Hubungi saya lewat email atau media sosial.
      </p>
      <div className="space-x-6">
        <a href="mailto:emailkamu@gmail.com" className="text-blue-600 hover:underline">
          Email
        </a>
        <a href="https://github.com/username" className="text-blue-600 hover:underline">
          GitHub
        </a>
        <a href="https://linkedin.com/in/username" className="text-blue-600 hover:underline">
          LinkedIn
        </a>
      </div>
    </section>
  );
}
