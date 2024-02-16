
function renderContact() {
    const content = document.querySelector('#content');
    content.textContent = '';

    const cards = document.createElement('div');
    cards.setAttribute('class', 'contact-content')

    const h1 = document.createElement('h1');
    h1.textContent = 'Contact Us'

    const p1 = document.createElement ('p');
    p1.textContent = 'Address: 5666 Res Street';

    const map = document.createElement('div');
    map.setAttribute('class', 'google-map')
    map.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50500.08191286591!2d144.9949284157892!3d-37.713689133801665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6451213a33a9b%3A0x1a6b52516dd182b8!2sEdwardes%20Lake%20Park!5e0!3m2!1sid!2sid!4v1707986355148!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'

    cards.append(h1, p1, map);
    content.append(cards);
};

export default renderContact;
