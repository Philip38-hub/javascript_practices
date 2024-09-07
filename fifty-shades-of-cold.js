import { colors } from './fifty-shades-of-cold.data.js';

export const generateClasses = () => {
  const styleTag = document.createElement('style');
  document.head.appendChild(styleTag);

  colors.forEach((color) => {
    styleTag.innerHTML += `.${color} { background: ${color}; }\n`;
  });
};

export const generateColdShades = () => {
  const container = document.querySelector('body');

  const coldKeywords = ['aqua', 'blue', 'turquoise', 'green', 'cyan', 'navy', 'purple'];

  colors.forEach((color) => {
    if (coldKeywords.some(keyword => color.includes(keyword))) {
      const div = document.createElement('div');
      div.classList.add(color);
      div.textContent = color;
      div.addEventListener('click', () => choseShade(color));
      container.appendChild(div);
    }
  });
};

export const choseShade = (shade) => {
  const divs = document.querySelectorAll('div');
  
  divs.forEach((div) => {
    div.className = shade;
  });
};
