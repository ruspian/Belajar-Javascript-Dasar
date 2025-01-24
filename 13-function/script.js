// function

// mencari volume balok tanpa function
const panjang = 4;
const lebar = 5;
const tinggi = 6;

const volumeBalok = panjang * lebar * tinggi;
console.log("volume balok = " + volumeBalok);

// function kubus(sisi) {
//   return sisi * sisi * sisi;
// }

// mencari volume kubus dengan function
const kubus = (sisi) => {
  return sisi * sisi * sisi;
};
console.log("volume kubus = " + kubus(4));

function balok(panjang, lebar, tinggi) {
  return panjang * lebar * tinggi;
}

console.log("volume balok = " + balok(4, 5, 6));
