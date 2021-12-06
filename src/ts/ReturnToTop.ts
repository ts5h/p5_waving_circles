import isMobile from 'ismobilejs';

// Return to top (TYpeScript version)
// Add button into body
const button = document.createElement('div');
button.classList.add('return-to-top');

const anchor = document.createElement('a');
anchor.textContent = 'Back';
anchor.setAttribute('href', '/');
button.appendChild(anchor);

const body = document.querySelector('body');
body.prepend(button);

// On mouse
if (isMobile().any) {
  button.addEventListener('touchstart', function () {
    this.classList.add('on');
  });
  button.addEventListener('touchend', function () {
    this.classList.remove('on');
  });
} else {
  button.addEventListener('mouseover', function () {
    this.classList.add('on');
  });
  button.addEventListener('mouseout', function () {
    this.classList.remove('on');
  });
}

// Change theme
type themeType = {
  type: 'dark' | 'light';
};

export const setTheme = (theme: themeType) => {
  // Dark or Light
  if (theme.type === 'light') {
    button.classList.add('light');
  }
};
