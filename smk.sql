-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 25, 2018 at 04:10 PM
-- Server version: 10.1.35-MariaDB
-- PHP Version: 7.2.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `smk`
--

-- --------------------------------------------------------

--
-- Table structure for table `tb_bukutamu`
--

CREATE TABLE `tb_bukutamu` (
  `id` int(11) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `no_telp` varchar(15) NOT NULL,
  `email` varchar(100) NOT NULL,
  `waktu` datetime NOT NULL,
  `komentar` text NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tb_bukutamu`
--

INSERT INTO `tb_bukutamu` (`id`, `nama`, `no_telp`, `email`, `waktu`, `komentar`, `status`) VALUES
(1, 'Rindho Ananta Samat', '081350996050', 'rindo.ananta@gmail.com', '2017-03-08 00:44:03', 'Ini message pertama', 0),
(2, 'Rindho Ananta Samat', '081350996050', 'rindo.ananta@gmail.com', '2017-03-08 12:46:39', 'Ini message kedua.', 0),
(3, 'Rindho Ananta Samat', '081350996050', 'rindo.ananta@gmail.com', '2017-03-08 09:03:00', 'knasdlkjasdlkj', 0);

-- --------------------------------------------------------

--
-- Table structure for table `tb_konten`
--

CREATE TABLE `tb_konten` (
  `id` int(11) NOT NULL,
  `judul` varchar(100) NOT NULL,
  `jurusan` varchar(10) NOT NULL,
  `deskripsi` text NOT NULL,
  `gambar` varchar(50) NOT NULL,
  `waktu_buat` datetime NOT NULL,
  `waktu_ubah` datetime NOT NULL,
  `tipe_konten` varchar(50) NOT NULL,
  `status` int(1) NOT NULL,
  `penulis` varchar(30) NOT NULL,
  `dilihat` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tb_konten`
--

INSERT INTO `tb_konten` (`id`, `judul`, `jurusan`, `deskripsi`, `gambar`, `waktu_buat`, `waktu_ubah`, `tipe_konten`, `status`, `penulis`, `dilihat`) VALUES
(1, 'TEST KONTEN BERITA', 'umum', '', '', '2018-09-24 14:15:00', '0000-00-00 00:00:00', 'berita', 1, 'admin', 0);

-- --------------------------------------------------------

--
-- Table structure for table `tb_pengaturan`
--

CREATE TABLE `tb_pengaturan` (
  `id` int(11) NOT NULL,
  `judul` varchar(20) NOT NULL,
  `deskripsi` text NOT NULL,
  `waktu_ubah` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tb_profil`
--

CREATE TABLE `tb_profil` (
  `id` int(11) NOT NULL,
  `judul` varchar(20) NOT NULL,
  `deskripsi` text NOT NULL,
  `gambar` text NOT NULL,
  `waktu_ubah` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tb_profil`
--

INSERT INTO `tb_profil` (`id`, `judul`, `deskripsi`, `gambar`, `waktu_ubah`) VALUES
(1, 'sejarah singkat', '', '', '0000-00-00 00:00:00'),
(3, 'visi', '<ul>\r\n<li>Menjadi Sekolah Bidang Teknologi Informasi Dan Komunikasi Bertaraf Internasional Berwawasan Lingkungan Dilandasi Iman Dan Taqwa</li>\r\n</ul>', '', '2018-07-08 20:02:00'),
(4, 'misi', '<ul>\r\n<li>Menjadikan agama sebagai sumber motivasi dan inspirasi</li>\r\n<li>Mewujudkan sekolah yang bersih, hijau dan indah (green school)</li>\r\n<li>Menyelenggarakan pendidikan dan pelatihan yang berstandar internasional</li>\r\n<li>Menghasilkan tamatan yang bermutu, kompetitif dan mandiri</li>\r\n</ul>', '', '0000-00-00 00:00:00'),
(5, 'tujuan', '<ul>\r\n<li>Mengembangkan bidang keahlian Teknologi Informasi dan Komunikasi</li>\r\n<li>Memberikan kontribusi bagi percepatan pembangunan di Kalimantan Timur</li>\r\n<li>Mengembangkan manajemen pendidikan berbasis sekolah secara pro aktif dan kreatif</li>\r\n<li>Memacu perkembangan pendidikan yang lebih kompetitif dan mandiri</li>\r\n</ul>', '', '0000-00-00 00:00:00'),
(6, 'rpl', '<h1>Info Paket Keahlian :</h1>\r\n<ul>\r\n<li>Menggunakan algoritma pemrograman tingkat dasar</li>\r\n<li>Menggunakan algoritma pemrograman tingkat lanjut</li>\r\n<li>Membuat dokumen dengan HTML sesuai spesifikasi</li>\r\n<li>Menerapkan dasar-dasar pembuatan web statis tingkat dasar</li>\r\n<li>Mengoperasikan aplikasi basis data (Microsoft Access)</li>\r\n<li>Membuat aplikasi basis data menggunakan Microsoft Access</li>\r\n<li>Membuat halaman web dinamis tingkat dasar</li>\r\n<li>Membuat halaman web dinamis tingkat lanjut</li>\r\n<li>Mengoperasikan bahasa pemrograman SQL (Structured Query Language) tingkat dasar</li>\r\n<li>Mengoperasikan bahasa pemrograman SQL (Structured Query Language) tingkat lanjut</li>\r\n<li>Membuat program aplikasi menggunakan VB dan VB. NET</li>\r\n<li>Membuat paket software aplikasi</li>\r\n<li>Mengoperasikan sistem operasi komputer berbasis GUI dan Teks</li>\r\n<li>Membuat program basis data menggunakan MySQL</li>\r\n<li>Mengintegrasikan sebuah basis data dengan sebuah situs web</li>\r\n<li>Membuat program basis data menggunakan Microsoft SQL Server</li>\r\n<li>Membuat program basis data menggunakan PL/SQL</li>\r\n<li>Membuat program aplikasi menggunakan C++</li>\r\n<li>Menjelaskan sistem peripheral</li>\r\n<li>Mengoperasikan bahasa pemrograman berbasis obyek (OOP)</li>\r\n<li>Membuat program aplikasi menggunakan Java</li>\r\n</ul>\r\n<h1>Muatan Lokal :</h1>\r\n<ul>\r\n<li>Administrasi Jaringan Komputer</li>\r\n<li>Desain Grafis dan Animasi Dasar</li>\r\n</ul>\r\n<h1>Ruang Lingkup Pekerjaan/Profesi Tamatan :</h1>\r\n<ul>\r\n<li>Programer tingkat menengah (membuat software aplikasi desktop, jaringan, dan web)</li>\r\n<li>Operator komputer tingkat menengah (teknisi komputer)</li>\r\n<li>Enterpreneur (wirausaha)</li>\r\n</ul>', '', '0000-00-00 00:00:00'),
(7, 'mm', '<h1>Info Paket Keahlian :</h1>\r\n<ul>\r\n<li>Mengoperasikan periferal untuk pembuatan grafis</li>\r\n<li>Melakukan entry data (grafis) dengan menggunakan image scanner (level 1)</li>\r\n<li>Mengoperasikan software pengolah gambar vektor (digital illustration)</li>\r\n<li>Mengoperasikan software pengolah gambar raster (digital imaging)</li>\r\n<li>Mengoperasikan periferal web</li>\r\n<li>Melakukan entry data (web) dengan menggunakan image scanner (level 2)</li>\r\n<li>Mengoperasikan software web design</li>\r\n<li>Mengoperasikan software 2D animation</li>\r\n<li>Mengoperasikan software FTP</li>\r\n<li>Mengoperasikan periferal multimedia</li>\r\n<li>Melakukan entry data (multimedia) dengan menggunakan image scanner (level 2)</li>\r\n<li>Mengoperasikan software multimedia</li>\r\n<li>Mengoperasikan software presentasi (level 2)</li>\r\n<li>Mengoperasikan periferal animasi 3D</li>\r\n<li>Mengoperasikan software basic 3D animation (level 1)</li>\r\n<li>Mengoperasikan software model 3D</li>\r\n<li>Mengoperasikan software basic 3D animation (level 2)</li>\r\n<li>Mengoperasikan periferal perekam suara</li>\r\n<li>Mengoperasikan periferal perekam gambar</li>\r\n<li>Mengoperasikan software digital audio dan software visual effect</li>\r\n</ul>\r\n<h1>Muatan Lokal :</h1>\r\n<ul>\r\n<li>Digital Printing</li>\r\n<li>Karikatur</li>\r\n</ul>\r\n<h1>Ruang Lingkup Pekerjaan/Profesi Tamatan :</h1>\r\n<ul>\r\n<li>Pengembang Multimedia (pembuat dan memelihara multimedia)</li>\r\n<li>Industri media dan periklanan dan desain grafis (pembuat dan perancang grafis)</li>\r\n<li>Pengembang permainan digital (pembuat permainan games digital, pembuat media simulasi)</li>\r\n<li>Rumah produksi sinema/film(penyunting video, pembuat video klip)</li>\r\n</ul>', '', '0000-00-00 00:00:00'),
(8, 'tkj', '<h1>Info Paket Keahlian :</h1>\r\n<ul>\r\n<li>Merakit dan menginstalasi PC/Laptop</li>\r\n<li>Mendiagnosis permasalahan pengoperasian PC dan periferal</li>\r\n<li>Melakukan perbaikan dan atau setting ulang sistem PC/Laptop</li>\r\n<li>Melakukan perbaikan periferal</li>\r\n<li>Melakukan perawatan PC/Laptop</li>\r\n<li>Melakukan perawatan peripheral</li>\r\n<li>Menginstalasi sistem operasi berbasis GUI (Graphical User Interface)</li>\r\n<li>Menginstalasi sistem operasi berbasis teks</li>\r\n<li>Menginstalasi software</li>\r\n<li>Mem-back up dan me-restore</li>\r\n<li>Menginstalasi perangkat jaringan lokal (Local Area Network)</li>\r\n<li>Mendiagnosis permasalahan pengoperasianPC yang tersambung jaringan</li>\r\n<li>Melakukan perbaikan dan atau setting ulang koneksi jaringan</li>\r\n<li>Menginstalasi sistem operasi jaringan berbasis GUI (Graphical User Interface)</li>\r\n<li>Menginstalasi sistem operasi jaringan berbasis teks</li>\r\n<li>Menginstalasi perangkat jaringan berbasis luas (Wide Area Network)</li>\r\n<li>Mendiagnosis permasalahan perangkat yang tersambung jaringan berbasis luas (Wide Area Network)</li>\r\n<li>Melakukan perbaikan dan atau setting ulang koneksi jaringan berbasis luas (Wide Area Network)</li>\r\n<li>Mengadministrasi server dalam jaringan</li>\r\n<li>Merancang bangun dan menganalisa Wide Area Network</li>\r\n</ul>\r\n<h1>Muatan Lokal :</h1>\r\n<ul>\r\n<li>Desain Grafis</li>\r\n<li>Desain Website</li>\r\n</ul>\r\n<h1>Ruang Lingkup Pekerjaan/Profesi Tamatan :</h1>\r\n<ul>\r\n<li>Teknisi komputer/laptop</li>\r\n<li>Teknisi jaringan LAN/WAN</li>\r\n<li>Administrator jaringan</li>\r\n<li>IT Support</li>\r\n<li>Entrepreneurship/wirausaha</li>\r\n</ul>', '', '0000-00-00 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tb_bukutamu`
--
ALTER TABLE `tb_bukutamu`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tb_konten`
--
ALTER TABLE `tb_konten`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tb_pengaturan`
--
ALTER TABLE `tb_pengaturan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tb_profil`
--
ALTER TABLE `tb_profil`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tb_bukutamu`
--
ALTER TABLE `tb_bukutamu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tb_konten`
--
ALTER TABLE `tb_konten`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tb_pengaturan`
--
ALTER TABLE `tb_pengaturan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tb_profil`
--
ALTER TABLE `tb_profil`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
