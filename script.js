console.log("Portfolio Ready 🚀");

window.onload = function() {
    let modal = document.getElementById("modal");
    let img = document.getElementById("profilePic");
    let modalImg = document.getElementById("imgZoom");
    let close = document.querySelector(".close");

    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    }

    close.onclick = function() {
        modal.style.display = "none";
    }

    modal.onclick = function(e) {
        if (e.target !== modalImg) {
            modal.style.display = "none";
        }
    }
}