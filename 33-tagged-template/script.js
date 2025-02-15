// tagged templates

// const nama = "otong";
// const umur = 20;

// function coba(strings, ...values) {
// rest patameter -> untuk menampung nilai array / semua parameter (...values)

// menggaubungkan string dan value menggunakan forEach
// let string = "";
// strings.forEach((str, i) => {
//   string += `${str}${values[i] || ""}`;
// });
// return string;

// menggabungkan string dan value menggunakan reduce
//   return strings.reduce(
//     (string, str, i) => `${string}${str}${values[i] || ""}`,
//     ""
//   );
// }

// const str = coba`halo, nama saya ${nama}, saya ${umur} tahun`;

// console.log(str);

// higlight

const nama = "otong";
const umur = 20;
const email = "otong@com";

function coba(strings, ...values) {
  return strings.reduce(
    (string, str, i) =>
      `${string}${str}<span class="hl">${values[i] || ""}</span>`,
    ""
  );
}

const str = coba`halo, nama saya ${nama}, saya ${umur} tahun, email saya ${email}`;

document.body.innerHTML = str;
