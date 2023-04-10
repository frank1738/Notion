const inputData = document.querySelector('.input');
const contentContainer = document.querySelector('.content');
const menu = document.querySelector('.menu');
const selectedHeader = document.querySelector('.selected-header');
const menuOptions = document.querySelector('.options');
const selectOptions = menuOptions.querySelectorAll('p');

let headerType;

selectOptions.forEach((p) => {
  p.addEventListener('click', () => {
    if (p.id === 'p') {
      headerType = 'p';
      inputData.placeholder = 'pargraph';
    } else {
      headerType = `h${p.id}`;
      inputData.placeholder = `Heading ${headerType}`;
    }
    inputData.value = '';
    menu.classList.add('hide');
  });
});

const createHeader = (value) => {
  const header = document.createElement(headerType);
  header.contentEditable = 'true';
  header.innerHTML = value;
  contentContainer.appendChild(header);
  inputData.value = '';
  inputData.placeholder = 'Type / for blocks';
};

inputData.addEventListener('keyup', (e) => {
  const { value } = e.target;
  if (e.key === 'Enter') {
    createHeader(value);
  }
  if (value === '/') {
    menu.classList.remove('hide');
  } else {
    const regex = /^\/(\d+)?\s*/;
    const match = value.match(regex);
    if (match) {
      headerType = match[1] ? `h${match[1]}` : 'p';
      inputData.value = '';
      inputData.placeholder = `Heading ${headerType}`;
      menu.classList.add('hide');
    }
  }
});
