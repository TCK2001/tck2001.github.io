window.addEventListener('DOMContentLoaded', function() {
    var accordion = document.querySelector('.accordion');
    accordion.style.display = 'none';
  });
  
  function toggleAccordion(index) {
    var panel = document.getElementsByClassName('accordion-panel')[index];
    panel.style.display = (panel.style.display === 'block') ? 'none' : 'block';
  }
  
  function toggleMenu() {
    var accordion = document.querySelector('.accordion');
    if (accordion.style.display === 'none') {
      accordion.style.display = 'block';
    } else {
      accordion.style.display = 'none';
    }
  }
