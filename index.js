let img = document.getElementById("img");
let loader = document.getElementById("loader");
let image = document.getElementById('brandLogo');

function hideLoaderShowImg() {
    img.style.opacity = 1;
    loader.style.opacity = 0;  
    if(image.src.includes("index")){
        image.style.opacity = 0;
    }else{
        image.style.opacity = 1;
    }
}

function hideImageShowLoader(){
    img.style.opacity = 0;
    loader.style.opacity = 1;
    image.style.opacity = 0;
}

function changeImageToBlue(){
    hideImageShowLoader();
    img.src = "./assets/Blue umbrella.png"; 
    setTimeout(hideLoaderShowImg, 1000);
    img.alt = "Blue Umbrella";
}

function changeImageToPink(){
    hideImageShowLoader();
    img.src = "./assets/Pink umbrella.png";
    setTimeout(hideLoaderShowImg, 1000);
    img.alt = "Pink Umbrella";
}

function changeImageToYellow(){
    hideImageShowLoader();
    img.src = "./assets/Yellow umbrella.png";
    setTimeout(hideLoaderShowImg, 1000);
    img.alt = "Yellow Umbrella"
}

function loadFile(event) {
    image.src= URL.createObjectURL(event.target.files[0]);
    image.style.opacity = 1;
};