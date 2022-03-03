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
.then(ramens => printImages(ramens))



function printImages(ramens) {
    displayDetail(ramens[0])

    // DELIVERABLE 1
    ramens.forEach((ramen) => {
        const img = document.createElement('img');
        appendImg(img, ramen)

        // DELIVERABLE 2
        img.addEventListener('click', () => displayDetail(ramen))
    })


    // DELIVERABLE 3
    form.addEventListener('submit', (event) => {
        event.preventDefault()


        const newInputs = Array.from(inputs).slice(0, -1);

        const newRamen = {
            name:        newInputs[0].value,
            restaurant:  newInputs[1].value,
            image:       newInputs[2].value,
            rating:      newInputs[3].value,
            comment:     commentSub.value,
        }

        newInputs.forEach(input => input.value = '')
        commentSub.value = '';

        const img = document.createElement('img');
        appendImg(img, newRamen)

        img.addEventListener('click', () => displayDetail(newRamen))
    })
}

function displayDetail(ramen) {
    detailImg.src           = ramen.image
    nameH2.textContent      = ramen.name
    restH3.textContent      = ramen.restaurant
    rateP.textContent       = ramen.rating
    commentP.textContent    = ramen.comment
}

function appendImg(img, ramen) {
    img.src = ramen.image;
    img.alt = 'ramen image'
    ramenMenuDiv.append(img);
}