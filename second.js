let todo = document.querySelector(".todo");
let note = document.querySelector(".note");
let clock = document.querySelector(".clock");

todo.addEventListener("click", function redirect(){
    location.replace('./todo.html');
})

note.addEventListener("click", function redirect(){
    location.replace('./note.html');
})

clock.addEventListener("click", function redirect(){
    location.replace('./clock.html');
})

let back = document.querySelector('.back');

back.addEventListener("click", function redirect(){
    location.replace('./index.html');
})

let g1 = document.querySelector('.g1');
let nm = localStorage.getItem('name');

g1.innerHTML = nm;