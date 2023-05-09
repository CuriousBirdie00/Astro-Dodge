score=0;
cross=true;

document.onkeydown = function(e){
    console.log(e.code);{
    if(e.code == 'ArrowUp'){
        rocket= document.querySelector('.rocket');
        rocket.classList.add('animateRocket');
        setTimeout(() =>{
            rocket.classList.remove('animateRocket');
        }, 800);
    }
}
}
setInterval(() => {
    rocket= document.querySelector('.rocket');
    gameover= document.querySelector('.gameover');
    astro= document.querySelector('.astro');

    rx= parseInt(window.getComputedStyle(rocket, null).getPropertyValue('left'));

    ry= parseInt(window.getComputedStyle(rocket, null).getPropertyValue('bottom'));

    ax= parseInt(window.getComputedStyle(astro, null).getPropertyValue('left'));
    
    ay= parseInt(window.getComputedStyle(astro, null).getPropertyValue('bottom'));

    offsetX= Math.abs(rx-ax);
    offsetY= Math.abs(ry-ay)
    if(offsetX<120 && offsetY<55){
        gameover.style.visibility= 'visible';
        astro.classList.remove('animateAstro');
    }
    else if(offsetX<150 && cross){
        score+=1;
        updateScore(score);
        cross=false;
        setTimeout(() => {
            cross=true;
        },2000)
        setTimeout(() => {
            astroDur = parseFloat(window.getComputedStyle(astro, null).getPropertyValue('animation-duration'));
            NewDur = astroDur - 0.05;
            astro.style.animationDuration = NewDur + 's';
        },1300)
    }

},50);

function updateScore(score){
    ScoreCount.innerHTML = "Your Score: "+ score;
}