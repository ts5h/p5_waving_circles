import isMobile from 'ismobilejs';

// Reload
const reloadButton = document.querySelector('.reload');

reloadButton.addEventListener('click', function () {
  location.reload();
});

if (isMobile().any) {
  reloadButton.addEventListener('touchstart', function () {
    this.classList.add('on');
  });
  reloadButton.addEventListener('touchend', function () {
    this.classList.remove('on');
  });
} else {
  reloadButton.addEventListener('mouseover', function () {
    this.classList.add('on');
  });
  reloadButton.addEventListener('mouseout', function () {
    this.classList.remove('on');
  });
}
