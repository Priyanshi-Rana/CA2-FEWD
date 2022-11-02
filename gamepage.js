// document.getElementById("playButton").onclick = playFunction;
const Video = document.getElementById("video");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");



var Songs = [
    ["./assets/hindisongs/baarish.mp3","./assets/covers/baarish-Cover.jpg"],
    ["./assets/hindisongs/Aaya Na Tu.mp3","./assets/covers/"],
    ["./assets/hindisongs/ahdilhaimushkil.mp3","./assets/covers/ae dil hai mushkil - Cover.jpg"],
    ["./assets/hindisongs/channa ve.mp3","./assets/covers/Channa ve - Cover.jpg"],
    ["./assets/hindisongs/Galiyaan.mp3","./assets/covers/Galiyan-Cover.jpg"],
    ["./assets/hindisongs/gerua.mp3","./assets/covers/gerua-cover.jpg"],
    ["./assets/hindisongs/Hasi ban gaya.mp3","./assets/covers/hasi-Cover.jpg"],
    ["./assets/hindisongs/humrah.mp3","./assets/covers/Humraah - Cover.jpg"],
    ["./assets/hindisongs/ishqwalalove.mp3","./assets/covers/ishq wala love - Cover.jpg"],
    ["./assets/hindisongs/jhoom.mp3","./assets/covers/"],
    ["./assets/hindisongs/Kabhi Jo Badal Barse.mp3","./assets/covers/"]
]

var playcontrol = 0;
var optionControl = 0;



function randomIndex(){
    var randInt = Math.floor(Math.random()*Songs.length);
    var randOptions1 = Math.floor(Math.random()*Songs.length);
    var randOptions2 = Math.floor(Math.random()*Songs.length);
    var randOptions3 = Math.floor(Math.random()*Songs.length);
    arrayofIndex = [randInt,randOptions1,randOptions2,randOptions3]
    return arrayofIndex;
}
console.log(randomIndex());


// function randomSong(){
//     let IndexOfSong = randomIndex();
//     var audio = new Audio(Songs[IndexOfSong]);
//     Songs.splice(IndexOfSong,1)
//     return audio
// }

// function options(){
//     var indexofcover = randomIndex();
//     console.log(indexofcover);
//     var hint = document.createElement("img")
//     hint.src = Songs[0][1];
//     console.log(hint)
//     hint.height = 200;
//     hint.width = 250;
//     option1.appendChild(hint)
// }

// function playFunction(){
//     while(playcontrol!=1 && optionControl!=1)
//     {
//         Video.play();
//         audio_now = randomSong();
//         audio_now.play();
//         playcontrol++;
//         options();
//         optionControl++;
//     }
//     // console.log(playcontrol)
// }







