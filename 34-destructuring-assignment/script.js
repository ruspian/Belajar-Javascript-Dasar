// destructuring assignment / variable
// adalah expression yang digunakan untuk mengambil nilai dari objek atau array kedalam variabel terpisah

// contoh
// destructuring array
// const namaSiswa = ["ucup", "otong", "dudung"];

// const [ucup, otong, dudung] = namaSiswa;
// const [ucup, , dudung] = namaSiswa; // otong diabaikan

// console.log(ucup); //ucup
// // console.log(otong);
// console.log(dudung); // dudung

// swap item pada array / menukar nilai array
// let a = 1;
// let b = 2;

// console.log(a);
// console.log(b);
// [a, b] = [b, a]; // menukar nilai
// console.log(a); // 2
// console.log(b); // 1

// return value pada function
// function coba() {
//   return [1, 2, 3];
// }

// const [satu, dua, tiga] = coba();
// console.log(satu);
// console.log(dua);
// console.log(tiga);

// rest parameter
// const [a, ...angka] = [1, 2, 3, 4, 5];
// console.log(a);
// console.log(angka);

// destructuring object
// const siswa = {
//   nama: "otong",
//   kelas: 11,
//   email: "otong@com",
// };

// const { nama, kelas, email } = siswa;
// console.log(nama);
// console.log(kelas);
// console.log(email);

// assignment tanpa deklarasi object
// ({ nama, umur } = { nama: "ucup", umur: 20 });
// console.log(nama);

// assign ke variable baru / mengubah nama properti
const siswa = {
  id: 1234,
  nama: "otong",
  kelas: 11,
  email: "otong@com",
};

// const { nama: n, kelas: k, email: e } = siswa;
// console.log(n);
// console.log(k);
// console.log(e);

// memberikan default value
// const { nama, kelas, email, alamat = "banuroja" } = siswa;
// console.log(alamat);

// rest parameter
const { nama, ...bioSiswa } = siswa;
console.log(bioSiswa);

// mengambil field pada oject
function getIdSiswa({ id }) {
  return id;
}

console.log(getIdSiswa(siswa));
