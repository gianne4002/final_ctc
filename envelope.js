document.addEventListener("DOMContentLoaded", function () {
    let envelope = document.getElementById("envelope");
    let envelopeOpen = document.getElementById("envelope_open");
    let button = document.getElementById("button");
    let button2 = document.getElementById("button2");
    let token = document.getElementById("token");
    let clouds = document.getElementById("clouds");
    let video = document.getElementById("video");
    let capsule = document.getElementById("capsule");
    let overlay = document.getElementById("overlay");
    let h1 = document.getElementById("h1");
    let randomImage = document.getElementById("randomImage");

    const images = [
        "resources/note1.png",
        "resources/note2.png",
        "resources/note3.png",
        "resources/note4.png",
        "resources/note5.png"
    ];

    envelope.addEventListener("click", function () {
        envelope.style.display = "none";
        envelopeOpen.style.display = "block";
        button.style.display = "block";
    });

    button.addEventListener("click", function () {
        envelopeOpen.style.display = "none";
        button.style.display = "none";
        envelope.style.display = "block";
        envelope.classList.add("bottom-left");

        token.classList.add("show");
        button2.style.display = "block"; 
        clouds.style.display = "block"; 
    });

    button2.addEventListener("click", function () {
        token.style.display = "none";
        button2.style.display = "none";
        clouds.style.display = "none";
        video.style.display = "block"; 
        video.play(); 
    });

    video.addEventListener("ended", function () {
        video.pause();  
        video.style.display = "none"; 
        capsule.style.display = "block";
        overlay.style.display = "block";
        h1.style.display = "block";
        // token.style.display = "block";
        // token.classList.add("bottom-left");
    });

    capsule.addEventListener("click", function () {
        h1.style.display = "none";
        capsule.style.display = "none";
        let randomIndex = Math.floor(Math.random() * images.length);
        randomImage.src = images[randomIndex];
        randomImage.style.display = "block";
        overlay.style.display = "none";
    });
});

