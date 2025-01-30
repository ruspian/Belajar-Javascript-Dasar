let penumpang = [];

// fungsi tambah penumpang
const tambahPenumpang = function (namaPenumpang, penumpang) {
  // cek jika penumpang kosong maka tambah penumpang
  if (penumpang.length == 0) {
    penumpang.push(namaPenumpang);
  } else {
    // telusuri jumlah kursi angkot
    for (let i = 0; i < penumpang.length; i++) {
      // cek jika ada kursi yang kosong
      if (penumpang[i] == undefined) {
        penumpang[i] = namaPenumpang;
      }

      // cek jika ada penumpang yang sama
      if (namaPenumpang == penumpang[i]) {
        console.log(namaPenumpang + " sudah ada di dalam angkot");
      }

      // cek jika seluruh kursi terisi tambahkan penumpang di kursi akhir
      if (i == penumpang.length - 1) {
        penumpang.push(namaPenumpang);
      }
    }
  }

  return penumpang;
};

// fungsi hapus penumpang
const hapusPenumpang = function (namaPenumpang, penumpang) {
  // cek jika penumpang kosong
  if (penumpang.length == 0) {
    console.log("Angkot masih kosong");
  } else {
    // telusuri kursi angkot
    for (let i = 0; i < penumpang.length; i++) {
      // cek jika penumpang ada maka hapus
      if (namaPenumpang == penumpang[i]) {
        penumpang[i] = undefined;
      }

      // cek jika penumpang ada dan nama penumpang tidak sama
      if (i == penumpang.length - 1) {
        console.log(namaPenumpang + " tidak ada di dalam angkot");
      }
    }
  }

  return penumpang;
};
