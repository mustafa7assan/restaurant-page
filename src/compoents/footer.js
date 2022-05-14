'use strict';

const footer = () => {
  const container = document.createElement('div');
  container.classList.add('footer');
  const html = `<p><a href="">Mustafa Hassan &copy; 2022</a></p>`;
  container.insertAdjacentHTML('afterbegin', html);
  return container;
};

export { footer };
