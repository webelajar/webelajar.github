document.getElementById('logo2').addEventListener('click', function () {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
    sidebar.classList.toggle('closed');
});

// Menutup sidebar jika area di luar sidebar diklik
document.addEventListener('click', function (event) {
    var sidebar = document.getElementById('sidebar');
    var logo2 = document.getElementById('logo2');

    if (!event.target.closest('#sidebar') && !event.target.closest('#logo2')) {
        sidebar.classList.remove('open');
        sidebar.classList.add('closed');
    }
});
