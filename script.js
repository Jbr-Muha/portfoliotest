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

    setTimeout(() => {
        document.getElementById("main-content").style.display = "flex";
        welcomeScreen.style.opacity = "0";
        setTimeout(() => {
            welcomeScreen.style.display = "none";
        }, 1000);
    }, 3000);
};