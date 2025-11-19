const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

const currentTheme = localStorage.getItem('theme') || 'light';
body.setAttribute('data-theme', currentTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});
document.addEventListener('DOMContentLoaded', function () {
    const slides = Array.from(document.querySelectorAll('.slider .slide'));
    if (!slides.length) return;
    
    slides.forEach((s, i) => {
        s.style.position = 'absolute';
        s.style.top = '0';
        s.style.left = '0';
        s.style.width = '100%';
        s.style.height = '100%';
        s.style.objectFit = 'cover';
        s.style.transition = 'opacity 0.6s ease-in-out';
        s.style.opacity = i === 0 ? '1' : '0';
        s.style.zIndex = i === 0 ? '2' : '1';
    });

    if (slides.length <= 1) return;

    let current = 0;
    setInterval(() => {
        const next = (current + 1) % slides.length;
        slides[current].style.opacity = '0';
        slides[current].style.zIndex = '1';
        slides[next].style.opacity = '1';
        slides[next].style.zIndex = '2';
        current = next;
    }, 2000);
});

// Auto-open NIRF submenu on NIRF Engineering page
// Auto-open UNIVERSITY dropdown on AICTE, ANNUAL, and UGC pages
document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname.toLowerCase();
  const pageToLabel = {
    'aicte.html': 'aicte recognition',
    'annual.html': 'annual reports',
    'ugc.html': 'ugc information'
  };

  const match = Object.keys(pageToLabel).find((p) => path.endsWith(p));
  if (match) {
    // Find the UNIVERSITY dropdown in main nav
    const uniDropdown = Array.from(document.querySelectorAll('.main-nav > ul > li.dropdown'))
      .find((li) => li.querySelector('a') && li.querySelector('a').textContent.trim().toLowerCase() === 'university');
    if (uniDropdown) {
      // Highlight the specific item within the dropdown
      const label = pageToLabel[match];
      const targetLink = Array.from(uniDropdown.querySelectorAll('.dropdown-content a'))
        .find((a) => a.textContent.trim().toLowerCase() === label);
      if (targetLink) {
        targetLink.classList.add('active');
      }

      // Only set a visual active state for the parent; do NOT auto-open
      uniDropdown.classList.add('active');
    }
  }
});

// Inject common footer content on all pages that lack it
document.addEventListener('DOMContentLoaded', () => {
  const footer = document.querySelector('footer.footer');
  if (!footer) return;
  const hasRichFooter = footer.querySelector('.footer-content');
  if (hasRichFooter) return;

  // Ensure Font Awesome for icons
  if (!document.querySelector('link[href*="font-awesome"]')) {
    const fa = document.createElement('link');
    fa.rel = 'stylesheet';
    fa.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css';
    document.head.appendChild(fa);
  }

  footer.innerHTML = `
    <div class="footer-content">
      <div class="footer-column">
        <h4>ABOUT</h4>
        <ul>
          <li><a href="#">The University</a></li>
          <li><a href="#">Vision & Mission</a></li>
          <li><a href="#">News & Events</a></li>
          <li><a href="#">Research</a></li>
          <li><a href="#">Innovation Labs</a></li>
          <li><a href="#">Careers</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h4>SCHOOLS</h4>
        <ul>
          <li><a href="#">School of Engineering</a></li>
          <li><a href="#">School of Computer Applications</a></li>
          <li><a href="#">School of Commerce & Management</a></li>
          <li><a href="#">School of Basic & Applied Sciences</a></li>
          <li><a href="#">School of Health Sciences</a></li>
          <li><a href="#">School of Arts, Design and Humanities</a></li>
          <li><a href="#">School of Design and Digital Transmedia</a></li>
          <li><a href="#">School of Law</a></li>
          <li><a href="#">Online Degree Programs</a></li>
          <li><a href="#">Online Certification Programs</a></li>
          <li><a href="#">Admission Notification Codes</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h4>ADMISSIONS</h4>
        <ul>
          <li><a href="#">Admissions Details</a></li>
          <li><a href="#">DSU Admissions - Apply Online</a></li>
          <li><a href="#">Direct Admission - Apply Online</a></li>
          <li><a href="#">Course Eligibility & Fee Structure</a></li>
        </ul>
        <h4 style="margin-top: 20px;">ADMISSIONS HELPLINE</h4>
        <p>Phone: +91 080 46 33800 / +91 8356455507</p>
        <p>E-mail: <a href="mailto:admissions@dsu.edu.in">admissions@dsu.edu.in</a></p>

        <h4 style="margin-top: 20px;">NRI / FOREIGN ADMISSIONS HELPLINE</h4>
        <p>Phone: +91 9900022152 / +91 9900022149</p>

        <h4 style="margin-top: 20px;">REGION-WISE PRESENCE OF DSU</h4>
        <p>East Region: E1423 (6833)<br>West Region: 9741438501<br>North Region: 7413835510<br>South Region: 9052333358</p>
      </div>

      <div class="footer-column footer-info">
        <div class="footer-logo">
          <h3>DAYANANDA SAGAR<br>UNIVERSITY</h3>
        </div>
        <p><strong>DSU Main Campus:</strong></p>
        <p>Deenanagar, Kumaraswamy Layout,<br>Bangalore 560 111 - MD 115</p>
        <p>E-mail: <a href="mailto:admissions@dsu.edu.in">admissions@dsu.edu.in</a></p>

        <p><strong>DSU City Innovation Campus:</strong></p>
        <p>Admissions & Main Admission office,<br>Sulin Com., Hosur Road,<br>Bangalore, DBE 114</p>
        <p>Admissions Helpline: +91 6646 1800 / 080</p>
        <p>Phone: 080 +91 7709064277 / 6254116237</p>
        <p>E-mail: <a href="mailto:admissions@dsu.edu.in">admissions@dsu.edu.in</a></p>

        <p><strong>Office of Registrar:</strong> 080 4090 2915 / 11<br><strong>Office of Dean Engineering:</strong> +31-92-6008<br><strong>Dean:</strong> +92 / 33<br><strong>Dean - MBA:</strong> 080 4090 2931<br><strong>Enquiry EMBA:</strong> 080 4090 2930<br><strong>Research Cell:</strong> 080 4090 2912</p>

        <p><strong>DSU City Admissions Office:</strong></p>
        <p>Suite 7, 6th Floor, University Building,<br>Brigade Road, Bangalore 560 001</p>
        <p>Admissions Helpline: +91 6646 1800 / 080</p>
        <p>E-mail: <a href="mailto:admissions@dsu.edu.in">admissions@dsu.edu.in</a></p>
      </div>
    </div>

    <div class="social-sidebar">
      <a href="https://www.linkedin.com/school/dayananda-sagar-university-bangalore/" title="LinkedIn">
        <i class="fa-brands fa-linkedin"></i>
      </a>
      <a href="https://www.instagram.com" title="Instagram">
        <i class="fa-brands fa-instagram"></i>
      </a>
    </div>

    <div class="footer-bottom">
      <p>&copy; 2025 DSU. All Rights Reserved</p>
      <a href="#">Privacy Policy</a>
    </div>
  `;
});