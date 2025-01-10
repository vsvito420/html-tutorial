// Theme handling
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  return savedTheme;
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  
  // Update icon
  updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
  const icon = document.querySelector('.theme-toggle svg');
  if (icon) {
    icon.innerHTML = theme === 'light' 
      ? '<path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>'
      : '<path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>';
  }
}

// Initialize theme and add controls to navigation
document.addEventListener('DOMContentLoaded', () => {
  const currentTheme = initTheme();
  
  // Create theme controls container
  const nav = document.querySelector('nav');
  if (nav) {
    const themeControls = document.createElement('div');
    themeControls.className = 'theme-controls';
    
    // Create and add theme toggle button
    const themeToggle = document.createElement('button');
    themeToggle.className = 'theme-toggle';
    themeToggle.setAttribute('aria-label', 'Theme wechseln');
    themeToggle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"></svg>`;
    themeToggle.onclick = toggleTheme;
    
    // Create brightness control
    const brightnessControl = document.createElement('div');
    brightnessControl.className = 'brightness-control';
    brightnessControl.style.display = document.documentElement.getAttribute('data-theme') === 'dark' ? 'flex' : 'none';
    
    const brightnessSlider = document.createElement('input');
    brightnessSlider.type = 'range';
    brightnessSlider.className = 'brightness-slider';
    brightnessSlider.min = '0.5';
    brightnessSlider.max = '1.5';
    brightnessSlider.step = '0.1';
    brightnessSlider.value = '1';
    
    brightnessSlider.addEventListener('input', (e) => {
      document.documentElement.style.setProperty('--brightness', e.target.value);
    });
    
    // Add brightness icon
    const brightnessIcon = document.createElement('span');
    brightnessIcon.innerHTML = '🌓';
    brightnessIcon.style.fontSize = '16px';
    
    // Assemble controls
    brightnessControl.appendChild(brightnessIcon);
    brightnessControl.appendChild(brightnessSlider);
    themeControls.appendChild(themeToggle);
    themeControls.appendChild(brightnessControl);
    nav.appendChild(themeControls);
    
    // Set initial icon
    updateThemeIcon(currentTheme);
    
    // Update brightness control visibility when theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          brightnessControl.style.display = 
            document.documentElement.getAttribute('data-theme') === 'dark' ? 'flex' : 'none';
        }
      });
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });
  }
});
