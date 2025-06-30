/*
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

*/
document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.getElementById('bubble-toggle');
  const bubble = document.getElementById('speech-bubble');
  toggle.addEventListener('click', function() {
    bubble.hidden = !bubble.hidden;
  });
  // Optional: allow Enter/Space to toggle for accessibility
  toggle.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      bubble.hidden = !bubble.hidden;
      e.preventDefault();
    }
  });

  const megaphone = document.getElementById('megaphone-toggle');
  const ctaBubble = document.getElementById('cta-bubble');
  if (megaphone && ctaBubble) {
    megaphone.addEventListener('click', function() {
      ctaBubble.hidden = !ctaBubble.hidden;
    });
    megaphone.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        ctaBubble.hidden = !ctaBubble.hidden;
        e.preventDefault();
      }
    });
  }
});

