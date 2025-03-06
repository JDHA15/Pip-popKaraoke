//Conexión con HTML (Seleccionar elementos)
const songForm = document.getElementById('song_form');
const playList = document.getElementById('play_list');

//función para agregar una canción a la lista

function addSong(songName, artistName, songUrl) {
    const listSong = document.createElement('li');
    listSong.innerHTML = `
            <strong>${songName}</strong>
            -${artistName}
            <a href="${songUrl}" target ="_blank">Reproducir</a>
            <button class="delete-btn" onclick="eliminar()" type="reset">Eliminar</button>
    
    `;
    //Agregar al HTMl
    playList.appendChild(listSong);


}

//Manejo del envio de forumularios (Eventos)

songForm.addEventListener('submit', (event) => {
    event.preventDefault();

    //Obtener datos del fromulario
    const songName = document.getElementById('song_name').value;
    const artistNanme = document.getElementById('artist_name').value;
    const songUrl = document.getElementById('url_song').value;

    addSong(songName,artistNanme, songUrl)

    songForm.reset()
    

} )
