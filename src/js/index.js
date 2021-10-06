import users from './users';
import userItemTemplate from '../templates/user.html';

const dataContent = document.querySelector('.data-repeat');
const print = document.getElementById('print');

users.forEach((user, index) => {
  const singleNode = userItemTemplate
    .replace('$no', index)
    .replace('$name', user.name)
    .replace('$class', user.class)
    .replace('$phone', user.phone)
    .replace('$address', user.address);

  dataContent.innerHTML += singleNode;
});

print.addEventListener('click', () => {
  window.print();
});
