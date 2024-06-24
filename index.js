
const containerElement = document.getElementById("text");

const mainText = "BÁLINT";

mainText.split('').forEach(c => {
    const newElement = document.createElement('p');
    newElement.innerHTML = c;
    containerElement.appendChild(newElement);
});


const families = [
    "UnifrakturMaguntia",
    "Rock Salt",
    "Orbitron",
    "Cinzel",
    "Caveat",
    "Noto Sans",
    "Sixtyfour",
    "Protest Revolution",
    "Protest Guerrilla"
];

const weights = [ 100, 200, 400, 600, 800 ];
const sizes = [ "2rem", "3rem", "4rem", "5rem", "5.5rem", "6rem", "6.5rem", "7rem", "7.5rem", "8rem", "8.5rem"]


function randomizeFonts() {
    for(let letter of containerElement.children) {
        letter.style["font-family"] = getRendom(families, letter.style["font-family"]);
        letter.style["font-weight"] = getRendom(weights);
        letter.style["font-size"] = getRendom(sizes);
    }
}


function getRendom(arr, prev) {
    let n = Math.floor(Math.random() * arr.length);
    while(arr[n] == prev) {
        n = Math.floor(Math.random() * arr.length);
    }
    return arr[n];
}

randomizeFonts();
setInterval(randomizeFonts, 1500);
// randomizeFonts();