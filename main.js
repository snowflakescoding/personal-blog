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

    // --- 4. Random Quote Generator ---
    const quotes = [
        { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
        { text: "Code is like humor. When you have to explain it, it’s bad.", author: "Cory House" },
        { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
        { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
        { text: "Make it work, make it right, make it fast.", author: "Kent Beck" },
        { text: "Programs must be written for people to read, and only incidentally for machines to execute.", author: "Harold Abelson" },
        { text: "It’s not a bug; it’s an undocumented feature.", author: "Anonymous" }
    ];

    const quoteElement = document.getElementById('quote-text');
    const authorElement = document.getElementById('quote-author');

    if (quoteElement && authorElement) {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteElement.textContent = `"${quotes[randomIndex].text}"`;
        authorElement.textContent = `- ${quotes[randomIndex].author}`;
    }

    // --- 5. Console Greeting ---
    console.log("Welcome to SnowFlakes' Personal Blog! Built with HTML, CSS, and JS.");
});