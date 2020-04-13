var ball = document.querySelector(".ball");
const vh = Math.max(window.innerHeight);
const vw = Math.max(window.innerWidth);

ball.style.top=ball.offsetTop+"px";
ball.style.left= ball.offsetLeft+"px";
var ballHeight = ball.offsetHeight;
var ballWidth = ball.offsetWidth;

document.addEventListener('keypress', function(){
    let topPosition = parseInt(ball.style.top);
    let leftPosition = parseInt(ball.style.left);
    if(event.keyCode == 119){
        if(topPosition>0){
            topPosition-=2;
        	ball.style.top= topPosition+"px";
        }     
    }
    
    if(event.keyCode ==115){
        if(topPosition + ballHeight <vh){ 
            topPosition=topPosition+2;
        	ball.style.top= topPosition+"px";
        }  
    }
    
    if(event.keyCode ==97){
        if(leftPosition>0){ 
            leftPosition=leftPosition-2;
        	ball.style.left= leftPosition+"px";
        }
    }
    
    if(event.keyCode ==100){
        if(leftPosition+ ballWidth <vw){ 
            leftPosition=leftPosition+2;
        	ball.style.left= leftPosition+"px";
        }
    }
})