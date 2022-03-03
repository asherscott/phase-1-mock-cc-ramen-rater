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
        img.addEventListener('click', () => {
            detailImg.src = img.src
            nameH2.textContent = obj.name
            restH3.textContent = obj.restaurant
            rateP.textContent = obj.rating
            commentP.textContent = obj.comment
        })
    })


    // DELIVERABLE 3
    form.addEventListener('submit', (event) => {
        event.preventDefault()

        let newRamen = {
            name:        inputs[0].value,
            restaurant:  inputs[1].value,
            image:       inputs[2].value,
            rating:      inputs[3].value,
            comment:     commentSub.value,
        }


        const newInputs = Array.from(inputs).slice(0, 3);
        newInputs.forEach(ele => ele.value = '')

        const newImg = document.createElement('img');
        newImg.src = newRamen.image;
        newImg.alt = 'new image'
        ramenMenuDiv.append(newImg);
    })
}
