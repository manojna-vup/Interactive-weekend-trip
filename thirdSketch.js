
const phrase1 = document.getElementById('phrase1');
const phrase2 = document.getElementById('phrase2');
const phrase3 = document.getElementById('phrase3');
const phrase4 = document.getElementById('phrase4');
const phrase5 = document.getElementById('phrase5');
const phrase6 = document.getElementById('phrase6');
const phrase7 = document.getElementById('phrase7');
const phrase8 = document.getElementById('phrase8');
const phrase9 = document.getElementById('phrase9');
const messageContainer = document.getElementById('messageContainer');
const receivedMessages = document.querySelectorAll('.received');
const sentMessages = document.querySelectorAll('.sent');


function showNextPhrase(currentPhrase, nextPhrase, position) {
  currentPhrase.style.opacity = 0;
  nextPhrase.style.opacity = 1;
  nextPhrase.style.top = position.top;
  nextPhrase.style.left = position.left;
  nextPhrase.style.position = 'absolute';  
}


function showMessages() {
  let delay = 500;
  setTimeout(() => {
    receivedMessages[0].style.opacity = 1;  
  }, delay);
  
  delay += 1000;  
  
  setTimeout(() => {
    sentMessages[0].style.opacity = 1;  
  }, delay);

  delay += 1000;  
  
  setTimeout(() => {
    receivedMessages[1].style.opacity = 1;  
  }, delay);
}


phrase1.addEventListener('click', function() {
  showNextPhrase(phrase1, phrase2, { top: '10%', left: '80%' });
  document.body.style.backgroundColor = '#d7cd62';
  phrase2.style.color = '#4d6c40';

});

phrase2.addEventListener('click', function() {
  showNextPhrase(phrase2, phrase3, { top: '80%', left: '80%' });
  document.body.style.backgroundColor = '#bcd7ea';
  phrase3.style.color = '#4d6c40';
});

phrase3.addEventListener('click', function() {
  showNextPhrase(phrase3, phrase4, { top: '45%', left: '40%' });
  showNextPhrase(phrase3, phrase5, { top: '30%', left: '60%' });
  phrase5.style.opacity = 1;
  document.body.style.backgroundColor = '#ebe9e1';
});

phrase5.addEventListener('dragstart', function(e) {
  e.dataTransfer.setData('text', e.target.id);
  e.target.classList.add('dragging');
});

phrase5.addEventListener('dragend', function(e) {
  e.target.classList.remove('dragging');
});

document.addEventListener('dragover', function(e) {
  e.preventDefault();
});

document.addEventListener('drop', function(e) {
  e.preventDefault();
  const data = e.dataTransfer.getData('text');
  const droppedElement = document.getElementById(data);
  if (droppedElement === phrase5) {
    droppedElement.style.position = 'absolute';
    droppedElement.style.top = `${phrase4.offsetTop}px`;
    droppedElement.style.left = `${phrase4.offsetLeft + phrase4.offsetWidth + 2}px`;

    phrase6.style.opacity = 1;
    phrase6.style.color = '#ebe9e1';
    phrase6.style.top = '5%';
    phrase6.style.left = '5%';
    document.body.style.backgroundColor = '#d65d63';

    phrase4.style.opacity = 0;
    phrase5.style.opacity = 0;
  }
});

phrase6.addEventListener('click', function(event) {
  event.stopPropagation();
  showNextPhrase(phrase6, phrase7, { top: '5%', left: '40%' });
  document.body.style.backgroundColor = '#ebe9e1';
  phrase7.style.color = '#d65d63';
});

phrase7.addEventListener('click', function(event) {
  event.stopPropagation();
  showNextPhrase(phrase7, phrase8, { top: '5%', left: '70%' });
  document.body.style.backgroundColor = '#bcd7ea';
  phrase8.style.color = '#e43d12';
});

phrase8.addEventListener('click', function(event) {
  event.stopPropagation();
  showNextPhrase(phrase8, phrase9, { top: '10%', left: '5%' });
  phrase9.style.color = '#4d6c40';
  
});

let phrase9ClickedOnce = false;

phrase9.addEventListener('click', function() {
  if (!phrase9ClickedOnce) {
    messageContainer.style.opacity = 1;
    showMessages();
    phrase9ClickedOnce = true;
  } else {
    phrase10.style.opacity = 1;
    phrase10.style.top = '15%';
    phrase10.style.left = '5%';
    document.body.style.backgroundColor = '#ebe9e1';
  phrase10.style.color = '#d65d63';
    messageContainer.style.opacity = 0;
    phrase9.style.opacity = 0;
  }
});

let ithacaImage, originalImage;
let imageContainer; 
let phrase10Clicked = false;

function preload() {
  originalImage = loadImage('IMG_0518.jpeg');  
}

function setup() {
 
}

function draw() {
  
  if (ithacaImage) {
    let cursorRadius = 10;
    let cx = mouseX;
    let cy = mouseY;
    let imgSection = originalImage.get(cx - cursorRadius, cy - cursorRadius, cursorRadius * 2, cursorRadius * 2);

    imageMode(CENTER);
    image(imgSection, cx, cy);
  }
}

function showImage() {
  
  if (!imageContainer) {
    imageContainer = document.createElement('div');
    imageContainer.id = 'imageContainer';
    document.body.appendChild(imageContainer);

    const canvas = createCanvas(600, 400);
    canvas.parent(imageContainer); 
    imageContainer.style.position = 'absolute';
    imageContainer.style.top = '50%';
    imageContainer.style.left = '50%';
    imageContainer.style.transform = 'translate(-50%, -50%)'; 

    
    originalImage.resize(600, 0);
    ithacaImage = originalImage.get();
    ithacaImage.resize(600, 0);
    ithacaImage.filter(INVERT);
    pixelDensity(1);
    ithacaImage.loadPixels();
  
    let pixelSize = 10;
    for (let x = 0; x < ithacaImage.width; x += pixelSize) {
      for (let y = 0; y < ithacaImage.height; y += pixelSize) {
        let r = 0, g = 0, b = 0;
        let count = 0;
        for (let px = x; px < x + pixelSize && px < ithacaImage.width; px++) {
          for (let py = y; py < y + pixelSize && py < ithacaImage.height; py++) {
            let i = (px + py * ithacaImage.width) * 4;
            r += ithacaImage.pixels[i];
            g += ithacaImage.pixels[i + 1];
            b += ithacaImage.pixels[i + 2];
            count++;
          }
        }
        r = r / count;
        g = g / count;
        b = b / count;
        fill(r, g, b);
        noStroke();
        rect(x, y, pixelSize, pixelSize);
      }
    }
    canvas.mousePressed(triggerPhrase11);
  }
}
function triggerPhrase11() {
  
  let phrase11 = document.getElementById('phrase11');
  phrase11.style.opacity = 1;
  phrase11.style.top = '80%';
  phrase11.style.left = '32.5%';
  phrase11.style.position = 'absolute';
  phrase11.style.color = '#ebe9e1';
}

let phrase10 = document.getElementById('phrase10');

phrase10.addEventListener('click', function() {
  if (!phrase10Clicked) {
    showImage(); 
    phrase10Clicked = true;
    phrase10.style.opacity = 0; 
  document.body.style.backgroundColor = '#943E82';
  
  }
});
