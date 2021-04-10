const contact = () => {
    let container = document.getElementById('dynamicContainer');

    const contact = document.createElement('div');
    contact.id = 'contact'
    container.appendChild(contact)

    const addressLabel = document.createElement('p')
    addressLabel.innerHTML = "Address:"
    contact.appendChild(addressLabel);

    const address = document.createElement('p')
    address.innerHTML = "1561 3rd Ave, New York, NY 10028"
    address.id = 'address';
    contact.appendChild(address);

    const phoneLabel = document.createElement('p')
    phoneLabel.innerHTML = "Phone Number:"
    contact.appendChild(phoneLabel);

    const phoneNumber = document.createElement('p')
    phoneNumber.innerHTML = "(123) 456-7890";
    phoneNumber.id = 'phoneNumber';
    contact.appendChild(phoneNumber);
  
    return contact;
};
  
export default contact;