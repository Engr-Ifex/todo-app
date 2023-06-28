let input = document.querySelector('.name');
let button = document.querySelector('.btn');
let form = document.querySelector('#form');

button.addEventListener('click', function addName(){
    if (input.value === "")
    alert('please enter a name');

    else{
        location.replace('./second.html');
    }
    
})

form.addEventListener('submit', function(e){
    e.preventDefault();

    let nameValue = input.value
    localStorage.setItem('name', nameValue);
})

