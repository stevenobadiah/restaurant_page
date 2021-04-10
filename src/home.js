const home = () => {
    let container = document.getElementById('dynamicContainer');

    const home = document.createElement('div');
    home.id = 'home'
    container.appendChild(home)

    const homeText = document.createElement('p')
    homeText.innerHTML = "Psycho Potatoe is a gourment potato restaurant on the upper east side.";
    homeText.id = 'homeText';
    home.appendChild(homeText);

    const img = document.createElement('img');
    img.id = "imgPotatoe";
    img.src = 'images/potato.jpg';
    home.appendChild(img);
};
  
export default home;