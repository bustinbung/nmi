const select = document.querySelector('#userInput');

for (let i = 0; i < 100; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.innerText = i;

    select.append(option);
}

function compare() {
    const answer = Number(document.querySelector('#userInput').value);
    const reaction = document.querySelector('#response');

    let desiredAnswer = 24;
    let upperBound = 29;
    let lowerBound = 19;
    let reactionText;
    switch (true) {
        case (answer == desiredAnswer):
            reactionText = answer + " is correct!";
            break;
        case (answer < desiredAnswer && answer > lowerBound):
            reactionText = answer + " is too low, but close.";
            break;
        case (answer < lowerBound):
            reactionText = answer + " is way too low.";
            break;
        case (answer > desiredAnswer && answer < upperBound):
            reactionText = answer + " is too high, but close.";
            break;
        case (answer > upperBound):
            reactionText = answer + " is way too high.";
            break;
    }

    reaction.innerHTML = reactionText;
}