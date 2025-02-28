// rest parameter
function funcSaya(a, b, ...c) {
  return `a = ${a}, b = ${b}, c = ${c}`;
}

console.log(funcSaya(1, 2, 3, 4, 5));

// cara lain menggunakan rest parameter
function jumlahkan(...angka) {
  // let total = 0;
  // for (const a of angka) {
  //   total = total + a;
  // }
  // return total;

  // jumlah pakai reduce
  return angka.reduce((a, b) => a + b);
}

console.log("total : " + jumlahkan(1, 2, 3, 4, 5));

// menggunakan array destructuring
const kelompok = ["ucup", "otong", "dudung", "joni", "joko", "budi", "andi"];
const [ketua, wakil, bendahara, ...anggota] = kelompok;
console.log(
  `
  ketua     : ${ketua}, 
  wakil     : ${wakil}, 
  bendahara : ${bendahara}, 
  anggota   : ${anggota}
  `
);

// menggunakan object destructuring
const tim = {
  pm: "ucup",
  frondEnd: "otong",
  backEnd: "dudung",
  devOps: "joni",
  qa: "joko",
  ux: "budi",
  ui: "andi",
};

const { pm, ...myTeam } = tim;
console.log(`
  pm        : ${pm}
  myTeam    : ${myTeam}
  `);

// filtering
function filterBy(type, ...nilai) {
  return nilai.filter((n) => typeof n === type);
}

console.log(
  filterBy("number", 1, 4, 2, 7, "dodi", true, 10, "otong", false, "ucup")
);
console.log(
  filterBy("string", 1, 4, 2, 7, "dodi", true, 10, "otong", false, "ucup")
);
console.log(
  filterBy("boolean", 1, 4, 2, 7, "dodi", true, 10, "otong", false, "ucup")
);
