import donutImg from './img/donut.jpg'
import iceImg from './img/ice-mango.jpg'
import cherryImg from './img/cherry-cake.jpg'
import icecakeImg from './img/icecreamCake.jpg'

const menuItems = [
    { name: 'Donut', src: donutImg, desc: 'Indulge in the irresistible allure of our handcrafted donuts, each a symphony of flavors and textures.', aText: 'Photo by Kobby Mendez on Unsplash', a: "https://unsplash.com/photos/doughnut-with-toppings-q54Oxq44MZs?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"},
    { name: 'Ice Crean Mango With cerry', src: iceImg, desc: 'Savor the taste of summer with our luscious mango ice cream crowned with a plump cherry on top', aText: 'Photo by Max Griss on Unsplash', a: "https://unsplash.com/photos/two-desserts-with-raspberries-on-top-of-each-other-yH8FD6_tpCU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"},
    { name: 'Chocolate Cherry Cake', src: cherryImg, desc: 'Experience pure decadence with our rich and moist chocolate cake, crowned with a burst of juicy cherries', aText: 'Photo by Henrik Hjortshøj on Unsplash', a: "https://unsplash.com/photos/sliced-cake-with-cherry-on-white-ceramic-plate-XtYPjMTNQUA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"},
    { name: 'Cake With Ice Cream', src: icecakeImg,  desc: 'Indulge in the ultimate dessert experince with our decadent chocolate cake paired perfectly with a scoope of ice cream', aText: 'Photo by Shivansh Sethi on Unsplash', a: "https://unsplash.com/photos/chocolate-cake-with-white-icing-on-white-ceramic-plate-dKT6Q7q2UKs?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"},
]

function renderMenu() {
      // make a cards container
    const cardContainer = document.createElement('div');
    cardContainer.setAttribute('class', 'cards');

        // make a card container
    menuItems.forEach(e => {
        const card = document.createElement('div');
        card.setAttribute('class', 'card');

          // image container 
        const imgContainer = document.createElement('div');
        imgContainer.setAttribute('class', 'menu-image-container')
        const img = new Image();
        img.src = e.src;
            //image credit
            const creditContainer = document.createElement('div');
            creditContainer.setAttribute('class', 'menu-credit');
            const creditImg = document.createElement('a');
            creditImg.href = e.a
            creditImg.textContent = e.aText
            creditContainer.append(creditImg)

        imgContainer.append(img, creditContainer);


          // title container
        const title = document.createElement('div');
        title.setAttribute('class', 'title');
        title.textContent = `${e.name}`
        
          // description container
        const description = document.createElement('div');
        description.setAttribute('class', 'desc');
        description.textContent = `${e.desc}`   


        card.append(imgContainer, title, description);
       
        cardContainer.append(card);
    });
    
    // select content with id
    const content = document.querySelector('#content');
    content.textContent = '';

    content.appendChild(cardContainer);
};

export default renderMenu;