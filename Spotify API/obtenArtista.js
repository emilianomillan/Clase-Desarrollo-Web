async function obtenArtistaFijo() {
    const token = document.getElementById("token").value.trim();
    const artistId = document.getElementById("artist-id").value;
    const URL = "https://api.spotify.com/v1/artists/${artistId}";
    
    const args = {
        method: "GET",
        headers: {
            Authorization: "Bearer ${token}"
        }  
    };

    const response = await fetch(URL, args);
    console.log(response);
    const data = await response.json();
    console.log(data);
    
    pintarArtista(data);
}

function pintarArtista(artist) {
    const imageUrl = artist.images && artist.images.length > 0 
        ? artist.images[0].url 
        : 'https://via.placeholder.com/400x400/1DB954/ffffff?text=No+Image';

    const followers = artist.followers.total.toLocaleString();
    const popularity = artist.popularity;
    const genres = artist.genres.length > 0 
        ? artist.genres.map(genre => 
            `<span class="badge bg-secondary rounded-pill px-3 py-2 me-2 mb-2">${genre.toUpperCase()}</span>`
          ).join('') 
        : '<span class="text-secondary">No hay géneros disponibles</span>';

    const card = 
        <div class="card bg-dark text-white border-0 shadow-lg">
            <div class="row g-0">
                <div class="col-md-5">
                    <img src="${imageUrl}" class="img-fluid w-100 h-100" style="object-fit: cover; min-height: 400px;" alt="${artist.name}">
                </div>
                <div class="col-md-7">
                    <div class="card-body p-5">
                        <div class="mb-2">
                            <span class="badge bg-dark border border-secondary text-uppercase small px-3 py-2">Artista</span>
                        </div>
                        
                        <h1 class="display-3 fw-bold mb-4">${artist.name}</h1>
                        
                        <div class="mb-4">
                            <p class="text-secondary mb-2 fw-semibold">GÉNEROS</p>
                            <div class="d-flex flex-wrap">
                                ${genres}
                            </div>
                        </div>

                        <div class="row g-4 mb-4">
                            <div class="col-6">
                                <p class="text-secondary mb-2 small">SEGUIDORES</p>
                                <h2 class="display-6 fw-bold text-success mb-0">${followers}</h2>
                            </div>
                            <div class="col-6">
                                <p class="text-secondary mb-2 small">POPULARIDAD</p>
                                <h2 class="display-6 fw-bold text-success mb-0">${popularity}<span class="fs-4 text-secondary">/100</span></h2>
                            </div>
                        </div>

                        <div class="mb-4">
                            <div class="progress bg-secondary" style="height: 6px;">
                                <div class="progress-bar bg-success" role="progressbar" 
                                     style="width: ${popularity}%;" 
                                     aria-valuenow="${popularity}" 
                                     aria-valuemin="0" 
                                     aria-valuemax="100">
                                </div>
                            </div>
                        </div>

                        <div class="d-grid gap-3">
                            <a href="${artist.external_urls.spotify}" 
                               target="_blank" 
                               class="btn btn-success btn-lg rounded-pill fw-bold">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-play-circle-fill me-2" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
                                </svg>
                                Reproducir en Spotify
                            </a>
                            <button class="btn btn-outline-light btn-lg rounded-pill fw-semibold">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-heart me-2" viewBox="0 0 16 16">
                                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                                </svg>
                                Guardar en biblioteca
                            </button>
                        </div>

                        <div class="mt-4 pt-4 border-top border-secondary">
                            <p class="text-secondary small mb-1">SPOTIFY URI</p>
                            <code class="text-success">${artist.uri}</code>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ;

    document.getElementById('artist-info').innerHTML = card;
}
