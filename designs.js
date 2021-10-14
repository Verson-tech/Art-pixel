//'clickSubmit variable will be used to add event listener to it
const clickSubmit = document.querySelector(".check");

// Adding .addEventListener to "submit" button (for the reference: https://developer.mozilla.org/en-US/docs/Web/API/EventListener );
// Here I also used the explanation of .addEventListener() method by Jonas Schmedtmann
// (Web Developer, Designer, and Teacher, one of Udemy's Top Instructors)
// in his "73. Handling Click Events" lecture from "The Complete JavaScript Course 2021: From Zero to Expert!" course on www.udemy.com
clickSubmit.addEventListener("click", submitForm);

//"submitForm" should be a separate function, because in case .removeEventListener needs to be added it should refer to the same exact "submitForm" function:
function submitForm(event) {
  //preventing the default action of the form by using the event.preventDefuault() method (https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
  event.preventDefault();
  //using Number() constructor to convert the value of 'string' to the  value of 'number' (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/Number)
  let height = Number(document.getElementsByTagName("input")[0].value);
  let width = Number(document.getElementsByTagName("input")[1].value);
  //below are condtioions, which will trigger the 'window.alert':
  //1. If user enters '0' as grid height OR grid width:
  if (!height || !width) {
    window.alert("Enter a number above zero!!!👀");
    //2. If user enters a number 35 and above as grid height OR grid width:
  } else if (height >= 35 || width >= 35) {
    window.alert(
      "Please, be reasonable with your numbers in order to fit in the window pane!!! Your number should be less then 35."
    );
    //3. If user uses default input value of '1' as grid height AND grid width:
  } else if (height === 1 && width === 1) {
    window.alert(
      `"${height} x ${width}" is not fun!!! Enter something more creative!!!`
    );
  } else {
    // the makeGrid() function is executed, if none of the above conditions are met and the user enters a number within the specified range, which is from  '2' to '34'.
    makeGrid();
    // clickSubmit.removeEventListener("click", submitForm); //preventing makeGrid() from adding a new grid to existing grid
  }
}
//the 'gridBody' variable gets ahold of <table> element. Later the 'gridbody' will be apendeded to the 'grid' variable.
const gridBody = document.getElementById("pixelCanvas");
//this function creates the grid (for the reference: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces)
function makeGrid() {
  let body = document.getElementsByTagName("body")[0];
  // creates a <table> element and a <tbody> element
  let grid = document.createElement("grid");
  gridBody.innerHTML = "";
  //creating cells
  // using nested 'for' loops in order to create the table (for the reference: https://www.educba.com/nested-loop-in-javascript)
  for (
    let r = 0;
    r < Number(document.getElementsByTagName("input")[0].value);
    r++
  ) {
    //creates a table row
    var row = document.createElement("tr"); //creates N of row(s)
    for (
      let c = 0;
      c < Number(document.getElementsByTagName("input")[1].value);
      c++
    ) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      const cell = document.createElement("td"); //creates N of column(s)
      const cellText = document.createTextNode("");
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
const pickTheColor = document.getElementById("colorPicker");
let cellColor = pickTheColor.value;

pickTheColor.onchange = function () {
  cellColor = this.value;
};

// function activated when user clicks on only one cell
function setTheCellColor(event) {
  if (event.target.nodeName.toLowerCase() === "td") {
    event.target.style.backgroundColor = cellColor;
  }
}

//adding an event listener to 'gridBody' variable in order to be able to execute the 'setTheCellColor' function:
gridBody.addEventListener("click", setTheCellColor);

//additional reference resources:
//   An alternative way of creating the grid:
//1. https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/insertRow
//2. https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableRowElement/insertCell
//3  https://stackoverflow.com/questions/63932240/javascript-to-change-backgroundcolor-of-grid-cell-on-click
