let gut=[];
let gut_num = 8;
let gut_img;


function preload(){
   gut_img = loadImage("gut.png")
   gut_blue = loadImage("blue.png")
   gut_green = loadImage("green.png")
   gut_pink = loadImage("pink.png")
   gut_yellow = loadImage("yellow.png")
   gut_purple = loadImage("purple.png")
}

function setup(){
    createCanvas (windowWidth, windowHeight);
    
    for(let i=0; i<gut_num; i++){
    gut [i]= new Gut(random(0 ,width), random(0, height), random, random, random(0.1, 8));
    }
}

function draw(){
    background (0);
    for(let i=0; i<gut_num; i++){
    gut[i].display();
    gut[i].move()   
    }

    if (mouseIsPressed){
        image(gut_blue, 100, 50, 300, 200);
        image(gut_yellow, 100, 450, 450, 250);
        image(gut_purple, 770, 500, 250, 150);
        image(gut_green, 400, 200, 250, 150);
        image(gut_pink, 900, 100, 500, 300);
    }
}


class Gut {
	constructor(tempX, tempY, tempW, tempH, tempSpeed, tempShade){
        this.x = tempX;
        this.y = tempY;
        this.W = tempW;
        this.H = tempH;
        this.speed = tempSpeed;
        this.shade = tempShade;
    }

move(){
    this.y = this.y + 1;
    if(this.y > height){
        this.y = 0;
  }
}

display(){
    image(gut_img, this.x, this.y, this.w, this.h);
  }
}

//inspired by Steigmeiter & Walsh

