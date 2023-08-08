function generateRandom(min, max){
    let rand = Math.random() * (max - min) + min;
    rand = Math.floor(rand); 
    return rand;
}

var a = 0;
var b = 0;
var c = 0;
var rock = 0;
var paper = 0;
var scissor = 0; 


var btn_1 = document.querySelector(".btn-1");
btn_1.addEventListener("click", function changeImage() {
    var image = document.getElementById('box1image');
    image.src = "rock.png";
    a = 1;
    b = 0;
    c = 0;
    console.log("Rock it is");
    logic()
})

var btn_2 = document.querySelector(".btn-2");
btn_2.addEventListener("click", function changeImage() {
    var image = document.getElementById('box1image');
    image.src = "paper.png";
    b = 1;
    a = 0;
    c = 0;
    console.log("Paper it is");
    logic()
})

var btn_3 = document.querySelector(".btn-3");
btn_3.addEventListener("click", function changeImage() {
    var image = document.getElementById('box1image');
    image.src = "scissor.png";
    c = 1;
    a = 0;
    b = 0;
    console.log("Scissor it is");
    logic()
})


function logicComputer(){
    var choice = generateRandom(1, 4);
    if(choice == 1){
        console.log("Hello");
        var image = document.getElementById('box2image');
        image.src = "rock.png";
        console.log("Rock it is");
        rock = 1;
        paper = 0;
        scissor = 0;
    }
    else if(choice == 2){
        console.log("Heeello");
        var image = document.getElementById('box2image');
        image.src = "paper.png";
        console.log("paper it is");
        rock = 0;
        paper = 1;
        scissor = 0;
    }
    else{
        console.log("Helllllo");
        var image = document.getElementById('box2image');
        image.src = "scissor.png";
        console.log("scissor it is");
        rock = 0;
        paper = 0;
        scissor = 1;
    }
}
logicComputer();
function logic(){
    if(a === 1){
        logicComputer();
        console.log("it started");
        comaprisonRock()
        
    }
    else if(b === 1){
        logicComputer();
        console.log("yep");
        comaprisonPaper()
    }
    else{
        logicComputer();
        console.log("haa")
        comaprisonScissor()
    }
}
var circle_1 = document.querySelector("#circle-1");
var circle_2 = document.querySelector("#circle-2");
var circle_3 = document.querySelector("#circle-3");
var userScore = 0;
var computerScore = 0;
var userS = document.querySelector("#userS");
var computerS = document.querySelector("#computerS");
function comaprisonRock(){
    if(rock == 1){
        console.log("Draw");
        circle_1.style.background ="linear-gradient(to right, #010201, #0c110d, #424842, #686e69)";
        circle_2.style.background = "transparent";
        circle_3.style.background ="linear-gradient(to right, #010201, #0c110d, #424842, #686e69)";
        finalScore();
    }
    else if(paper == 1){
        console.log("Lost");
        computerScore += 1;
        computerS.innerHTML = computerScore;
        circle_1.style.background = "transparent";
        circle_2.style.background ="linear-gradient(to right, #010201, #0c110d, #424842, #686e69)";
        circle_3.style.background ="linear-gradient(to right, #010201, #0c110d, #424842, #686e69)";
        finalScore();
    }
    else{
        console.log("Won");
        userScore += 1;
        userS.innerHTML = userScore;
        circle_1.style.background ="linear-gradient(to right, #010201, #0c110d, #424842, #686e69)";
        circle_2.style.background ="linear-gradient(to right, #010201, #0c110d, #424842, #686e69)";
        circle_3.style.background = "transparent";
        finalScore();
    }
}
function comaprisonPaper(){
    if(rock == 1){
        console.log("Won");
        userScore += 1;
        userS.innerHTML = userScore;
        circle_1.style.background ="linear-gradient(to right, #010201, #0c110d, #424842, #686e69)";
        circle_2.style.background ="linear-gradient(to right, #010201, #0c110d, #424842, #686e69)";
        circle_3.style.background = "transparent";
        finalScore();
    }
    else if(paper == 1){
        console.log("Draw");
        circle_1.style.background ="linear-gradient(to right, #010201, #0c110d, #424842, #686e69)";
        circle_2.style.background = "transparent";
        circle_3.style.background ="linear-gradient(to right, #010201, #0c110d, #424842, #686e69)";
        finalScore();
    }
    else{
        console.log("Lost");
        circle_1.style.background = "transparent";
        computerScore += 1;
        computerS.innerHTML = computerScore;
        circle_2.style.background ="linear-gradient(to right, #010201, #0c110d, #424842, #686e69)";
        circle_3.style.background ="linear-gradient(to right, #010201, #0c110d, #424842, #686e69)";
        finalScore();
    }
}

function comaprisonScissor(){
    if(rock == 1){
        console.log("Lost");
        circle_1.style.background = "transparent";
        computerScore += 1;
        computerS.innerHTML = computerScore;
        circle_2.style.background = "linear-gradient(to right, #010201, #0c110d, #424842, #686e69)";
        circle_3.style.background = "linear-gradient(to right, #010201, #0c110d, #424842, #686e69)";
        finalScore();
    }
    else if(paper == 1){
        console.log("Won");
        userScore += 1;
        userS.innerHTML = userScore;
        circle_1.style.background = "linear-gradient(to right, #010201, #0c110d, #424842, #686e69)";
        circle_2.style.background = "linear-gradient(to right, #010201, #0c110d, #424842, #686e69)";
        circle_3.style.background = "transparent";
        finalScore();
    }
    else{
        console.log("Draw");
        circle_1.style.background = "linear-gradient(to right, #010201, #0c110d, #424842, #686e69)";
        circle_2.style.background = "transparent";
        circle_3.style.background = "linear-gradient(to right, #010201, #0c110d, #424842, #686e69)";
        finalScore();
    }
}
var btn_4 = document.querySelector(".btn-4");
btn_4.addEventListener("click", function(){
    location.reload();
})
var main = document.querySelector("#main");
function finalScore(){
    if(userScore >= 5 ){
        console.log("Yow Won Now Happy?");
        main.innerHTML = "Winner";
        main.style.background = "#2c9f45";
    }
    else if(computerScore >= 5 ){
        console.log("OOPS!");
        main.innerHTML = "Loser";
        main.style.background = "#be0027";
    }
}


