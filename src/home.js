import home1 from './img/home1.jpg'
import home2 from './img/home2.jpg'

function renderHome() {
    // select content with id
    const content = document.querySelector('#content');
    content.textContent = '';

      // Make a container1 for content
    const container1 = document.createElement('div')
    container1.setAttribute('class', 'container1')

      // Make a p for description
    const description1 = document.createElement('p');
    description1.textContent = 'Indulge in the sweetness of life, one bite at a time.'

      // Make a img1Container for img n credit
    const img1Container = document.createElement('div')
    img1Container.setAttribute('class', 'image-container')
    const img1 = document.createElement('img');
    img1.src = home1;
    
        // Make a creditContainer for credit
    const creditImg1 = document.createElement('a');
    creditImg1.href = "https://unsplash.com/photos/man-in-black-t-shirt-standing-in-front-of-counter--ylyzFOEBS0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
    creditImg1.textContent = 'Photo by Ceyda Çiftci on Unsplash'

    const credit = document.createElement('div');
    credit.setAttribute('class', 'credit')
    credit.append(creditImg1);
    img1Container.append(img1, credit);

    container1.append(description1, img1Container);

    // -----
        // Make a container2 for content
    const container2 = document.createElement('div')
    container2.setAttribute('class', 'container2')

      // Make a p for description
    const description2 = document.createElement('p');
    description2.textContent = 'Where every aroma tells a story, and every bite is a moment of delight. Welcome to our bakery, where passion meets pastry, and every creation is crafted with love.';

      // Make a img2Container for img n credit
    const img2Container = document.createElement('div')
    img2Container.setAttribute('class', 'image-container')
    const img2 = document.createElement('img');
    img2.src = home2;

        // Make a creditContainer for credit
    const creditImg2 = document.createElement('a');
    creditImg2.href = "https://unsplash.com/photos/brown-bread-on-black-steel-tray-0p-rd1KgSOY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
    creditImg2.textContent = 'Photo by luana niemann on Unsplash'

    const credit2 = document.createElement('div');
    credit2.setAttribute('class', 'credit')
    credit2.append(creditImg2);
    img2Container.append(img2, credit2);

    container2.append(description2, img2Container);

    content.append(container1, container2);

    //   // Make a background credit
    // const bgCreditCont = document.createElement('div');
    // bgCreditCont.setAttribute('class', 'bg-credit');
    // const bgcredit = document.createElement('a');
    // bgcredit.href = "https://unsplash.com/photos/strawberry-cake-on-white-ceramic-plate-VOMS9yXsdP0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
    // bgcredit.textContent = 'Background Photo by Sebastian Coman Photography on Unsplash'

    // bgCreditCont.append(bgcredit);

    // content.append(bgCreditCont);

};

export default renderHome;