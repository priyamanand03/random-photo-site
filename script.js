// Example: show a random photo each time
const photos = ["photo1.jpg", "photo2.jpg", "photo3.jpg"];
const randomPhoto = photos[Math.floor(Math.random() * photos.length)];
document.querySelector("img").src = randomPhoto;