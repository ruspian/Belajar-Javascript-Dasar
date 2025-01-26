// switch

// let angka = parseInt(prompt("Masukkan angka: "));

// switch (angka) {
//   case 1:
//     alert("Anda memilih angka 1");
//     break;
//   case 2:
//     alert("Anda memilih angka 2");
//     break;
//   case 3:
//     alert("Anda memilih angka 3");
//     break;
//   case 4:
//     alert("Anda memilih angka 4");
//     break;
//   case 5:
//     alert("Anda memilih angka 5");
//     break;
//   default:
//     alert("Yang anda masukkan bukan angka");
//     break;
// }

let item = prompt(
  "Masukkan makanan / minuman pesanan anda: \n menu: \n 1. Nasi Goreng \n 2. Es Teh \n 3. Es Jeruk \n 4. Es Kelapa \n 5. Es Campur "
);

switch (item) {
  case "Nasi Goreng":
    alert("Anda memesan nasi goreng");
    break;
  case "Es Teh":
    alert("Anda memesan Es Teh");
    break;
  case "Es Jeruk":
    alert("Anda memesan Es Jeruk");
    break;
  case "Es Kelapa":
    alert("Anda memesan Es Kelapa");
    break;
  case "Es Campur":
    alert("Anda memesan Es Campur");
    break;
  default:
    alert("Yang anda masukkan tidak ada di menu");
    break;
}
