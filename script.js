
// The HTML uses divs with class "cell" instead of a table.
// We'll adapt the code to work with the grid structure.

// Find all cells in the grid
const cells = document.querySelectorAll('.grid .cell');

// The grid is 9 rows × 7 columns, so to get the 2nd cell of the 2nd row:
// Row 1: indices 0-6, Row 2: indices 7-13, so cell at row 2, col 2 is index 8
const targetCell = cells[8];

document.addEventListener('DOMContentLoaded', function () {
    if (!targetCell) return;

    // Create or select the hello message element
    let helloMsg = document.getElementById('hello-message');
    if (!helloMsg) {
        helloMsg = document.createElement('div');
        helloMsg.id = 'hello-message';
        helloMsg.textContent = 'Hello';
        helloMsg.style.display = 'none';
        document.body.appendChild(helloMsg);
    }

    targetCell.addEventListener('click', function () {
        helloMsg.style.display = (helloMsg.style.display === 'none') ? 'block' : 'none';
    });
});
