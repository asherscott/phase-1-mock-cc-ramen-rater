// write your code here
const ramenMenuDiv  = document.querySelector('#ramen-menu');
const detailImg     = document.querySelector('.detail-image');
const nameH2        = document.querySelector('.name');
const restH3        = document.querySelector('.restaurant');
const rateP         = document.querySelector('#rating-display');
const commentP      = document.querySelector('#comment-display');
const form          = document.querySelector('form');
const inputs        = document.querySelectorAll('input');
const commentSub    = document.querySelector('textarea');



fetch('http://localhost:3000/ramens')
.then(res => res.json())
.then(json => printImages(json))



function printImages(array) {


    // DELIVERABLE 1
    array.forEach((obj) => {
        const img = document.createElement('img');
        img.src = obj.image;
        ramenMenuDiv.append(img);

        // DELIVERABLE 2
        displayDetail(img, obj)
    })


    // DELIVERABLE 3
    form.addEventListener('submit', (event) => {
        event.preventDefault()


        const newInputs = Array.from(inputs).slice(0, -1);

        let newRamen = {
            name:        newInputs[0].value,
            restaurant:  newInputs[1].value,
            image:       newInputs[2].value,
            rating:      newInputs[3].value,
            comment:     commentSub.value,
        }

        newInputs.forEach(ele => ele.value = '')
        commentSub.value = '';

        const newImg = document.createElement('img');
        newImg.src = newRamen.image;
        newImg.alt = 'ramen image'
        ramenMenuDiv.append(newImg);

        displayDetail(newImg, newRamen)
    })
}



function displayDetail(img, obj) {
    img.addEventListener('click', () => {
        detailImg.src = img.src
        nameH2.textContent = obj.name
        restH3.textContent = obj.restaurant
        rateP.textContent = obj.rating
        commentP.textContent = obj.comment
    })
}