// PWA Initialization Script
(function() {
  'use strict';
  
  // Register service worker
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/sw.js')
        .then(function(registration) {
          console.log('SW registered: ', registration);
        })
        .catch(function(registrationError) {
          console.log('SW registration failed: ', registrationError);
        });
    });
  }

  // iOS PWA detection and improvements
  if (navigator.standalone) {
    // Running as PWA on iOS
    document.body.classList.add('ios-pwa');
  }

  // Prevent zoom on double tap for better PWA experience
  let lastTouchEnd = 0;
  document.addEventListener('touchend', function (event) {
    const now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
      event.preventDefault();
    }
    lastTouchEnd = now;
  }, false);

  // Add to homescreen prompt for iOS
  function isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  }

  function isInStandaloneMode() {
    return ('standalone' in window.navigator) && (window.navigator.standalone);
  }

  // Show iOS install prompt
  if (isIOS() && !isInStandaloneMode()) {
    const iosInstallPrompt = document.createElement('div');
    iosInstallPrompt.className = 'ios-install-prompt';
    iosInstallPrompt.innerHTML = `
      <div style="
        position: fixed;
        bottom: 20px;
        left: 20px;
        right: 20px;
        background: linear-gradient(135deg, #3b82f6, #8b5cf6);
        color: white;
        padding: 16px;
        border-radius: 12px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        z-index: 1000;
        text-align: center;
        font-size: 14px;
      ">
        <div style="margin-bottom: 8px; font-weight: 600;">Install EduApp</div>
        <div style="margin-bottom: 12px; opacity: 0.9;">
          Add to your home screen for the full app experience
        </div>
        <div style="font-size: 12px; opacity: 0.8;">
          Tap the share button <span style="font-size: 16px;">⎮</span> and select "Add to Home Screen"
        </div>
        <button onclick="this.parentElement.parentElement.remove()" 
                style="
                  position: absolute;
                  top: 8px;
                  right: 8px;
                  background: none;
                  border: none;
                  color: white;
                  font-size: 18px;
                  cursor: pointer;
                  opacity: 0.7;
                ">×</button>
      </div>
    `;

    // Show prompt after 3 seconds
    setTimeout(() => {
      if (!sessionStorage.getItem('ios-prompt-shown')) {
        document.body.appendChild(iosInstallPrompt);
        sessionStorage.setItem('ios-prompt-shown', 'true');
      }
    }, 3000);
  }
})();