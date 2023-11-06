function changeMedia(videoId) {
    const mediaPlayer = document.getElementById('media-player');
    mediaPlayer.src = `https://www.youtube.com/embed/${videoId}`;
}
