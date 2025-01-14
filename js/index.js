import { Router } from './router.js';

const router = new Router();
router.add("/", "/pages/home.html");
router.add("/the_universe", "/pages/the_universe.html");
router.add("/exploration", "/pages/exploration.html");
router.add(404, "/pages/404.html");

router.handle();

window.onpopstate = () => router.handle(); // serve para monitorar eventos de navegação no histórico do navegador

window.route = () => router.route();

document.addEventListener('DOMContentLoaded', () => {
    const pathname = window.location.pathname;

    if (pathname === '/home') {
        document.querySelector('.home-title + a').style.marginBottom = '17.2rem';
        document.querySelector('.home-title + button').style.marginTop = '2.4rem';
    } else if (pathname === '/the_universe') {
        document.querySelector('.the-universe-title + p').style.marginBottom = '1rem';
        document.querySelector('.the-universe-title + p + a').style.marginBottom = '6.4rem';
    } else if (pathname === '/exploration') {
        document.querySelector('.exploration-title + p').style.marginBottom = '1rem';
        document.querySelector('.exploration-title + p + a').style.marginBottom = '6.4rem';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const pathname = window.location.pathname;
    const links = document.querySelectorAll('nav a');

    links.forEach(link => {
        if (pathname === link.getAttribute('href')) {
            link.classList.add('active');
        }
    });

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            links.forEach(l => l.classList.remove('active'));

            link.classList.add('active');

            window.history.pushState({}, "", link.href);
            router.handle();
        });
    });
});

window.onpopstate = () => router.handle();