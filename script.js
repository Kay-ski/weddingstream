document.addEventListener('DOMContentLoaded', () => {
    const options = {
        width: '100%',
        height: '100%',
        channel: 'kayski101',
        parent: ['github.io', 'your-domain.com']  // We'll update this with your actual domain
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
