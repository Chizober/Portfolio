let toggleBtn = document.getElementById('toggle-btn');
let body = document.body;
let darkMode = localStorage.getItem('dark-mode');

const enableDarkMode = () => {
toggleBtn.classList.replace('fa-sun', 'fa-moon');
body.classList.add('dark');
localStorage.setItem('dark-mode', 'enabled');
}

const disableDarkMode = () => {
toggleBtn.classList.replace('fa-moon', 'fa-sun');
body.classList.remove('dark');
localStorage.setItem('dark-mode', 'disabled');
}

if (darkMode === 'enabled') {
enableDarkMode();
}

toggleBtn.onclick = (e) => {
darkMode = localStorage.getItem('dark-mode');
if (darkMode === 'disabled') {
enableDarkMode();
} else {
disableDarkMode();
}
}



let mybutton = document.getElementById("scrollBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
mybutton.style.display = "block";
} else {
mybutton.style.display = "none";
}
}
function topFunction() {
document.body.scrollTop = 0; // For Safari
document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}