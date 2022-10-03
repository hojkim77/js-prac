const images = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg"];

const chosenimg = images[Math.floor(Math.random() * images.length)];

const bgimg = document.createElement("img");

bgimg.src = `img/${chosenimg}`;

document.body.appendChild(bgimg);