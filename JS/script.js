function updateClock() {
    const now = new Date();
    const hour = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    document.getElementById("hour").textContent = String(hour).padStart(2, '0');
    document.getElementById("minute").textContent = String(minutes).padStart(2, '0');
    document.getElementById("second").textContent = String(seconds).padStart(2, '0');
}

setInterval(updateClock, 1000);
updateClock(); 

const toggle = document.getElementById('toggleDarkMode');

toggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});
