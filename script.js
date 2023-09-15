var timer=60;
  var score = 0;
  var hitrn = 0;

function increseScore()
{
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit()
{
    hitrn=Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

 function makeBubble()
 {
    let clutter = " ";

for( var i=1; i<=330; i++)
{
    var rn = Math.floor(Math.random()*10)

 clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
}



function runTimer(){

 var timerint=setInterval(function(){

    if(timer > 0)
    {
       timer--; 

document.querySelector("#timerval").textContent = timer; 
    }
    else{
        clearInterval(timerint);
        document.querySelector("#pbtm").innerHTML=`<h1>Game Over</h>`;
    }
}, 1000);
}

document.querySelector("#pbtm").addEventListener("click" , function(dets){
    var clickedNum = Number( dets.target.textContent);
if (clickedNum === hitrn)
{
    increseScore();
    makeBubble();
    getNewHit();
}
});

runTimer();
makeBubble();
getNewHit();