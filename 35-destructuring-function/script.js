// destructuring function

// 1. destructuring return value
// const kalsulasi = (a, b) => {
//   return [a + b, a - b, a * b];
// };

// const [tambah, kurang, kali, bagi] = tambahKali(1, 2);
// const [tambah, kurang, kali, bagi = "tidak ada"] = tambahKali(1, 2); //destructuring pada array urutannya harus sesuai
// console.log(tambah);

// jika mau urutan tidak sesuai -> gunakan object
// function tambahKali(a, b) {
//   return {
//     tambah: a + b,
//     kurang: a - b,
//     kali: a * b,
//     bagi: a / b,
//   };
// }

// const { kurang, bagi, kali, tambah } = tambahKali(1, 2);
// console.log(kurang);

// 2. destructuring argument dan parameter
const siswa = {
  nama: "otong",
  umur: 20,
  alamat: "Banuroja",
  nilai: {
    tugas: 80,
    mid: 90,
    final: 85,
  },
};

function cetakSiswa({ nama, umur, alamat, nilai: { tugas, mid, final } }) {
  return `halo nama saya ${nama}, saya ${umur} tahun, alamat saya di ${alamat} dan nilai tugas saya adalah ${tugas}, nilai mid saya adalah ${mid}, dan nilai final saya adalah ${final}`;
}

console.log(cetakSiswa(siswa));
