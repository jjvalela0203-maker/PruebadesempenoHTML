document.addEventListener('DOMContentLoaded', () => {
    const audioPlayers = document.querySelectorAll('audio');

    audioPlayers.forEach(audio => {
        // Encuentra el contenedor de la canción más cercano
        const songContainer = audio.closest('.cancion');
        // Encuentra el disco dentro de ese contenedor
        const disc = songContainer ? songContainer.querySelector('.discogirando') : null;

        if (disc) {
            audio.addEventListener('play', () => {
                // Pausa todos los demás audios y detiene sus discos
                audioPlayers.forEach(otherAudio => {
                    if (otherAudio !== audio && !otherAudio.paused) {
                        otherAudio.pause();
                        const otherSongContainer = otherAudio.closest('.cancion');
                        const otherDisc = otherSongContainer ? otherSongContainer.querySelector('.discogirando') : null;
                        if (otherDisc) {
                            otherDisc.classList.remove('playing');
                        }
                    }
                });
                // Inicia la rotación del disco actual
                disc.classList.add('playing');
            });

            audio.addEventListener('pause', () => {
                // Detiene la rotación del disco actual
                disc.classList.remove('playing');
            });

            audio.addEventListener('ended', () => {
                // Detiene la rotación del disco cuando la canción termina
                disc.classList.remove('playing');
            });
        }
    });
});
