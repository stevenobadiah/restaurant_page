const about = () => {
    let container = document.getElementById('dynamicContainer');
    
    const about = document.createElement('div');
    about.id = 'about';
    container.appendChild(about);

    const aboutText = document.createElement('p')
    aboutText.innerHTML = "Psycho Potatoe is a killer, potatoe-themed restaurant for those of us who feel the Potatoe Famine is an under-empathized piece of global history. We have something for just about everyone: meat lovers, vegetarians, vegans, the poor, the rich - everyone. The one thing everyone has in common when they walk through our doors: they f'ckin love potatoes.";
    aboutText.id = 'aboutText';

    about.appendChild(aboutText);

    let img = document.createElement('img');
    img.id = "imgSamwise";
    img.src = 'images/samwise.jpg';
    about.appendChild(img);
};
  
export default about;