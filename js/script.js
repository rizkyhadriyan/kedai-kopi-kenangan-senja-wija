// Toggle class active
const navbarNav = document.querySelector
    ('.navbar-nav');
// ketika humbuger menu diklik
document.querySelector('#humburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// Klik di  luar sidebar untuk menghilangkan  nav
const humburger = document.querySelector('#humburger-menu');
document.addEventListener('click', function (e) {
    if (!humburger.contains(e.target) && !navbarNav.contains(e.target))
        navbarNav.classList.remove('active');

})