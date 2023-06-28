let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let display = document.querySelector(".display");
let st = document.querySelector('.startbtn')
let pt = document.querySelector('.pausebtn')
let rt = document.querySelector('.resetbtn')
let int = null;

st.addEventListener("click", () => {
    if(int !== null) {
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10);
});

pt.addEventListener("click", () => {
    clearInterval(int);
});

rt.addEventListener("click", () => {
    clearInterval(int);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    display.innerHTML = "00 : 00 : 00 : 000 ";
}); 

function displayTimer() {
    milliseconds += 10;
    if(milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
        if(seconds == 60) {
            seconds = 0;
            minutes++;
            if(minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = 
        milliseconds < 10
        ? "00" + milliseconds
        : milliseconds < 100
        ? "0" + milliseconds
        : milliseconds;

    display.innerHTML = `${h} : ${m} : ${s} : ${ms}`;

}

let back = document.querySelector('.back');

back.addEventListener("click", function redirect(){
    location.replace('./second.html');
})

