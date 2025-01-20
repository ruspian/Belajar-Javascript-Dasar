// latihan angkot
const jumlahAngkot = 10;
const angkotBeroperasi = 6;

for (let noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++) {
  if (noAngkot <= angkotBeroperasi) {
    console.log("Angkot No. " + noAngkot + " beroperasi dengan baik.");
  } else if (noAngkot === 8) {
    console.log("Angkot No. " + noAngkot + " sedang lembur.");
  } else {
    console.log("Angkot No. " + noAngkot + " sedang tidak beroprasi.");
  }
}
