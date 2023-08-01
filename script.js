
const pButton = document.getElementById('p-button');
const imgButton = document.getElementById('img-button');
const pDiv = document.getElementById('p-div');
const imgDiv = document.getElementById('img-div');


pButton.addEventListener('click', function () {

    pDiv.style.display = 'block';
    imgDiv.style.display = 'none';
  

  const newParagraph = document.createElement('p');
  newParagraph.textContent = 'Hey Yall';
  pDiv.appendChild(newParagraph);
});

imgButton.addEventListener('click', function () {

    imgDiv.style.display = 'block';
    pDiv.style.display = 'none';
  

  const newImage = document.createElement('img');
  newImage.src = 'tula.png'; 
  newImage.alt = 'Your image description'; 
  imgDiv.appendChild(newImage);
});
