function appendCharacter(character) {
  document.getElementById('result').value += character;
}

function clearResult() {
  document.getElementById('result').value = '';
}

function deleteLastCharacter() {
  var result = document.getElementById('result').value;
  document.getElementById('result').value = result.slice(0, -1);
}

function calculateResult() {
  var result = document.getElementById('result').value;
  var answer;

  try {
    answer = eval(result);
  } catch (error) {
    answer = 'Error';
  }

  document.getElementById('result').value = answer;
}
