let classObject = {"AlexW": "I am the oldest of two boys, two girls; two redheads, two blondes; two left-handers, two right-handers. ",
"AlexC": " My beard is thicker than this photo shows. I need new pictures :-(",
"Allison": "I write about peanuts. ",
"Amy": " I like mint tea and taking pictures!",
"Andrea": "Let me think about it",
"AnnaGrace": "Too much to list ",
"Brandon": " I do a yearly snowboarding trip with my friends.",
"Cydney": "I'm a Libra. ",
"Elizabeth": " I grew up right outside of Washington, D.C. and have the Red Metro line memorized. ",
"Grant": "I like pups ",
"Haleigh": "I have a German Shepherd pup named Rayna! ",
"Hua": " I know a bit of drums",
"Jenny": "I won front row tickets to Hamilton this summer.",
"Kaitlyn": "I am a wedding and portrait photographer! ",
"McKenzie": " I'm an intern for Barstool Sports",
"Melissa": " I'm resubmitting my site for class assignments.",
"Morgan": "I am from Athens. ",
"Niambi": "I was born in New York.",
"Tyler": "I currently hold 5 national records in swimming for the country Bermuda."}
 
//let nameArray =["AlexW","AlexC","Allison","Amy","Andrea","AnnaGrace","Brandon","Cydney","Elizabeth","Grant","Haleigh","Hua","Jenny","Kaitlyn","McKenzie ","Melissa","Morgan","Niambi","Tyler"];
let nameArray = classObject.keys;

const sName = document.querySelector('#aname');
for (let key in classObject) {
    sName.innerHTML += `<option value=${key}>${key}</option>`;
}

function quote(){
    const aboutMe = document.querySelector('#aboutme');
    const imgDiv = document.querySelector('#image');

    if (sName.value in classObject) {
        aboutMe.innerHTML = classObject[sName.value];
        imgDiv.children[0].src = `pix/${sName.value}.jpg`;
    } else {
        aboutMe.innerHTML = "Name does not exist"
    }
}