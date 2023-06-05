let img = document.getElementById("img");
let loader = document.getElementById("loader");
let image = document.getElementById("brandLogo");
let input = document.getElementById("file-upload");
let label = document.getElementById("label");

function hideLoaderShowImg() {
  img.style.opacity = 1;
  loader.style.opacity = 0;
  if (image.src.includes("index")) {
    image.style.opacity = 0;
  } else {
    image.style.opacity = 1;
  }
}

function hideImageShowLoader() {
  img.style.opacity = 0;
  loader.style.opacity = 1;
  image.style.opacity = 0;
}

function changeImage(event) {
  let span = event.target.closest("span");

  if (event.target.tagName !== "SPAN") return;
  else changeSource(span);
}

function changeSource(span) {
  hideImageShowLoader();
  let id = span.getAttribute("id");
  id === "dot1"
    ? (img.src = "./assets/Blue umbrella.png")
    : id === "dot2"
    ? (img.src = "./assets/Pink umbrella.png")
    : (img.src = "./assets/Yellow umbrella.png");

  setTimeout(hideLoaderShowImg, 1000);
}

input.addEventListener("change", showFileName);

function showFileName(event) {
  image.src = URL.createObjectURL(event.target.files[0]);
  image.style.opacity = 1;
  let fileName = event.target.files[0].name;
  label.textContent = fileName;
}
