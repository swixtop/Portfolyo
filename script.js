// Add event listeners when the DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get all buttons
    const buttons = document.querySelectorAll('.button, .evaluate-button');
  
    // Add event listeners to each button
    buttons.forEach(function(button) {
      // Add hover effect
      button.addEventListener('mouseenter', function() {
        button.classList.add('button-hovered');
      });
  
      button.addEventListener('mouseleave', function() {
        button.classList.remove('button-hovered');
      });
  
      // Add page transition effect
      button.addEventListener('click', function(event) {
        event.preventDefault();
        const target = this.getAttribute('href');
  
        document.body.classList.add('page-transition');
  
        setTimeout(function() {
          window.location.href = target;
        }, 500); // Adjust the transition duration as needed
      });
    });
  });
  