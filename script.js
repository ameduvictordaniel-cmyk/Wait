const loadingScreen = document.getElementById("loadingScreen");
const welcomeScreen = document.getElementById("welcomeScreen");
const giftScreen = document.getElementById("giftScreen");
const messageScreen = document.getElementById("messageScreen");
const galleryScreen = document.getElementById("galleryScreen");
const finalScreen = document.getElementById("finalScreen");

const startBtn = document.getElementById("startBtn");
const giftBox = document.getElementById("giftBox");
const nextBtn = document.getElementById("nextBtn");
const galleryNextBtn = document.getElementById("galleryNextBtn");
const restartBtn = document.getElementById("restartBtn");

const bgMusic = document.getElementById("bgMusic");

function showScreen(screen){

    loadingScreen.classList.add("hidden");
    welcomeScreen.classList.add("hidden");
    giftScreen.classList.add("hidden");
    messageScreen.classList.add("hidden");
    galleryScreen.classList.add("hidden");
    finalScreen.classList.add("hidden");

    screen.classList.remove("hidden");

}

window.onload = function(){

    setTimeout(function(){

        showScreen(welcomeScreen);

    },3000);

};

startBtn.onclick = function(){

    showScreen(giftScreen);

    if(bgMusic){

        bgMusic.play().catch(function(){});

    }

};

giftBox.onclick = function(){

    giftBox.innerHTML = "🎉";

    giftBox.style.transform = "scale(1.3) rotate(15deg)";

    setTimeout(function(){

        showScreen(messageScreen);

    },1200);

};

nextBtn.onclick = function(){

    showScreen(galleryScreen);

};

galleryNextBtn.onclick = function(){

    showScreen(finalScreen);restartBtn.onclick = function(){

    location.reload();

};

function createHeart(){

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = "-40px";
    heart.style.fontSize = (20 + Math.random() * 25) + "px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "9999";

    document.body.appendChild(heart);

    let y = -40;

    const fall = setInterval(function(){

        y += 4;

        heart.style.top = y + "px";
        heart.style.transform = "rotate(" + y + "deg)";

        if(y > window.innerHeight){

            clearInterval(fall);
            heart.remove();

        }

    },20);

}

function celebrate(){

    for(let i = 0; i < 40; i++){

        setTimeout(function(){

            createHeart();

        },i * 120);

    }

}

const observer = new MutationObserver(function(){

    if(!finalScreen.classList.contains("hidden")){

        celebrate();

    }

});

observer.observe(finalScreen,{
    attributes:true
});

document.addEventListener("visibilitychange",function(){

    if(document.hidden){

        if(bgMusic){

            bgMusic.pause();

        }

    }else{

        if(bgMusic){

            bgMusic.play().catch(function(){});

        }

    }

});

window.addEventListener("resize",function(){

    document.body.style.height = window.innerHeight + "px";

});

};
