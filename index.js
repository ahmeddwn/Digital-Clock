// get all elements by id and assign it to new variable
const hourEl=document.getElementById("hour");
const minutesEl=document.getElementById("minutes");
const secondsEl=document.getElementById("seconds");
const ampmEl=document.getElementById("ampm");


function updateClock(){
    // get a changable varibale to get hour from computer
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM"
    if (h>12){
        h=h-12
        ampm="PM"
    }
// if h is less than 0, add 0+h, otherwise use h
    h =h<10 ? "0"+ h : h;
    m =m<10 ? "0"+ m : m;
    s =s<10 ? "0"+ s : s;
    

    // update our time ids
    hourEl.innerText = h;
    minutesEl.innerText = m;
    secondsEl.innerText = s;
    ampmEl.innerText = ampm;

    // call this function every second
    setTimeout(()=>{
        // update clockfunction very second
        updateClock()
    },1000);


}

// call our function
updateClock()