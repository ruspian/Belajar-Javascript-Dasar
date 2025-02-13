// closure adalah function yang dapat dipanggil kembali

// lexical scope
// function init() {
//   // const nama = "ucup"; //local variable
//   return function (nama) {
//     console.log(nama);
//   };
//   // tampilkanNama();
// }

// let pangglNama = init();
// pangglNama("ucup");
// pangglNama("otong");

// contoh lain
// function salam(hari) {
//   return function (nama) {
//     console.log(`Assalamualaikum ${nama}, hari ${hari} ini sangat cerah yah!`);
//   };
// }

// let sabtu = salam("sabtu");
// let minggu = salam("minggu");
// let senin = salam("senin");

// sabtu("ucup");
// minggu("otong");
// senin("dudung");

// contoh lain lagi
let tambah = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
})();

let counter = 100; // variable ini tidak akan mempengaruhi counter yang di dalam closure
console.log(tambah());
console.log(tambah());
console.log(tambah());
