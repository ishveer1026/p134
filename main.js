function preload(){
    img=loadImage("i.jpg");
}
function setup(){
    canvas=createCanvas(600, 600);
    canvas.position(850,80);
}
function draw(){
    image(img, 0,0,600,600);
}