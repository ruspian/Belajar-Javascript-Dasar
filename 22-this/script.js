// this
// this adalah kata kunci yang digunakan untuk mengakses objek global
// this digunakan untuk mengakses objek global
// console.log(this); => akan mengembalikan objek global/window

// cara 1 - function declaration
// function halo() {
//   console.log(this);
//   console.log("halo!");
// }
// this.halo();
// this mengembalikan objek global

// cara 2 - object literal
// let obj = {
//   nama: "ucup",
//   umur: 20,
// };
// obj.halo = function () {
//   console.log(this);
//   console.log("halo!");
// };

// obj.halo();
// this mengembalikan objek objek itu sendiri

// cara 3 - constructor function
function Siswa(nama, umur) {
  this.nama = nama;
  this.umur = umur;
  this.halo = function () {
    console.log(this);
    console.log("halo!");
  };
}
let siswa = new Siswa("ucup", 20);
siswa.halo();
// this mengembalikan objek siswa yang baru dibuat
