function move(speed){

    if(keyDown("W")){
        personagem.position.y = personagem.position.y -speed;
        personagem.changeAnimation("")
        socando = false;
    }
    else if(keyDown("A")){
        personagem.position.x = personagem.position.x -speed;
        personagem.changeAnimation("andandoL");
        position = "left";
        socando = false;
    }
    else if(keyDown("S")){
        personagem.position.y = personagem.position.y +speed;
        personagem.changeAnimation("caindo")
        socando = false;
    }
    else if(keyDown("D")){
        personagem.position.x = personagem.position.x +speed;
        personagem.changeAnimation("andandoR");
        position = "right";
        socando = false;
    }

    else if(keyDown("F") && position == "left"){
        personagem.changeAnimation("socoL");
        socando = true;
    }

    else if(keyDown("F") && position == "right"){
        personagem.changeAnimation("socoR");
        socando = true;
    }

    else if(position == "left"){
        personagem.changeAnimation("paradoL");
        socando = false;
    }
    else if(position == "right"){
        personagem.changeAnimation("paradoR");
        socando = false;
    }


}