let inputText = document.querySelector('#inputtext');
let list = document.querySelector('#list');
let btn = document.querySelector('#btn');

btn.addEventListener('click', function addTask() {
    if(inputText.value === ""){
    alert('Something must be written');
    }

    else{
        let li = document.createElement('li');
        li.innerHTML = inputText.value;
        list.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML='\u00d7';
        li.appendChild(span);
        saveData();
    } 
    inputText.value = '';
    saveData()
})

list.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked')
        saveData()
    }

    else if(e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData()
    }

});

function saveData(){
    localStorage.setItem("data", list.innerHTML);
}
function showList(){
    list.innerHTML = localStorage.getItem("data");
}
showList();

let back = document.querySelector('.back');

back.addEventListener("click", function redirect(){
    location.replace('./second.html');
})


