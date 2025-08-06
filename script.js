const toggleBtn = document.getElementById('toggleSidebar');
const sidebar = document.querySelector('.sidebar');

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('show');

    
    if (sidebar.classList.contains('show')) {
       
        toggleBtn.textContent = "☰";
    }
});
