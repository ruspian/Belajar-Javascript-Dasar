// // spread operator dan rest parameter

// // 1. spread operator --> memecah iterable menjadi singgle element
// const nama = ["otong", "ucup", "dudung"];
// console.log(...nama);
// console.log(...nama[0]);

// // menggabungkan 2 array
// const siswa = ["otong", "ucup", "dudung"];
// const guru = ["budi", "andi", "joko"];

// // const semuaSiswa = [...siswa, "joni", ...guru];
// // console.log(semuaSiswa);

// // mengcopy array -> agar tidak merubah array asli
// const siswa1 = [...siswa];
// siswa1[`0`] = "surucup";

// console.log(siswa);
// console.log(siswa1);

// const liSiswa = document.querySelectorAll("li");
// const siswa = [];

// ubah nodelist jadi array dengan loop
// for (let i = 0; i < liSiswa.length; i++) {
//   siswa.push(liSiswa[i].textContent);
// }

// menggunakan map -> karna liSiswa adalah nodelist ubah dulu menjadi array dengan spread operator
// const siswa = [...liSiswa].map((s) => s.textContent);
// console.log(siswa);

const saya = document.querySelector(".saya");
const nama = [...saya.textContent].map((n) => `<span>${n}</span>`).join("");
saya.innerHTML = nama;
