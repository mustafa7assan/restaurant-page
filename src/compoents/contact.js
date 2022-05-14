'use strict';

const contact = () => {
  const container = document.createElement('div');
  container.classList.add('contact');
  const form = document.createElement('form');
  const html = `<h3>Contact us</h3>
  <ul>
    <li>
      <input type="text" id="user-name" placeholder="Your Name">
    </li>
    <li>
      <input type="email" id="user-email" placeholder="Your Email">
    </li>
    <li>
      <textarea name="user-message" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
    </li>
  </ul>
  <button>Submit</button>`;
  form.insertAdjacentHTML('afterbegin', html);
  container.appendChild(form);
  return container;
};

export { contact };
