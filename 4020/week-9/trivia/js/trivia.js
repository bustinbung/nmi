const questionDiv = document.querySelector('#question');
const categoryDiv = document.querySelector('#category');
const answerDiv = document.querySelector('#answer');

let theAnswer = '';

const apiEndpoint = 'https://the-trivia-api.com/v2/questions?limit=1';

async function newQuestion() {
    const data = await fetch(apiEndpoint)
        .then(response => {
            if (response.ok == false) {
                throw new Error(`HTTP Error! Status: ${response.status}`);
            }

            return response.json();
        })

    questionDiv.innerText = data[0].question.text;
    categoryDiv.innerText = `Category: ${data[0].category}`;
    theAnswer = data[0].correctAnswer;
}

async function showAnswer() {

}