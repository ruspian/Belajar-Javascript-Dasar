// promise
// promise -> object yang merepresentasikan keberhasilan / kegagalan sebuah event yang asyncronus dimasa yang akan datang
// jajni (terpenuhi / ingkar)
// states(fulfilled/ rejected/ pending)
// callback(resolve/reject/finally)
// aksi(then/catch)

// menggunakan fetch -> mengenbalikan promise
// fetch("http://www.omdbapi.com/?apikey=dca61bcc&s=avengers")
//   .then((res) => res.json())
//   .then((res) => console.log(res));

// contoh 1
// promise sederhana
let ditepati = true;
const janji1 = new Promise((resolve, reject) => {
  if (ditepati) {
    resolve("Janji ditepati!");
  } else {
    reject("Janji diingkari!");
  }
});

janji1
  .then((res) => console.log(`OK! : ${res}`))
  .catch((res) => console.log(`NOT OK! : ${res}`));

// contoh 2
const janji2 = new Promise((resolve, reject) => {
  if (ditepati) {
    setTimeout(() => {
      resolve("Janji ditepati setelah 2 detik");
    }, 2000);
  } else {
    setTimeout(() => {
      reject("Janji diingkari setelah 1 detik");
    }, 1000);
  }
});

janji2
  .finally(() => console.log("selesai menunggu!"))
  .then((res) => console.log(`OK! : ${res}`))
  .catch((res) => console.log(`NOT OK! : ${res}`));
