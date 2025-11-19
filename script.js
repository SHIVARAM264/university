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

// DSU Assistant functionality
document.addEventListener('DOMContentLoaded', function() {
    const assistantToggle = document.getElementById('assistant-toggle');
    const assistantChat = document.getElementById('assistant-chat');
    const closeAssistant = document.getElementById('close-assistant');
    const sendBtn = document.getElementById('send-btn');
    const userInput = document.getElementById('user-input');
    const chatMessages = document.getElementById('chat-messages');
    const quickBtns = document.querySelectorAll('.quick-btn');

    const responses = {
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
        address: 'Dayananda Sagar University, Harohalli ,Main Campus , Bangalore - 560078',
        location: 'Located in Bangalore, Karnataka. Well connected by metro and bus.',
        campus: '60-acre green campus with modern infrastructure, labs, and sports facilities.',
        library: 'Central library with 1L+ books, e-resources, and digital learning center.',
        labs: 'State-of-the-art labs for all departments with latest equipment.',
        sports: 'Cricket, Football, Basketball, Volleyball, Badminton, Gym facilities.',
        events: 'Melange (Annual fest), Techno-cultural events, Industry seminars.',
        accreditation: 'NAAC A+ grade, AICTE approved, UGC recognized university.',
        faculty: '200+ experienced faculty, many with PhD and industry experience.',
        research: 'Active research in AI, IoT, Robotics, and emerging technologies.',
        default: "Thank you for your question! For detailed information, please visit dsu.edu.in or contact our admissions office at +91 080 46 33800."
    };

    assistantToggle.addEventListener('click', function() {
        assistantChat.style.display = assistantChat.style.display === 'flex' ? 'none' : 'flex';
    });

    closeAssistant.addEventListener('click', function() {
        assistantChat.style.display = 'none';
    });

    function addMessage(text, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
        messageDiv.innerHTML = `<p>${text}</p>`;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function handleQuery(query) {
        const response = responses[query.toLowerCase()] || responses.default;
        setTimeout(() => addMessage(response), 500);
    }

    sendBtn.addEventListener('click', function() {
        const message = userInput.value.trim();
        if (message) {
            addMessage(message, true);
            userInput.value = '';
            handleQuery(message);
        }
    });

    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendBtn.click();
        }
    });

    quickBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const query = this.dataset.query;
            addMessage(query.charAt(0).toUpperCase() + query.slice(1), true);
            handleQuery(query);
        });
    });
});