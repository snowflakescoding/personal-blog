document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Mobile Menu Toggle ---
    const menuToggle = document.querySelector('#mobile-menu');
    const navList = document.querySelector('nav ul');

    if (menuToggle && navList) {
        menuToggle.addEventListener('click', () => {
            // Toggle the .active class on the ul to show/hide it
            navList.classList.toggle('active');
        });
    }

    // --- 2. Auto-Close Menu on Link Click (Mobile UX) ---
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Only close if we are on a small screen
            if (window.innerWidth <= 768) {
                navList.classList.remove('active');
            }
        });
    });

    // --- 3. Smooth Scrolling with Header Offset ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Header height offset (approx 80px)
                const headerOffset = 80; 
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // --- 4. Console Greeting ---
    console.log("Welcome to my personal website! Built with HTML, CSS, and JS.");
});