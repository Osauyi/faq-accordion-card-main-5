const faqHeaders = document.querySelectorAll('.subhead');


        (function() {

  var dropBtns = document.querySelectorAll('.headquestion');

  function closeOpenItems() {
      openMenus = document.querySelectorAll('.subtext');
      openMenus.forEach(function(menus) {
        menus.classList.remove('show');
      });  
  }

  dropBtns.forEach(function(btn) {

    btn.addEventListener('click', function(e) {
      var 
        dropContent = btn.querySelector('.subtext'),
        shouldOpen = !dropContent.classList.contains('show');
      e.preventDefault();
      
      faqHeaders.forEach(subhead => {
        subhead.style.fontWeight = "400"
      });
      e.target.style.fontWeight = "700";
        
      closeOpenItems();
      
      if (shouldOpen) {
        
        dropContent.classList.add('show');   
      
      }
      e.stopPropagation();
    });

  });

  window.addEventListener('click', function(event) {
    if (event.target != dropBtns) {
      closeOpenItems();
    }
  })

  })();

