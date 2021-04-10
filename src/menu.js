const menu = () => {
    let container = document.getElementById('dynamicContainer');

    const menu = document.createElement('div');
    menu.id = 'menu'
    container.appendChild(menu)

    const menuList = document.createElement('ul')
    menuList.id = 'menuList';
    menu.appendChild(menuList);

    const item1 = document.createElement('li')
    item1.innerHTML = "Steak Fries ~ $14"
    menuList.appendChild(item1)

    const item2 = document.createElement('li')
    item2.innerHTML = "Cheese Fries ~ $12"
    menuList.appendChild(item2)

    const item3 = document.createElement('li')
    item3.innerHTML = "Baked Potatoe ~ $12"
    menuList.appendChild(item3)

    const item4 = document.createElement('li')
    item4.innerHTML = "Sweet Potatoe ~ $10"
    menuList.appendChild(item4)

    const item5 = document.createElement('li')
    item5.innerHTML = "Potatoe Skins ~ $18"
    menuList.appendChild(item5)

    const item6 = document.createElement('li')
    item6.innerHTML = "Herb-Lathered Tiny Potatoes Skins ~ $20"
    menuList.appendChild(item6)

    const item7 = document.createElement('li')
    item7.innerHTML = "Genetically-Engineered Giant Potatoe ~ $44"
    menuList.appendChild(item7)

    const item8 = document.createElement('li')
    item8.innerHTML = "Gold Potatoe ~ $120"
    menuList.appendChild(item8)
  
    return menu;
};
  
export default menu;