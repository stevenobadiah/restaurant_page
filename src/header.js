import nav from './nav';

const header = () => {
    const header = document.createElement("header");

    const restaurantName = document.createElement('h1');
    restaurantName.innerHTML = 'Psycho Potatoe';
    restaurantName.id = 'restaurantName';

    const navbar = nav()
    
    header.appendChild(restaurantName);
    header.appendChild(navbar);
  
    return header;
  };
  
  export default header;