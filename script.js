document.addEventListener('DOMContentLoaded', function () {
    const cells = document.querySelectorAll('.grid .cell');
    // The cell with "1. Deprioritization/ Decriminalization" is index 8
    const targetCell = cells[8];
    if (!targetCell) return;

    let helloMsg = document.getElementById('hello-message');
    if (!helloMsg) {
        helloMsg = document.createElement('div');
        helloMsg.id = 'hello-message';
        helloMsg.textContent = 'Hello';
        helloMsg.style.display = 'none';
        document.body.appendChild(helloMsg);
    }

    targetCell.style.cursor = 'pointer'; // Make it look clickable

    targetCell.addEventListener('click', function () {
        helloMsg.style.display = (helloMsg.style.display === 'none') ? 'block' : 'none';
    });
});
