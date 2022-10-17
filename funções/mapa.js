function createMap(){
    var wallPosition = [
    {x: 0,y: windowHeight/2,w: 20,h: windowHeight},
    {x: windowWidth,y: windowHeight/2,w: 20,h:windowHeight},
    {x: windowWidth/2,y: 0,w:windowWidth,h: 20},
    {x: windowWidth/2,y: windowHeight,w: windowWidth,h: 20},
    {x: windowWidth/2-75,y: 750,w: 20,h: 200},
    {x: windowWidth/2+75,y: 750,w: 20,h: 200},
    {x: windowWidth/2-335,y: 640,w: 500,h: 20},
    {x: windowWidth/2+335,y: 640,w: 500,h: 20},
    {x: windowWidth/2-575,y: 250,w: 20,h: 800},
    {x: windowWidth/2+575,y: 250,w: 20,h: 800},
    {x: windowWidth/2, y: 500, w: 720,h: 20},
    {x: windowWidth/2+ 465,y: 420,w: 20,h: 180},
    {x: windowWidth/2+ 515,y: 320,w: 120,h: 20},
    {x: windowWidth/2+ 465,y: 130,w: 20,h: 250},
    {x: windowWidth/2+ 420,y: 245,w: 100,h: 20},
    {x: windowWidth/2+ 375,y: 100,w: 200,h:20},
    {x: windowWidth/2+ 275,y: 252,w: 20,h: 325},
    {x: windowWidth/2+ 220,y: 404,w: 100,h: 20},
    {x: windowWidth/2+ 175,y: 252,w: 20,h: 325},
    {x: windowWidth/2+ 75,y: 252,w: 20,h: 325},
    {x: windowWidth/2- 200,y: 100, w: 530,h: 20},
    {x: windowWidth/2- 455,y: 300, w: 20,h: 420},
    {x: windowWidth/2- 350,y: 350, w: 20,h: 320},
    {x: windowWidth/2- 300,y: 200,w: 100,h: 20},
    {x: windowWidth/2- 250,y: 300,w: 20,h: 220},
    {x: windowWidth/2- 95,y: 404,w: 330,h: 20},
    ] 
for(var c = 0;c < wallPosition.length;c++){
    var wall = createSprite(wallPosition[c].x,wallPosition[c].y,wallPosition[c].w,wallPosition[c].h);
    wall.shapeColor = "red";
    wallGroup.add(wall);
}
}

function tp(){
    if(personagem.isTouching(end2) || personagem.isTouching(end1)){
        personagem.x = 300;
        personagem.y = 300;
    }
}

function createMob(){
    var mobPosition = [
    {x: windowWidth/2+400,y:500,w: 20,h:20},
    {x: windowWidth/2+125,y:300,w: 20,h:20},
    {x: windowWidth/2-300,y:350,w: 20,h:20},
    {x: windowWidth/2-400,y:300,w: 20,h:20},
    {x: windowWidth/2-520,y:100,w: 20,h:20},
    {x: windowWidth/2-120,y:300,w: 20,h:20},
    ]
    for(var c = 0;c < mobPosition.length;c++){
        var mob = createSprite(mobPosition[c].x,mobPosition[c].y,mobPosition[c].w,mobPosition[c].h);
        mob.shapeColor = "white";
        mob.velocityY = 4
        mob.addAnimation("monstro", monstro);
        mobGroup.add(mob);  
        mob.setCollider("rectangle", 0,0,40,40)
    }
}

function lifeBar(){
        
    push();
    imageMode(CENTER);
    fill("white"); 
    rect(windowWidth-250,50,200,30);
    fill("red");
    rect(windowWidth-250,50,life,30);
    image(coracao,windowWidth-275,20,200,200);
    pop();
}

function coinBar(){
    push();
    imageMode(CENTER);
    fill("white");
    rect(windowWidth-250,120,200,30);
    fill("yellow");
    rect(windowWidth-250,120,coinScore,30);
    image(moedasa,windowWidth-275,120,125,125);
    pop();
}

function moedas(){
   var coinPosition = [
    {x:windowWidth/2+500,y:330,w:20,h:20},
    {x:windowWidth/2+430,y:195,w:20,h:20},
    {x:windowWidth/2+230,y:330,w:20,h:20},
    {x:windowWidth/2-300,y:230,w:20,h:20},
    {x:windowWidth/2-200,y:30,w:20,h:20},
    {x:windowWidth/2-800,y:80,w:20,h:20},
    {x:windowWidth/2-850,y:80,w:20,h:20},
    {x:windowWidth/2-750,y:80,w:20,h:20},
   ]
   for(var c = 0; c <coinPosition.length;c++){
    var coin = createSprite(coinPosition[c].x,coinPosition[c].y,coinPosition[c].w,coinPosition[c].h);
    coin.addImage("coin",moeda);
    coinGroup.add(coin);
    coin.setCollider("rectangle", -5,15,40,40);
   }
     
}

function popUps(){
    swal({
        title: `parabens!`,
        text: "Voce Ganhou!!!",
        confirmButtonText: "Ok"
      },function(isConfirm){
        if(isConfirm){
            window.location.reload();
        }
      });

}
function popUps1(){
    swal({
        title: `tente novamente!`,
        text: "Voce perdeu!",
        confirmButtonText: "Ok"
      },function(isConfirm){
        if(isConfirm){
            window.location.reload();
        }
      }
      );
}