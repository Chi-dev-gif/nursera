 /*****************************TESTIMONIAL Slide************************/ 
 let currentIndex = 0;
const slides = document.querySelectorAll('.testimonial-content');
const totalSlides = slides.length;

function showSlide(index) {
  
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${(i - currentIndex) * 100}%)`;
    });
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Auto slide every 5 seconds
setInterval(() => {
    nextSlide();
}, 5000);

// Initial display
showSlide(currentIndex); 

/**************************Get menu elements***************************/ 
const menu = document.getElementById('menu');
const openMenuBtn = document.getElementById('openMenuBtn');
const closeMenuBtn = document.getElementById('closeMenuBtn');


//Open menu function
  openMenuBtn.addEventListener('click', () => {
    menu.classList.add('open');
  });



 //Close menu function
  closeMenuBtn.addEventListener('click', () => {
    menu.classList.remove('open');
  });


/*****************************FORM***********************************/
const scriptURL = "https://script.google.com/macros/s/AKfycbyD3HwDCeVhINwSvTqYpXDkhL6C8f9YpSXk7PF_BEcJ30DGaY40GhzMD0qcFFwPKzFo/exec";

function booking(){
  const form = document.forms["contact-form"];


  form.addEventListener("submit", e => {
    e.preventDefault();
    //capture the html elements
    const name = document.getElementById("client-name").value.trim();
    const email = document.getElementById("client-email").value.trim();
    const service = document.getElementById("client-service").value.trim();
    const message = document.getElementById("client-message").value.trim();

    if (!name || !email || !service || !message) {
        alert("Please fill in all required fields!");
        return;
      }

    e.preventDefault();  
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank you! Your Form is submitted successfully."))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message));
  })
}

/************************About Section/Progress Bar************************/ 
function updateProgress(barId, percentageId, value) {
  const bar = document.getElementById(barId);
  const percentage = document.getElementById(percentageId);
  bar.style.width =value + '%';
  percentage.textContent = value + '%';
}

// Set progress values
updateProgress('home-progress', 'home-percentage', 90);
updateProgress('senior-progress', 'senior-percentage', 86);
