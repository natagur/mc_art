// выбор дня
var selectElement = document.getElementById("birthday");

for (var i = 1; i <= 31; i++) {
  var option = document.createElement("option");
  option.value = i;
  option.text = i;
  selectElement.appendChild(option);
}

// выбор месяца
var selectElement = document.getElementById("month");

var months = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"];

for (var i = 0; i < months.length; i++) {
  var option = document.createElement("option");
  option.value = months[i];
  option.text = months[i];
  selectElement.appendChild(option);
}

// выбор года
// Получаем ссылку на элемент <select>
var selectElement = document.getElementById("year");

// Добавляем <option> с годами от 1970 до 2023
for (var year = 1970; year <= 2023; year++) {
  var option = document.createElement("option");
  option.value = year;
  option.text = year;
  selectElement.appendChild(option);
}
