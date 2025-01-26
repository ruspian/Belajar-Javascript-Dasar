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

// parameter dan argument
function tambah(a, b) {
  // a dan b adalah parameter
  return a + b;
}

tambah(1, 2); // 1 dan 2 adalah argument

// fungsi didalam fungsi
function kali(a, b) {
  return a * b;
}

const hasil = kali(tambah(1, 2), kali(3, 4));
console.log(hasil);

// sudo variable arguments
function tambahLagi() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i]; // total = total + arguments[i]
  }
  return total;
}

console.log(tambahLagi(1, 2, 3, 4, 5));
