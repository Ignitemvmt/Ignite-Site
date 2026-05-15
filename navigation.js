(function () {

  var LOGO_URL = "https://raw.githubusercontent.com/Ignitemvmt/Ignite-Site/main/Ignite-Logo-New-White.png";

  var path = window.location.pathname;
  function active(href) {
    if (!href || href === '#') return false;
    if (href === 'index.html') return path === '/' || path === '' || /index\.html$/.test(path) || /\/$/.test(path);
    return path.indexOf(href.replace('.html','')) !== -1;
  }

  var links = [
    { label: 'Home',      href: 'index.html' },
    { label: 'About',     href: 'about-us.html' },
    { label: 'Contact',   href: 'contact.html' },
    { label: 'Volunteer', href: '#', onclick: 'openVolunteerModal();return false;' },
  ];

  var navLinkItems = links.map(function(l) {
    var ac = active(l.href) ? ' aria-current="page"' : '';
    var oc = l.onclick ? ' onclick="' + l.onclick + '"' : '';
    return '<li><a href="' + l.href + '"' + oc + ac + '>' + l.label + '</a></li>';
  }).join('');

  var navHTML = '<nav id="mainNav">' +
    '<a href="index.html" class="nav-brand">' +
      '<img src="' + LOGO_URL + '" alt="Ignite Belize" class="nav-logo-img">' +
    '</a>' +
    '<ul class="nav-links">' + navLinkItems +
      '<li><a href="https://ignitebelize.org/donate" class="cta">Donate</a></li>' +
    '</ul>' +
    '<button class="nav-toggle" id="navToggle" aria-label="Menu"><span></span><span></span><span></span></button>' +
  '</nav>' +
  '<div class="mobile-menu" id="mobileMenu">' +
    '<a href="index.html">Home</a>' +
    '<a href="about-us.html">About</a>' +
    '<a href="contact.html">Contact</a>' +
    '<a href="#" onclick="openVolunteerModal();return false;">Volunteer</a>' +
    '<a href="https://ignitebelize.org/donate">Donate</a>' +
  '</div>';

  var footerHTML = '<footer class="site-footer" id="siteFooter">' +
    '<div class="footer-inner">' +
      '<div class="footer-grid">' +
        '<div class="footer-brand">' +
          '<h3>Ignite <span class="footer-accent">Belize</span></h3>' +
          '<p>A 501(c)(3) faith-based Gen-Z movement raising up movement makers across Belize. In Belize as in heaven.</p>' +
        '</div>' +
        '<div class="footer-col">' +
          '<h4>// Explore</h4>' +
          '<ul>' +
            '<li><a href="index.html">Home</a></li>' +
            '<li><a href="about-us.html">About</a></li>' +
            '<li><a href="https://ignitebelize.org/donate">Donate</a></li>' +
          '</ul>' +
        '</div>' +
        '<div class="footer-col">' +
          '<h4>// Get Involved</h4>' +
          '<ul>' +
            '<li><a href="#" onclick="openVolunteerModal();return false;">Volunteer</a></li>' +
            '<li><a href="mailto:brent@ignitebelize.org">Contact Us</a></li>' +
          '</ul>' +
        '</div>' +
        '<div class="footer-col">' +
          '<h4>// Connect</h4>' +
          '<ul>' +
            '<li><a href="https://instagram.com/ignite.belize" target="_blank" rel="noopener">Instagram</a></li>' +
            '<li><a href="https://facebook.com/ignitebz" target="_blank" rel="noopener">Facebook</a></li>' +
          '</ul>' +
        '</div>' +
      '</div>' +
      '<div class="footer-bottom">' +
        '<span>© 2026 Ignite Movement Belize</span>' +
        '<span>Spanish Lookout, BZ</span>' +
      '</div>' +
    '</div>' +
  '</footer>';

  var modalHTML = '<div class="volunteer-overlay" id="volunteerOverlay">' +
    '<div class="volunteer-modal">' +
      '<button class="volunteer-modal-close" id="volunteerClose">&times;</button>' +
      '<div id="volunteerForm">' +
        '<h2>Volunteer with Ignite Belize</h2>' +
        '<form id="volunteerFormElement">' +
          '<div class="volunteer-form-group">' +
            '<label class="volunteer-form-label">I want to help with:</label>' +
            '<div class="volunteer-checkboxes">' +
              '<div class="volunteer-checkbox"><input type="checkbox" id="vol-social" name="areas" value="Social Media"><label for="vol-social">Social Media</label></div>' +
              '<div class="volunteer-checkbox"><input type="checkbox" id="vol-photo" name="areas" value="Photography / Cinematography"><label for="vol-photo">Photography / Cinematography</label></div>' +
              '<div class="volunteer-checkbox"><input type="checkbox" id="vol-worship" name="areas" value="Worship"><label for="vol-worship">Worship</label></div>' +
              '<div class="volunteer-checkbox"><input type="checkbox" id="vol-intercession" name="areas" value="Intercession"><label for="vol-intercession">Intercession</label></div>' +
              '<div class="volunteer-checkbox"><input type="checkbox" id="vol-evangelism" name="areas" value="Evangelism"><label for="vol-evangelism">Evangelism</label></div>' +
              '<div class="volunteer-checkbox"><input type="checkbox" id="vol-admin" name="areas" value="Admin"><label for="vol-admin">Admin</label></div>' +
              '<div class="volunteer-checkbox"><input type="checkbox" id="vol-district" name="areas" value="Bring Ignite to my district"><label for="vol-district">Bring Ignite to my district</label></div>' +
              '<div class="volunteer-checkbox"><input type="checkbox" id="vol-partner" name="areas" value="Become a monthly partner"><label for="vol-partner">Become a monthly partner</label></div>' +
            '</div>' +
          '</div>' +
          '<div class="volunteer-form-group">' +
            '<label class="volunteer-form-label">Your Information</label>' +
            '<div class="volunteer-inputs">' +
              '<input type="text" id="vol-name" name="name" placeholder="Full Name" class="volunteer-input" required>' +
              '<input type="email" id="vol-email" name="email" placeholder="Email Address" class="volunteer-input" required>' +
              '<input type="tel" id="vol-phone" name="phone" placeholder="Phone Number" class="volunteer-input">' +
              '<input type="text" id="vol-district-input" name="district" placeholder="District (if applicable)" class="volunteer-input">' +
            '</div>' +
          '</div>' +
          '<button type="submit" class="volunteer-submit">Submit</button>' +
        '</form>' +
      '</div>' +
      '<div class="volunteer-success" id="volunteerSuccess">' +
        '<h3>Thank You!</h3>' +
        '<p>Your volunteer information has been sent to Brent. We will be in touch soon!</p>' +
      '</div>' +
    '</div>' +
  '</div>';

  var navRoot = document.getElementById('ignite-nav-root');
  if (navRoot) navRoot.outerHTML = navHTML;

  var footerRoot = document.getElementById('ignite-footer-root');
  if (footerRoot) footerRoot.outerHTML = footerHTML;

  var modalRoot = document.getElementById('ignite-modal-root');
  if (modalRoot) modalRoot.outerHTML = modalHTML;

  var style = document.createElement('style');
  style.textContent = `
    :root {
      --nav-bg: #0a0805;
      --nav-accent: #c8a439;
      --nav-text: #f1ece1;
      --nav-text-dim: rgba(241,236,225,0.6);
    }
    #mainNav {
      position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
      padding: 16px 32px;
      background: rgba(10,8,5,0.92);
      backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
      border-bottom: 1px solid rgba(200,164,57,0.18);
      display: flex; justify-content: space-between; align-items: center;
      transition: padding 0.3s ease, background 0.3s ease;
      box-sizing: border-box;
    }
    #mainNav.scrolled { padding: 10px 32px; background: rgba(10,8,5,0.98); }
    .nav-brand { display: flex; align-items: center; text-decoration: none; }
    .nav-logo-img { height: 40px; width: auto; display: block; object-fit: contain; }
    .nav-links { display: flex; list-style: none; gap: 4px; margin: 0; padding: 0; }
    .nav-links a {
      font-family: 'JetBrains Mono', 'Courier New', monospace;
      font-size: 0.72rem; letter-spacing: 0.15em; text-transform: uppercase;
      color: var(--nav-text); text-decoration: none; padding: 8px 14px;
      transition: color 0.2s; display: block;
    }
    .nav-links a::before { content: '/ '; color: var(--nav-accent); opacity: 0; transition: opacity 0.2s; }
    .nav-links a:hover::before, .nav-links a[aria-current="page"]::before { opacity: 1; }
    .nav-links a:hover, .nav-links a[aria-current="page"] { color: var(--nav-accent); }
    .nav-links a.cta {
      background: var(--nav-accent); color: #0a0805;
      padding: 10px 18px; margin-left: 8px; font-weight: 700;
    }
    .nav-links a.cta::before { display: none; }
    .nav-links a.cta:hover { background: #e8c050; color: #0a0805; }
    .nav-toggle {
      display: none; background: none; border: none; cursor: pointer;
      width: 36px; height: 28px; flex-direction: column;
      justify-content: space-between; padding: 0;
    }
    .nav-toggle span { display: block; height: 2px; background: var(--nav-text); transition: transform 0.3s, opacity 0.3s; }
    .nav-toggle.active span:nth-child(1) { transform: translateY(13px) rotate(45deg); }
    .nav-toggle.active span:nth-child(2) { opacity: 0; }
    .nav-toggle.active span:nth-child(3) { transform: translateY(-13px) rotate(-45deg); }
    .mobile-menu {
      position: fixed; inset: 0; background: #0a0805; z-index: 999;
      display: flex; flex-direction: column; justify-content: center;
      align-items: center; gap: 24px;
      transform: translateY(-100%); transition: transform 0.4s cubic-bezier(0.7,0,0.3,1);
      padding: 80px 32px;
    }
    .mobile-menu.active { transform: translateY(0); }
    .mobile-menu a {
      font-family: 'Anton', 'Bebas Neue', Impact, sans-serif;
      font-size: 2.8rem; text-transform: uppercase; color: var(--nav-text);
      text-decoration: none; letter-spacing: 0.02em; transition: color 0.2s;
    }
    .mobile-menu a:hover { color: var(--nav-accent); }
    .site-footer {
      background: #0a0805; color: #f1ece1;
      padding: 80px 0 40px; border-top: 1px solid rgba(200,164,57,0.2);
    }
    .footer-inner { max-width: 1320px; margin: 0 auto; padding: 0 32px; }
    .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 60px; margin-bottom: 60px; }
    .footer-brand h3 {
      font-family: 'Anton', 'Bebas Neue', Impact, sans-serif;
      font-size: 2.4rem; text-transform: uppercase; line-height: 1;
      margin: 0 0 14px 0; color: #f1ece1;
    }
    .footer-accent { color: var(--nav-accent); }
    .footer-brand p { color: rgba(241,236,225,0.6); font-size: 0.95rem; max-width: 360px; line-height: 1.6; margin: 0; }
    .footer-col h4 {
      font-family: 'JetBrains Mono', 'Courier New', monospace;
      font-size: 0.7rem; letter-spacing: 0.2em; text-transform: uppercase;
      color: var(--nav-accent); margin: 0 0 18px 0;
    }
    .footer-col ul { list-style: none; padding: 0; margin: 0; }
    .footer-col ul li { margin-bottom: 10px; }
    .footer-col a { color: #f1ece1; text-decoration: none; font-size: 0.95rem; transition: color 0.2s; }
    .footer-col a:hover { color: var(--nav-accent); }
    .footer-bottom {
      padding-top: 30px; border-top: 1px solid rgba(241,236,225,0.12);
      display: flex; justify-content: space-between;
      font-family: 'JetBrains Mono', 'Courier New', monospace;
      font-size: 0.7rem; letter-spacing: 0.15em; text-transform: uppercase;
      color: rgba(241,236,225,0.4); flex-wrap: wrap; gap: 12px;
    }
    .volunteer-overlay {
      position: fixed; inset: 0; background: rgba(10,8,5,0.85);
      backdrop-filter: blur(8px); z-index: 9999;
      display: flex; align-items: center; justify-content: center;
      opacity: 0; pointer-events: none; transition: opacity 0.3s ease;
    }
    .volunteer-overlay.active { opacity: 1; pointer-events: all; }
    .volunteer-modal {
      background: #0a0805; border: 1px solid rgba(200,164,57,0.3);
      max-width: 640px; width: 90%; max-height: 90vh; overflow-y: auto;
      padding: 48px; position: relative;
      transform: translateY(20px); transition: transform 0.3s ease;
    }
    .volunteer-overlay.active .volunteer-modal { transform: translateY(0); }
    .volunteer-modal-close {
      position: absolute; top: 16px; right: 20px;
      background: none; border: none; color: rgba(241,236,225,0.6);
      font-size: 2rem; cursor: pointer; line-height: 1; transition: color 0.2s;
    }
    .volunteer-modal-close:hover { color: var(--nav-accent); }
    .volunteer-modal h2 {
      font-family: 'Anton', 'Bebas Neue', Impact, sans-serif;
      font-size: 2.2rem; text-transform: uppercase; color: #f1ece1; margin: 0 0 32px 0;
    }
    .volunteer-form-group { margin-bottom: 28px; }
    .volunteer-form-label {
      display: block; font-family: 'JetBrains Mono', 'Courier New', monospace;
      font-size: 0.7rem; letter-spacing: 0.2em; text-transform: uppercase;
      color: var(--nav-accent); margin-bottom: 14px;
    }
    .volunteer-checkboxes { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
    .volunteer-checkbox { display: flex; align-items: center; gap: 10px; }
    .volunteer-checkbox input[type="checkbox"] { width: 16px; height: 16px; accent-color: var(--nav-accent); cursor: pointer; flex-shrink: 0; }
    .volunteer-checkbox label { color: rgba(241,236,225,0.85); font-size: 0.9rem; cursor: pointer; }
    .volunteer-inputs { display: flex; flex-direction: column; gap: 12px; }
    .volunteer-input {
      background: rgba(241,236,225,0.06); border: 1px solid rgba(200,164,57,0.25);
      color: #f1ece1; padding: 12px 16px; font-size: 0.95rem;
      width: 100%; box-sizing: border-box; transition: border-color 0.2s; outline: none;
    }
    .volunteer-input::placeholder { color: rgba(241,236,225,0.35); }
    .volunteer-input:focus { border-color: var(--nav-accent); }
    .volunteer-submit {
      width: 100%; background: var(--nav-accent); color: #0a0805; border: none;
      padding: 16px; font-family: 'Anton', 'Bebas Neue', Impact, sans-serif;
      font-size: 1.1rem; letter-spacing: 0.1em; text-transform: uppercase;
      cursor: pointer; transition: background 0.2s; margin-top: 8px;
    }
    .volunteer-submit:hover { background: #e8c050; }
    .volunteer-success { display: none; text-align: center; padding: 40px 0; }
    .volunteer-success.show { display: block; }
    .volunteer-success h3 {
      font-family: 'Anton', 'Bebas Neue', Impact, sans-serif;
      font-size: 2rem; color: var(--nav-accent); text-transform: uppercase; margin: 0 0 12px 0;
    }
    .volunteer-success p { color: rgba(241,236,225,0.8); }
    @media (max-width: 900px) {
      .nav-links { display: none; }
      .nav-toggle { display: flex; }
      .footer-grid { grid-template-columns: 1fr 1fr; gap: 40px; }
    }
    @media (max-width: 700px) {
      #mainNav { padding: 12px 20px; }
      #mainNav.scrolled { padding: 10px 20px; }
      .footer-grid { grid-template-columns: 1fr; gap: 32px; }
      .footer-inner { padding: 0 20px; }
      .volunteer-modal { padding: 32px 24px; }
      .volunteer-checkboxes { grid-template-columns: 1fr; }
    }
  `;
  document.head.appendChild(style);

  var nav = document.getElementById('mainNav');
  if (nav) {
    window.addEventListener('scroll', function() {
      nav.classList.toggle('scrolled', window.scrollY > 30);
    }, { passive: true });
  }

  var tog = document.getElementById('navToggle');
  var mm  = document.getElementById('mobileMenu');
  if (tog && mm) {
    tog.addEventListener('click', function() {
      var open = mm.classList.toggle('active');
      tog.classList.toggle('active', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    mm.querySelectorAll('a').forEach(function(a) {
      a.addEventListener('click', function() {
        tog.classList.remove('active');
        mm.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  window.openVolunteerModal = function() {
    var o = document.getElementById('volunteerOverlay');
    if (o) o.classList.add('active');
  };

  function closeVolunteerModal() {
    var o  = document.getElementById('volunteerOverlay');
    var vf = document.getElementById('volunteerFormElement');
    var vs = document.getElementById('volunteerSuccess');
    var vd = document.getElementById('volunteerForm');
    if (!o) return;
    o.classList.remove('active');
    if (vf) vf.reset();
    if (vs) vs.classList.remove('show');
    if (vd) vd.style.display = 'block';
  }

  document.addEventListener('click', function(e) {
    if (e.target.closest && e.target.closest('#volunteerClose')) { closeVolunteerModal(); return; }
    var ov = document.getElementById('volunteerOverlay');
    if (ov && e.target === ov) closeVolunteerModal();
  });

  document.addEventListener('submit', async function(e) {
    if (!e.target || e.target.id !== 'volunteerFormElement') return;
    e.preventDefault();
    var name     = document.getElementById('vol-name').value;
    var email    = document.getElementById('vol-email').value;
    var phone    = document.getElementById('vol-phone').value;
    var district = document.getElementById('vol-district-input').value;
    var areas    = Array.from(document.querySelectorAll('input[name="areas"]:checked')).map(function(c){ return c.value; });
    if (!areas.length) { alert('Please select at least one area to volunteer with.'); return; }
    try {
      var fd = new FormData();
      fd.append('name', name); fd.append('email', email);
      fd.append('phone', phone); fd.append('district', district);
      fd.append('areas', areas.join(', '));
      fd.append('_subject', 'New Volunteer Interest');
      fd.append('_captcha', 'false');
      var res = await fetch('https://formsubmit.co/ajax/brent@ignitebelize.org', { method: 'POST', body: fd });
      if (res.ok) {
        document.getElementById('volunteerForm').style.display = 'none';
        document.getElementById('volunteerSuccess').classList.add('show');
        setTimeout(closeVolunteerModal, 3000);
      } else {
        alert('There was an error. Please try again or email brent@ignitebelize.org directly.');
      }
    } catch(err) {
      console.error(err);
      alert('There was an error. Please email brent@ignitebelize.org directly.');
    }
  });

})();
