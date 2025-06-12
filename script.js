window.onload = function() {
    const squaresNum = Math.floor(Math.random() * 6) + 10;
    const welcomeScreen = document.getElementById("welcome-screen");

    for (let i = 0; i < squaresNum; i++) {
        const randomLeft = Math.floor(Math.random() * 90);
        const randomTop = Math.floor(Math.random() * 90);
        const square = document.createElement("div");
        const randomWidth = Math.floor(Math.random() * 5) + 3;
        const opacity = Math.random()
        square.classList.add("square");
        square.style.left = `${randomLeft}vw`;
        square.style.top = `${randomTop}vh`;
        square.style.width = `${randomWidth}rem`;
        square.style.height = `${randomWidth}rem`;
        square.style.zIndex = (9999 + i + 1).toString();
        square.style.opacity = opacity;
        welcomeScreen.appendChild(square);
    }
    

    const chatMessages = document.querySelectorAll('.chat-bubble');
    chatMessages.forEach((msg, i) => {
        msg.style.opacity = '0';
        setTimeout(() => {
            msg.style.transition = 'opacity 0.6s ease';
            msg.style.opacity = '1';
        }, 9000 + i * 1000);
    });

       const statusText = document.querySelector('.status-text');

// Start typing animation
setTimeout(() => {
    statusText.textContent = 'typing';
    statusText.classList.add('typing-dots');
}, 1000);

// Stop typing and show "online"
setTimeout(() => {
    statusText.textContent = 'online';
    statusText.classList.remove('typing-dots');
}, 6000);

    // const statusText = document.querySelector('.status-text');

    // Typing bubble control
const typingIndicator = document.querySelector('.typing-indicator');

// Show typing after 1s
setTimeout(() => {
    typingIndicator.style.display = 'inline-flex';
}, 1000);

// Hide typing after 6s
setTimeout(() => {
    typingIndicator.style.display = 'none';
}, 6000);


    setTimeout(() => {
        statusText.textContent = 'typing...';
    }, 1000); 

    setTimeout(() => {
        statusText.textContent = 'online';
    }, 9000); 

    setTimeout(() => {
        document.getElementById("main-content").style.display = "flex";
        welcomeScreen.style.opacity = "0";
        setTimeout(() => {
            welcomeScreen.style.display = "none";
        }, 1000);
    }, 3000);
};