var clickButton = document.getElementById('minus');
var inputField = document.getElementById('ans');

var clickCount = 0;

clickButton.addEventListener('click', function() {
  clickCount--;
  inputField.value = clickCount;
});
