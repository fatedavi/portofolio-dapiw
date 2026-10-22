export const projects = [
  {
    id: "cms-toko-buket-bunga",
    title: "CMS Toko Buket Bunga",
    summary:
      "Content Management System untuk toko buket bunga dengan dashboard admin, katalog produk, blog, fitur chat pelanggan, dan preview sebelum konten dipublikasikan.",
    description:
      "CMS (Content Management System) untuk toko buket bunga yang dibangun dengan Laravel, Vue.js, Tailwind CSS, dan MySQL. Seluruh konten toko dikelola dari satu dashboard admin: mulai dari katalog produk beserta stok dan varian buket, artikel blog untuk content marketing, sampai halaman profil toko. Tersedia fitur chat pelanggan agar komunikasi dengan pembeli tidak terpotong di luar jam operasional. Pengubahan konten dilakukan pada halaman admin, dan setiap perubahan dapat dicek hasilnya lewat preview sebelum benar-benar dipublikasikan ke halaman toko.",
    features: [
      "Dashboard admin rekap data toko",
      "Manajemen katalog produk buket bunga",
      "Blog untuk publikasi artikel dan konten promo",
      "Halaman admin untuk mengelola seluruh konten",
      "Fitur chat pelanggan",
      "Edit content dengan preview sebelum dipublikasikan",
    ],
    tech: ["Laravel", "Vue.js", "Tailwind CSS", "MySQL"],
    image: "/images/buket-bunga/dashboard.jpg",
    gallery: [
      {
        src: "/images/buket-bunga/dashboard.jpg",
        thumb: "/images/buket-bunga/thumbs/dashboard.jpg",
        label: "Dashboard admin",
      },
      {
        src: "/images/buket-bunga/katalog.jpg",
        thumb: "/images/buket-bunga/thumbs/katalog.jpg",
        label: "Katalog produk",
      },
      {
        src: "/images/buket-bunga/blog.jpg",
        thumb: "/images/buket-bunga/thumbs/blog.jpg",
        label: "Halaman blog",
      },
      {
        src: "/images/buket-bunga/admin-page.jpg",
        thumb: "/images/buket-bunga/thumbs/admin-page.jpg",
        label: "Admin page",
      },
      {
        src: "/images/buket-bunga/feat-chat.jpg",
        thumb: "/images/buket-bunga/thumbs/feat-chat.jpg",
        label: "Fitur chat pelanggan",
      },
      {
        src: "/images/buket-bunga/edit-content-preview.jpg",
        thumb: "/images/buket-bunga/thumbs/edit-content-preview.jpg",
        label: "Edit content + preview",
      },
    ],
    github: null,
    live: null,
    role: "Full-stack Developer",
    year: "2026",
    category: "CMS",
  },
  {
    id: "gudang-inventory",
    title: "Aplikasi Gudang Inventory",
    summary:
      "Dashboard manajemen inventori gudang dengan CRUD data barang, pemantauan kapasitas gudang, riwayat aktivitas otomatis, dan laporan stok yang bisa diekspor ke PDF.",
    description:
      "Aplikasi dashboard manajemen inventori gudang yang dibangun dengan Laravel, Blade, Tailwind CSS, Chart.js, dan MySQL. Tampilannya mengambil nuansa ERP: seluruh kondisi gudang terbaca sekilas dari kartu ringkasan dan grafik stok per kategori yang ditandai batas kapasitas maksimum secara visual. Pengelolaan data barang dilakukan lewat tabel dengan pencarian serta filter status, kategori, dan rentang tanggal, sementara kapasitas gudang bisa diatur sendiri sehingga sistem otomatis memberi peringatan saat stok melebihi batas. Setiap perubahan barang tercatat otomatis pada riwayat aktivitas, dan laporan stok untuk barang gudang, barang baru, barang lama, maupun barang terjual dapat dicetak ke PDF.",
    features: [
      "Dashboard dengan kartu ringkasan dan grafik stok per kategori",
      "CRUD data barang dengan pencarian dan filter status, kategori, serta tanggal",
      "Manajemen kapasitas gudang dengan deteksi kondisi overload",
      "Pencatatan barang keluar, barang kembali (retur), dan barang terjual",
      "Riwayat aktivitas otomatis untuk setiap perubahan data barang",
      "Laporan barang gudang, baru, lama, dan terjual dengan export PDF",
    ],
    tech: ["Laravel", "Blade", "Tailwind CSS", "Chart.js", "MySQL"],
    image: "/images/gudang-inventory/dashboard.jpg",
    gallery: [
      {
        src: "/images/gudang-inventory/dashboard.jpg",
        thumb: "/images/gudang-inventory/thumbs/dashboard.jpg",
        label: "Dashboard",
      },
      {
        src: "/images/gudang-inventory/data-barang.jpg",
        thumb: "/images/gudang-inventory/thumbs/data-barang.jpg",
        label: "Data barang",
      },
      {
        src: "/images/gudang-inventory/seller-page-jual-ambil.jpg",
        thumb: "/images/gudang-inventory/thumbs/seller-page-jual-ambil.jpg",
        label: "Seller page (jual & ambil barang)",
      },
      {
        src: "/images/gudang-inventory/laporan-barang.jpg",
        thumb: "/images/gudang-inventory/thumbs/laporan-barang.jpg",
        label: "Laporan barang masuk, keluar, terjual, dan lama",
      },
      {
        src: "/images/gudang-inventory/riwayat-aktivitas.jpg",
        thumb: "/images/gudang-inventory/thumbs/riwayat-aktivitas.jpg",
        label: "Riwayat aktivitas",
      },
    ],
    github: "https://github.com/fatedavi/gudang-warehouse",
    live: null,
    role: "Full-stack Developer",
    year: "2026",
    category: "Inventory System",
  },
  {
    id: "analisis-sentimen-arknights",
    title: "Analisis Sentimen Ulasan Arknights: Endfield",
    summary:
      "Analisis sentimen ulasan Google Play Store Arknights: Endfield menggunakan Multinomial Naïve Bayes + TF-IDF untuk klasifikasi positif/negatif beserta visualisasi hasil analisis.",
    description:
      "Aplikasi analisis sentimen berbasis web untuk mengklasifikasikan ulasan pengguna Arknights: Endfield di Google Play Store ke dalam sentimen positif atau negatif. Pipeline ML dibangun terpisah (scraping, praproses, pelabelan, pembelajaran, evaluasi) dengan Multinomial Naïve Bayes dan representasi TF-IDF. Aplikasi dibangun dengan Laravel, Inertia.js, React 19, TypeScript, dan Tailwind CSS untuk menampilkan hasil klasifikasi, confusion matrix, metrik evaluasi (akurasi, presisi, recall, F1), word cloud, serta daftar ulasan beserta prediksi sentimennya.",
    features: [
      "Klasifikasi sentimen biner (positif / negatif) dengan Multinomial Naïve Bayes + TF-IDF",
      "Dashboard hasil analisis dan sentiment score",
      "Confusion matrix, metrik evaluasi, serta perbandingan grid eksperimen (12 kombinasi)",
      "Visualisasi data (distribusi prediksi, cloud kata)",
      "Daftar ulasan pengguna beserta label prediksi",
      "Pipeline ML terpisah (Python + scikit-learn) dengan artefak hasil terintegrasi ke web",
    ],
    tech: ["Laravel", "Inertia.js", "React 19", "TypeScript", "Tailwind CSS", "Python", "scikit-learn"],
    image: "/images/analisis-sentimen/analisis-sentimen-komentar.jpg",
    gallery: [
      {
        src: "/images/analisis-sentimen/analisis-sentimen-komentar.jpg",
        thumb: "/images/analisis-sentimen/thumbs/analisis-sentimen-komentar.jpg",
        label: "Dashboard & visualisasi analisis sentimen",
      },
    ],
    github: "https://github.com/fatedavi/analisis-ulasan-game",
    live: null,
    role: "Full-stack Developer",
    year: "2026",
    category: "Skripsi",
  },
  {
    id: "medokan-ayau-digital-hub",
    title: "Medokan Ayau Digital Hub",
    summary:
      "Project skripsi: platform digital hub Medokan Ayau dengan fitur katalog, penyewaan stand, dan dashboard admin untuk pengaturan stand.",
    description:
      "Medokan Ayau Digital Hub adalah platform digital hub yang saya kembangkan sebagai project skripsi. Aplikasi ini memusatkan informasi tenant Medokan Ayau dalam bentuk katalog yang rapi dan mudah ditelusuri, menyediakan alur penyewaan stand mulai dari pemilihan stand, pengecekan ketersediaan, hingga konfirmasi pemesanan, serta dashboard admin yang memungkinkan pengelola mengatur konfigurasi stand seperti harga, ketersediaan slot, dan penempatan lokasi stand. Saat ini pengembangan masih berfokus pada tiga fitur inti ini sebelum dilanjutkan ke iterasi berikutnya.",
    features: [
      "Katalog tenant dan produk Medokan Ayau",
      "Penyewaan stand dengan pengecekan ketersediaan",
      "Dashboard admin untuk mengatur konfigurasi stand",
    ],
    tech: ["Laravel", "Vue.js", "Tailwind CSS", "MySQL"],
    image: "/images/projects/medokan-ayau-digital-hub.jpg",
    github: null,
    live: null,
    role: "Full-stack Developer",
    year: "2026",
    category: "Skripsi",
  },
  {
    id: "invoice-hr-management",
    title: "Invoice Management System & HR Management",
    summary:
      "Full-stack Invoice Management System dan HR Management dengan Laravel, MySQL, dan Tailwind CSS yang terintegrasi dengan database lama perusahaan.",
    description:
      "Aplikasi full-stack untuk mengelola invoice dan HR Management. Dibangun dengan Laravel, Vue.js, MySQL, dan Tailwind CSS, serta terintegrasi langsung dengan database lama perusahaan sehingga pencatatan yang sudah berjalan tidak perlu dihentikan selama proses migrasi. Aplikasi ini dikembangkan selama masa magang di PT Multi Power Abadi.",
    features: [
      "Manajemen invoice beserta data pelanggan",
      "Modul HR Management",
      "Integrasi dengan database lama perusahaan",
    ],
    tech: ["Laravel", "Vue.js", "Tailwind CSS", "MySQL"],
    image: "/images/projects/invoice-hr-management.jpg",
    github: "https://github.com/fatedavi/MPA-project",
    live: "https://epower.multipowerabadi.co.id/",
    role: "Web Developer Intern",
    year: "2025",
    category: "Internship Project",
  },
  {
    id: "dashboard-sekolah",
    title: "Dashboard Sekolah Berbasis Web",
    summary:
      "Dashboard berbasis web dengan fitur manajemen siswa, kelas, absen, dan nilai untuk keperluan administrasi sekolah.",
    description:
      "Dashboard berbasis web untuk keperluan administrasi sekolah. Seluruh data operasional sekolah, mulai dari data siswa, pembagian kelas, pencatatan kehadiran, sampai penilaian, dikelola dalam satu aplikasi agar guru dan staff administrasi cukup bekerja dari satu tempat. Frontend memakai Vue.js dengan data disimpan di MySQL dan diproses melalui Laravel.",
    features: [
      "Manajemen data siswa",
      "Manajemen kelas",
      "Absensi siswa",
      "Pengelolaan nilai",
    ],
    tech: ["Laravel", "Vue.js", "MySQL"],
    image: "/images/projects/dashboard-sekolah.jpg",
    github: "https://github.com/fatedavi/akademik-app",
    live: null,
    category: "Web Application",
  },
  {
    id: "aplikasi-pos",
    title: "Aplikasi Web POS",
    summary:
      "Aplikasi kasir (Point of Sale) sederhana berbasis web menggunakan CodeIgniter 3 untuk kebutuhan toko ritel.",
    description:
      "Aplikasi kasir (Point of Sale) sederhana yang dibangun dengan CodeIgniter 3 dan MySQL untuk kebutuhan toko ritel. Fokusnya adalah alur transaksi yang ringkas supaya kasir bisa melayani pembeli dengan cepat, mulai dari pemilihan produk, perhitungan total, hingga pencetakan struk.",
    features: [
      "Transaksi kasir (Point of Sale)",
      "Antarmuka berbasis web untuk toko ritel",
    ],
    tech: ["CodeIgniter 3", "PHP", "MySQL"],
    image: "/images/projects/aplikasi-pos.jpg",
    github: null,
    live: null,
    category: "Web Application",
  },
  {
    id: "digital-agency",
    title: "Project Team Digital Agency",
    summary:
      "Platform web Creative Digital Agency dengan modul manajemen project, Accounting, dan HR Management untuk tim agensi kreatif.",
    description:
      "Platform web untuk Creative Digital Agency yang dipakai untuk menjalankan operasional tim agensi kreatif. Di dalam satu aplikasi tersedia modul manajemen project untuk memantau progres pekerjaan, modul Accounting untuk pencatatan keuangan, serta HR Management untuk data pegawai tim. Dibangun dengan kombinasi Laravel, Vue.js, MongoDB, Symfony, dan PHP Native sesuai kebutuhan tiap modul.",
    features: [
      "Manajemen project tim agensi",
      "Modul Accounting",
      "HR Management",
    ],
    tech: ["Laravel", "Vue.js", "MongoDB", "Symfony", "PHP Native"],
    image: "/images/projects/digital-agency.jpg",
    github: null,
    live: null,
    category: "Team Project",
  },
];
