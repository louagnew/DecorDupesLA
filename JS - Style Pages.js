// var myCarousel = document.querySelector('#myCarousel')
// var carousel = new bootstrap.Carousel(myCarousel, {
//   interval: 100000
// })

$('.carousel .carousel-item').each(function(){
    var minPerSlide = 4;
    var next = $(this).next();
    if (!next.length) {
    next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    
    for (var i=0;i<minPerSlide;i++) {
        next=next.next();
        if (!next.length) {
        	next = $(this).siblings(':first');
      	}
        
        next.children(':first-child').clone().appendTo($(this));
      }
});


document.addEventListener('DOMContentLoaded', function() {
    // Add an event listener to the form on submit
    const subscribeForm = document.getElementById('subscribeForm');
    subscribeForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      // Get the values entered in the form fields
      const email = document.getElementById('exampleInputEmail1').value;
      const name = document.getElementById('exampleInputName1').value;
  
      // Check if the email and name fields are not empty
      if (email.trim() !== '' && name.trim() !== '') {
        // If the fields are not empty, display the alert
        alert('Thank you for subscribing!');
        // Optionally, you can reset the form fields after successful submission
        subscribeForm.reset();
      } else {
        // If any of the fields are empty, display an error message
        alert('Please enter your email and name to subscribe.');
      }
    });
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  