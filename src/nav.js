const nav = () => {
    const nav = document.createElement('nav');

    let home = document.createElement('button');
    home.innerHTML = 'Home';
    home.id = 'btnHome';

    let about = document.createElement('button');
    about.innerHTML = 'About';
    about.id = 'btnAbout';

    let menu = document.createElement('button');
    menu.innerHTML = 'Menu';
    menu.id = 'btnMenu';

    let contact = document.createElement('button');
    contact.innerHTML = 'Contact Us';
    contact.id = 'btnContact';

    nav.appendChild(home);
    nav.appendChild(about);
    nav.appendChild(menu);
    nav.appendChild(contact);
  
    return nav;
  };
  
  export default nav;