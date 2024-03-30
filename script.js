// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission
document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault();
    
    let formData = new FormData(this);
    for (let entry of formData.entries()) {
        console.log(entry[0] + ': ' + entry[1]);
    }
    alert("Message sent successfully!");
    this.reset();
});
