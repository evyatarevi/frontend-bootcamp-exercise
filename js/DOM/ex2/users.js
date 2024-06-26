const users = [
  {
    id: 167464,
    firstName: 'Jimmy',
    lastName: 'Arnold',
  },
  {
    id: 578447,
    firstName: 'Martha',
    lastName: 'Goldman',
  },
  {
    id: 864578,
    firstName: 'Tim',
    lastName: 'Burton',
  },
];

const container = document.querySelector('.container');
const ol = document.createElement('ol');
ol.style.listStyleType = 'none';
users.forEach((user) => {
  const li = document.createElement('li');
  li.textContent = `${user.firstName} ${user.lastName}`;
  li.setAttribute('data-id', user.id);
  ol.appendChild(li);
});
container.appendChild(ol);
/*
1.ol
liststyltyp = none
1.1li:
id
text
*/