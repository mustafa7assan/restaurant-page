'use strict';

const welcome = () => {
  const container = document.createElement('div');
  container.classList.add('welcome');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');
  h2.textContent = 'World of Pizza';
  p.textContent = `We believe in the commitment to our community and in fostering long
  term relationships with local farmers and fishermen. Our menus reflect
  these connections, featuring local, seasonal produce and sustainably
  sourced seafood and meats.`;
  container.appendChild(h2);
  container.appendChild(p);
  return container;
};

export { welcome };
