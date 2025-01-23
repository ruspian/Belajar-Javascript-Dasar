// menentukan pilihan player

// rules
let hasil;
let lagi = true;

while (lagi) {
  // menentukan pilihan player
  const player = prompt("Pilih: batu, kertas, atau gunting");

  // menentukan pilihan komputer
  let komputer = Math.random();

  if (komputer < 0.34) {
    komputer = "batu";
  } else if (komputer >= 0.34 && komputer < 0.67) {
    komputer = "kertas";
  } else {
    komputer = "gunting";
  }

  if (player == komputer) {
    hasil = "SERI";
  } else if (player == "batu") {
    if (komputer == "gunting") {
      hasil = "ANDA MENANG";
    } else {
      hasil = "KOMPUTER MENANG";
    }
  } else if (player == "gunting") {
    if (komputer == "kertas") {
      hasil = "ANDA MENANG";
    } else {
      hasil = "KOMPUTER MENANG";
    }
  } else if (player == "kertas") {
    if (komputer == "batu") {
      hasil = "ANDA MENANG";
    } else {
      hasil = "KOMPUTER MENANG";
    }
  } else if (player != "batu" || player != "gunting" || player != "kertas") {
    hasil = "Yang anda masukkan bukan batu, kertas, atau gunting";
  }

  lagi = confirm(
    "Anda memilih: " +
      player +
      "\nKomputer memilih: " +
      komputer +
      "\nHasil: " +
      hasil +
      "\n\ningin bermain lagi?"
  );
}

alert("Terima Kasih");
