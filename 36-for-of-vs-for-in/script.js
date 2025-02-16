// for ... of dan for ... in

// const siswa = ["otong", "ucup", "dudung"];

// menggunakan for biasa
// for (let i = 0; i < siswa.length; i++) {
//   console.log(siswa[i]);
// }

// menggunakan forEach
// siswa.forEach((s) => {
//   console.log(s);
// });

// menggunakan for ... of --> UNTUK ARRAY
// for (const s of siswa) {
//   console.log(s);
// }

// mengambil index dari array menggunakan for ... of
// for (const [i, s] of siswa.entries()) {
//   console.log(`${s} adalah siswa ke-${i + 1}`);
// }

// loop string dengan for ... of
// const nama = "otong";
// for (const n of nama) {
//   console.log(n);
// }

// loop noodlist menggunakan for ... of
// const liNama = document.querySelectorAll(".nama");

// liNama.forEach((n) => {
//   console.log(n.innerHTML);
// });

// for (const n of liNama) {
//   console.log(n.innerHTML);
// }

// loop argumen menggunakan for ... of
// function jumlahAngka() {
// jika kita tidak menambahkan argument maka js akan otomatis menambahkan arguments
//   let jumlah = 0;
//   for (const n of arguments) {
//     jumlah += n;
//   }
//   return jumlah;
// }
// console.log(jumlahAngka(1, 2, 3, 4, 5));

// 2. for ... in  --> UNTUK OBJECT
const siswa = {
  nama: "otong",
  umur: 20,
  alamat: "Jl. Jendral Sudirman",
  email: "otong@com",
};

for (const s in siswa) {
  // console.log(s);
  console.log(siswa[s]);
}
