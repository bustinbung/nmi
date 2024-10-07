const tetrominoes = {
    "I": "I.png",
    "O": "O.png",
    "J": "J.png",
    "L": "L.png",
    "T": "T.png",
    "S": "S.png",
    "Z": "Z.png"
}

// create mino buttons
// 'mino' holds name
for (const mino in tetrominoes) {
    const img = document.querySelector('img');
    const button = document.createElement('button');
    button.innerText = mino + " piece";
    button.addEventListener('click', () => {
        img.src = "img/" + tetrominoes[mino];
    });

    document.querySelector('.buttons').appendChild(button);
}

// create rotation buttons
const cwButton = document.createElement('button');
cwButton.innerText = "Rotate Clockwise";
cwButton.addEventListener('click', () => {
    const img = document.querySelector('img');
    const currentRotation = Number(img.dataset.rotation);
    const newRotation = currentRotation + 90;
    img.style.transform = `rotateZ(${newRotation}deg)`;
    img.dataset.rotation = newRotation;
})

const ccwButton = document.createElement('button');
ccwButton.innerText = "Rotate Counterclockwise";
ccwButton.addEventListener('click', () => {
    const img = document.querySelector('img');
    const currentRotation = Number(img.dataset.rotation);
    const newRotation = currentRotation - 90;
    img.style.transform = `rotateZ(${newRotation}deg)`;
    img.dataset.rotation = newRotation;
})

document.querySelector('.buttons').appendChild(cwButton);
document.querySelector('.buttons').appendChild(ccwButton);