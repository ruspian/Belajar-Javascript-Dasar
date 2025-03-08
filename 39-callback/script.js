// callback -> adalah function yang dipanggil setelah function lain selesai dijalankan

// contoh
// syncronus callback
// function halo(nama) {
//   alert(`Halo, ${nama}`);
// }

// function tampilkanNama(bebas) {
//   const nama = prompt("Masukkan Nama: ");
//   bebas(nama);
// }

// tampilkanNama(halo);

// syncronus callback
// const siswa = [
//   {
//     nama: "Ucup Surucup",
//     kelas: 12,
//     email: "ucup@mail.com",
//     noHp: 92290019192,
//   },
//   {
//     nama: "Otong Surotong",
//     kelas: 12,
//     email: "otomg@mail.com",
//     noHp: 32290019192,
//   },
//   {
//     nama: "Santi Susanti",
//     kelas: 12,
//     email: "santi@mail.com",
//     noHp: 922900123292,
//   },
// ];

// console.log("mulai");
// siswa.forEach((s) => {
//   for (let i = 0; i < 1000000; i++) {
//     let date = new Date();
//   }
//   console.log(s.nama);
// });
// console.log("selesai");

// asyncronus callback
// menggunakan ajax vanila JS
function getDataSiswa(url, succes, error) {
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        succes(xhr.response);
      } else if (xhr.status === 404) {
        error();
      }
    }
  };

  xhr.open("get", url);
  xhr.send();
}

console.log("mulai");

getDataSiswa(
  "data/siswa.json",
  (result) => {
    const siswa = JSON.parse(result);
    siswa.forEach((s) => console.log(s.nama));
  },
  (result) => {
    console.log(result);
  }
);

console.log("selesai");
