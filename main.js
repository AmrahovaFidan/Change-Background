let name = document.querySelector(".name");
let simple = document.querySelector(".simple");
let hex = document.querySelector(".hex");
let backgroundCode = document.querySelector(".backgroundCode");
let clickBtn = document.querySelector(".clickBtn");

const color = ["green", "red", "black", "blue", "lightblue", "yellow", "orange","Salmon","Crimson","HotPink","OrangeRed","Khaki","DarkKhaki","MediumPurple","Indigo","LawnGreen","LightGreen","SeaGreen","SaddleBrown","Maroon"];

function random(randomColor, index) {
    randomColor = Math.floor(Math.random() * color.length);
    return color[randomColor];
}

clickBtn.addEventListener("click", function () {
    var ran = random();
    document.body.style.backgroundColor = `${ran}`;
    backgroundCode.innerHTML = `Background Color: ${ran}`;
    


});
