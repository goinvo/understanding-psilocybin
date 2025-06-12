document.addEventListener("DOMContentLoaded", () => {
  const helloCell = document.getElementById("hello-cell");
  const col2Cells = document.querySelectorAll(".col2");

  col2Cells.forEach((cell) => {
    cell.addEventListener("click", () => {
      if (!helloCell.classList.contains("visible")) {
        helloCell.classList.add("visible");

      }
    });
  });
});
