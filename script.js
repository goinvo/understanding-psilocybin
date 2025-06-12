document.addEventListener('DOMContentLoaded', function () {
  const triggerCell = document.querySelector('.col2');
  const helloCell = document.getElementById('hello-cell');

  triggerCell.addEventListener('click', function () {
    helloCell.classList.toggle('visible');
  });
});