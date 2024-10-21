const divLoad = document.querySelector('#mainDiv');

let theAnswer = [];

const apiEndpoint = 'https://the-trivia-api.com/v2/questions?limit=10';

async function newQuestion() {
    const data = await fetch(apiEndpoint)
        .then(response => {
            if (response.ok == false) {
                throw new Error(`HTTP Error! Status: ${response.status}`);
            }

            return response.json();
        })

    // reset div after data loads to prevent flashing
    divLoad.innerHTML = '';

    for (const question of data) {
        console.log(question);
        const section = document.createElement('section');
        
        const heading = document.createElement('h3');
        heading.innerText = `Category: ${question.category}`;

        const questionText = document.createElement('p');
        questionText.innerText = question.question.text;

        const button = document.createElement('button');
        button.innerText = 'Show answer';
        button.onclick = ((event) => {
            const answerText = document.createElement('p');
            answerText.innerText = question.correctAnswer;
            event.target.previousElementSibling.append(answerText);
            event.target.remove();
        })

        section.append(heading, questionText, button);
        divLoad.append(section);
    }
}

async function showAnswer() {
    document.querySelector('#answer').innerText = theAnswer;
}