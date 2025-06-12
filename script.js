document.addEventListener("DOMContentLoaded", () => {
  const helloCell = document.getElementById("hello-cell");
  const col2Cells = document.querySelectorAll(".col2");

  col2Cells.forEach((cell) => {
    cell.addEventListener("click", () => {
      if (!helloCell.classList.contains("visible")) {
        helloCell.classList.add("visible");

        // Optional: auto-hide again after a few seconds
        setTimeout(() => {
          helloCell.classList.remove("visible");
        }, 3000);
      }
    });
  });
});
