

const topColorElement = document.getElementById('top-color');
const bottomColorElement = document.getElementById('bottom-color');

const userInput = document.getElementById('user-input');
const renameButton = document.getElementById('rename-button');
const realName = document.getElementById('real-name');

const fontChoice = document.getElementById('fonts');



renameButton.addEventListener('click', () => {

    const newName = userInput.value;

    topColorElement.style.background = 'orange';
    bottomColorElement.style.background = 'orange';

    realName.textContent = userInput.value;

    realName.style.fontFamily = fonts.value;



});


//  mainAreaElement.style.backgroundImage = 'url("https://d2j8c2rj2f9b78.cloudfront.net/uploads/poster-images/ONLYINCLT_MINE.jpg")';