// membuat object angkot,
function Angkot(sopir, trayek, penumpang, kas) {
  this.sopir = sopir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;
  this.penumpangNaik = function (namaPenumpang) {
    this.penumpang.push(namaPenumpang);
    return this.penumpang;
  };
  this.penumpangTurun = function (namaPenumpang, bayar) {
    if (this.penumpang.length == 0) {
      console.log("Angkot masih kosong");
    }

    for (let i = 0; i < this.penumpang.length; i++) {
      if (this.penumpang[i] == namaPenumpang) {
        this.penumpang[i] = undefined;
        this.kas += bayar;
        return this.penumpang;
      }

      if (i == this.penumpang.length - 1) {
        console.log(namaPenumpang + " tidak ada di dalam angkot");
      }
    }

    return this.kas;
  };
}

let angkot1 = new Angkot("Ucup", ["Randangan", "Taluditi"], [], 0);
