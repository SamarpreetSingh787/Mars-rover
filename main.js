canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

rover_width=100;
rover_height=90;

rover_x=10;
rover_y=10;

background_img="mars.jpg";
rover_img="rover.png";

function add() {
    background_imgtg=new Image();
    background_imgtg.onload=uploadBackground;
    background_imgtg.src=background_img;

    rover_imgtg=new Image();
    rover_imgtg.onload=uploadrover;
    rover_imgtg.src=rover_img;
}

function uploadBackground() {
 ctx.drawImage(background_imgtg,0,0,canvas.width,canvas.height);    
}

function uploadrover() {
    ctx.drawImage(rover_imgtg,rover_x,rover_y,rover_width,rover_height);    
   }

window.addEventListener("keydown",my_keydown);
function my_keydown(e) {
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed == '38'){
        up();
        console.log("up");
    }
    if(keypressed == '40'){
        down();
        console.log("down");
    }
    if(keypressed == '37'){
        left();
        console.log("left");
    }
    if(keypressed == '39'){
        right();
        console.log("right");
    }
}

function up() { if(rover_y >=0) {
     rover_y = rover_y - 10;
     console.log("When up arrow is pressed, x = " + rover_x + " | y = " +rover_y);
      uploadBackground(); uploadrover(); } } function down() {
           if(rover_y <=500) { 
               rover_y =rover_y+ 10;
                console.log("When down arrow is pressed, x = " + rover_x + " | y = " +rover_y);
                 uploadBackground();
                  uploadrover();
                 } 
                }
                 function left() { 
                     if(rover_x >= 0) {
                          rover_x =rover_x - 10;
                           console.log("When left arrow is pressed, x = " + rover_x + " | y = " +rover_y);
                            uploadBackground();
                             uploadrover();
                         }
                         }
                          function right() { 
                              if(rover_x <= 700) { 
                                  rover_x =rover_x + 10;
                                   console.log("When right arrow is pressed, x = " + rover_x + " | y = " +rover_y);
                                    uploadBackground();
                                     uploadrover();
 } 
}