let hamburger = document.querySelector('.nav-hamburger');
hamburger.addEventListener('click', function() {
    document.body.classList.toggle('open');

    const navContainer = document.getElementById('nav-container');

    if (document.body.classList.contains('open')) {
        navContainer.style.opacity = '1';
        navContainer.style.top = '0';

        navContainer.style.background = 'rgba(0, 0, 0, 0.75)';
    } else {
        navContainer.style.opacity = '0';
        navContainer.style.top = '-100%';

        navContainer.style.background = 'rgba(0, 0, 0, 0)';

    }
});
