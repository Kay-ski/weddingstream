document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('change-text');
    const message = document.getElementById('message');

    const messages = [
        'Hello, World!',
        'Welcome to my simple site!',
        'Click again for another message!',
        'Isn\'t this fun?',
        'JavaScript is awesome!'
    ];

    button.addEventListener('click', () => {
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        message.textContent = randomMessage;
    });

    // Replace 'CHANNEL_NAME' with your Twitch channel name
    const options = {
        width: '100%',
        height: '100%',
        channel: 'kayski101',
        parent: ['localhost', 'your-domain.com']  // Replace your-domain.com with your actual domain
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
