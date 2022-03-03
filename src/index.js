// write your code here
fetch('http://localhost:3000/ramens')
.then(res => res.json())
.then(json => printImages(json))

const ramenMenuDiv = document.querySelector('#ramen-menu');
const detailImg = document.querySelector('.detail-image');
const nameH2 = document.querySelector('.name');
const restH3 = document.querySelector('.restaurant');
const rateP = document.querySelector('#rating-display');
const commentP = document.querySelector('#comment-display');

const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');
const commentSub = document.querySelector('textarea');

// console.log(ramenMenuDiv)

function printImages(array) {
    // console.log(array)
    array.forEach((obj) => {
        // console.log(obj)

        const img = document.createElement('img');
        img.src = obj.image;
        ramenMenuDiv.append(img);

        img.addEventListener('click', () => {
            // console.log(obj.name)
            detailImg.src = img.src
            nameH2.textContent = obj.name
            restH3.textContent = obj.restaurant

            rateP.textContent = obj.rating
            commentP.textContent = obj.comment
        })
    })
    // after submit
    // make new obj
    // append new img
    // should add to EventListener
    console.log(inputs)
    let newRamen = {};
    function newRamenFunc() {
        form.addEventListener('submit', (event) => {
            event.preventDefault()

            // console.log(commentSub)

            newRamen = {
                name:        inputs[0].value,
                restaurant:  inputs[1].value,
                image:       inputs[2].value,
                rating:      inputs[3].value,
                comment:     commentSub.value,
            }

            console.log(newRamen)
            console.log(newRamen.image)
            // removes 'Submit' from the input button !!FIX!!
            inputs.forEach(ele => ele.value = '')

            // add to img div
            const newImg = document.createElement('img');
            newImg.src = newRamen.image;
            newImg.alt = 'new Image'
            ramenMenuDiv.append(newImg);
            console.log(newImg)

            newImg.addEventListener('click', () => {
                // console.log(obj.name)
                // detailImg.src = newImg.src
                // nameH2.textContent = obj.name
                // restH3.textContent = obj.restaurant
    
                // rateP.textContent = obj.rating
                // commentP.textContent = obj.comment
            })

            

        })
    }
    newRamenFunc()
}
