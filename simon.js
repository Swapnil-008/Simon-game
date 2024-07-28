let userSeq = [];
let gameSeq = [];

let btns = ["first", "second", "third", "fourth"];
let level = 0;
let started = false;
let highestScore = 0;

let h3 = document.querySelector("h3");
document.addEventListener("keypress", function () {
    if (started == false) {
        started = true;
        levelUp();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 200);
}

function levelUp() {
    userSeq = [];
    level++;
    if (level > highestScore)
    {
        highestScore = level;
    }
    h3.innerHTML = "Level " + level;

    let randInd = Math.floor(Math.random() * 4);
    let randColor = btns[randInd];
    let randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    btnFlash(randBtn);
}

function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 500);
        }
    }
    else {

        h3.innerHTML = `Game Over! Your score was : <b>${level}</b> </br>Highest score is : ${highestScore} </br> Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        started = false;
        gameSeq = [];
        userSeq = [];
        level = 0;
    }
}
function btnPress() {
    let btn = this;
    btnFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

let boxs = document.querySelectorAll(".box");
for (box of boxs) {
    box.addEventListener("click", btnPress);
}