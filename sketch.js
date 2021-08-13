var rectangulofijo, rectanguloMovil;
var rectangulofijoImg, rectanguloMovilImg;
var sisi, sisiImg;

function preload(){
  rectanguloMovilImg = loadImage("ce.png");
  rectangulofijoImg = loadImage("si.png");
  
}

function setup() {
  createCanvas(1200,800);
  rectangulofijo = createSprite( 200,200,50,80);
  rectangulofijo.addImage(rectangulofijoImg);
  rectanguloMovil =createSprite(400, 200, 30, 80);
  rectanguloMovil.addImage(rectanguloMovilImg);
  rectanguloMovil.debug  = true;
rectangulofijo.debug = true;
}

function draw() {
  background(255,255,255);  
  rectanguloMovil.x = World.mouseX;
  rectanguloMovil.y = World.mouseY;
  if(rectanguloMovil.x - rectangulofijo.x < rectangulofijo.width/2 + rectanguloMovil.width/2 
    && rectangulofijo.x - rectanguloMovil.x < rectangulofijo.width/2 + rectanguloMovil.width/2 
    && rectanguloMovil.y - rectangulofijo.y < rectangulofijo.height/2 + rectanguloMovil.height/2 
    && rectangulofijo.y - rectanguloMovil.y < rectangulofijo.height/2 + rectanguloMovil.height/2){
      
    }
  else{
    rectanguloMovilImg = loadImage("mamahuevo.png");
      rectangulofijoImg = loadImage("simp.png");
  }
  console.log (rectanguloMovil.x-rectangulofijo.x)
  drawSprites();

}