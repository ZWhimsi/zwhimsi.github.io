document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    menuToggle.addEventListener('click', () => {
      document.body.classList.toggle('sidebar-open');
    });
  });
  