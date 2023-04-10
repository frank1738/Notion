/* eslint-disable import/prefer-default-export */
/* eslint-disable no-useless-concat */

export const createHeader = (value) => {
  document.body.innerHTML = '<div>' + '  <div class="tasks"></div>' + '</div>';
  const contentContainer = document.createElement('div');
  const header = document.createElement('h1');
  header.innerText = value;
  header.contentEditable = 'true';
  contentContainer.appendChild(header);
  return header;
};
