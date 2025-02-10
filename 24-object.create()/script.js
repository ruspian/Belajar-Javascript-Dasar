// meihat kembali cara pembuatan object

// 1. object literal
// const siswa1 = {
//   nama: "ucup",
//   umur: 20,
//   lulus: true,
//   nilai: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
//   alamat: {
//     jalan: "jl. sudirman",
//     desa: "banuroja",
//     kecamatan: "randangan",
//     kabupaten: "pohuwato",
//   },
// };

// const siswa2 = {
//   nama: "otong",
//   umur: 25,
//   lulus: true,
//   nilai: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
//   alamat: {
//     jalan: "jl. sudirman",
//     desa: "banuroja",
//     kecamatan: "randangan",
//     kabupaten: "pohuwato",
//   },
// };

// console.log(siswa1);
// console.log(siswa2);

// menggunakan object literal akan memakan banyak resource karna kalau ada data siswa baru mau tidak mau membuat objeck baru lagi

// 2.function declaration

const methodSiswa = {
  makan: function (porsi) {
    this.energi = this.energi + porsi;
    console.log(`Halo ${this.nama}, Selamat makan!`);
  },
  main: function (jam) {
    this.energi = this.energi - jam;
    console.log(`Halo ${this.nama}, Selamat bermain!`);
  },
};
function Siswa(nama, energi) {
  let siswa = Object.create(methodSiswa);

  siswa.nama = nama;
  siswa.energi = energi;

  return siswa;
}

let ucup = Siswa("Ucup", 10);
let otong = Siswa("Otong", 15);
