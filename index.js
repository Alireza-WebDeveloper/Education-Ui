let btnSideBar = document.querySelector('.btn-sidebar');
let sidebarMenu = document.querySelector('.sidebar-menu');

btnSideBar.addEventListener('click', function () {
  sidebarMenu.classList.toggle('sidebar-menu-active');
});
