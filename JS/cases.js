const boxes = document.querySelectorAll(".box");
boxes.forEach(function(box) {
  box.addEventListener("click", function () {
    window.open("../JS/sheet.js", "_self");
  });
});