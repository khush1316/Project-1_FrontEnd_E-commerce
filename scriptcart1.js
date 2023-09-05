var clickButton = document.getElementById('plus');
var inputField = document.getElementById('ans');

var clickCount = 0;

clickButton.addEventListener('click', function() {
  clickCount++;
  inputField.value = clickCount;
});


function del(){

  clickCount=0;
  document.getElementById('ans').value=clickCount;
}


