document.addEventListener('DOMContentLoaded', () => {
  const col2Cells = document.querySelectorAll('.cell.col2');
  const col1Cells = document.querySelectorAll('.cell.col1');

  col2Cells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
      const target = col1Cells[index];
      if (target) {
        target.classList.toggle('slide-out');
      }
    });
  });
});