function swapTheme() {
  var appDiv = document.getElementById('app');
  var swapButton = document.getElementById('swap');

  // Toggle classes for appDiv
  if (appDiv.classList.contains('day')) {
    appDiv.classList.remove('day');
    appDiv.classList.add('night');
  } else {
    appDiv.classList.remove('night');
    appDiv.classList.add('day');
  }

  // Toggle classes for swapButton
  if (swapButton.classList.contains('button_day')) {
    swapButton.classList.remove('button_day');
    swapButton.classList.add('button_night');
  } else {
    swapButton.classList.remove('button_night');
    swapButton.classList.add('button_day');
  }
}
