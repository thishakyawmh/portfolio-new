//Navigation bar effects on scroll
window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

//Service Modals
const serviceModals = document.querySelectorAll(".service-modal");
const learnmoreBtns = document.querySelectorAll(".learn-more-btn");
const modalCloseBtns = document.querySelectorAll(".service-modal .modal-close-btn");

var modal = function(modalClick){
    serviceModals[modalClick].classList.add("active");
}

learnmoreBtns.forEach((learnmoreBtn, i) => {
    learnmoreBtn.addEventListener("click", () => {
        modal(i);
    });
});

modalCloseBtns.forEach((modalCloseBtn) => {
    modalCloseBtn.addEventListener("click", () => {
        serviceModals.forEach((modalView) => {
            modalView.classList.remove("active");
        });
    });
});

//Portfolio Modals
const portfolioModals = document.querySelectorAll(".portfolio-model");
const imgCardContainers = document.querySelectorAll(".img-card-container");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

var portfolioModal = function(modalClick){
    portfolioModals[modalClick].classList.add("active");
}

imgCardContainers.forEach((imgCardContainer, i) => {
    imgCardContainer.addEventListener("click", () => {
        portfolioModal(i);
    });
});

portfolioCloseBtns.forEach((portfolioCloseBtn) => {
    // We add the 'event' parameter here
    portfolioCloseBtn.addEventListener("click", (event) => {
        // This new line stops the click from affecting the card behind it
        event.stopPropagation(); 
        
        portfolioModals.forEach((portfolioModalView) => {
            portfolioModalView.classList.remove("active");
        });
    });
});

//Client Swiper
var swiper = new Swiper(".client-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

// Dark/Light Theme
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click",() => {
    document.body.classList.toggle("dark-theme");
    themeBtn.classList.toggle("sun");
    localStorage.setItem("saved-theme", getCurrentTheme());
    localStorage.setItem("saved-icon", getCurrentIcon());
});

const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if(savedTheme){
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}

// Scroll to top button
const scrollTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function(){
    scrollTopBtn.classList.toggle("active", window.scrollY > 500);
});

scrollTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// Responsive navigation menu toggle
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
});

// Typing effect
const phrases = ["Web Developer", "YouTuber", "ICT Tutor", "Freelancer", "Tech Enthusiast"];
let currentPhrase = 0;
let currentLetter = 0;
const typingElement = document.getElementById("typing");

function typePhrase() {
    if (typingElement && currentLetter < phrases[currentPhrase].length) {
        typingElement.textContent += phrases[currentPhrase].charAt(currentLetter);
        currentLetter++;
        setTimeout(typePhrase, 100);
    } else {
        setTimeout(clearPhrase, 1000);
    }
}

function clearPhrase() {
    if (typingElement && currentLetter > 0) {
        typingElement.textContent = typingElement.textContent.slice(0, -1);
        currentLetter--;
        setTimeout(clearPhrase, 50);
    } else {
        currentPhrase = (currentPhrase + 1) % phrases.length;
        setTimeout(typePhrase, 500);
    }
}

document.addEventListener("DOMContentLoaded", typePhrase);

// Greeting
function getGreeting() {
    const now = new Date();
    const hour = now.getHours();
    let greeting = '';
    if (hour < 12) {
        greeting = 'Good Morning';
    } else if (hour < 18) {
        greeting = 'Good Afternoon';
    } else {
        greeting = 'Good Evening';
    }
    document.getElementById('greeting').textContent = greeting;
}

window.onload = getGreeting;

// Qualification Tabs
const journeyTabs = document.querySelectorAll('#journey [data-target]');
const journeyTabContents = document.querySelectorAll('#journey [data-content]');

journeyTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        journeyTabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active');
        });
        target.classList.add('qualification__active');

        journeyTabs.forEach(t => {
            t.classList.remove('qualification__active');
        });
        tab.classList.add('qualification__active');
    });
});

const highlightsTabs = document.querySelectorAll('#highlights [data-target]');
const highlightsTabContents = document.querySelectorAll('#highlights [data-content]');

highlightsTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        highlightsTabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active');
        });
        target.classList.add('qualification__active');

        highlightsTabs.forEach(t => {
            t.classList.remove('qualification__active');
        });
        tab.classList.add('qualification__active');
    });
});

// Certificate Modals
const viewBtns = document.querySelectorAll(".view-btn");
const certificateViewModals = document.querySelectorAll(".certificate-view-modal");
const certificateViewCloseBtns = document.querySelectorAll(".certificate-view-modal .modal-close-btn");

viewBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    certificateViewModals[index].classList.add("active");
  });
});

certificateViewCloseBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    certificateViewModals[index].classList.remove("active");
  });
});

// Skills Toggle
const skillsHeaders = document.querySelectorAll('.skills__header');

skillsHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.parentElement;
        content.classList.toggle('skills__open');
    });
});


// Skills Modals
const skillModals = document.querySelectorAll(".skill-modal");
const skillOpenBtns = document.querySelectorAll(".skill-open-btn");
const skillModalCloseBtns = document.querySelectorAll(".skill-modal-close-btn");

var openSkillModal = function(modalClick){
    skillModals[modalClick].classList.add("active");
}

skillOpenBtns.forEach((openBtn, i) => {
    openBtn.addEventListener("click", () => {
        openSkillModal(i);
    });
});

skillModalCloseBtns.forEach((closeBtn) => {
    closeBtn.addEventListener("click", () => {
        skillModals.forEach((modalView) => {
            modalView.classList.remove("active");
        });
    });
});

// Portfolio Filter
const filterBtns = document.querySelectorAll(".filter-btn");
const portfolioItems = document.querySelectorAll(".img-card-container");

filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        // Remove active class from all buttons
        filterBtns.forEach((button) => button.classList.remove("active"));
        // Add active class to the clicked button
        btn.classList.add("active");

        const filterValue = btn.getAttribute("data-filter");

        portfolioItems.forEach((item) => {
            if (filterValue === "all" || item.getAttribute("data-id") === filterValue) {
                item.classList.remove("hide");
                item.classList.add("show");
            } else {
                item.classList.remove("show");
                item.classList.add("hide");
            }
        });
    });
});

// Qualification Modals
const qualificationModalBtns = document.querySelectorAll(".open-qualification-modal-btn");
const qualificationModals = document.querySelectorAll(".qualification-modal");

qualificationModalBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        const modalId = btn.getAttribute("data-modal-target");
        const modal = document.querySelector(modalId);
        if (modal) {
            modal.classList.add("active");
        }
    });
});

qualificationModals.forEach((modal) => {
    const closeBtn = modal.querySelector(".modal-close-btn");
    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            modal.classList.remove("active");
        });
    }
});