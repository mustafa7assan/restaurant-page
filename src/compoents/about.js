'use strict';

import chef from './../assets/images/chef.jpeg';

const about = () => {
  const container = document.createElement('div');
  container.classList.add('about');
  const html = `<div class="img">
  <img src="${chef}" alt="" />
</div>
<div class="text">
  <h2>About Us</h2>
  <h3>World Of Pizza</h3>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
    soluta voluptatum quia quidem laudantium exercitationem culpa.
    Pariatur vitae optio natus obcaecati asperiores fugit dolorum at
    nesciunt dolores sequi molestias debitis, laudantium eos officiis
    nemo eaque nulla repellat? Molestiae, eius laboriosam nobis quidem
    autem quas. Molestiae iure excepturi laudantium nisi doloremque?
  </p>
</div>
</div>`;
  container.insertAdjacentHTML('afterbegin', html);
  return container;
};

export { about };
