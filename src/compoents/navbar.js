'use strict';

const navbar = () => {
  const nav = document.createElement('nav');
  nav.classList.add('navbar');
  const html = `<div class="logo">
  <h1>World of Pizza</h1>
</div>
<ul class="links">
  <li><a href="#" data-name="menu" >Menu</a></li>
  <li><a href="#" data-name="contact">Contact</a></li>
  <li><a href="#" data-name="about">About</a></li>
</ul>`;
  nav.insertAdjacentHTML('afterbegin', html);
  return nav;
};

export { navbar };
