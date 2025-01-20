// latihan angkot
const jumlahAngkot = 10;
const angkotBeroperasi = 6;
let noAngkot = 1;

while (noAngkot <= angkotBeroperasi) {
  console.log("Angkot No. " + noAngkot + " beroperasi dengan baik.");
  noAngkot++;
}

for (noAngkot = angkotBeroperasi + 1; noAngkot <= jumlahAngkot; noAngkot++) {
  console.log("Angkot No. " + noAngkot + " sedang tidak beroprasi.");
}
