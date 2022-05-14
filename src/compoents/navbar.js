'use strict';

const navbar = () => {
  const nav = document.createElement('nav');
  nav.classList.add('navbar');
  const html = `<div class="logo">
  <h1>World of Pizza</h1>
</div>
<ul class="links">
  <li><a href="#">Menu</a></li>
  <li><a href="#">Contact</a></li>
  <li><a href="#">About</a></li>
</ul>`;
  nav.insertAdjacentHTML('afterbegin', html);
  return nav;
};

export { navbar };
