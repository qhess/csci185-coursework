const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

function search(ev) {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}

async function getTracks(term) {
    let tracksEndpoint = baseURL + "?";
    tracksEndpoint += "q=" + term + "&type=track";
    console.log(tracksEndpoint);

    document.querySelector('#tracks').innerHTML = "";

    const trackData = await fetch(tracksEndpoint).then(response => response.json());




    let counter = 0;
    while (counter < 5) {
        const template = `
    <section class="track-item preview" onClick="playSong('${trackData[counter].id}')">
        <img src="${trackData[counter].album.image_url}">
        <i class="fas fa-play play-track" aria-hidden="true"></i>
        <div class="label">
            <h2>${trackData[counter].name}</h2>
            <p>
                ${trackData[counter].artist.name}
            </p>
        </div>
    </section>
    `
        document.querySelector('#tracks').insertAdjacentHTML('beforeend', template);
        counter++;

    }
}

async function getAlbums(term) {

    console.log(`
        get albums from spotify based on the search term
        "${term}" and load them into the #albums section 
        of the DOM...`);
    let albumsEndpoint = baseURL + "?";
    albumsEndpoint += "q=" + term + "&type=album";
    console.log(albumsEndpoint);

    document.querySelector('#albums').innerHTML = "";

    const albumData = await fetch(albumsEndpoint).then(response => response.json());
    
    let counter = 0;
    while (counter < 20) {
    const template = `<section class="album-card" id="${albumData[counter].id}">
    <div>
        <img src="${albumData[counter].image_url}">
        <h2>${albumData[counter].name}</h2>
        <div class="footer">
            <a href="${albumData[counter].spotify_url}" target="_blank">
                view on spotify
            </a>
        </div>
    </div>
</section>`

console.log (albumData);
    document.querySelector('#albums').insertAdjacentHTML('beforeend', template);
    counter++;
    }
}



function playSong(id) {
    //let id = '';
    const template = `
    <iframe style="border-radius:12px" 
        src="https://open.spotify.com/embed/track/${id}?utm_source=generator" 
        width="100%" 
        height="352" 
        frameBorder="0" 
        allowfullscreen="" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy"></iframe>
    `;
    document.querySelector('#artist').innerHTML = template;
}

async function getArtist(term) {
    let artistEndpoint = baseURL + "?";
    artistEndpoint += "q=" + term + "&type=artist";
    console.log(artistEndpoint);

    const artistData = await fetch(artistEndpoint).then(response => response.json())
    //console.log(artistData);
    console.log(artistData[0].name);
    console.log(artistData[0].image_url);

    document.querySelector('#artist-section h1').innerHTML = artistData[0].name;
    const html = `<img src="${artistData[0].image_url}" />`;

    const artistCard = `
        <section class="artist-card" id="${artistData[0].id}">
            <div>
                 <img src="${artistData[0].image_url}">
                <h2>${artistData[0].name}</h2>
                <div class="footer">
                     <a href="${artistData[0].spotify_url}" target="_blank">
                         view on spotify
                     </a>
                 </div>
            </div>
        </section>
    `;

    document.querySelector('#artist').innerHTML = artistCard;
};


document.querySelector('#search').onkeyup = function (ev) {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
}