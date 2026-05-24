import React from "react";
import "./about.css";

export default function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        {/* Header */}
        <div className="about-header">
          <h1>Tentang AruCORP</h1>
          <p className="about-subtitle">Smart Roadmap System</p>
        </div>

        {/* Introduction Section */}
        <section className="about-section">
          <div className="about-intro">
            <p>
              <b>AruCORP : Smart Roadmap System </b>adalah aplikasi manajemen pengadaan berbasis web yang dirancang untuk mengoptimalkan perencanaan pembelian aset secara taktis dan terukur. Mengambil inspirasi dari istilah "Procura" (Procurement), nama ini juga berakar pada filosofi bahasa Jepang "Aru" (ある / 有る) yang berarti "Ada" atau "Terwujud". Melalui pendekatan tata kelola logistik profesional, aplikasi ini bertindak sebagai jembatan antara ambisi dan realita—mentransformasi daftar keinginan (wishlist) statis menjadi sebuah cetak biru (roadmap) finansial dinamis yang memastikan setiap rencana pengadaan pada akhirnya benar-benar terwujud nyata.
            </p>
          </div>
        </section>

        {/* Main Features Section */}
        <section className="about-section">
          <h2>Fitur Utama & Mekanisme</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Prioritas & Alokasi Dinamis</h3>
              <p>
                Pengguna bisa memasukkan daftar item beserta harga dan tingkat
                urgensinya. Sistem akan menyusun urutan eksekusi secara cerdas
                berdasarkan skala prioritas.
              </p>
            </div>

            <div className="feature-card">
              <h3>Algoritme Tabungan Lintas Periode</h3>
              <p>
                Solusi ini membantu menghindari kebiasaan impulsif. Jika alokasi
                anggaran saat ini belum cukup untuk membeli item berikutnya, sisa
                dana tidak dianggap hilang, melainkan dilipatgandakan sebagai
                tabungan untuk periode selanjutnya.
              </p>
            </div>

            <div className="feature-card">
              <h3>Roadmap Pengadaan Otomatis</h3>
              <p>
                Sistem melakukan simulasi matematika untuk memproyeksikan jadwal
                pembelian, menentukan item mana yang bisa dibeli setiap periode,
                hingga semua target pengadaan terpenuhi.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Specifications Section */}
        <section className="about-section">
          <h2>Spesifikasi Teknis & Arsitektur</h2>
          <p className="about-text">
            AruCORP dibangun dengan arsitektur modern, ringan, cepat, dan
            responsif agar pengalaman pengguna tetap optimal:
          </p>

          <div className="tech-specs">
            <div className="spec-item">
              <h4>Framework Frontend</h4>
              <p>
                Berbasis React, menggunakan arsitektur komponen modular dan
                reaktif untuk menampilkan visualisasi roadmap dan alokasi anggaran
                secara real-time.
              </p>
            </div>

            <div className="spec-item">
              <h4>Manajemen Data</h4>
              <p>
                Menggunakan struktur penyimpanan berbasis db.json sebagai pondasi
                basis data yang efisien, sehingga proses baca dan tulis data
                pengadaan berjalan lancar dengan format yang terstruktur.
              </p>
            </div>
          </div>

          <div className="about-closing">
            <p>
              <strong>
                AruCORP hadir untuk menjembatani ambisi dan kenyataan, memastikan
                setiap rencana pengadaan yang tercatat dapat diwujudkan melalui
                perhitungan yang tepat.
              </strong>
            </p>
          </div>
        </section>

        {/* Footer/Credits */}
        <footer className="about-footer">
          <p>© 2026 anozeref.id. Dibuat oleh anozeref.id,  untuk anozeref.id</p>
          <p className="about-footer-disclaimer">Source code tersedia di GitHub. Namun, proyek ini ditujukan untuk penggunaan pribadi tanpa dukungan teknis sama sekali. Bebas oprek, tanpa layanan.</p>
        </footer>
      </div>
    </div>
  );
}
