function openLetter() {

    document.getElementById("opening").classList.remove("active");

    document.getElementById("letter").classList.add("active");

    createHeartExplosion();
}


function showSurprise() {

    document.getElementById("letter").classList.remove("active");

    document.getElementById("surprise").classList.add("active");

    createHeartExplosion();
}


function loveButton() {

    const message = document.getElementById("finalMessage");

    message.innerHTML = `
        <p>
            Loveee uuu too cintaakkuuu cantikkuuuu ❤️
        </p>

        <p>
            Jangan lupa senyum hari ini yaawww sayanggggg 🥺💕
        </p>
    `;

    createHeartExplosion();
}


function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("floating-heart");

    heart.innerHTML = ["❤️", "💖", "💕", "💗", "💓"][Math.floor(Math.random() * 5)];

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize =
        (15 + Math.random() * 30) + "px";

    heart.style.animationDuration =
        (4 + Math.random() * 5) + "s";

    document.querySelector(".hearts").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 9000);
}


function createHeartExplosion() {

    for (let i = 0; i < 20; i++) {

        setTimeout(() => {
            createHeart();
        }, i * 100);

    }
}


// Hati berjalan terus
setInterval(createHeart, 700);