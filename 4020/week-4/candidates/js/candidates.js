const output = document.querySelector("#alsoRan");
const candidateNames = ["Jeb Bush","Ben Carson","Lincoln Chafee","Chris Christie","Ted Cruz","Carly Fiorina","Jim Gilmore","Lindsey Graham","Bobby Jindal","John Kasich","Lawrence Lessig","Martin O'Malley","George Pataki","Rand Paul","Rick Perry","Marco Rubio","Bernie Sanders","Rick Santorum","Donald Trump","Scott Walker","Jim Webb"]
const candidatePix = ["bush.jpg","carson.jpg","chafee.jpg","christie.jpg","cruz.jpg","fiorina.jpg","gilmore.jpg","graham.jpg","jindal.jpg","kasich.jpg","lessig.jpg","omalley.jpg","pataki.jpg","paul.jpg","perry.jpg","rubio.jpg","sanders.jpg","santorum.jpg","trump.jpg","walker.jpg","webb.jpg"]

candidateNames.forEach((candidate, index) => {
    const li = document.createElement('li');
    const div = document.createElement('div');

    div.innerHTML = candidate + "<br>";

    const img = document.createElement('img');
    img.src = "pix/" + candidatePix[index];
    div.appendChild(img);

    li.appendChild(div);
    output.appendChild(li);
})