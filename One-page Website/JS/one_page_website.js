window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.remove('fade-out');
});

// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  // Close the Modal
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }

  // Form validation 
  function validateForm() {
    let a = document.forms['contactForm']['fname'].value;
    if (a == "") {
      alert("First name must be filled out!");
      return false;
    }

    let b = document.forms['contactForm']['lname'].value;
    if (b == "") {
      alert("Last name must be filled out!");
      return false;
    }

    let c = document.forms['contactForm']['email'].value;
    if (c == "") {
      alert("Email name must be filled out!");
      return false;
    }

    let d = document.forms['contactForm']['phonenum'].value;
    if (d == "") {
      alert("Phone number must be filled out!");
      return false;
    }
  }

// Login Form Functions
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

// Slideshow 
$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
}, 3000);