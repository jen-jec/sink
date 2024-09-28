// Show or hide "Back to Top" button 
window.addEventListener('scroll', () => {
    const backToTopButton = document.getElementById('back-to-top');
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Scroll back to top when the "Back to Top" button is clicked
document.getElementById('back-to-top').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Toggle dark mode when the theme toggle button is clicked
document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var images = document.getElementsByClassName("zoom-img");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

for (let img of images) {
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}
