// Reload
const reloadButton = document.querySelector('.reload');

reloadButton.addEventListener('mouseover', function () {
  this.classList.add('on');
});
reloadButton.addEventListener('mouseout', function () {
  this.classList.remove('on');
});
reloadButton.addEventListener('click', function () {
  location.reload();
});