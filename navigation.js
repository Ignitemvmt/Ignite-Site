/**
 * Ignite Belize — navigation.js
 * Injects header, footer, modals, and all nav styles globally
 * Works with nav-styles.css on every page
 */

(function() {
    // CSS styles for nav, footer, and modals
    const styles = `
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --paper: #f1ece1;
            --paper-2: #e8e1d2;
            --ink: #14110d;
            --ink-soft: #2a251e;
            --ink-dim: #6b6356;
            --ink-faint: #a39a87;
            --ember: #c8a439;
            --ember-bright: #e8c050;
            --line: rgba(20, 17, 13, 0.12);
            --line-strong: rgba(20, 17, 13, 0.24);
            --display: 'Anton', Impact, sans-serif;
            --body: 'Inter', system-ui, sans-serif;
            --mono: 'JetBrains Mono', 'Courier New', monospace;
            --hand: 'Caveat', cursive;
            --serif-it: 'Playfair Display', serif;
        }

        /* HEADER STYLES */
        .ignite-header {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            height: 72px;
            background: var(--paper);
            border-bottom: 1px solid var(--line-strong);
            z-index: 9998;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 32px;
        }

        @media (max-width: 700px) {
            .ignite-header {
                height: 64px;
                padding: 0 20px;
            }
        }

        .ignite-header-logo {
            display: flex;
            align-items: center;
            text-decoration: none;
            height: 100%;
        }

        .ignite-header-logo img {
            height: 40px;
            width: auto;
            display: block;
        }

        @media (max-width: 700px) {
            .ignite-header-logo img {
                height: 32px;
            }
        }

        .ignite-header-logo-text {
            font-family: var(--display);
            font-size: 1.4rem;
            color: var(--ink);
            text-decoration: none;
            letter-spacing: -0.01em;
            font-weight: 700;
        }

        .ignite-nav-links {
            display: flex;
            gap: 24px;
            align-items: center;
            height: 100%;
        }

        .ignite-nav-links a {
            font-family: var(--body);
            font-size: 0.95rem;
            color: var(--ink);
            text-decoration: none;
            font-weight: 500;
            transition: color 0.2s ease;
            display: flex;
            align-items: center;
            height: 100%;
        }

        .ignite-nav-links a:hover {
            color: var(--ember);
        }

        .ignite-nav-links a.active {
            color: var(--ember);
            border-bottom: 2px solid var(--ember);
        }

        .ignite-nav-cta {
            display: flex;
            gap: 12px;
            align-items: center;
            height: 100%;
        }

        .ignite-nav-cta a {
            font-family: var(--mono);
            font-size: 0.72rem;
            letter-spacing: 0.2em;
            text-transform: uppercase;
            color: var(--ink);
            text-decoration: none;
            padding: 8px 16px;
            border: 1px solid var(--ink);
            transition: all 0.2s ease;
            font-weight: 600;
            display: flex;
            align-items: center;
            height: auto;
        }

        .ignite-nav-cta a:hover {
            background: var(--ink);
            color: var(--paper);
        }

        .ignite-nav-cta a.primary {
            background: var(--ember);
            color: var(--ink);
            border-color: var(--ember);
        }

        .ignite-nav-cta a.primary:hover {
            background: var(--ember-bright);
        }

        .ignite-menu-toggle {
            display: none;
            background: none;
            border: none;
            font-size: 1.5rem;
            color: var(--ink);
            cursor: pointer;
            flex-direction: column;
            gap: 6px;
            height: 100%;
            align-items: center;
            justify-content: center;
        }

        .ignite-menu-toggle span {
            display: block;
            width: 24px;
            height: 2px;
            background: var(--ink);
            transition: all 0.3s ease;
        }

        @media (max-width: 800px) {
            .ignite-nav-links {
                display: none;
            }

            .ignite-menu-toggle {
                display: flex;
            }
        }

        /* FOOTER STYLES */
        .ignite-footer {
            background: var(--ink);
            color: var(--paper);
            padding: 80px 32px 40px;
            margin-top: 140px;
        }

        @media (max-width: 700px) {
            .ignite-footer {
                padding: 60px 20px 32px;
                margin-top: 80px;
            }
        }

        .ignite-footer-container {
            max-width: 1320px;
            margin: 0 auto;
        }

        .ignite-footer-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 48px;
            margin-bottom: 60px;
        }

        @media (max-width: 1000px) {
            .ignite-footer-grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 32px;
            }
        }

        @media (max-width: 600px) {
            .ignite-footer-grid {
                grid-template-columns: 1fr;
                gap: 24px;
            }
        }

        .ignite-footer-col h4 {
            font-family: var(--display);
            font-size: 1.1rem;
            text-transform: uppercase;
            margin-bottom: 16px;
            color: var(--ember);
            letter-spacing: -0.01em;
        }

        .ignite-footer-col ul {
            list-style: none;
        }

        .ignite-footer-col ul li {
            margin-bottom: 12px;
        }

        .ignite-footer-col ul li a {
            color: rgba(241, 236, 225, 0.75);
            text-decoration: none;
            font-size: 0.95rem;
            transition: color 0.2s ease;
        }

        .ignite-footer-col ul li a:hover {
            color: var(--ember);
        }

        .ignite-footer-bottom {
            border-top: 1px solid var(--line-strong);
            padding-top: 32px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        @media (max-width: 600px) {
            .ignite-footer-bottom {
                flex-direction: column;
                gap: 16px;
                text-align: center;
            }
        }

        .ignite-footer-bottom p {
            font-size: 0.9rem;
            color: rgba(241, 236, 225, 0.6);
        }

        .ignite-footer-social {
            display: flex;
            gap: 16px;
        }

        .ignite-footer-social a {
            color: var(--paper);
            text-decoration: none;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(241, 236, 225, 0.3);
            border-radius: 50%;
            transition: all 0.2s ease;
            font-size: 1.1rem;
        }

        .ignite-footer-social a:hover {
            border-color: var(--ember);
            color: var(--ember);
        }

        /* MODAL STYLES */
        .ignite-modal-overlay {
            display: none;
            position: fixed;
            inset: 0;
            background: rgba(20, 17, 13, 0.5);
            z-index: 10000;
        }

        .ignite-modal-overlay.active {
            display: block;
        }

        .ignite-modal {
            display: none;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: var(--paper);
            z-index: 10001;
            border: 2px solid var(--ink);
            max-width: 500px;
            width: 90%;
            padding: 40px;
            max-height: 90vh;
            overflow-y: auto;
        }

        .ignite-modal.active {
            display: block;
        }

        .ignite-modal h2 {
            font-family: var(--display);
            font-size: 2rem;
            margin-bottom: 16px;
            color: var(--ink);
        }

        .ignite-modal p {
            color: var(--ink-soft);
            line-height: 1.6;
            margin-bottom: 16px;
        }

        .ignite-modal-close {
            position: absolute;
            top: 16px;
            right: 16px;
            background: none;
            border: none;
            font-size: 1.8rem;
            color: var(--ink);
            cursor: pointer;
        }
    `;

    // Inject styles
    function injectStyles() {
        const styleEl = document.createElement('style');
        styleEl.textContent = styles;
        document.head.appendChild(styleEl);
    }

    // Create and inject header
    function injectHeader() {
        const navRoot = document.getElementById('ignite-nav-root');
        if (!navRoot) return;

        const header = document.createElement('header');
        header.className = 'ignite-header';
        header.innerHTML = `
            <a href="index.html" class="ignite-header-logo">
                <img src="Ignite-Logo-New-White.png" alt="Ignite Belize" style="height: 40px; width: auto;">
            </a>
            <nav class="ignite-nav-links">
                <a href="index.html">Home</a>
                <a href="about-us.html">About</a>
                <a href="statement-of-faith.html">Faith</a>
                <a href="donate.html">Donate</a>
            </nav>
            <div class="ignite-nav-cta">
                <a href="mailto:info@ignitebelize.org">Contact</a>
            </div>
            <button class="ignite-menu-toggle" aria-label="Toggle menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
        `;
        navRoot.appendChild(header);
    }

    // Create and inject footer
    function injectFooter() {
        const footerRoot = document.getElementById('ignite-footer-root');
        if (!footerRoot) return;

        const footer = document.createElement('footer');
        footer.className = 'ignite-footer';
        footer.innerHTML = `
            <div class="ignite-footer-container">
                <div class="ignite-footer-grid">
                    <div class="ignite-footer-col">
                        <h4>About</h4>
                        <ul>
                            <li><a href="about-us.html">Who We Are</a></li>
                            <li><a href="statement-of-faith.html">Statement of Faith</a></li>
                            <li><a href="index.html#programs">Our Programs</a></li>
                        </ul>
                    </div>
                    <div class="ignite-footer-col">
                        <h4>Get Involved</h4>
                        <ul>
                            <li><a href="donate.html">Donate</a></li>
                            <li><a href="mailto:info@ignitebelize.org">Reach Out</a></li>
                            <li><a href="index.html">Events</a></li>
                        </ul>
                    </div>
                    <div class="ignite-footer-col">
                        <h4>Location</h4>
                        <ul>
                            <li>Spanish Lookout</li>
                            <li>Cayo District</li>
                            <li>Belize</li>
                        </ul>
                    </div>
                    <div class="ignite-footer-col">
                        <h4>Connect</h4>
                        <ul>
                            <li><a href="mailto:info@ignitebelize.org">info@ignitebelize.org</a></li>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">Facebook</a></li>
                        </ul>
                    </div>
                </div>
                <div class="ignite-footer-bottom">
                    <p>&copy; 2026 Ignite Belize. All rights reserved. | <a href="#" style="color: rgba(241, 236, 225, 0.6); text-decoration: none;">Privacy</a></p>
                    <div class="ignite-footer-social">
                        <a href="#" title="Instagram">📱</a>
                        <a href="#" title="Facebook">f</a>
                        <a href="mailto:info@ignitebelize.org" title="Email">✉</a>
                    </div>
                </div>
            </div>
        `;
        footerRoot.appendChild(footer);
    }

    // Create and inject modal container
    function injectModal() {
        const modalRoot = document.getElementById('ignite-modal-root');
        if (!modalRoot) return;

        const overlay = document.createElement('div');
        overlay.className = 'ignite-modal-overlay';
        overlay.id = 'ignite-modal-overlay';

        const modal = document.createElement('div');
        modal.className = 'ignite-modal';
        modal.id = 'ignite-modal';
        modal.innerHTML = `
            <button class="ignite-modal-close" onclick="document.getElementById('ignite-modal-overlay').classList.remove('active'); document.getElementById('ignite-modal').classList.remove('active');">&times;</button>
            <h2 id="ignite-modal-title">Modal Title</h2>
            <div id="ignite-modal-content"></div>
        `;

        modalRoot.appendChild(overlay);
        modalRoot.appendChild(modal);

        // Close modal when overlay is clicked
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) {
                overlay.classList.remove('active');
                modal.classList.remove('active');
            }
        });
    }

    // Set active nav link
    function setActiveNav() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        document.querySelectorAll('.ignite-nav-links a').forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPage || (currentPage === '' && href === 'index.html')) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Initialize everything when DOM is ready
    function init() {
        injectStyles();
        injectHeader();
        injectFooter();
        injectModal();
        setActiveNav();
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
