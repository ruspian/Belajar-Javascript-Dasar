// membuat object
const siswa = {
  nama: "ucup",
  umur: 20,
  lulus: true,
  nilai: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
  alamat: {
    jalan: "jl. sudirman",
    desa: "banuroja",
    kecamatan: "randangan",
    kabupaten: "pohuwato",
  },
  nilaiAkhir: function (nilai) {
    if (nilai > 70) {
      this.lulus = true;
      console.log(`
      nama: ${this.nama}
      umur: ${this.umur}
      lulus: ${this.lulus}
      nilai: ${nilai}
      Selamat Anda Lulus!
    `);
    }

    if (nilai < 70) {
      this.lulus = false;
      console.log(`
      nama: ${this.nama}
      umur: ${this.umur}
      lulus: ${this.lulus}
      nilai: ${nilai}
      Anda Tidak Lulus! Belajar Lebih Giat!
    `);
    }
  },
};

console.log(siswa.nama);
