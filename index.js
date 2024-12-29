document.querySelector('.menu-icon').addEventListener('click', function() {
    document.getElementById('menu-toggle').checked = document.getElementById('menu-toggle').checked;
});

document.querySelectorAll('#navbar a').forEach(link => {
    link.addEventListener('click', function() {
        document.getElementById('menu-toggle').checked = false;
    });
});