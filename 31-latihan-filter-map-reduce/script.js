// latihan filter map reduce

// ambil elemen vidio
const vidios = Array.from(document.querySelectorAll("[data-duration]")); //ubah nodelist menjadi array
const jumlahVidio = document.querySelector(".jumlah-vidio");
const totalDurasi = document.querySelector(".total-durasi");

// Cari dan pilih vidio dengan judul javascript lanjutan
let vidioJavascriptLanjutan = vidios
  .filter((vidio) => {
    return vidio.textContent.includes("JAVASCRIPT LANJUTAN");
  })

  // ambil durasi masing masing vidio
  .map((durasiVidio) => {
    return durasiVidio.getAttribute("data-duration");
  })

  // ubah durasi menjadi integer dan ubah menjadi detik
  .map((durasi) => {
    const [menit, detik] = durasi.split(":").map((item) => parseInt(item));
    return menit * 60 + detik;
  })

  // jumlahkan semua detik
  .reduce((acc, detik) => acc + detik, 0);

// ubah detik menjadi menit
const jam = Math.floor(vidioJavascriptLanjutan / 3600);
vidioJavascriptLanjutan = vidioJavascriptLanjutan - jam * 3600;
const menit = Math.floor(vidioJavascriptLanjutan / 60);
const detik = vidioJavascriptLanjutan - menit * 60;

// tampilkan jumlah vidio
jVidio = vidios.filter((vidio) => {
  return vidio.textContent.includes("JAVASCRIPT LANJUTAN");
}).length;

// tampilkan total durasi
totalDurasi.textContent = `${menit} menit ${detik} detik`;

// simpan di DOM
jumlahVidio.textContent = `${jVidio} Vidio`;
totalDurasi.textContent = `${jam} jam ${menit} menit ${detik} detik`;
