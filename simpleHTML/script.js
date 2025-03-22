const toggleBtn = document.getElementById('toggle-theme');
const body = document.body;

toggleBtn.addEventListener('click', () => {
  if (body.classList.contains('dark')) {
    body.classList.replace('dark', 'light');
    toggleBtn.textContent = '🌙 Dark Mode';
  } else {
    body.classList.replace('light', 'dark');
    toggleBtn.textContent = '🌞 Light Mode';
  }
});
