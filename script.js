// Theme Toggle Logic
const themeToggleBtn = document.getElementById('theme-toggle');
const rootElement = document.documentElement;

// Check for saved theme in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    rootElement.setAttribute('data-theme', savedTheme);
} else {
    // Check for system preference
    const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (userPrefersDark) {
        rootElement.setAttribute('data-theme', 'dark');
    }
}

// Toggle event listener
themeToggleBtn.addEventListener('click', () => {
    const currentTheme = rootElement.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        rootElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    } else {
        rootElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
});
