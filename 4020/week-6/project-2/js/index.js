const candidateNames = [["Jeb Bush", "Ben Carson", "Lincoln Chafee", "Chris Christie", "Ted Cruz", "Carly Fiorina", "Jim Gilmore"], ["Lindsey Graham", "Bobby Jindal", "John Kasich", "Lawrence Lessig", "Martin O'Malley", "George Pataki", "Rand Paul"], ["Rick Perry", "Marco Rubio", "Bernie Sanders", "Rick Santorum", "Donald Trump", "Scott Walker", "Jim Webb"]]
const candidatePix = [["bush.jpg", "carson.jpg", "chafee.jpg", "christie.jpg", "cruz.jpg", "fiorina.jpg", "gilmore.jpg"], ["graham.jpg", "jindal.jpg", "kasich.jpg", "lessig.jpg", "omalley.jpg", "pataki.jpg", "paul.jpg"], ["perry.jpg", "rubio.jpg", "sanders.jpg", "santorum.jpg", "trump.jpg", "walker.jpg", "webb.jpg"]]

const slideshow1 = document.querySelector("#slideshow-1");
const slideshow2 = document.querySelector("#slideshow-2");
const slideshow3 = document.querySelector("#slideshow-3");

let slideshow1Index = 0;
let slideshow2Index = 0;
let slideshow3Index = 0;

const buttons = document.querySelectorAll('button');

// assign button functions based on id
buttons.forEach((button) => {
    // splits id using '-'. should return array:
    // [slideshow, {id}, {direction}]
    const idParts = button.id.split('-');

    button.addEventListener('click', () => {
        advanceSlideshow(idParts[1], idParts[2]);
    })
})

function advanceSlideshow(id, direction) {
    switch (id) {
        case "1":
            if (direction == "prev") {
                if (slideshow1Index <= 0) {
                    slideshow1Index = candidateNames[0].length - 1;
                } else {
                    slideshow1Index--;
                }
            } else {
                if (slideshow1Index == candidateNames[0].length - 1) {
                    slideshow1Index = 0;
                } else {
                    slideshow1Index++; 
                }
            }

            slideshow1.children[0].src = `../../week-4/candidates/pix/${candidatePix[0][slideshow1Index]}`;
            slideshow1.children[1].innerText = candidateNames[0][slideshow1Index];
            break;
        case "2":
            if (direction == "prev") {
                if (slideshow2Index <= 0) {
                    slideshow2Index = candidateNames[1].length - 1;
                } else {
                    slideshow2Index--;
                }
            } else {
                if (slideshow2Index == candidateNames[1].length - 1) {
                    slideshow2Index = 0;
                } else {
                    slideshow2Index++; 
                }
            }

            slideshow2.children[0].src = `../../week-4/candidates/pix/${candidatePix[1][slideshow2Index]}`;
            slideshow2.children[1].innerText = candidateNames[1][slideshow2Index];
            break;
        case "3":
            if (direction == "prev") {
                if (slideshow3Index <= 0) {
                    slideshow3Index = candidateNames[2].length - 1;
                } else {
                    slideshow3Index--;
                }
            } else {
                if (slideshow3Index == candidateNames[2].length - 1) {
                    slideshow3Index = 0;
                } else {
                    slideshow3Index++; 
                }
            }

            slideshow3.children[0].src = `../../week-4/candidates/pix/${candidatePix[2][slideshow3Index]}`;
            slideshow3.children[1].innerText = candidateNames[2][slideshow3Index];
            break;
    }
}