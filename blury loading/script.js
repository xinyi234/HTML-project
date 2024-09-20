const text=document.querySelector('.loading-text');
const bg=document.querySelector('.bg');

let load=0;
let timer=setInterval(blurring,30);
function blurring(){
    load++;
    text.innerText=load+'%';
    text.style.opacity=1-load/100;
    bg.style.filter=`blur(${30-load*30/100}px)`; //·´ÒýºÅ
    if(load>99){
        clearInterval(timer);
    }
}