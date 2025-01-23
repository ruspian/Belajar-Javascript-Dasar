// perulangan dan pengkondisian bersarang

let stringKosong = "";
let bintang = "*";
let max = 5;

// bintang pertama
for (let i = 1; i <= max; i++) {
  for (let j = 1; j <= i; j++) {
    stringKosong += bintang;
  }
  stringKosong += "\n";
}

console.log("ini bintang pertama");
console.log(stringKosong);

// bintang kedua
let stringKosong2 = "";

for (let i = max; i >= 1; i--) {
  for (let j = 1; j <= i; j++) {
    stringKosong2 += bintang;
  }
  stringKosong2 += "\n";
}

console.log("\n\nini bintang kedua");
console.log(stringKosong2);

// bintang ketiga
let stringKosong3 = "";

for (let i = 1; i <= max; i++) {
  for (let j = 1; j <= i; j++) {
    stringKosong3 += bintang;
  }
  stringKosong3 += "\n";
}

for (let i = max - 1; i >= 1; i--) {
  for (let j = 1; j <= i; j++) {
    stringKosong3 += bintang;
  }
  stringKosong3 += "\n";
}

console.log("\n\nini bintang ketiga");
console.log(stringKosong3);

// bintang keempat
let stringKosong4 = "";

for (let i = 1; i <= max; i++) {
  for (let j = 1; j <= i; j++) {
    stringKosong4 += " ";
  }

  for (let j = 1; j <= max - (i - 1); j++) {
    stringKosong4 += bintang;
  }
  stringKosong4 += "\n";
}

console.log("\n\nini bintang keempat");
console.log(stringKosong4);

// bintang kelima
let stringKosong5 = "";

for (let i = max; i >= 1; i--) {
  for (let j = 1; j <= i; j++) {
    stringKosong5 += " ";
  }

  for (let j = 1; j <= max - (i - 1); j++) {
    stringKosong5 += bintang;
  }
  stringKosong5 += "\n";
}

console.log("\n\nini bintang kelima");
console.log(stringKosong5);

// bintang keenam
let stringKosong6 = "";

for (let i = 1; i <= max; i++) {
  for (let j = 1; j <= i; j++) {
    stringKosong6 += " ";
  }

  for (let j = 1; j <= max - (i - 1); j++) {
    stringKosong6 += bintang;
  }
  stringKosong6 += "\n";
}

for (let i = max - 1; i >= 1; i--) {
  for (let j = 1; j <= i; j++) {
    stringKosong6 += " ";
  }

  for (let j = 1; j <= max - (i - 1); j++) {
    stringKosong6 += bintang;
  }
  stringKosong6 += "\n";
}

console.log("\n\nini bintang kelima");
console.log(stringKosong6);

// bintang ketujuh
// segitiga sama kaki

let stringKosong7 = "";

// Segitiga atas
for (let i = 1; i <= max; i++) {
  // Tambahkan spasi di awal
  for (let j = 1; j <= max - i; j++) {
    stringKosong7 += " ";
  }
  // Tambahkan bintang
  for (let k = 1; k <= 2 * i - 1; k++) {
    stringKosong7 += bintang;
  }
  stringKosong7 += "\n";
}

console.log("\n\nini bintang ketujuh");
console.log(stringKosong7);

// bintang kedelapan
let stringKosong8 = "";

// Segitiga bawah (terbalik)
for (let i = max; i >= 1; i--) {
  // Tambahkan spasi di awal
  for (let j = 1; j <= max - i; j++) {
    stringKosong8 += " ";
  }
  // Tambahkan bintang
  for (let k = 1; k <= 2 * i - 1; k++) {
    stringKosong8 += bintang;
  }
  stringKosong8 += "\n";
}

console.log("\n\nini bintang kedelapan");
console.log(stringKosong8);
