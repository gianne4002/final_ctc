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
    let tokensmall = document.getElementById("tokensmall");
    let h2 = document.getElementById("h2");
    let envelopeSound = document.getElementById("envelopeSound");


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
        envelopeSound.currentTime = 0; 
        envelopeSound.playbackRate = 0.85;
        envelopeSound.volume = 0.3;
        envelopeSound.play();
        setTimeout(function () {
            envelopeSound.pause(); 
            envelopeSound.currentTime = 0; 
        }, 700);
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
        clouds.value = "";
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
        tokensmall.style.display = "block"; 
        h2.style.display = "block";
    });

    tokensmall.addEventListener("click", function () {
        randomImage.style.display = "none";
        token.classList.add("show");
        token.style.display = "block"; 
        button2.style.display = "block"; 
        clouds.style.display = "block"; 
        tokensmall.style.display = "none"; 
        overlay.style.display = "none";
        h2.style.display = "none";

    });

    document.addEventListener("DOMContentLoaded", function () {
        let envelope = document.getElementById("envelope");
    
        function stopAnimation() {
            if (envelope.classList.contains("bottom-left")) {
                envelope.style.animation = "none"; 
            }
        }
    });
    })
