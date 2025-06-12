document.addEventListener('DOMContentLoaded', function () {
    const cells = document.querySelectorAll('.grid .cell');
    // The label cell is now at index 8, left cell at index 7
    const leftCell = cells[7];
    const labelCell = cells[8];
    if (!leftCell || !labelCell) return;

    // Create a span for the hello message inside the leftCell
    let helloMsg = leftCell.querySelector('.hello-message');
    if (!helloMsg) {
        helloMsg = document.createElement('span');
        helloMsg.className = 'hello-message';
        helloMsg.textContent = 'Removal of criminal penalties or enforcement for personal use/posession.';
        helloMsg.style.display = 'none';
        leftCell.appendChild(helloMsg);
    }

    labelCell.style.cursor = 'pointer';

    labelCell.addEventListener('click', function () {
        helloMsg.style.display = (helloMsg.style.display === 'none') ? 'block' : 'none';
    });
});

