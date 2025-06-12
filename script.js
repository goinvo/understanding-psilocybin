const hoverTrigger = document.getElementById('hover-trigger');
const helloCell = document.getElementById('hello-cell');

hoverTrigger.addEventListener('mouseenter', () => {
  helloCell.classList.add('visible');
});

hoverTrigger.addEventListener('mouseleave', () => {
  helloCell.classList.remove('visible');
});
