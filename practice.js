const hourEl=document.getElementById("hour");
const minutesEl=document.getElementById("minutes");
const secondsEl=document.getElementById("seconds");
const greetingTextEl=document.getElementById("greetingtext");

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let greeting = "Good morning, Ahmed.";

    h =h<10 ? "0"+ h : h;
    m =m<10 ? "0"+ m : m;
    s =s<10 ? "0"+ s : s;

    hourEl.innerText=h;
    minutesEl.innerText=m;
    secondsEl.innerText=s;

    if (s<20){
        greeting="Good morning, Ahmed."
    }
    else if(s<40){
        greeting="Any new plan today?...."
    }
    else{
        greeting="Take the next step."
    }

    greetingTextEl.innerText=greeting;

    setTimeout(()=>{
        updateClock()
    },1000);
}

updateClock()