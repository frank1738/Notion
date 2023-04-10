import { createHeader } from './__mocks__/index.js';

jest.mock('./index.js');

describe('Check if the block elements are being added to the DOM Correctly', () => {
  test('Test if the element Text is displaying Header1', () => {
    const header = createHeader('Header1');
    expect(header.innerText).toBe('Header1');
  });
  test('Test if the element Text is displaying Header2', () => {
    const header = createHeader('Header2');
    expect(header.innerText).toBe('Header2');
  });
  test('Test if the element Text is displaying Header3', () => {
    const header = createHeader('Header3');
    expect(header.innerText).toBe('Header3');
  });

  test('Test if the element Text is editable', () => {
    const header = createHeader('Header4');
    expect(header.contentEditable).toBe('true');
  });
});
