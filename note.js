let keep = document.querySelector('.save');
let note = document.querySelector('.note');

keep.addEventListener('click', e => {
    if (note.innerHTML === ''){
        alert('Something must be written')
    }
    else{
        note.innerHTML = note.innerHTML
    }
})








let back = document.querySelector('.back');

back.addEventListener("click", function redirect(){
    location.replace('./second.html');
})


