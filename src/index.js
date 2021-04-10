import header from './header'
import home from './home'
import menu from './menu'
import contact from './contact'
import clear from './clear'
import about from './about'
import footer from './footer';

const content = document.getElementById('content');
//content.classList.add('content')

const headerElement = header();
content.appendChild(headerElement)

const mainElement = document.createElement('main');
content.appendChild(mainElement)

const dynamicContainer = document.createElement('div');
dynamicContainer.id = 'dynamicContainer';
mainElement.appendChild(dynamicContainer)

home();

const footerElement = footer();
content.appendChild(footerElement)

// Home tab
const homeBtn = document.getElementById('btnHome');
homeBtn.onclick = () => {
  clear();
  home();
};

// About tab
const aboutBtn = document.getElementById('btnAbout');
aboutBtn.onclick = () => {
  clear();
  about();
};

// Menu tab
const menuBtn = document.getElementById('btnMenu');
menuBtn.onclick = () => {
  clear();
  menu();
}

// Contact tab
const contactBtn = document.getElementById('btnContact');
contactBtn.onclick = () => {
  clear();
  contact();
}