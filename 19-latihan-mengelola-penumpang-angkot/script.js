let penumpang = ["ucup", undefined, "otong", "dudung"];

// fungsi tambah penumpang
const tambahPenumpang = function (namaPenumpang, penumpang) {
  // cek jika penumpang kosong maka tambah penumpang
  if (penumpang.length == 0) {
    penumpang.push(namaPenumpang);
    return penumpang;
  } else {
    // telusuri jumlah kursi angkot
    for (let i = 0; i < penumpang.length; i++) {
      // cek jika ada kursi yang kosong
      if (penumpang[i] == undefined) {
        penumpang[i] = namaPenumpang;
        return penumpang;
      }

      // cek jika ada penumpang yang sama
      if (namaPenumpang == penumpang[i]) {
        return console.log(namaPenumpang + " sudah ada di dalam angkot");
      }

      // cek jika seluruh kursi terisi tambahkan penumpang di kursi akhir
      if (i == penumpang.length - 1) {
        penumpang.push(namaPenumpang);
        return penumpang;
      }
    }
  }
};

// fungsi hapus penumpang
const hapusPenumpang = function (namaPenumpang, penumpang) {
  for (let i = 0; i < penumpang.length; i++) {
    if (namaPenumpang == penumpang[i]) {
      penumpang[i] = undefined;
      return penumpang;
    }
  }
};
