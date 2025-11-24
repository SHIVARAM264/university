document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    const currentTheme = localStorage.getItem('theme') || 'light';
    body.setAttribute('data-theme', currentTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = body.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            body.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }
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

document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname.toLowerCase();
  const pageToLabel = {
    'aicte.html': 'aicte recognition',
    'annual.html': 'annual reports',
    'ugc.html': 'ugc information'
  };

  const match = Object.keys(pageToLabel).find((p) => path.endsWith(p));
  if (match) {
    const uniDropdown = Array.from(document.querySelectorAll('.main-nav > ul > li.dropdown'))
      .find((li) => li.querySelector('a') && li.querySelector('a').textContent.trim().toLowerCase() === 'university');
    if (uniDropdown) {
      const label = pageToLabel[match];
      const targetLink = Array.from(uniDropdown.querySelectorAll('.dropdown-content a'))
        .find((a) => a.textContent.trim().toLowerCase() === label);
      if (targetLink) {
        targetLink.classList.add('active');
      }
      uniDropdown.classList.add('active');
    }
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const footer = document.querySelector('footer.footer');
  if (!footer) return;
  const hasRichFooter = footer.querySelector('.footer-content');
  if (hasRichFooter) return;

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

// Wire NAAC link globally and mark active on NAAC page
document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname.toLowerCase();
  const naacLink = Array.from(document.querySelectorAll('.main-nav > ul > li > a'))
    .find((a) => a.textContent.trim().toLowerCase() === 'naac');
  if (naacLink) {
    naacLink.setAttribute('href', 'naac.html');
    if (path.endsWith('naac.html')) {
      naacLink.classList.add('active');
    }
  }
});

// Wire RESEARCH top-level link and mark active on Research page
document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname.toLowerCase();
  const researchTop = Array.from(document.querySelectorAll('.main-nav > ul > li.dropdown > a'))
    .find((a) => a.textContent.trim().toLowerCase() === 'research');
  if (researchTop) {
    researchTop.setAttribute('href', 'research.html');
    if (path.endsWith('research.html')) {
      researchTop.classList.add('active');
      const li = researchTop.parentElement;
      if (li) li.classList.add('active');
    }
  }
});

// Wire ACADEMICS links and set active on School/Undergrad/Postgrad pages
document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname.toLowerCase();
  const academicsDropdown = Array.from(document.querySelectorAll('.main-nav > ul > li.dropdown'))
    .find((li) => li.querySelector('a') && li.querySelector('a').textContent.trim().toLowerCase() === 'academics');
  if (!academicsDropdown) return;
  const list = academicsDropdown.querySelector('.dropdown-content');
  if (!list) return;

  const mapping = {
    'school': 'school.html',
    'undergraduate programmes': 'underprogram.html',
    'postgraduate programmes': 'postprogram.html'
  };

  Array.from(list.querySelectorAll('a')).forEach((a) => {
    const key = a.textContent.trim().toLowerCase();
    if (mapping[key]) a.setAttribute('href', mapping[key]);
  });

  const activeMap = Object.values(mapping);
  const current = activeMap.find((href) => path.endsWith(href));
  if (current) {
    const target = Array.from(list.querySelectorAll('a')).find((a) => a.getAttribute('href') === current);
    if (target) target.classList.add('active');
    academicsDropdown.classList.add('active');
  }
});

// Wire ADMISSIONS dropdown links globally and set active states
document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname.toLowerCase();
  const admissionsDropdown = Array.from(document.querySelectorAll('.main-nav > ul > li.dropdown'))
    .find((li) => li.querySelector('a') && li.querySelector('a').textContent.trim().toLowerCase() === 'admissions');
  if (!admissionsDropdown) return;
  const list = admissionsDropdown.querySelector('.dropdown-content');
  if (!list) return;

  const mapping = {
    'admission details': 'admission.html',
    'direct admissions-2026': 'directadm.html',
    'course,eligibility & fee': 'cour_elg_fee.html',
    'hostel fee': 'hostelfee.html'
  };

  Array.from(list.querySelectorAll('a')).forEach((a) => {
    const key = a.textContent.trim().toLowerCase();
    if (mapping[key]) a.setAttribute('href', mapping[key]);
  });

  const activeMap = Object.values(mapping);
  const current = activeMap.find((href) => path.endsWith(href));
  if (current) {
    const target = Array.from(list.querySelectorAll('a')).find((a) => a.getAttribute('href') === current);
    if (target) target.classList.add('active');
    admissionsDropdown.classList.add('active');
  }
});

