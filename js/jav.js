/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}



        /* first carousel slidesshow */
        $('#carousel-1').carousel({
          
          // The amount of time to delay between automatically cycling an item. If false, carousel will not automatically cycle.
          interval: 500,

          // Pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on mouseleave.
          pause: "hover",
          
          // Whether the carousel should cycle continuously or have hard stops.
          wrap: true,
          
          // Whether the carousel should react to keyboard events.
          keyboard: true
        });
        
        /* second carousel slidesshow */
        $('#carousel-2').carousel({
          interval: 3000,
          wrap: true,
          keyboard: true
        });

        /* Third carousel slidesshow */
        $('#carousel-3').carousel({
          interval: 3000,
          wrap: true,
          keyboard: true
        });

        /* Fourth carousel slidesshow */
        $('#carousel-4').carousel({
          interval: 3000,
          wrap: true,
          keyboard: true
        });

        /* Fifth carousel slidesshow */
        $('#carousel-5').carousel({
          interval: 3000,
          wrap: true,
          keyboard: true
        });

        /* Sixth carousel slidesshow */
        $('#carousel-6').carousel({
          interval: 3000,
          wrap: true,
          keyboard: true
        });

        /* Seventh carousel slidesshow */
        $('#carousel-7').carousel({
          interval: 3000,
          wrap: true,
          keyboard: true
        });

        /* Eight carousel slidesshow */
        $('#carousel-8').carousel({
          interval: 3000,
          wrap: true,
          keyboard: true
        });

        /* Ninth carousel slidesshow */
        $('#carousel-9').carousel({
          interval: 3000,
          wrap: true,
          keyboard: true
        });

        /* Tenth carousel slidesshow */
        $('#carousel-10').carousel({
          interval: 3000,
          wrap: true,
          keyboard: true
        });

        /* Eleventh carousel slidesshow */
        $('#carousel-11').carousel({
          interval: 3000,
          wrap: true,
          keyboard: true
        });

        /* Twelveth carousel slidesshow */
        $('#carousel-12').carousel({
          interval: 3000,
          wrap: true,
          keyboard: true
        });

        /* Thirteenth carousel slidesshow */
        $('#carousel-13').carousel({
          interval: 3000,
          wrap: true,
          keyboard: true
        });

        /* fourteenth carousel slidesshow */
        $('#carousel-14').carousel({
          interval: 3000,
          wrap: true,
          keyboard: true
        });

        