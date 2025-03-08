// http://www.omdbapi.com/?apikey=dca61bcc&s=avengers

// event tombol cari di klik
$(".search-button").on("click", function () {
  // ajax ambil data dari api
  $.ajax({
    url:
      "http://www.omdbapi.com/?apikey=dca61bcc&s=" + $(".input-keyword").val(),
    success: (res) => {
      const movies = res.Search;
      let cards = "";
      movies.forEach((movie) => {
        cards += tampilkanCard(movie);
        $(".movie-container").html(cards);
      });

      // menampilkan detail ketika klik detail button
      $(".modal-detail-button").on("click", function () {
        $.ajax({
          url:
            "http://www.omdbapi.com/?apikey=dca61bcc&i=" + $(this).data("id"),
          success: (movie) => {
            const movieDetail = tampilkanModal(movie);
            $(".modal-body").html(movieDetail);
          },
          error: (e) => {
            console.log(e.responseText);
          },
        });
      });
    },
    error: (e) => {
      console.log(e.responseText);
    },
  });
});

function tampilkanCard(movie) {
  return `
        <div class="col-md-4 my-3">
          <div class="card">
            <img src="${movie.Poster}" class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">${movie.Title}</h5>
              <h6 class="card-subtitle mb-2 text-body-secondary">
                ${movie.Year}
              </h6>
              <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal"
              data-bs-target="#detailModal" data-id="${movie.imdbID}">Detail</a>
            </div>
          </div>
        </div>
        `;
}

function tampilkanModal(movie) {
  return `
          <div class="container-fluid">
              <div class="row">

                <!-- gambar -->
                <div class="col-md-3">
                  <img src="${movie.Poster}" class="img-fluid" />
                </div>

                <!-- deskripsi  -->
                <div class="col-md">
                  <ul class="list-group">
                    <li class="list-group-item"><h4>${movie.Title} (${movie.Year})</h4></li>
                    <li class="list-group-item"><strong>Directur : </strong> ${movie.Director}</li>
                    <li class="list-group-item"><strong>Aktor : </strong>${movie.Actors}</li>
                    <li class="list-group-item"><strong>Genre : </strong> ${movie.Genre}</li>
                    <li class="list-group-item"><strong>Deskripsi :</strong>${movie.Plot}</li>
                  </ul>
                </div>
            </div>
          </div>
          `;
}
