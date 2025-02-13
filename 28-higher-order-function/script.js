// higher order function adalah function yang menerima function sebagai parameter
// atau function yang mengembalikan function

// function yang menjadi parameter disebut callback sedangkan function yang mempunyai callback disebut higher order function

// contoh higher order function
// const halo = (nama) => {
//   console.log("halo! " + nama);
// };

// const panggil = (fnHalo) => {
//   fnHalo("ucup");
// };

// panggil(halo);

// contoh higher order function
// let total = 0,
//   count = 1;

// while (count <= 10) {
//   total += count;
//   count++;
// }

// console.log(total);

// contoh higher order function lain lagi
function ulang(n, aksi) {
  for (let i = 0; i < n; i++) {
    aksi(i);
  }
}

ulang(5, function (i) {
  console.log("perulangan ke-" + (i + 1));
});

ulang(10, alert);
