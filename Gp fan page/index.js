document.addEventListener("DOMContentLoaded", () => {
    // Sticky Navbar s promenom boje prilikom skrolovanja
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Slider funkcionalnost
    const slides = document.querySelectorAll('.slide');
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Automatsko prebacivanje slika na svakih 5 sekundi
    setInterval(nextSlide, 5000);

    // Prikazivanje moda za detalje trkača ili staza
    const modal = document.querySelector('.modal');
    const modalContent = document.querySelector('.modal-content');
    const closeModalBtn = document.querySelector('.close-modal');

    document.querySelectorAll('.card .btn-secondary').forEach(button => {
        button.addEventListener('click', (event) => {
            const racerName = event.target.closest('.card').querySelector('h3').textContent;
            showModal(`Detalji o trkaču: ${racerName}`);
        });
    });

    function showModal(content) {
        modalContent.innerHTML = `<p>${content}</p>`;
        modal.style.display = 'block';
    }

    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Animirani prikaz elemenata prilikom skrolovanja
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            } else {
                entry.target.classList.remove('fade-in');
            }
        });
    });

    animatedElements.forEach(element => observer.observe(element));
});
