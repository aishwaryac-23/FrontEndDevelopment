var thumbnails = document.querySelectorAll(".thumbnail"); //multiple img
var mainImage = document.querySelector("#main-image"); //Single img

//eventlistener - instead of main image the thumbnail image can be changed on click

for (var i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener("click", function () {
        mainImage.src = this.src
    });
}