// Wire RESEARCH dropdown links globally and set active states
document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname.toLowerCase();
  const researchDropdown = Array.from(document.querySelectorAll('.main-nav > ul > li.dropdown'))
    .find((li) => li.querySelector('a') && li.querySelector('a').textContent.trim().toLowerCase() === 'research');
  if (!researchDropdown) return;
  const list = researchDropdown.querySelector('.dropdown-content');
  if (!list) return;

  const mapping = {
    'ph.d calendar of events': 'phd1.html',
    'ph.d admission': 'phd2.html',
    'ph.d regulations': 'regulatiion.html',
    'research promotion policy': 'promotion.html'
  };

  Array.from(list.querySelectorAll('a')).forEach((a) => {
    const key = a.textContent.trim().toLowerCase();
    if (mapping[key]) a.setAttribute('href', mapping[key]);
  });

  const activeMap = Object.values(mapping);
  const current = activeMap.find((href) => path.endsWith(href));
  if (current) {
    const target = Array.from(list.querySelectorAll('a')).find((a) => a.getAttribute('href') === current);
    if (target) target.classList.add('active');
    researchDropdown.classList.add('active');
  }
});

// DSU Assistant Chatbot - Only on homepage
document.addEventListener('DOMContentLoaded', () => {
  // Only show DSU Assistant on homepage
  if (!window.location.pathname.endsWith('index.html') && window.location.pathname !== '/') {
    const assistant = document.getElementById('dsu-assistant');
    if (assistant) assistant.style.display = 'none';
    return;
  }
  
  const chatToggle = document.getElementById('chat-toggle');
  const chatWindow = document.getElementById('chat-window');
  const chatClose = document.getElementById('chat-close');
  const chatInput = document.getElementById('chat-input');
  const chatSend = document.getElementById('chat-send');
  const chatMessages = document.getElementById('chat-messages');

  const dsuResponses = {
    admission: 'DSU admissions open for 2024-25. Apply online through KCET/COMEDK/Management quota.',
    courses: 'Engineering: CSE, ECE, Mech, Civil, EEE. Other: BBA, BCA, B.Com, MBA, MCA, M.Tech.',
    cse: 'Computer Science Engineering: 4 years, Fee: ₹2.5L/year, NAAC A+ accredited.',
    ece: 'Electronics & Communication: 4 years, Fee: ₹2.3L/year, Industry partnerships.',
    mechanical: 'Mechanical Engineering: 4 years, Fee: ₹2.2L/year, Modern labs.',
    civil: 'Civil Engineering: 4 years, Fee: ₹2.2L/year, Infrastructure focus.',
    mba: 'MBA program: 2 years, Fee: ₹4L/year, Specializations available.',
    bca: 'BCA: 3 years, Fee: ₹1.5L/year, Programming and software development.',
    fees: 'Engineering: ₹2.2-2.5L/year, MBA: ₹4L/year, BCA: ₹1.5L/year',
    scholarship: 'Merit scholarships, SC/ST fee concession, Sports quota available.',
    hostel: 'Separate hostels for boys and girls. AC/Non-AC rooms. Fee: ₹80K-1.2L/year.',
    placement: '90%+ placement rate. Top recruiters: Infosys, TCS, Wipro, Accenture, Amazon.',
    contact: 'Phone: +91-80-28447844, Email: info@dsu.edu.in',
    address: 'Dayananda Sagar University, Harohalli, Main Campus, Bangalore - 560078',
    location: 'Located in Bangalore, Karnataka. Well connected by metro and bus.',
    campus: '60-acre green campus with modern infrastructure, labs, and sports facilities.',
    library: 'Central library with 1L+ books, e-resources, and digital learning center.',
    labs: 'State-of-the-art labs for all departments with latest equipment.',
    sports: 'Cricket, Football, Basketball, Volleyball, Badminton, Gym facilities.',
    events: 'Melange (Annual fest), Techno-cultural events, Industry seminars.',
    accreditation: 'NAAC A+ grade, AICTE approved, UGC recognized university.',
    faculty: '200+ experienced faculty, many with PhD and industry experience.',
    research: 'Active research in AI, IoT, Robotics, and emerging technologies.',
    default: "I can help with DSU admissions, courses, contact details, fees, and placements. What would you like to know?"
  };

  if (chatToggle) {
    chatToggle.addEventListener('click', () => {
      chatWindow.style.display = chatWindow.style.display === 'flex' ? 'none' : 'flex';
    });
  }

  if (chatClose) {
    chatClose.addEventListener('click', () => {
      chatWindow.style.display = 'none';
    });
  }

  function sendMessage(message) {
    if (!message.trim()) return;
    addMessage(message, 'user');
    setTimeout(() => {
      const response = getBotResponse(message);
      addMessage(response, 'bot');
    }, 500);
    if (chatInput) chatInput.value = '';
  }

  function addMessage(message, sender) {
    if (!chatMessages) return;
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    messageDiv.innerHTML = `<div class="message-content">${message}</div>`;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function getBotResponse(message) {
    const lowerMessage = message.toLowerCase();
    if (lowerMessage.includes('admission') || lowerMessage.includes('apply')) return dsuResponses.admission;
    if (lowerMessage.includes('cse') || lowerMessage.includes('computer science')) return dsuResponses.cse;
    if (lowerMessage.includes('ece') || lowerMessage.includes('electronics')) return dsuResponses.ece;
    if (lowerMessage.includes('mechanical') || lowerMessage.includes('mech')) return dsuResponses.mechanical;
    if (lowerMessage.includes('civil')) return dsuResponses.civil;
    if (lowerMessage.includes('mba')) return dsuResponses.mba;
    if (lowerMessage.includes('bca')) return dsuResponses.bca;
    if (lowerMessage.includes('fee') || lowerMessage.includes('cost')) return dsuResponses.fees;
    if (lowerMessage.includes('scholarship')) return dsuResponses.scholarship;
    if (lowerMessage.includes('hostel') || lowerMessage.includes('accommodation')) return dsuResponses.hostel;
    if (lowerMessage.includes('placement') || lowerMessage.includes('job')) return dsuResponses.placement;
    if (lowerMessage.includes('contact') || lowerMessage.includes('phone')) return dsuResponses.contact;
    if (lowerMessage.includes('address') || lowerMessage.includes('location')) return dsuResponses.address;
    if (lowerMessage.includes('campus')) return dsuResponses.campus;
    if (lowerMessage.includes('library')) return dsuResponses.library;
    if (lowerMessage.includes('lab')) return dsuResponses.labs;
    if (lowerMessage.includes('sport')) return dsuResponses.sports;
    if (lowerMessage.includes('event') || lowerMessage.includes('fest')) return dsuResponses.events;
    if (lowerMessage.includes('accreditation') || lowerMessage.includes('naac')) return dsuResponses.accreditation;
    if (lowerMessage.includes('faculty') || lowerMessage.includes('teacher')) return dsuResponses.faculty;
    if (lowerMessage.includes('research')) return dsuResponses.research;
    if (lowerMessage.includes('course') || lowerMessage.includes('program')) return dsuResponses.courses;
    return dsuResponses.default;
  }

  if (chatSend) {
    chatSend.addEventListener('click', () => sendMessage(chatInput ? chatInput.value : ''));
  }

  if (chatInput) {
    chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') sendMessage(chatInput.value);
    });
  }

  document.querySelectorAll('.quick-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const query = btn.dataset.query;
      addMessage(btn.textContent, 'user');
      setTimeout(() => addMessage(dsuResponses[query] || dsuResponses.default, 'bot'), 500);
    });
  });
});
