const smoothScrollLinks = document.querySelectorAll('a[href^="#"]'); 

smoothScrollLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); 
    const targetId = this.getAttribute('href'); 
    const targetElement = document.querySelector(targetId); 

    targetElement.scrollIntoView({
      behavior: 'smooth'
    });
  });
});


const fadeInElements = document.querySelectorAll('.fade-in');

const fadeInOnScroll = () => {
    fadeInElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;
  
      if (elementTop < viewportHeight - 50) { 
        element.classList.add('visible');
      }  
    }); 
  };


window.addEventListener('scroll', fadeInOnScroll);


fadeInOnScroll();
