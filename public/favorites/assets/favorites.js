document.querySelectorAll('.gallery a[data-id]').forEach(link => {
  // Get existing count or default to 0
  const id = link.dataset.id;
  let count = localStorage.getItem(`clicks_${id}`) || 0;

  // Create and show count element
  const countSpan = document.querySelector(`.click-count[data-id="${id}"]`);

  countSpan.className = 'click-count';
  countSpan.textContent = `${count} clicks`;

  // Update count on click
  link.addEventListener('click', () => {
    let newCount = parseInt(localStorage.getItem(`clicks_${id}`) || '0') + 1;
    localStorage.setItem(`clicks_${id}`, newCount);
    countSpan.textContent = `${newCount} clicks`;
});
});


document.querySelectorAll('.accordion-header').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    const isOpen = content.classList.toggle('open');
    button.classList.toggle('open', isOpen); 
  });
});


const themeToggle = document.getElementById('theme-toggle');

// Check for saved theme or default to light
const savedTheme = localStorage.getItem('theme') || 'light';
console.log('Saved theme:', savedTheme);
document.documentElement.setAttribute('data-theme', savedTheme);
themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

themeToggle.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  console.log('Current theme:', currentTheme);
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
});