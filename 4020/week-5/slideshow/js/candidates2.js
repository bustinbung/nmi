const output = document.querySelector("#alsoRan");
const prev = document.querySelector("#previous");
const next = document.querySelector("#next");

const candidateNames = ["Jeb Bush","Ben Carson","Lincoln Chafee","Chris Christie","Ted Cruz","Carly Fiorina","Jim Gilmore","Lindsey Graham","Bobby Jindal","John Kasich","Lawrence Lessig","Martin O'Malley","George Pataki","Rand Paul","Rick Perry","Marco Rubio","Bernie Sanders","Rick Santorum","Donald Trump","Scott Walker","Jim Webb"]
const candidatePix = ["bush.jpg","carson.jpg","chafee.jpg","christie.jpg","cruz.jpg","fiorina.jpg","gilmore.jpg","graham.jpg","jindal.jpg","kasich.jpg","lessig.jpg","omalley.jpg","pataki.jpg","paul.jpg","perry.jpg","rubio.jpg","sanders.jpg","santorum.jpg","trump.jpg","walker.jpg","webb.jpg"]

let currentCandidate = 0;

// accepts 1 or -1
function showCandidate(direction) {
    currentCandidate += direction;

    if (currentCandidate == candidateNames.length) {
        currentCandidate = 0;
    } else if (currentCandidate < 0) {
        currentCandidate = candidateNames.length - 1;
    }

    output.innerHTML = candidateNames[currentCandidate] + "<br><img src='../../week-4/candidates/pix/" + candidatePix[currentCandidate] + "'>";
}

prev.onclick = () => {showCandidate(-1)}
next.onclick = () => {showCandidate(1)}

showCandidate(0);