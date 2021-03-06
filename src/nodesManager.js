/* eslint-disable no-restricted-globals */
/* eslint-disable no-plusplus */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-undef */
import { size, buttonSection, itemsSection } from './onstart';

const state = {
  currentPage: 1,
  pages: ''
};
function createButton(number) {
  state.pages = number;
  const pageButton = document.createElement('button');
  pageButton.className = 'pageButton';
  pageButton.classList.add('hidden');
  if (document.getElementsByClassName('pageButton').length < 4) {
    pageButton.classList.remove('hidden');
  }
  buttonSection.appendChild(pageButton);
  pageButton.id = `pageButton${number}`;
  const a = document.getElementsByClassName('active');
  if (a.length === 0) {
    document.getElementById('pageButton1').classList.add('active');
    document.getElementById('pageButton1').innerHTML = '1';
  }
  document.getElementById(`pageButton${number}`).addEventListener('click', e => {
    state.currentPage = number;
    for (let i = 0; i < a.length; i++) {
      a[i].classList.remove('active');
    }
    document.getElementById(`pageButton${number}`).classList.add('active');
    if (e.target.classList.contains('active')) {
      for (let k = 0; k < buttonSection.childNodes.length; k++) {
        buttonSection.childNodes[k].innerHTML = '';
      }
      e.target.innerHTML = number;
    }
    if (state.pages - state.currentPage === 1) {
      console.log(state.pages, state.currentPage);
      document.getElementById('next').click();
    }
    if (state.currentPage > 3) {
      const buttonsToHide = document.getElementsByClassName('pageButton');
      for (let r = 0; r < buttonsToHide.length; r++) {
        buttonsToHide[r].classList.add('hidden');
      }
      document.getElementById(`pageButton${number - 1}`).classList.remove('hidden');
      document.getElementById(`pageButton${number}`).classList.remove('hidden');
      document.getElementById(`pageButton${number + 1}`).classList.remove('hidden');
      document.getElementById(`pageButton${number + 2}`).classList.remove('hidden');
    } else if (state.currentPage < 5) {
      const buttonsToHide = document.getElementsByClassName('pageButton');
      for (let r = 0; r < buttonsToHide.length; r++) {
        buttonsToHide[r].classList.add('hidden');
      }
      document.getElementById('pageButton1').classList.remove('hidden');
      document.getElementById('pageButton2').classList.remove('hidden');
      document.getElementById('pageButton3').classList.remove('hidden');
      document.getElementById('pageButton4').classList.remove('hidden');
    }
    if (size > 800) {
      itemsSection.scrollTo({ left: `${1048 * (number - 1)}`, behavior: 'smooth' });
    } else if (size < 500) {
      itemsSection.scrollTo({ left: `${262 * (number - 1)}`, behavior: 'smooth' });
    } else {
      itemsSection.scrollTo({ left: `${524 * (number - 1)}`, behavior: 'smooth' });
    }
  });
}

function deleteButtons() {
  while (buttonSection.lastChild) {
    buttonSection.removeChild(buttonSection.lastChild);
  }
}
function deleteItemsPages() {
  while (itemsSection.lastChild) {
    itemsSection.removeChild(itemsSection.lastChild);
  }
}

export { state, createButton, deleteButtons, deleteItemsPages };
