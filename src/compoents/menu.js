'use strict';

import img1 from './../assets/images/1.jpg';
import img2 from './../assets/images/2.jpg';
import img3 from './../assets/images/3.jpg';
import img4 from './../assets/images/4.jpg';

const images = [img1, img2, img3, img4];
const toppings = ['Pepperoni', 'Sausage', 'Mushrooms', 'Bacon'];
const menu = () => {
  const container = document.createElement('div');
  container.classList.add('menu');
  for (let i = 0; i < 4; i++) {
    const card = document.createElement('div');
    card.classList.add('card');
    const html = `<div class="img"><img src="${
      images[i]
    }" alt="pizza img" /></div>
    <div class="text">
      <h3>${toppings[i]}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quo
        eveniet non odit culpa mollitia molestias facere officiis, qui
        dolorum dolor debitis placeat eius voluptate sit iste cum quasi
        ducimus.
      </p>
      <p>${(i + 1) * (i + 1 * 10)}$</p>
    </div>`;
    card.insertAdjacentHTML('afterbegin', html);
    container.appendChild(card);
  }
  return container;
};

export { menu };
