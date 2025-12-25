// Ignite Belize - Shared Navigation Component
// Update this file once to update navigation across all pages

document.addEventListener('DOMContentLoaded', function() {
    // Insert Header
    const headerHTML = `
    <header>
        <nav>
            <div class="logo-container">
                <a href="index.html" style="display: flex; align-items: center; text-decoration: none;">
                    <div class="logo-icon">
                        <img src="logo.png" alt="Ignite Movement Logo" style="width: 100%; height: 100%; object-fit: contain;" />
                    </div>
                </a>
            </div>
            
            <!-- Desktop Navigation -->
            <ul class="nav-links desktop-nav">
                <li><a href="index.html#main-programs">How We Impact</a></li>
                <li class="nav-item"><a href="about-us.html">Who We Are</a>
                    <div class="dropdown">
                        <a href="statement-of-faith.html">Statement of Faith</a>
                    </div>
                </li>
                <li><a href="donate.html">Donate</a></li>
                <li><a href="index.html#contact">Contact Us</a></li>
            </ul>
            
            <!-- Mobile Menu Toggle -->
            <button class="menu-toggle" id="menuToggle" type="button" aria-label="Toggle menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </nav>
    </header>

    <!-- Mobile Navigation Overlay -->
    <div class="nav-overlay" id="navOverlay">
        <div class="nav-overlay-content">
            <ul class="nav-links">
                <li><a href="index.html#main-programs">How We Impact</a></li>
                <li><a href="about-us.html">Who We Are</a></li>
                <li><a href="statement-of-faith.html">Statement of Faith</a></li>
                <li><a href="donate.html">Donate</a></li>
                <li><a href="index.html#contact">Contact Us</a></li>
            </ul>
        </div>
    </div>
    `;

    // Insert Footer
    const footerHTML = `
    <footer>
        <div class="container">
            <div class="footer-links">
                <a href="index.html">Home</a>
                <a href="about-us.html">About Us</a>
                <a href="statement-of-faith.html">Statement of Faith</a>
                <a href="donate.html">Donate</a>
                <a href="index.html#contact">Contact</a>
            </div>
            <p style="opacity: 0.7;">© 2024 Ignite Movement Belize. All rights reserved.</p>
            <p style="margin-top: 15px; opacity: 0.7;">📍 Spanish Lookout, Belize</p>
        </div>
    </footer>
    `;

    // Insert header at the beginning of body
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = headerHTML;
    }

    // Insert footer at the end of body
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;
    }

    // Initialize menu toggle functionality
    const menuToggle = document.getElementById('menuToggle');
    const navOverlay = document.getElementById('navOverlay');
    const body = document.body;

    if (menuToggle && navOverlay) {
        menuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            menuToggle.classList.toggle('active');
            navOverlay.classList.toggle('active');
            body.classList.toggle('nav-open');
        });

        const overlayLinks = navOverlay.querySelectorAll('a');
        overlayLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navOverlay.classList.remove('active');
                body.classList.remove('nav-open');
            });
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});
