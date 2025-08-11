const slides = document.querySelectorAll('.slider img');
  let currentIndex = 0;
  let autoSlideInterval = setInterval(nextSlide, 5000); // auto-slide every 5s

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      slide.style.left = '100%';
      slide.style.opacity = '0';
    });
    slides[index].classList.add('active');
    slides[index].style.left = '0';
    slides[index].style.opacity = '1';
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  // Add event listeners to buttons
  document.querySelector('.next').addEventListener('click', () => {
    nextSlide();
    resetInterval();
  });

  document.querySelector('.prev').addEventListener('click', () => {
    prevSlide();
    resetInterval();
  });

  function resetInterval() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(nextSlide, 5000);
  }

  // Initialize first slide
  showSlide(currentIndex);
  


  document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const answer = button.nextElementSibling;
      const isOpen = answer.style.display === 'block';

      // Close all answers
      document.querySelectorAll('.faq-answer').forEach(ans => ans.style.display = 'none');

      // Toggle the clicked one
      answer.style.display = isOpen ? 'none' : 'block';
    });
  });
 
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
 src="https://unpkg.com/aos@2.3.1/dist/aos.js">

  AOS.init();



