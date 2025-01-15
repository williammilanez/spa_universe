import { Router } from './router.js';

const router = new Router();
router.add("/", "/pages/home.html");
router.add("/the_universe", "/pages/the_universe.html");
router.add("/exploration", "/pages/exploration.html");
router.add(404, "/pages/404.html");

router.handle();

window.onpopstate = () => router.handle(); // serve para monitorar eventos de navegação no histórico do navegador
window.route = () => router.route();