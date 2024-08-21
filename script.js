document.addEventListener("DOMContentLoaded", function() {
    const pages = document.querySelectorAll('.form-page');
    let currentPage = 0;

    function showPage(index) {
        pages.forEach((page, i) => {
            page.classList.toggle('active', i === index);
        });
    }

    document.getElementById('next-1').addEventListener('click', () => {
        currentPage = 1;
        showPage(currentPage);
    });

    document.getElementById('next-2').addEventListener('click', () => {
        currentPage = 2;
        showPage(currentPage);
    });

    document.getElementById('prev-2').addEventListener('click', () => {
        currentPage = 0;
        showPage(currentPage);
    });

    document.getElementById('prev-3').addEventListener('click', () => {
        currentPage = 1;
        showPage(currentPage);
    });

    showPage(currentPage);
});

