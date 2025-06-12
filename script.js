document.addEventListener('DOMContentLoaded', function () {
    const cells = document.querySelectorAll('.grid .cell');
    // "1. Deprioritization/ Decriminalization" is index 8, the cell to its left is index 7
    const labelCell = cells[8];
    const helloCell = cells[7];
    if (!labelCell || !helloCell) return;

    // Create a span for the hello message inside the helloCell
    let helloMsg = helloCell.querySelector('.hello-message');
    if (!helloMsg) {
        helloMsg = document.createElement('span');
        helloMsg.className = 'hello-message';
        helloMsg.textContent = 'Hello';
        helloMsg.style.display = 'none';
        helloCell.appendChild(helloMsg);
    }

    labelCell.style.cursor = 'pointer';

    labelCell.addEventListener('click', function () {
        helloMsg.style.display = (helloMsg.style.display === 'none') ? 'block' : 'none';
    });
});
