canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var mouseEvent=""
var last_position_of_x, last_position_of_y;
color="cyan";

widthofline=3;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    mouseEvent="mouseDown";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseUP";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    current_position_of_x=e.clientX-canvas.offsetLeft;
    current_position_of_y=e.clientX-canvas.offsetTop;
    if(mousevent="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.linewidth=widthofline;
        
        console.log("last_position_of_x="+last_position_of_x+" last_position_of_y="+last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);
        ctx.lineTo(current_position_of_x, current_position_of_y);
        console.log("current_position_of_x="+current_position_of_x+" current_position_of_y="+current_position_of_y);
        ctx.stroke();

    }
    last_position_of_x = current_position_of_x;
    last_position_of_y = current_position_of_y;

    
}

