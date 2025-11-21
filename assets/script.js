// Upwise Landing Page - Download tracking and effects
document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.querySelector('.download-btn');
    const heroContainer = document.querySelector('.hero-container');
    
    // Track download clicks (anonymous)
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            // Simple download tracking
            console.log('Upwise APK Download initiated at:', new Date().toISOString());
            
            // Add click effect
            this.style.transform = 'translateY(-1px) scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Optional: Send anonymous analytics
            trackDownload();
            
            // Check if file exists before download
            checkFileAvailability();
        });
    }
    
    // Check APK file availability
    function checkFileAvailability() {
        fetch('app-release.apk', { method: 'HEAD' })
            .then(response => {
                if (!response.ok) {
                    showDownloadError();
                }
            })
            .catch(() => {
                showDownloadError();
            });
    }
    
    // Show download error with notification
    function showDownloadError() {
        const notification = document.createElement('div');
        notification.className = 'error-notification';
        notification.innerHTML = `
            <div class="notification-content">
                <span class="error-icon">❌</span>
                <span class="error-text">File APK tidak tersedia. Silakan hubungi developer.</span>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            notification.remove();
        }, 5000);
    }
    
    // Optional: Anonymous download tracking function
    function trackDownload() {
        // Implement your analytics here
        if (typeof gtag !== 'undefined') {
            gtag('event', 'download', {
                'event_category': 'APK',
                'event_label': 'Upwise v1.0.0'
            });
        }
    }
    
    // Performance optimization: Preload APK file
    function preloadAPK() {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = 'app-release.apk';
        document.head.appendChild(link);
    }
    
    // Initialize preload after page load
    window.addEventListener('load', preloadAPK);
    
    // Parallax effect for background
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallax = heroContainer.querySelector('.background-overlay');
        if (parallax) {
            parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
    
    // Mouse move effect for subtle interactivity
    heroContainer.addEventListener('mousemove', function(e) {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        
        const xPercent = (clientX / innerWidth - 0.5) * 2;
        const yPercent = (clientY / innerHeight - 0.5) * 2;
        
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.transform = `translate(${xPercent * 10}px, ${yPercent * 10}px)`;
        }
    });
    
    // Reset position when mouse leaves
    heroContainer.addEventListener('mouseleave', function() {
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.transform = 'translate(0, 0)';
        }
    });
    
    // Add dynamic styles for error notification
    const style = document.createElement('style');
    style.textContent = `
        .error-notification {
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(255, 71, 87, 0.95);
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
            z-index: 1000;
            animation: slideInRight 0.3s ease-out;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .error-icon {
            font-size: 1.2rem;
        }
        
        .error-text {
            font-family: 'Rajdhani', sans-serif;
            font-weight: 500;
        }
        
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
        
        @media (max-width: 480px) {
            .error-notification {
                top: 10px;
                right: 10px;
                left: 10px;
                padding: 0.8rem 1rem;
            }
            
            .error-text {
                font-size: 0.9rem;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
});

// Background image fallback check
window.addEventListener('load', function() {
    const heroContainer = document.querySelector('.hero-container');
    const testImg = new Image();
    
    testImg.onload = function() {
        // Image loaded successfully
        console.log('Background image loaded successfully');
    };
    
    testImg.onerror = function() {
        // Image failed to load, use fallback
        console.log('Background image failed to load, using fallback');
        heroContainer.style.backgroundImage = 'none';
    };
    
    testImg.src = 'assets/background.jpg';
});