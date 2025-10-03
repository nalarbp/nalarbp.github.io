// Theme switching utility
export const setTheme = (theme) => {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
};

export const getTheme = () => {
  return 'light'; // Always use light mode
};

export const initTheme = () => {
  setTheme('light'); // Force light mode
};

// Add event listeners for theme buttons
export const setupThemeListeners = () => {
  document.addEventListener('click', (e) => {
    if (e.target.hasAttribute('data-set-theme')) {
      const theme = e.target.getAttribute('data-set-theme');
      setTheme(theme);
    }
  });
};