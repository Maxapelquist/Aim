const boxes = document.querySelectorAll(".box");
boxes.forEach(function(box) {
  box.addEventListener("click", function () {
    window.open("sheet.html", "_self");
  });
});