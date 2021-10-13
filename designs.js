var clickSubmit = document.querySelector(".check");
// adding .addEventListener to "submit" button:
clickSubmit.addEventListener("click", submitForm);

//"submitForm" should be a separate function, because in case .removeEventListener needs to be added it should refer to the same exact "submitForm" function:
function submitForm(event) {
  event.preventDefault();
  var height = Number(document.getElementsByTagName("input")[0].value);
  var width = Number(document.getElementsByTagName("input")[1].value);
  console.log(height);
  console.log(width);

  if (!height || !width) {
    window.alert("Enter a number above zero!!!👀");
  } else if (height >= 35 || width >= 35) {
    window.alert(
      "Please, be reasonable with your numbers in order to fit in the window pane!!! Your number should be less then 35."
    );
  } else if (height === 1 && width === 1) {
    window.alert(
      `"${height} x ${width}" is not fun!!! Enter something more creative!!!`
    );
  } else {
    makeGrid();
    clickSubmit.removeEventListener("click", submitForm); //preventing makeGrid() from adding a new grid to existing grid
  }
}

var gridBody = document.getElementById('pixelCanvas');

function makeGrid() {
  var body = document.getElementsByTagName("body")[0];
  // creates a <table> element and a <tbody> element
  var grid = document.createElement("grid");
  // var gridBody = document.createElement("gbody");
  //creating cells
  for (
    var r = 0;
    r < Number(document.getElementsByTagName("input")[0].value);
    r++
  ) {
    //creates a table row
    var row = document.createElement("tr"); //creates N of row(s)
    for (
      var c = 0;
      c < Number(document.getElementsByTagName("input")[1].value);
      c++
    ) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      var cell = document.createElement("td"); //creates N of column(s)
      var cellText = document.createTextNode("");
      cell.appendChild(cellText);
      row.appendChild(cell);
    }
    // add the row to the end of the grid body
    gridBody.appendChild(row);
  }
  // put the gbody in the grid
  grid.appendChild(gridBody);
  // appends grid into body
  body.appendChild(grid);
  // sets the border attribut of grid to 2
  grid.setAttribute("border", "1");
}


//add event listener to update the color:
const picker = document.getElementById('colorPicker')
let color = picker.value;

picker.onchange = function() {
  color = this.value;
}

// function activated when user click on only

function respondToClick(event) {
  if (event.target.nodeName.toLowerCase() === 'td') {
    event.target.style.backgroundColor = color;
  }
}

gridBody.addEventListener("click", respondToClick);


// var allTdElements = document.getElementsByTagName("td");
//test:
// function getAccess(){
//   for (var i = 0; i< allTdElements.length; i++){
//       console.log(allTdElements[i])}};

// function getAccess() {
//   for (var i = 0; i < allTdElements.length; i++) {
//     allTdElements[i].addEventListener('click',function(){
//       console.log(allTdElements[1].style.colorPicker)
//     })
//   }
// }
// getAccess();




