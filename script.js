const Sidebar = document.querySelector(".Sidebar");
const toggleBtn = document.querySelector(".toggle-btn");

toggleBtn.addEventListener('click', () => {
Sidebar.classList.toggle('active');
});