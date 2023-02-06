// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaCJ2QGm-epEiiCTps_B8rTGivCiywMdg",
  authDomain: "aimdatabase-db87d.firebaseapp.com",
  databaseURL: "https://aimdatabase-db87d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "aimdatabase-db87d",
  storageBucket: "aimdatabase-db87d.appspot.com",
  messagingSenderId: "17048738724",
  appId: "1:17048738724:web:a4c59a25d8cd2c99933f31",
  measurementId: "G-5GXNWLNF5W"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

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

$(".cell").on("blur", function() {
  const cellId = $(this).attr("id");
  const cellValue = $(this).text();
  db.ref(cellId).set(cellValue);
});
