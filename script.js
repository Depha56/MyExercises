// Initialize an empty array
let data = [];

// Function to add a value to the array and update the output
function addValue() {
  const input = document.getElementById("input").value;
  if (input !== "") {
    data.push(input);
    updateOutput();
  } else {
    alert("Please enter a value!");
  }
}

// Function to remove the last value from the array and update the output
function removeLast() {
  if (data.length > 0) {
    data.pop();
    updateOutput();
  } else {
    alert("Array is empty!");
  }
}

// Function to clear the array(by assigning empty array to the data) and update the output
function clearArray() {
  data = [];
  updateOutput();
}

// Function to update the output with the current array values
function updateOutput() {
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = "";
  if (data.length === 0) {
    outputDiv.textContent = "Array is empty!";
  } else {
    const ul = document.createElement("ul");
    data.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      ul.appendChild(li);
    });
    outputDiv.appendChild(ul);
  }
}
