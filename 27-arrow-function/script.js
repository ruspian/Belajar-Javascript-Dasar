// arrow function adalah function expression yang dipersingkat

// const halo = (nama) => {
//   return `Halo ${nama}`;
// };
// console.log(halo("otong"));

// arrow function explisit return
// const halo = (nama) => `Halo ${nama}`;
// console.log(halo("otong"));

// arrow function tanpa parameter
// const halo = () => `Halo`;
// console.log(halo());

// mencari panjang huruf pada nama di array
// let siswa = ["ucup", "otong", "dudung"];

// menggunakan functuon biasa
// let panjang = siswa.map(function (nama) {
//   return nama.length;
// });
// console.log(panjang);

// menggunakan arrow function
// let panjang = siswa.map((nama) => nama.length);
// console.log(panjang);

// arrow function mengembalikan object
// let objSiswa = siswa.map((nama) => ({ nama, pjgNama: nama.length }));
// console.table(objSiswa);

// arrow function lanjutan

// konteks this didalam arrow function => arrow function tidak memiliki konsep this
// 1. menggunakan constractor function
// const Siswa = function () {
//   this.nama = "ucup";
//   this.umur = 20;

//   this.halo = function () {
//     // console.log(this);
//     console.log(`Halo, Nama saya ${this.nama} Umur saya ${this.umur}`);
//   };
// };

// let siswa = new Siswa();
// siswa.halo();

// const Siswa = function () {
//   this.nama = "ucup";
//   this.umur = 20;

//   this.halo = () => {
//     // console.log(this);
//     console.log(`Halo, Nama saya ${this.nama} Umur saya ${this.umur}`);
//   };
// };

// let siswa = new Siswa();
// siswa.halo();

// 2. menggunakan object literal
// const Siswa = {
//   nama: "ucup",
//   umur: 20,
//   halo: () => {
//     // console.log(this);
//     console.log(`Halo, Nama saya ${this.nama} Umur saya ${this.umur}`); // this mengembalikan objek global
//   },
// };

// Siswa.halo();

// contoh lain
// const Siswa = function () {
//   this.nama = "ucup";
//   this.umur = 20;

//   this.halo = function () {
//     // console.log(this);
//     console.log(`Halo, Nama saya ${this.nama} Umur saya ${this.umur}`);
//   };

//   setInterval(() => {
//     console.log(this.umur++);
//   }, 1000);
// };

// let siswa = new Siswa();

// contoh real penggunaan arrow function dengan konsep this
const box = document.querySelector(".box");
box.addEventListener("click", function () {
  let satu = "size";
  let dua = "caption";

  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }
  this.classList.toggle(satu);

  setTimeout(() => {
    this.classList.toggle(dua);
  }, 1000);
});
