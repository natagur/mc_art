// выбор дня
var selectElement = document.getElementById("birthday");

if (selectElement) {
  for (var i = 1; i <= 31; i++) {
    var option = document.createElement("option");
    option.value = i;
    option.text = i;
    selectElement.appendChild(option);
  }
}

// выбор месяца
var selectElement = document.getElementById("month");

var months = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"];

if (selectElement) {
  for (var i = 0; i < months.length; i++) {
    var option = document.createElement("option");
    option.value = months[i];
    option.text = months[i];
    selectElement.appendChild(option);
  }
}

// выбор года
var selectElement = document.getElementById("year");

if (selectElement) {
  for (var year = 1970; year <= 2023; year++) {
    var option = document.createElement("option");
    option.value = year;
    option.text = year;
    selectElement.appendChild(option);
  }
}


/* html star */
function star(){
  var starblock = document.getElementById("star__block");

  var count = starblock.getAttribute("data-count");

  var elements = starblock.getElementsByClassName("star__element");

  for (var i = 0; i < 5; i++) {
    elements[i].classList.remove("active");
  }

  for (var i = 0; i < count; i++) {
    elements[i].classList.add("active");
  }
};

document.addEventListener("DOMContentLoaded", function() {
  var starblock = document.getElementById("star__block");

  if (starblock) {
    star();
  let search = document.querySelectorAll('.star__element');
  let clickSearch = function(event){

    var index = Array.prototype.indexOf.call(starblock.children, this);

    starblock.setAttribute("data-count", index + 1);
    star();

    event.preventDefault();
  };

  search.forEach(function(el){

    el.addEventListener('click' ,clickSearch);

  });
  }

});

function updateProgressBar(progress) {
  var progressBar = document.getElementById('myProgressBar');
  progressBar.style.width = progress + '%';
}

updateProgressBar(20);
