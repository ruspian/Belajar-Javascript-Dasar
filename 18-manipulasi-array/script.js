// manipulasi array

// 1. menambah isi array

// cara manual
// let nama = [];
// nama[0] = "ucup";
// nama[1] = "otong";
// nama[2] = "dudung";

// console.log(nama);

// 2.menghapus isi array
// cara manual
// let nama = ["ucup", "otong", "dudung"];
// nama[0] = undefined;

// console.log(nama);

// 3. menampilkan isi array dengan loop
// let nama = ["ucup", "otong", "dudung"];
// for (let i = 0; i < nama.length; i++) {
//   console.log("Mahasiswa ke-" + (i + 1) + " : " + nama[i]);
// }

// method pada array => method adalah function yang ada di dalam array
// 1. join => menggabungkan elemen array menjadi string
// let nama = ["ucup", "otong", "dudung"];
// console.log(nama.join(" - "));

// 2. push => menambah elemen di akhir array
// nama.push("dodi");
// console.log(nama);

// 3. pop => menghapus elemen di akhir array
// nama.pop();
// console.log(nama);

// 4. unshift => menambah elemen di awal array
// nama.unshift("surucup");
// console.log(nama);

// 5. shift => menghapus elemen di awal array
// nama.shift();
// console.log(nama);

// 6. splice => menyisipkan elemen di tengah array
// rumus => array.splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, elemenBaruN)
// nama.splice(2, 0, "surucup");
// console.log(nama);

// 7. slice => mengambil elemen di tengah array
// rumus => array.slice(indexAwal, indexAkhir)
// let namaSaya = nama.slice(1, 3);
// console.log(namaSaya);

// 8. forEach => menjalankan function untuk setiap elemen array / perulangan dan mengembalikan nilai string
// let angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let nama = ["ucup", "otong", "dudung"];
// angka.forEach(function (angka) {
//   console.log(angka);
// });

// index pada forEach
// nama.forEach(function (nama, index) {
//   console.log("Mahasiswa ke-" + (index + 1) + " : " + nama);
// });

// 9. map => menjalankan function untuk setiap elemen array / perulangan dan mengembalikan nilai array
// let angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let angkaKu = angka.map(function (angka) {
//   return angka * 2;
// });
// console.log(angkaKu);

// 10. sort => mengurutkan elemen array
// jika ada puluhan
// const angka = [1, 2, 4, 9, 7, 10, 20, 6, 8, 5, 3];
// console.log(angka.join(" - "));
// angka.sort(function (a, b) {
//   return a - b;
// });
// console.log(angka.join(" - "));

// jika tidak ada puluhan
const angka = [1, 2, 4, 9, 7, 6, 8, 5, 3];
console.log(angka.join(" - "));
angka.sort();
console.log(angka.join(" - "));
