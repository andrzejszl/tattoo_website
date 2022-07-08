//parameytry

let activeElement = 0;
const animationTime = 4000;
//pobieramy 4 elementy
const colorImgHtml = document.querySelector('.color')
const grayImgHtml = document.querySelector('.grey')
const h1Html = document.querySelector('.member h1')
const h2Html = document.querySelector('.member h2')

//informacje o elementach podmienianych
const colorImages = ['img/s1.png', 'img/s2.png', 'img/s3.png'];
const grayImages = ['img/s1a.png', 'img/s2a.png', 'img/s3a.png'];
const names = ['Victoria Diaz', 'Mark Tom', 'John Casey'];
const professions = ['Owner', 'Barber #1', 'Barber #2'];

function changeElement() {
    activeElement++
    if (activeElement == colorImages.length) {
        activeElement = 0;
    }

    colorImgHtml.src = colorImages[activeElement];
    grayImgHtml.src = grayImages[activeElement];
    h1Html.textContent = names[activeElement];
    h2Html.textContent = professions[activeElement];

    if (activeElement == 2) {
        activeElement = -1;
    }
}

setInterval(changeElement, animationTime)