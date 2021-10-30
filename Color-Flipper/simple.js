const colors = ["white", "black", "rgba(133,122,200", "#f15025"]

const btnClickMe = document.querySelector(".btnClickMe");
const colorText = document.querySelector(".colorText");
const bgBody = document.querySelector(".bgBody");

btnClickMe.addEventListener("click", function () {
    const randomNumber = getRandomNumber()
    bgBody.style.backgroundColor = colors[randomNumber]
    colorText.textContent = colors[randomNumber]
    console.log(randomNumber)

});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}