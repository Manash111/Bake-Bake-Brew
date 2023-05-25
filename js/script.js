//function showAlert() {
   // alert('Button clicked!');
  //}
  
  //const burgerMenu = document.querySelector('.burger-menu');
  //const navbar = document.querySelector('.navbar');
  //
  //burgerMenu.addEventListener('click', () => {
  //  navbar.classList.toggle('show'); /* Toggle the "show" class on the navbar */
  //})

  // JavaScript code to control the sliding testimonials

// Select the testimonial elements
const testimonialSlides = document.querySelectorAll('.testimonial-slide');

// Start index for the active slide
let slideIndex = 0;

// Function to show the next slide
function showNextSlide() {
  // Hide the current active slide
  testimonialSlides[slideIndex].classList.remove('active');
  
  // Update the slide index
  slideIndex = (slideIndex + 1) % testimonialSlides.length;
  
  // Show the next slide
  testimonialSlides[slideIndex].classList.add('active');
}

// Set the initial active slide
testimonialSlides[slideIndex].classList.add('active');

// Set an interval to automatically switch to the next slide every 3 seconds
setInterval(showNextSlide, 3000);
