// latihan template riteral

// 1. html fragment
// const siswa = {
//   nama: "ucup",
//   umur: 20,
//   alamat: "Desa Banuroja",
//   email: "ucup@com",
// };

// const html = `
//   <div class="card">
//     <h1>${siswa.nama}</h1>
//     <p>Umur: ${siswa.umur}</p>
//     <p>Alamat: ${siswa.alamat}</p>
//     <p>Email: ${siswa.email}</p>
//   </div>
// `;

// 2. looping
// const siswa = [
//   {
//     nama: "ucup",
//     umur: 20,
//     alamat: "Desa Banuroja",
//     email: "ucup@com",
//   },
//   {
//     nama: "otong",
//     umur: 25,
//     alamat: "Desa Banuroja",
//     email: "otong@com",
//   },
//   {
//     nama: "dudung",
//     umur: 30,
//     alamat: "Desa Banuroja",
//     email: "dudung@com",
//   },
// ];

// const html = `
//   <div class="card">
//     ${siswa
//       .map(
//         (s) => `
//         <h1>${s.nama}</h1>
//         <p>Umur: ${s.umur}</p>
//         <p>Alamat: ${s.alamat}</p>
//         <p>Email: ${s.email}</p>
//       `
//       )
//       .join("")}
//       <br>
//   </div>
//   `;

// 3. pengkondisian
// ternary

// const lagu = [
//   {
//     judul: "kodok ngorek",
//     penyanyi: "otong",
//     feat: "ucup",
//   },
//   {
//     judul: "bebek angsa",
//     penyanyi: "otong",
//   },
// ];

// const html = `
//   <div class="card">
//   <h3>Daftar Lagu</h3>
//   ${lagu
//     .map(
//       (l) => `
//       <h1>Judul : ${l.judul}</h1>
//       <p>Penyanyi : ${
//         l.feat ? `${l.penyanyi} feat ${l.feat}` : `${l.penyanyi}`
//       } </p>`
//     )
//     .join("")}

//   </div>
//   `;

// 4. nested
const siswa = {
  nama: "ucup",
  kelas: 11,
  mapel: [
    "matematika",
    "fisika",
    "kimia",
    "biologi",
    "bahasa indonesia",
    "bahasa inggris",
  ],
};

function cetakMapel(mapel) {
  return `
    <ul>
      ${mapel.map((mp) => `<li>${mp}</li>`).join("")}
    </ul>
    `;
}

const html = `
  <div class="card"></div>
    <h1>${siswa.nama}</h1>
    <p>Kelas : ${siswa.kelas}</p>
    <h4>Mapel :</h4>
    ${cetakMapel(siswa.mapel)}
  </div>
`;

document.body.innerHTML = html;
