// 1. Change the text of the heading with id 'main-heading'
const heading = document.getElementById('main-heading');
heading.textContent = 'Updated Main Heading';

// 2. Change the color of paragraphs with the class 'text-content'
const textContentParagraphs = document.getElementsByClassName('text-content');
for (let i = 0; i < textContentParagraphs.length; i++) {
    textContentParagraphs[i].style.color = 'blue';
}

// 3. Change the source of the image with id 'main-image'
const mainImage = document.getElementById('main-image');
mainImage.src = 'new-image.jpg';  // Change this to your new image path

// 4. Change the background color of the div with the class 'container'
const containerDiv = document.querySelector('.container');
containerDiv.style.backgroundColor = 'lightblue';

// 5. Change the text of all paragraphs inside the div with the class 'container'
const containerParagraphs = containerDiv.querySelectorAll('p');
containerParagraphs.forEach(paragraph => {
    paragraph.textContent = 'Updated text inside the container div.';
});
