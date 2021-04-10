const clear = () => {
    let container = document.getElementById('dynamicContainer');

    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
};
  
export default clear;
