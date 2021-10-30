const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

const btnClickMe = document.querySelector(".btnClickMe");
const colorText = document.querySelector(".colorText");
const bgBody = document.querySelector(".bgBody");

btnClickMe.addEventListener("click", function () {

    let hexColor = "#"
    for (let i = 0; i < 6; i++){
        hexColor += hex[getRandomNumber()]
    }
    
    bgBody.style.backgroundColor = hexColor
    colorText.textContent = hexColor
    console.log(hexColor)

});

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length)
}
