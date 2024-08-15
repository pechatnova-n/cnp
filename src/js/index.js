import '../styles/style.scss';
import 'virtual:svg-icons-register';
import 'lazysizes';
import { select } from '../blocks/select/select';
import { accordion } from '../blocks/accordion-ui/accordion-ui';
import { inputReset } from './components/inputReset';
import { modals } from '../blocks/modals/modals';
import { barbaUi } from './libs/barba';

document.addEventListener('DOMContentLoaded', function () {
  // barbaUi();

  commonFunction();
});

// Функция для вызова при переходе между страницами
export const commonFunction = () => {
  inputReset();
  select();
  accordion();
  modals();
};



//tabs
let tabLinks = document.querySelectorAll('.delivery__radio');
let tabLinksTemp;
let tabContent = document.querySelectorAll('.delivery__tab-content');

for (let elLink of tabLinks) {
  elLink.addEventListener('click', e => {
    e.preventDefault();

    tabLinksTemp = tabLinks;
    for (let elLinkTemp of tabLinksTemp) {
      elLinkTemp.classList.remove('delivery__radio_active');
    }
    e.currentTarget.classList.add('delivery__radio_active');

    for (let elContent of tabContent) {
      elContent.classList.remove('delivery__tab-content_active');
    }
    document.getElementById('tab-' + e.currentTarget.getAttribute("id")).classList.add('delivery__tab-content_active');
  });

}

