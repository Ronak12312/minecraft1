canvas= new fabric.Canvas("mc");
biw=30;
bih=30;
px=10;
py=10;
var po="";
var bio="";
function playerupdate(){
    fabric.Image.fromURL("player.png",function(Img){
        po=Img;
        po.scaleToWidth(150);
        po.scaleToHeight(140);
        po.set({
            top:py,left:px
        });
    canvas.add(po);
    });
}
function newimage(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        bio=Img;
        bio.scaleToWidth(biw);
        bio.scaleToHeight(bih);
        bio.set({
            top:py,left:px
        });
    canvas.add(bio);
    });
}
window.addEventListener("keydown",mk)
function mk(e){
    kp=e.keyCode;
    console.log(kp);

    if(e.shiftKey=true && kp=="80"){
    biw=biw+10;
    bih=bih+10;
    document.getElementById("current_width").innerHTML=biw;
    document.getElementById("current_height").innerHTML=bih;
    console.log("shift and p pressed");
    }
    if(e.shiftKey=true && kp=="77"){
        biw=biw-10;
        bih=bih-10;
        document.getElementById("current_width").innerHTML=biw;
        document.getElementById("current_height").innerHTML=bih;
        console.log("shift and m pressed");
    }
    if(kp=="38"){
        up();
        console.log("up");
    }
    if(kp=="40"){
        down();
        console.log("down");
    }
    if(kp=="37"){
        left();
        console.log("left");
    }
    if(kp=="39"){
        right();
        console.log("right");
    }
    if(kp=="67"){
        newimage("cloud.jpg");
        console.log("c");
    }
    if(kp=="68"){
        newimage("dark_green.png");
        console.log("d");
    }
    if(kp=="71"){
        newimage("ground.png");
        console.log("g");
    }
    if(kp=="76"){
        newimage("light_green.png");
        console.log("l");
    }
    if(kp=="82"){
        newimage("roof.jpg");
        console.log("r");
    }
    if(kp=="84"){
        newimage("trunk.jpg");
        console.log("t");
    }
    if(kp=="85"){
        newimage("unique.png");
        console.log("u");
    }
    if(kp=="87"){
        newimage("wall.jpg");
        console.log("w");
    }
    if(kp=="89"){
        newimage("yellow_wall.png");
        console.log("y");
    }
}
function up(){
    if(py>=25){
        py=py-bih;
        console.log("when up arrow is pressed, x=" +px+ ",y=" +py);
        canvas.remove(po);
        playerupdate();
    }
}
function down(){
    if(py<=400){
        py=py+bih;
        console.log("when down arrow is pressed, x=" +px+ ",y=" +py);b
        canvas.remove(po);
        playerupdate();
    }
}
function left(){
    if(px>=0){
        px=px-biw;
        console.log("when left arrow is pressed, x=" +px+ ",y=" +py);
        canvas.remove(po);
        playerupdate();
    }
}
function right(){
    if(px<=800){
        px=px+biw;
        console.log("when right arrow is pressed, x=" +px+ ",y=" +py);
        canvas.remove(po);
        playerupdate();
    }
}