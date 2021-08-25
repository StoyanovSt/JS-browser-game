// HINT
const hint = document.querySelector('.fas');
const hintContent = document.querySelectorAll('.hint-content');

hint.addEventListener('click', (e) => {
    Array.from(hintContent).forEach(el => {
        if (el.style.display === "block") {
            el.style.display = "none";
            hint.setAttribute('class', 'fas fa-arrow-down');
        } else {
            el.style.display = "block";
            hint.setAttribute('class', 'fas fa-arrow-up');
        }
    })
});

// BEE
const bee = document.querySelector('.image-container');
const beeEater = document.querySelector('.image-container3');

let beeEaterIncrementor = 0;
let beeIncrementorX = 0;
let beeIncrementorY = 0;
let gramsPollen = 0;

document.addEventListener('keydown', (e) => {
    let keyName = e.key;

    if (keyName === 'ArrowRight') {
        beeIncrementorX += 10;
        bee.style.marginLeft = `${beeIncrementorX}px`;
        beeEaterIncrementor += 5;
        beeEater.style.marginLeft = `${beeEaterIncrementor}px`;
    } else if (keyName === 'ArrowLeft') {
        beeIncrementorX -= 10;
        bee.style.marginLeft = `${beeIncrementorX}px`;
        beeEaterIncrementor += 5;
        beeEater.style.marginLeft = `${beeEaterIncrementor}px`;
    } else if (keyName === 'ArrowDown') {
        beeIncrementorY += 10;
        bee.style.marginTop = `${beeIncrementorY}px`;
        beeEaterIncrementor += 5;
        beeEater.style.marginTop = `${beeEaterIncrementor}px`;
    } else if (keyName === 'ArrowUp') {
        beeIncrementorY -= 10;
        bee.style.marginTop = `${beeIncrementorY}px`;
        beeEaterIncrementor -= 5;
        beeEater.style.marginTop = `${beeEaterIncrementor}px`;
    }

    // WHEN LANDING ON TARGET
    if (gramsPollen < 3) {
        if (bee.style.marginTop === '-60px' && bee.style.marginLeft === '-810px') {
            alert('You have successfully gain a pollen! Go ahead! Collect them all!');
            document.querySelector('.pollen-grams').textContent = ++gramsPollen;
        }

        if (bee.style.marginTop === '240px' && bee.style.marginLeft === '20px') {
            alert('You have successfully gain a pollen! Go ahead! Collect them all!');
            document.querySelector('.pollen-grams').textContent = ++gramsPollen;
        }

        if (bee.style.marginTop === '300px' && bee.style.marginLeft === '-190px') {
            alert('You have successfully gain a pollen! Go ahead! Collect them all!');
            document.querySelector('.pollen-grams').textContent = ++gramsPollen;
        }
    } else {
        alert('Congratulations! You may enter next level!');
        document.querySelector('.next-level-btn').style.display = "block";
    }
});

// TO DO: stop it

// setInterval(() => {
//     if (document.querySelector('.bee-eater-voice').textContent === 'I will catch you!') {
//         document.querySelector('.bee-eater-voice').textContent = 'Beware of me!';
//     } else {
//         document.querySelector('.bee-eater-voice').textContent = 'I will catch you!';
//     }

// }, 7000);