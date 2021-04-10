const footer = () => {
    const footer = document.createElement('footer');

    const footerText = document.createElement('p')
    footerText.innerHTML = "Book reservations today!";
    footerText.id = 'footerText';

    footer.appendChild(footerText);
  
    return footer;
};
  
export default footer;