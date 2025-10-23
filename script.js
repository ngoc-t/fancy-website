// Fancy Florist - Interactive JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Header scroll effect
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;
    
    function updateHeader() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Keep header always visible (removed hide/show functionality)
        header.style.transform = 'translateY(0)';
        
        lastScrollY = currentScrollY;
    }
    
    window.addEventListener('scroll', throttle(updateHeader, 10));
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = header.offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });
    }
    
    // Animate elements on scroll (AOS - Animate On Scroll)
    function animateOnScroll() {
        const elements = document.querySelectorAll('[data-aos]');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('aos-animate');
            }
        });
    }
    
    window.addEventListener('scroll', throttle(animateOnScroll, 10));
    
    // Initialize animations
    animateOnScroll();
    
    // Floating petals animation removed - using CSS petal animations instead
    
    // Button hover effects
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Product card interactions
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            const productImage = this.querySelector('.product-svg');
            if (productImage) {
                productImage.style.animation = 'pulse 1s ease-in-out infinite';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const productImage = this.querySelector('.product-svg');
            if (productImage) {
                productImage.style.animation = 'pulse 3s ease-in-out infinite';
            }
        });
    });
    
    // Form handling
    const contactForm = document.querySelector('.form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Simulate form submission
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            
            setTimeout(() => {
                submitButton.textContent = 'Message Sent!';
                submitButton.style.background = '#16a34a';
                
                setTimeout(() => {
                    submitButton.textContent = originalText;
                    submitButton.disabled = false;
                    submitButton.style.background = '';
                    this.reset();
                }, 2000);
            }, 1500);
            
            // Here you would normally send the data to your server
            console.log('Form data:', data);
        });
    }
    
    // Add to cart functionality
    document.querySelectorAll('.btn-secondary').forEach(button => {
        if (button.textContent.includes('Add to Cart')) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                const originalText = this.textContent;
                this.textContent = 'Added!';
                this.style.background = '#16a34a';
                this.style.color = 'white';
                
                // Add shake animation
                this.style.animation = 'shake 0.5s ease-in-out';
                
                setTimeout(() => {
                    this.textContent = originalText;
                    this.style.background = '';
                    this.style.color = '';
                    this.style.animation = '';
                }, 1500);
                
                // Show notification
                showNotification('Added to cart!', 'success');
            });
        }
    });
    
    // Notification system
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#16a34a' : '#d62828'};
            color: white;
            padding: 12px 24px;
            border-radius: 10px;
            z-index: 10000;
            animation: slideInRight 0.3s ease-out;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease-out forwards';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
    
    // Add notification animations
    const notificationStyle = document.createElement('style');
    notificationStyle.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
        
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
        }
    `;
    document.head.appendChild(notificationStyle);
    
    // Parallax effect for hero section
    function parallaxScroll() {
        const scrolled = window.pageYOffset;
        const heroVisual = document.querySelector('.hero-visual');
        
        if (heroVisual) {
            heroVisual.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
        
        // Floating elements parallax
        document.querySelectorAll('.floating-petal').forEach((petal, index) => {
            const speed = 0.3 + (index * 0.1);
            petal.style.transform = `translateY(${scrolled * speed}px)`;
        });
    }
    
    window.addEventListener('scroll', throttle(parallaxScroll, 10));
    
    // Typing effect for hero title
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }
    
    // Initialize typing effect for hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.innerHTML;
        // Uncomment to enable typing effect
        // setTimeout(() => typeWriter(heroTitle, originalText, 50), 1000);
    }
    
    // Counter animation for stats
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        function updateCounter() {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start) + (target > 1000 ? '+' : '');
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target + (target > 1000 ? '+' : '');
            }
        }
        
        updateCounter();
    }
    
    // Initialize counter animations when stats come into view
    const stats = document.querySelectorAll('.stat-number');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.textContent);
                if (!isNaN(target)) {
                    animateCounter(entry.target, target);
                    observer.unobserve(entry.target);
                }
            }
        });
    });
    
    stats.forEach(stat => observer.observe(stat));
    
    // Lazy loading for images (if any are added later)
    function lazyLoadImages() {
        const images = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries) => {
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
    
    lazyLoadImages();
    
    // Performance optimization: throttle function
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }
    
    // Easter egg: Konami code
    let konamiCode = [];
    const konamiSequence = [
        'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
        'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
        'KeyB', 'KeyA'
    ];
    
    document.addEventListener('keydown', function(e) {
        konamiCode.push(e.code);
        konamiCode = konamiCode.slice(-konamiSequence.length);
        
        if (konamiCode.join(',') === konamiSequence.join(',')) {
            // Easter egg activated!
            document.body.style.animation = 'rainbow 2s linear infinite';
            
            const easterEggStyle = document.createElement('style');
            easterEggStyle.textContent = `
                @keyframes rainbow {
                    0% { filter: hue-rotate(0deg); }
                    100% { filter: hue-rotate(360deg); }
                }
            `;
            document.head.appendChild(easterEggStyle);
            
            showNotification('Konami Code Activated!', 'success');
            
            setTimeout(() => {
                document.body.style.animation = '';
            }, 5000);
            
            konamiCode = [];
        }
    });
    
    // Instagram Integration
    function loadInstagramPhotos() {
        const instagramGrid = document.getElementById('instagram-grid');
        if (!instagramGrid) return;
        
        // Configuration - Fancy Florist Instagram Integration
        const INSTAGRAM_CONFIG = {
            // Instagram account details
            username: 'fancyflorist_kh',
            profileUrl: 'https://www.instagram.com/fancyflorist_kh/',
            
            // Option 1: Use Instagram Basic Display API (requires app setup)
            accessToken: 'YOUR_INSTAGRAM_ACCESS_TOKEN', // Replace with your token
            userId: 'YOUR_INSTAGRAM_USER_ID', // Replace with your user ID
            
            // Option 2: Use a third-party service (recommended for easier setup)
            useThirdParty: true, // Set to true to use fallback method
            fallbackPhotos: [
                'https://images.unsplash.com/photo-1563241527-3004b7be5468?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                'https://images.unsplash.com/photo-1563241527-3004b7be5468?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                'https://images.unsplash.com/photo-1563241527-3004b7be5468?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                'https://images.unsplash.com/photo-1563241527-3004b7be5468?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
            ]
        };
        
        // Function to create Instagram photo elements
        function createInstagramPhoto(photoUrl, index) {
            const photoItem = document.createElement('div');
            photoItem.className = 'instagram-item';
            photoItem.setAttribute('data-aos', 'zoom-in');
            photoItem.setAttribute('data-aos-delay', (index * 100).toString());
            
            const img = document.createElement('img');
            img.src = photoUrl;
            img.alt = `Instagram photo ${index + 1}`;
            img.className = 'instagram-img';
            img.loading = 'lazy';
            
            // Add click handler to open Instagram profile
            photoItem.addEventListener('click', function() {
                window.open(INSTAGRAM_CONFIG.profileUrl, '_blank');
            });
            
            photoItem.appendChild(img);
            return photoItem;
        }
        
        // Function to fetch Instagram photos via API
        async function fetchInstagramPhotos() {
            if (INSTAGRAM_CONFIG.useThirdParty || !INSTAGRAM_CONFIG.accessToken) {
                return INSTAGRAM_CONFIG.fallbackPhotos;
            }
            
            try {
                const response = await fetch(
                    `https://graph.instagram.com/me/media?fields=id,media_type,media_url,permalink&access_token=${INSTAGRAM_CONFIG.accessToken}`
                );
                
                if (!response.ok) {
                    throw new Error('Failed to fetch Instagram photos');
                }
                
                const data = await response.json();
                const imagePhotos = data.data
                    .filter(item => item.media_type === 'IMAGE')
                    .slice(0, 8)
                    .map(item => item.media_url);
                
                return imagePhotos.length > 0 ? imagePhotos : INSTAGRAM_CONFIG.fallbackPhotos;
            } catch (error) {
                console.warn('Instagram API error:', error);
                return INSTAGRAM_CONFIG.fallbackPhotos;
            }
        }
        
        // Load and display photos
        async function displayInstagramPhotos() {
            try {
                const photos = await fetchInstagramPhotos();
                
                // Clear loading state
                instagramGrid.innerHTML = '';
                
                // Create photo elements
                photos.slice(0, 8).forEach((photoUrl, index) => {
                    const photoElement = createInstagramPhoto(photoUrl, index);
                    instagramGrid.appendChild(photoElement);
                });
                
                // Trigger animations
                setTimeout(() => {
                    animateOnScroll();
                }, 100);
                
            } catch (error) {
                console.error('Error loading Instagram photos:', error);
                
                // Show error state
                instagramGrid.innerHTML = `
                    <div class="instagram-error" style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
                        <p style="color: var(--muted); margin-bottom: 1rem;">Unable to load Instagram photos</p>
                        <button onclick="loadInstagramPhotos()" class="btn btn-secondary">Try Again</button>
                    </div>
                `;
            }
        }
        
        // Initialize Instagram photos
        displayInstagramPhotos();
    }
    
    // Load Instagram photos when DOM is ready
    loadInstagramPhotos();
    
    // Initialize everything
    console.log('Fancy Florist website loaded successfully!');
    
    // Sparkle animations removed for cleaner design
    
    // Welcome message
    setTimeout(() => {
        showNotification('Welcome to Fancy Florist!', 'success');
    }, 1000);
});

