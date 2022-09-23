
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

        
      closeOpenItems();
      
      if (shouldOpen) {
        
        dropContent.classList.add('show');   
      //   for (i = 0; i < 6; i++)  {
      //   document.querySelector("h2").style.fontWeight = "700";[i] 
      //   console.log("suop")
      //  }
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

