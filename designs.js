//@description 'clickSubmit variable will be used to add event listener to it
const clickSubmit = document.querySelector(".check");

// @description Adding .addEventListener to "submit" button (for the reference: https://developer.mozilla.org/en-US/docs/Web/API/EventListener );
// @description Here I also used the explanation of .addEventListener() method by Jonas Schmedtmann
// @description (Web Developer, Designer, and Teacher, one of Udemy's Top Instructors)
// @description in his "73. Handling Click Events" lecture from "The Complete JavaScript Course 2021: From Zero to Expert!" course on www.udemy.com
clickSubmit.addEventListener("click", submitForm);

// @desc submits the form ("submitForm" should be a separate function, because in case
//  .removeEventListener needs to be added it should refer to the same exact "submitForm" function)
// @param {event object} event - the reference to the grid
function submitForm(event) {
  //@description preventing the default action of the form by using the event.preventDefuault() method (https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
  event.preventDefault();
  //@description using Number() constructor to convert the value of 'string' to the  value of 'number' (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/Number)
  let height = Number(document.getElementsByTagName("input")[0].value);
  let width = Number(document.getElementsByTagName("input")[1].value);
  //@description below are condtioions, which will trigger the 'window.alert':
  //@description 1. If user enters '0' as grid height OR grid width:
  if (!height || !width) {
    window.alert("Enter a number above zero!!!👀");
    //@description 2. If user enters a number 35 and above as grid height OR grid width:
  } else if (height >= 35 || width >= 35) {
    window.alert(
      "Please, be reasonable with your numbers in order to fit in the window pane!!! Your number should be less then 35."
    );
    //@description 3. If user uses default input value of '1' as grid height AND grid width:
  } else if (height === 1 && width === 1) {
    window.alert(
      `"${height} x ${width}" is not fun!!! Enter something more creative!!!`
    );
  } else {
    //@description the makeGrid() function is executed, if none of the above conditions are met and the user enters a number within the specified range, which is from  '2' to '34'.
    makeGrid();
    //@description clickSubmit.removeEventListener("click", submitForm); //preventing makeGrid() from adding a new grid to existing grid
  }
}
//@description the 'gridBody' variable gets ahold of <table> element. Later the 'gridbody' will be apendeded to the 'grid' variable.
const gridBody = document.getElementById("pixelCanvas");
// @desc create a grid of squares (for the reference: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces)
// @param int $width - number of squares representing the width of the grid
// @param int $height - number of squares representing the height of the grid
function makeGrid() {
  let body = document.getElementsByTagName("body")[0];
  // @description creates a <table> element and a <tbody> element
  let grid = document.createElement("grid");
  gridBody.innerHTML = "";
  //@description creating cells
  // @description using nested 'for' loops in order to create the table (for the reference: https://www.educba.com/nested-loop-in-javascript)
  for (
    let r = 0;
    r < Number(document.getElementsByTagName("input")[0].value);
    r++
  ) {
    // @description creates a table row
    var row = document.createElement("tr"); //creates N of row(s)
    for (
      let c = 0;
      c < Number(document.getElementsByTagName("input")[1].value);
      c++
    ) {
      // @description Create a <td> element and a text node, make the text
      // @description node the contents of the <td>, and put the <td> at
      // @description the end of the table row
      const cell = document.createElement("td"); //creates N of column(s)
      const cellText = document.createTextNode("");
      cell.appendChild(cellText);
      row.appendChild(cell);
    }
    //@description add the row to the end of the grid body
    gridBody.appendChild(row);
  }
  //@description put the gbody in the grid
  grid.appendChild(gridBody);
  //@description appends grid into body
  body.appendChild(grid);
  //@description sets the border attribut of grid to 2
  grid.setAttribute("border", "1");
}

//@description add event listener to update the color:
const pickTheColor = document.getElementById("colorPicker");
let cellColor = pickTheColor.value;

pickTheColor.onchange = function () {
  cellColor = this.value;
};

// @desc function activated, when user clicks on only one cell
// @param {event object} event- the reference to clicked element (additional resources: https://javascript.info/introduction-browser-events)
function setTheCellColor(event) {
  if (event.target.nodeName.toLowerCase() === "td") {
    event.target.style.backgroundColor = cellColor;
  }
}

//@description adding an event listener to 'gridBody' variable in order to be able to execute the 'setTheCellColor' function:
gridBody.addEventListener("click", setTheCellColor);

//@description   Additional reference resources on alternative ways of creating the grid:

//@description 1. https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/insertRow
//@description 2. https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableRowElement/insertCell
//@description 3. https://stackoverflow.com/questions/63932240/javascript-to-change-backgroundcolor-of-grid-cell-on-click

//@description Udacity Frontend Nanodegree Style Guide:
//@description https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#comments
