// list of iTunes song IDs to fetch
const songIDs = [
    "1767048672",
    "820541663",
    "1765760350",
    "1765929060",
    "1764837465"
]

// fetches song data from iTunes
async function fetchPreviews(idArray) {
    // using .toString() outputs each element of array separated by comma
    const response = await fetch(`https://itunes.apple.com/us/lookup?id=${idArray.toString()}`)
    const data = await response.json();

    return data.results;
}

// changes 'src' tag of <audio>
function displayPreview(songs, index) {
    const audio = document.querySelector('audio');
    audio.src = songs[index].previewUrl;

    const songsDiv = document.querySelector('#available-songs');
    const currentSongIndex = songsDiv.dataset.currentSong;
    songsDiv.children[index].classList.add('selected');

    // only remove class if indices are different
    if (index != currentSongIndex) {
        songsDiv.children[currentSongIndex].classList.remove('selected');
    }

    songsDiv.dataset.currentSong = index;
}

// async IIFE to wrap initial code in async context, as top-level await is not supported yet
// see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/async_function#description
(async () => {
    const songs = await fetchPreviews(songIDs);

    // using 'in' to get index...
    for (const index in songs) {
        // so need to set song in block
        const song = songs[index];

        const div = document.createElement('div');
        div.classList.add('song-item');
        div.addEventListener('click', () => {
            displayPreview(songs, index);
        })

        const title = document.createElement('p');
        title.classList.add('title');
        title.innerText = song.trackName;

        const artist = document.createElement('p');
        artist.classList.add('artist');
        artist.innerText = song.artistName;

        const artwork = document.createElement('img');
        artwork.src = song.artworkUrl100;

        div.append(artwork, title, artist);
        document.querySelector('#available-songs').append(div);
    }

    displayPreview(songs, 0);
})();