// arrow function adalah function expression yang dipersingkat

// const halo = (nama) => {
//   return `Halo ${nama}`;
// };
// console.log(halo("otong"));

// arrow function explisit return
// const halo = (nama) => `Halo ${nama}`;
// console.log(halo("otong"));

// arrow function tanpa parameter
const halo = () => `Halo`;
console.log(halo());

// mencari panjang huruf pada nama di array
let siswa = ["ucup", "otong", "dudung"];

// menggunakan functuon biasa
// let panjang = siswa.map(function (nama) {
//   return nama.length;
// });
// console.log(panjang);

// menggunakan arrow function
let panjang = siswa.map((nama) => nama.length);
console.log(panjang);

// arrow function mengembalikan object
let objSiswa = siswa.map((nama) => ({ nama, pjgNama: nama.length }));
console.table(objSiswa);
