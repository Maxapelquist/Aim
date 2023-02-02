const spreadsheet = $("#spreadsheet");

// Set number of rows and columns
const rows = 10;
const cols = 10;

// Create table for spreadsheet
for (let r = -1; r < rows; r++) {
  const row = $("<div>").addClass("row");
  for (let c = -1; c < cols; c++) {
    let cell;
    if (r === -1 && c > -1) {
      cell = $("<div>")
        .addClass("cell header-cell")
        .text(String.fromCharCode(c + 65));
    } else if (c === -1 && r > -1) {
      cell = $("<div>")
        .addClass("cell header-cell")
        .text(r + 1);
    } else {
      cell = $("<div>")
        .addClass("cell")
        .attr("id", `cell-${r}-${c}`)
        .text("");
  }
  row.append(cell);
}
spreadsheet.append(row);
}

// Add interactivity to the cells
$(".cell").on("click", function() {
$(".cell").removeAttr("contenteditable");
$(this).attr("contenteditable", true).focus();
});

const backButton = document.getElementById("back-button");
backButton.addEventListener("click", function () {
window.history.back();
});