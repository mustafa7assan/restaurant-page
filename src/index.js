'use strict';
import './style.css';
import './assets/images/bg.jpg';
import { navbar } from './compoents/navbar';
import { welcome } from './compoents/welcome';
import { menu } from './compoents/menu';
import { contact } from './compoents/contact';
import { about } from './compoents/about';
import { footer } from './compoents/footer';

const content = document.querySelector('#content');
content.insertAdjacentElement('afterbegin', navbar());
content.appendChild(welcome());
content.appendChild(footer());

document.querySelectorAll('.links li a').forEach(link => {
  link.addEventListener('click', () => {
    const tab = link.dataset.name;
    console.log('Click');
    switchTab(tab);
  });
});

const switchTab = name => {
  content.innerHTML = '';
  content.insertAdjacentElement('afterbegin', navbar());
  switch (name) {
    case 'menu':
      content.appendChild(menu());
      break;
    case 'about':
      content.appendChild(about());
      break;
    case 'contact':
      content.appendChild(contact());
      break;
    case 'welcome':
      content.appendChild(welcome());
      break;
  }
  content.appendChild(footer());
  document.querySelectorAll('.links li a').forEach(link => {
    link.addEventListener('click', () => {
      const tab = link.dataset.name;
      switchTab(tab);
    });
  });
  document.querySelector('.logo').addEventListener('click', () => {
    switchTab('welcome');
  });
};
