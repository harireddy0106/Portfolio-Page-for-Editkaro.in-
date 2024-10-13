// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    /* Hamburger Menu Toggle */
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeMenu = document.querySelector('.close-modal'); // Reuse close button
  
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.add('active');
    });
  
    // Close mobile menu when clicking outside or on a link
    mobileMenu.addEventListener('click', (e) => {
      if (e.target.classList.contains('mobile-menu') || e.target.tagName === 'A') {
        mobileMenu.classList.remove('active');
      }
    });
  
    /* Portfolio Filtering */
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
  
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to the clicked button
        button.classList.add('active');
  
        const category = button.getAttribute('data-category');
  
        portfolioItems.forEach(item => {
          if (category === 'all' || item.getAttribute('data-category') === category) {
            item.style.display = 'block';
            item.classList.add('animate');
          } else {
            item.style.display = 'none';
            item.classList.remove('animate');
          }
        });
      });
    });
  
    /* Modal Video Preview */
    const modal = document.getElementById('video-modal');
    const modalVideo = document.getElementById('modal-video');
    const closeModalBtn = document.querySelector('.close-modal');
    const playIcons = document.querySelectorAll('.play-icon');
  
    playIcons.forEach(icon => {
      icon.addEventListener('click', () => {
        const videoSrc = icon.getAttribute('data-video') + "?autoplay=1";
        modalVideo.src = videoSrc;
        modal.style.display = 'block';
      });
    });
  
    closeModalBtn.addEventListener('click', () => {
      modal.style.display = 'none';
      modalVideo.src = "";
    });
  
    // Close modal when clicking outside the video
    window.addEventListener('click', (e) => {
      if (e.target == modal) {
        modal.style.display = 'none';
        modalVideo.src = "";
      }
    });
  });

  // JavaScript for Filter Buttons
document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  // Function to filter portfolio items
  function filterPortfolio(category) {
    portfolioItems.forEach(item => {
      const itemCategory = item.getAttribute('data-category');
      if (category === 'all' || itemCategory === category) {
        item.style.display = 'block'; // Show the item
      } else {
        item.style.display = 'none'; // Hide the item
      }
    });
  }

  // Add event listeners to filter buttons
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove 'active' class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      // Add 'active' class to the clicked button
      button.classList.add('active');

      // Get the category to filter by
      const category = button.getAttribute('data-category');
      filterPortfolio(category);
    });
  });

  // Initialize the portfolio by showing all items
  filterPortfolio('all');
});


(function(){
  emailjs.init("PHoUme2S2UVEz7CPZ"); // Your EmailJS User ID
})();

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("contact-form").addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form from submitting traditionally

      var templateParams = {
          from_name: event.target.name.value,
          from_email: event.target.email.value,
          subject: event.target.subject.value,
          message: event.target.message.value
      };

      emailjs.send("service_3jwr8mj", "template_op7t8sl", templateParams)
          .then(function(response) {
              console.log("SUCCESS!", response.status, response.text);
              alert("Message sent successfully!");
              location.reload(); // Refresh the page
          }, function(error) {
              console.log("FAILED...", error);
              alert("Failed to send message. Please try again.");
          });
  });
});


  