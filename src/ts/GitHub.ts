import isMobile from 'ismobilejs';

// Link to GitHub
if (!isMobile().tablet && !isMobile().phone) {
  const link = document.querySelector('.github');
  link.addEventListener('mouseover', function () {
    this.classList.add('on');
  });
  link.addEventListener('mouseout', function () {
    this.classList.remove('on');
  });
}
