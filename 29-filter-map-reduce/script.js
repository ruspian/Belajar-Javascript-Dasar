// filter, map, dan reduce
const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. filter

// coba dulu pakai for mencari angka >= 3
const angkaBaru = [];
for (let i = 0; i < angka.length; i++) {
  if (angka[i] >= 3) {
    angkaBaru.push(angka[i]);
  }
}
console.log(`ini angka baru menggunakan for ${angkaBaru}`);

// memcari angka yang hasilnya ganjil

const angkaKu = angka.filter((a) => a % 2 == 1);
console.log(angkaKu);

// mencari angka >=
const angkaKu2 = angka.filter((a) => a >= 5);
console.log(angkaKu2);

// 2. map
// menjumlahkan angka
const angkaKu3 = angka.map((a) => a + 2);
console.log(angkaKu3);

// 3. reduce
/* 
reduce memiliki 2 parameter yaitu accumulator dan current value 
1. accumulator adalah variable yang digunakan untuk menyimpan hasil dari perhitungan sebelumnya
2. current value adalah nilai yang sedang diproses
*/
// menjumlahkan semua elemen pada array angka
const angkaKu4 = angka.reduce((a, b) => a + b);
console.log(angkaKu4);

// method chaining atau method berantai
// cari angka > 5 --> kalikan 3 --> jumlahkan

const angkaKu5 = angka
  .filter((a) => a > 5) // 6,7,8,9,10
  .map((a) => a * 3) // 18,21,24,27,30
  .reduce((a, b) => a + b); // 120
console.log(angkaKu5);
