const inputData = document.querySelector('.input');
const contentContainer = document.querySelector('.content');
const menu = document.querySelector('.menu');
const menuOptions = document.querySelector('.options');

let headerType;

const options = [
  { id: '1', heading: 'Heading 1', shortcut: '/+1' },
  { id: '2', heading: 'Heading 2', shortcut: '/+2' },
  { id: '3', heading: 'Heading 3', shortcut: '/+3' },
  { id: '4', heading: 'Heading 4', shortcut: '/+4' },
  { id: '5', heading: 'Heading 5', shortcut: '/+5' },
  { id: '6', heading: 'Heading 6', shortcut: '/+6' },
  { id: 'p', heading: 'Paragraph', shortcut: '/+p' },
];
options.forEach((option) => {
  const optionElement = document.createElement('div');
  optionElement.classList.add('option');
  optionElement.setAttribute('id', option.id);
  optionElement.innerHTML = `
    <img src="./images/text.svg" alt="text" />
    <div>
      <p>${option.heading}</p>
      <p>shortcut: type ${option.shortcut}</p>
    </div>
  `;
  menuOptions.appendChild(optionElement);
});

const selectOptions = menuOptions.querySelectorAll('div');

selectOptions.forEach((p) => {
  p.addEventListener('click', () => {
    if (p.id === 'p') {
      headerType = 'p';
      inputData.placeholder = 'pargraph';
    } else {
      headerType = `h${p.id}`;
      inputData.placeholder = `Enter Heading ${headerType}`;
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
      inputData.placeholder = `Enter Heading ${headerType}`;
      menu.classList.add('hide');
    }
  }
});
