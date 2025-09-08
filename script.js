// DOM Elements
const musicBtn = document.getElementById('musicToggle');
const backgroundMusic = document.getElementById('backgroundMusic');
const welcomeOverlay = document.getElementById('welcomeOverlay');
const enterBtn = document.getElementById('enterBtn');

// Music Control
let isPlaying = false;

// Welcome overlay and music control
function startWebsite() {
    // Add button click animation
    enterBtn.style.transform = 'scale(0.95)';
    enterBtn.style.transition = 'transform 0.1s ease';
    
    setTimeout(() => {
        // Add fade out animation to overlay
        welcomeOverlay.style.transition = 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)';
        welcomeOverlay.style.opacity = '0';
        welcomeOverlay.style.transform = 'scale(1.1)';
        welcomeOverlay.style.filter = 'blur(10px)';
        
        // Start music
        backgroundMusic.play().then(() => {
            isPlaying = true;
            musicBtn.classList.add('playing');
            musicBtn.innerHTML = '<i class="fas fa-pause"></i>';
        }).catch(error => {
            console.log('Music play failed:', error);
        });
        
        // Remove overlay from DOM after animation
        setTimeout(() => {
            welcomeOverlay.style.display = 'none';
        }, 1200);
        
    }, 150);
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Add click event to enter button
    enterBtn.addEventListener('click', startWebsite);
    
    // Also try immediate autoplay (will likely fail but worth trying)
    backgroundMusic.play().then(() => {
        isPlaying = true;
        musicBtn.classList.add('playing');
        musicBtn.innerHTML = '<i class="fas fa-pause"></i>';
        // If autoplay works, hide overlay after a short delay
        setTimeout(() => {
            welcomeOverlay.classList.add('hidden');
        }, 1000);
    }).catch(error => {
        console.log('Autoplay blocked - showing welcome overlay');
        // Keep overlay visible for user to click
    });
});

musicBtn.addEventListener('click', () => {
    if (isPlaying) {
        backgroundMusic.pause();
        musicBtn.classList.remove('playing');
        musicBtn.innerHTML = '<i class="fas fa-music"></i>';
    } else {
        backgroundMusic.play().catch(error => {
            console.log('Audio play failed:', error);
            // Fallback for browsers that require user interaction
            alert('Vui lòng bấm vào nút nhạc để phát nhạc nền');
        });
        musicBtn.classList.add('playing');
        musicBtn.innerHTML = '<i class="fas fa-pause"></i>';
    }
    isPlaying = !isPlaying;
});

// Auto-pause music when page becomes hidden
document.addEventListener('visibilitychange', () => {
    if (document.hidden && isPlaying) {
        backgroundMusic.pause();
        musicBtn.classList.remove('playing');
        musicBtn.innerHTML = '<i class="fas fa-music"></i>';
        isPlaying = false;
    }
});

// Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add animation classes to elements when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in class to sections
    const sections = document.querySelectorAll('section:not(.hero)');
    sections.forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });

    // Add fade-in class to cards and content blocks
    const animatedElements = document.querySelectorAll('.detail-card, .photo-frame, .intro-text, .map-container');
    animatedElements.forEach(element => {
        element.classList.add('fade-in');
        observer.observe(element);
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.hero-background');
        if (parallax) {
            const speed = scrolled * 0.5;
            parallax.style.transform = `translateY(${speed}px)`;
        }
    });

    // Typing effect for hero title (optional enhancement)
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        let i = 0;
        
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        // Start typing effect after a delay
        setTimeout(typeWriter, 1000);
    }
});

// Contact Form Enhancement (if needed later)
function handleContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Add form handling logic here
            alert('Cảm ơn bạn đã gửi thông tin! Tôi sẽ liên hệ lại sớm nhất có thể.');
        });
    }
}

// Photo Upload Enhancement (for when user wants to add their photo)
function initPhotoUpload() {
    const photoPlaceholder = document.querySelector('.photo-placeholder');
    if (photoPlaceholder) {
        photoPlaceholder.addEventListener('click', () => {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.addEventListener('change', (e) => {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        const img = document.createElement('img');
                        img.src = e.target.result;
                        img.style.width = '100%';
                        img.style.height = '100%';
                        img.style.objectFit = 'cover';
                        img.style.borderRadius = '15px';
                        photoPlaceholder.innerHTML = '';
                        photoPlaceholder.appendChild(img);
                    };
                    reader.readAsDataURL(file);
                }
            });
            input.click();
        });
    }
}

// Initialize photo upload when page loads
document.addEventListener('DOMContentLoaded', initPhotoUpload);

// Mobile Menu Toggle (if navigation is added later)
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navigation = document.querySelector('.navigation');
    
    if (mobileMenuBtn && navigation) {
        mobileMenuBtn.addEventListener('click', () => {
            navigation.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
    }
}

// Countdown Timer to Graduation (optional enhancement)
function initCountdown() {
    const graduationDate = new Date('2025-09-27T08:00:00+07:00'); // September 27, 2025, 8:00 AM Vietnam time
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = graduationDate.getTime() - now;
        
        if (distance > 0) {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            const countdownElement = document.getElementById('countdown');
            if (countdownElement) {
                countdownElement.innerHTML = `
                    <div class="countdown-item">
                        <span class="countdown-number">${days}</span>
                        <span class="countdown-label">Ngày</span>
                    </div>
                    <div class="countdown-item">
                        <span class="countdown-number">${hours}</span>
                        <span class="countdown-label">Giờ</span>
                    </div>
                    <div class="countdown-item">
                        <span class="countdown-number">${minutes}</span>
                        <span class="countdown-label">Phút</span>
                    </div>
                    <div class="countdown-item">
                        <span class="countdown-number">${seconds}</span>
                        <span class="countdown-label">Giây</span>
                    </div>
                `;
            }
        } else {
            const countdownElement = document.getElementById('countdown');
            if (countdownElement) {
                countdownElement.innerHTML = '<h3>🎓 Ngày tốt nghiệp đã đến! 🎓</h3>';
            }
        }
    }
    
    // Update countdown every second
    setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call
}

// Initialize countdown when page loads
document.addEventListener('DOMContentLoaded', initCountdown);

// Lazy loading for images (performance optimization)
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Performance optimization: Debounced scroll handler
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(() => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero-background');
    if (parallax) {
        const speed = scrolled * 0.3;
        parallax.style.transform = `translateY(${speed}px)`;
    }
}, 10);

// Replace the scroll event listener with the debounced version
window.addEventListener('scroll', debouncedScrollHandler);
