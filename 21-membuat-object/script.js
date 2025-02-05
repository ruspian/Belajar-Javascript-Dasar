// membuat object

// object literal
// kekurangan meskipun propertinya sama harus diisi ulang dengan data yang berbeda
const siswa1 = {
  nama: "ucup",
  umur: 20,
  nim: "12345",
  alamat: {
    jalan: "jl. sudirman",
    desa: "banuroja",
    kecamatan: "randangan",
    kabupaten: "pohuwato",
  },
};

const siswa2 = {
  nama: "otong",
  umur: 19,
  nim: "54321",
  alamat: {
    jalan: "jl. sudirman",
    desa: "banuroja",
    kecamatan: "randangan",
    kabupaten: "pohuwato",
  },
};

// function declaration
function objectSiswa(nama, umur, nim, jalan, desa, kecamatan, kabupaten) {
  let siswa = {};
  siswa.nama = nama;
  siswa.umur = umur;
  siswa.nim = nim;
  siswa.alamat = {
    jalan: jalan,
    desa: desa,
    kecamatan: kecamatan,
    kabupaten: kabupaten,
  };
  return siswa;
}

const siswa3 = objectSiswa(
  "otong",
  19,
  "54321",
  "jl. sudirman",
  "banuroja",
  "randangan",
  "pohuwato"
);
console.log(siswa3);

// constructor function => nama function diawali dengan huruf kapital
function Siswa(nama, umur, nim, jalan, desa, kecamatan, kabupaten) {
  this.nama = nama;
  this.umur = umur;
  this.nim = nim;
  this.alamat = {
    jalan: jalan,
    desa: desa,
    kecamatan: kecamatan,
    kabupaten: kabupaten,
  };
}
const siswa4 = new Siswa(
  "otong",
  19,
  "54321",
  "jl. sudirman",
  "banuroja",
  "randangan",
  "pohuwato"
);
console.log(siswa4);
