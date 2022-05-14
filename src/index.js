'use strict';
import './style.css';
import './assets/images/bg.jpg';
import { navbar } from './compoents/navbar';
import { welcome } from './compoents/welcome';
import { menu } from './compoents/menu';
import { contact } from './compoents/contact';
import { about } from './compoents/about';

const content = document.querySelector('#content');
content.insertAdjacentElement('afterbegin', navbar());
content.appendChild(about());
