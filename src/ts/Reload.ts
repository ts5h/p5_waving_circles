import isMobile from 'ismobilejs';

// Reload
const Reload = document.querySelector('.reload');

Reload.addEventListener('click', function () {
  location.reload();
});

if (isMobile().any) {
  Reload.addEventListener('touchstart', function () {
    this.classList.add('on');
  });
  Reload.addEventListener('touchend', function () {
    this.classList.remove('on');
  });
} else {
  Reload.addEventListener('mouseover', function () {
    this.classList.add('on');
  });
  Reload.addEventListener('mouseout', function () {
    this.classList.remove('on');
  });
}