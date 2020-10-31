var initialResults;
var updatedResults;
// Showing values to input
function show(val) {
  document.getElementById("inputToCalc").value += val;
}

// calculating results
function generateResults() {
  initialResults = document.getElementById("inputToCalc").value;
  updatedResults = eval(initialResults);
  document.getElementById("inputToCalc").value = updatedResults;
}

// reset the input
function clear() {
  document.getElementById("inputToCalc").value = "";
}
