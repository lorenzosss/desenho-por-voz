

var circuloT= ""

var circuloD = 0
var EscreGente = window.webkitSpeechRecognition
var APi = new EscreGente()
 
function start() {
    APi.start()
}

APi.onresult = function(result){
    console.log(result)

    if (result.results[0][0].transcript == "maçã"){
circuloD = Math.floor(Math.random()*300 + 10) 
circuloX = Math.floor(Math.random()*600 - 10) 
circuloY = Math.floor(Math.random()*500 - 10) 
circuloT = "círculo foi desenhado"
    }
}

function preload() {

    maça = loadImage("https://static.vecteezy.com/system/resources/previews/001/199/868/non_2x/apple-png.png")

}

function setup() {
    canvas=createCanvas(720,680)

}

function draw() {
    if(circuloT == "círculo foi desenhado"){
        image(maça,circuloX,circuloY,circuloD,circuloD)
        circuloT= ""
    }
    
}