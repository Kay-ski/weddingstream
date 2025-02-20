document.addEventListener('DOMContentLoaded', () => {
    const options = {
        width: '100%',
        height: '100%',
        channel: 'kayski101',
        parent: ['kamalroberts.com', 'www.kamalroberts.com'],
        layout: 'video-with-chat',
        chat: 'hidden',
        theme: 'dark'
    };

    // Create the Twitch embed
    new Twitch.Embed('twitch-embed', options);

    // Handle orientation change for mobile devices
    window.addEventListener('orientationchange', () => {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 100);
    });
});
