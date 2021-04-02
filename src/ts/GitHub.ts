import isMobile from 'ismobilejs';

// Link to GitHub
const link = document.querySelector('.github');

if (isMobile().any) {
  link.addEventListener('touchstart', function () {
    this.classList.add('on');
  });
  link.addEventListener('touchend', function () {
    this.classList.remove('on');
  });
} else {
  link.addEventListener('mouseover', function () {
    this.classList.add('on');
  });
  link.addEventListener('mouseout', function () {
    this.classList.remove('on');
  });
}
