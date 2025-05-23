// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Update current time
    updateCurrentTime();
    // Update time every second
    setInterval(updateCurrentTime, 1000);
    
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Add hover effects to cards programmatically
    const cards = document.querySelectorAll('.glass-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 8px 32px 0 rgba(31, 38, 135, 0.5)';
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 8px 32px 0 rgba(31, 38, 135, 0.37)';
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Logout button functionality
    const logoutBtn = document.querySelector('.logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // Add your logout logic here
            //alert('Logout functionality will be implemented here');
            window.location.href = './login.html';
        });
    }
    
    // Explore button functionality
    const exploreBtn = document.querySelector('.explore-btn');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', function() {
            // Add navigation to places page
            alert('Navigating to Municipal Hall details');
            // window.location.href = 'places.html#municipal-hall';
        });
    }
});

// Function to update current time
function updateCurrentTime() {
    const now = new Date();
    const timeElement = document.getElementById('current-time');
    
    if (timeElement) {
        // Format time as HH:MM:SS AM/PM
        let hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        
        hours = hours % 12;
        hours = hours ? hours : 12; // Convert 0 to 12
        
        timeElement.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
    }
}

// Function to handle scroll effects (can be expanded)
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const nav = document.querySelector('.glass-nav');
    
    if (scrollPosition > 50) {
        nav.style.backdropFilter = 'blur(15px)';
        nav.style.backgroundColor = 'rgba(26, 115, 232, 0.3)';
    } else {
        nav.style.backdropFilter = 'blur(10px)';
        nav.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
    }
});

// Function to handle responsive menu (can be expanded for mobile menu)
function setupMobileMenu() {
    const mobileBreakpoint = 768;
    const navLinks = document.querySelector('.nav-links');
    
    if(!navLinks) return;

    function checkScreenSize() {
        if (window.innerWidth <= mobileBreakpoint) {
            // Add mobile menu functionality here if needed
        } else {
            // Ensure desktop menu is visible
            navLinks.style.display = 'flex';
        }
    }
    
    // Initial check
    checkScreenSize();
    
    // Check on resize
    window.addEventListener('resize', checkScreenSize);
}

// Initialize mobile menu setup
setupMobileMenu();