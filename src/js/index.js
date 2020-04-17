import users from './users.js';
import userItemTemplate from '../templates/user.html';

const dataContent = document.querySelector('.data-repeat');

users.forEach((user, index) => {
  let singleNode = userItemTemplate
    .replace('$no', index)
    .replace('$name', user.name)
    .replace('$class', user.class)
    .replace('$phone', user.phone)
    .replace('$address', user.address);

  dataContent.innerHTML += singleNode;
});
