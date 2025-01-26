// rekursif => fungsi yang memanggil dirinya sendiri

function tampilAngka(angka) {
  // base case => kondisi dimana rekursif berhenti
  if (angka === 0) {
    return;
  }

  console.log(angka);
  tampilAngka(angka - 1);
}

tampilAngka(10);

// mencari faktorial dengan rekursif
function faktorial(angka) {
  if (angka === 0) return 1;
  return angka * faktorial(angka - 1);
}

console.log(faktorial(5));
