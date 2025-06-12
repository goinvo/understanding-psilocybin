document.addEventListener("DOMContentLoaded", function () {
  const toggleCell = document.querySelector(".col2");
  const targetCell = document.querySelector(".col1");

  toggleCell.addEventListener("click", () => {
    targetCell.classList.toggle("visible");
  });
});