function changeMedia(videoId) {
    const mediaPlayer = document.getElementById('media-player');
    mediaPlayer.src = `https://uqload.io/embed-${videoId}`;
}
