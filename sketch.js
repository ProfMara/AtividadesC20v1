var A, B;

var distanciaX, distanciaY;

function setup() {
    createCanvas(800, 400);
    A = createSprite(400, 200, 100, 30);
    B = createSprite(450, 200, 30, 100);

    A.debug = true;
    B.debug = true;
    A.shapeColor = "green";
    B.shapeColor = "green";


}
var somaDasLarguras, somaDasAlturas;

function draw() {
    background(0);
    distanciaX = A.x - B.x;
    distanciaY = A.y - B.y;

    somaDasLarguras = A.width + B.width;
    somaDasAlturas = A.height + B.height;

    distanciaMinimaX = somaDasLarguras / 2;
    distanciaMinimaY = somaDasAlturas / 2;



    fill(255);
    textSize(30);


    text("distância na horizontal: " + distanciaX, 400, 40);
    text("distância na vertical: " + distanciaY, 400, 100);


    A.position.x = World.mouseX;
    A.position.y = World.mouseY;


    if (A.x - B.x < distanciaMinimaX) {
        A.shapeColor = "red";
        B.shapeColor = "red";
    } else {
        A.shapeColor = "green";
        B.shapeColor = "green";
    }







    drawSprites();
}