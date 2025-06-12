document.addEventListener("DOMContentLoaded", function () {
  const interactiveCells = document.querySelectorAll('.cell.interactive');

  interactiveCells.forEach(cell => {
    cell.addEventListener('click', function () {
      const container = cell.closest('.cell-container');
      container.classList.toggle('active');
    });
  });
});