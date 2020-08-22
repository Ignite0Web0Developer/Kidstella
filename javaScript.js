var selected = document.querySelector(".selected");
var optionsContainer = document.querySelector(".options-container");

var optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", function(){
    optionsContainer.classList.toggle("active");
});

optionsList.forEach( o => {
    o.addEventListener("click", () => {
        selected.innerHTML = o.querySelector("label").innerHTML;
        optionsContainer.classList.remove("active");
    });
});


var eventdrop = document.querySelector('#eventdrop');
var eventopen = document.querySelector('#eventopen');
var eventclose = document.querySelector('#eventclose');
var eventdropbox = document.querySelector('#eventdropbox');


eventdrop.addEventListener('click', function(){
    eventdropbox.style.display = 'flex';
    eventopen.style.display = 'none';
});

eventclose.addEventListener('click', function(){
    eventdropbox.style.display = 'none';
    eventopen.style.display = 'initial';
});