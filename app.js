let indicator = document.querySelector(".scroll-indicator .progress");
let scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

window.addEventListener("scroll", scroll);

function scroll(){
    let scrollTop = window.scrollY;
    let scrolled = (scrollTop / scrollHeight) * 100
    
    if (indicator){
        indicator.style.width = `${scrolled}%`
    }
}

