// --------------------------------
// GET ELEMENTS
// --------------------------------

const poster = document.getElementById("poster");
const posterText = document.getElementById("posterText");
const posterImage = document.getElementById("posterImage");
const shape = document.querySelector(".shape");


// --------------------------------
// TEXT CONTROLS
// --------------------------------

const textInput = document.getElementById("textInput");
const textColor = document.getElementById("textColor");
const backgroundColor = document.getElementById("backgroundColor");

const textX = document.getElementById("textX");
const textY = document.getElementById("textY");
const textSize = document.getElementById("textSize");


// --------------------------------
// IMAGE CONTROLS
// --------------------------------

const xPosition = document.getElementById("xPosition");
const yPosition = document.getElementById("yPosition");
const rotation = document.getElementById("rotation");
const skewX = document.getElementById("skewX");
const skewY = document.getElementById("skewY");
const scale = document.getElementById("scale");


// --------------------------------
// SHAPE CONTROLS
// --------------------------------

const shapeX = document.getElementById("shapeX");
const shapeY = document.getElementById("shapeY");
const shapeRotation = document.getElementById("shapeRotation");
const shapeScale = document.getElementById("shapeScale");
const shapeColor = document.getElementById("shapeColor");


// --------------------------------
// TEXT FUNCTION
// --------------------------------

function updateText() {

    posterText.style.left =
        `calc(40px + ${textX.value}px)`;

    posterText.style.top =
        `calc(40px + ${textY.value}px)`;

    posterText.style.fontSize =
        `${textSize.value}px`;
}


// --------------------------------
// TEXT CONTROLS
// --------------------------------

textInput.addEventListener("input", function () {

    posterText.textContent = textInput.value;

});

textColor.addEventListener("input", function () {

    posterText.style.color = textColor.value;

});

backgroundColor.addEventListener("input", function () {

    poster.style.backgroundColor = backgroundColor.value;

});

textX.addEventListener("input", updateText);

textY.addEventListener("input", updateText);

textSize.addEventListener("input", updateText);


// --------------------------------
// IMAGE FUNCTION
// --------------------------------

function updateImage() {

    posterImage.style.left =
        `calc(50% + ${xPosition.value}px)`;

    posterImage.style.top =
        `calc(50% + ${yPosition.value}px)`;

    posterImage.style.transform =
        `translate(-50%, -50%)
         rotate(${rotation.value}deg)
         skewX(${skewX.value}deg)
         skewY(${skewY.value}deg)
         scale(${scale.value})`;
}


// --------------------------------
// IMAGE CONTROLS
// --------------------------------

xPosition.addEventListener("input", updateImage);

yPosition.addEventListener("input", updateImage);

rotation.addEventListener("input", updateImage);

skewX.addEventListener("input", updateImage);

skewY.addEventListener("input", updateImage);

scale.addEventListener("input", updateImage);


// --------------------------------
// SHAPE FUNCTION
// --------------------------------

function updateShape() {

    shape.style.left =
        `calc(50% + ${shapeX.value}px)`;

    shape.style.top =
        `calc(50% + ${shapeY.value}px)`;

    shape.style.transform =
        `translate(-50%, -50%)
         rotate(${shapeRotation.value}deg)
         scale(${shapeScale.value})`;
}


// --------------------------------
// SHAPE CONTROLS
// --------------------------------

shapeX.addEventListener("input", updateShape);

shapeY.addEventListener("input", updateShape);

shapeRotation.addEventListener("input", updateShape);

shapeScale.addEventListener("input", updateShape);

shapeColor.addEventListener("input", function () {

    shape.style.backgroundColor = shapeColor.value;

});


// --------------------------------
// INITIALIZE
// --------------------------------

updateText();

updateImage();

updateShape();