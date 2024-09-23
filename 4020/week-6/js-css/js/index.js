// function changeCSS(bgColor, borderRadius) {
//     const sq = document.querySelector("#square");

//     sq.style.backgroundColor = bgColor;
//     sq.style.borderRadius = borderRadius;
// }

function changeCSS(bgColor, borderRadius, left, top, rotationAngle) {
    const sq = document.querySelector("#square");

    sq.style.backgroundColor = bgColor;
    sq.style.borderRadius = borderRadius;
    sq.style.left = left;
    sq.style.top = top;
    sq.style.transform = 'rotateZ(' + rotationAngle + ')';
}

// function changeCSS(map) {
//     const sq = document.querySelector("#square");

//     for (const [key, value] of map) {
//         sq.style[key] = value;
//     }
// }