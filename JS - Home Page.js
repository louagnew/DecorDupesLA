$(document).ready(function () {

  $("#carousel").carousel();


  function slideCarousel() {

    var activeSlide = $("#carousel .carousel-item.active");

    
    activeSlide.fadeOut(1000, function () {
      
      activeSlide.removeClass("active");

      
      var nextSlide = activeSlide.next(".carousel-item");
      if (nextSlide.length === 0) {
        
        nextSlide = $("#carousel .carousel-item").first();
      }
      nextSlide.addClass("active");

      
      nextSlide.fadeIn(1000);
    });
  }

  
  setInterval(slideCarousel, 7000);
});
