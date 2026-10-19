function pickImage() {
  const options = ["img1.jpg", "img2.jpg", "img3.jpg"];

  const randomIndex = Math.floor(Math.random() * options.length);

  const randomImg = "img/" + options[randomIndex];

  const img = document.querySelector("#header_image");

  img.setAttribute("src", randomImg);
}
function RandomImage() {
  const options = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg",
    "img5.jpg",
    "img6.jpg",
    "img7.jpg",
    "img8.jpg",
  ];

  const currentImages = document.querySelectorAll("#StorageImg img");

  console.log("Total images:", currentImages.length);

  for (let i = 0; i < currentImages.length; i++) {
    const randomIndex = Math.floor(Math.random() * options.length);

    const randomImg = "img/" + options[randomIndex];

    currentImages[i].setAttribute("src", randomImg);

    console.log("Image", i + 1, "changed to:", randomImg);
  }
}
