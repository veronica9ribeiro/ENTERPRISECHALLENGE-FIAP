document.querySelectorAll('.video-card').forEach(card => {
    const btn = card.querySelector('.play-btn');
    const video = card.querySelector('video');
    btn.addEventListener('click', () => {
        btn.style.display = 'none';
        video.controls = true;
        video.play();
    });
    video.addEventListener('pause', () => {
        if (video.currentTime < video.duration) {
            btn.style.display = '';
            video.controls = false;
        }
    });
});