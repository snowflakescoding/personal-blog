document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Navigation Active State (For Multi-Page) ---
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        // Check if the link href matches the current file name
        if(link.href.includes(currentLocation) && currentLocation !== '/') {
            link.classList.add('current-page');
        }
        // Special case for root/index
        if (currentLocation === '/' && link.getAttribute('href') === 'index.html') {
             link.classList.add('current-page');
        }
    });

    // --- 2. Mobile Menu Toggle ---
    const menuToggle = document.querySelector('#mobile-menu');
    const navList = document.querySelector('nav ul');

    if (menuToggle && navList) {
        menuToggle.addEventListener('click', () => {
            navList.classList.toggle('active');
            menuToggle.classList.toggle('active'); 
        });
    }

    // --- 3. Random Quote Generator ---
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

    // --- 4. Dark Mode Toggle ---
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.body.classList.add(currentTheme);
        if (currentTheme === 'dark-mode') {
            toggleSwitch.checked = true;
        }
    }

    function switchTheme(e) {
        if (e.target.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light-mode');
        }
    }

    if (toggleSwitch) {
        toggleSwitch.addEventListener('change', switchTheme, false);
    }

    console.log("Welcome to SnowFlakes' Blog!");
});