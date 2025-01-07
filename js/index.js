import { Router } from './router.js'

const router = new Router()
router.add("/", "/pages/home.html")
router.add("/the_universe", "/pages/the_universe.html")
router.add("/exploration", "/pages/exploration.html")
router.add(404, "/pages/404.html")

router.handle()

window.onpopstate = () => router.handle() // serve para monitorar eventos de navegação no histórico do navegador, como os cliques nos botões "voltar" ou "avançar"
// O "onpopstate" pode ser usado em:
// aplicações que usam navegação baseada em JS, como SPA.
// para manter a URL sincronizada com o estado da aplicação.
// para manipular conteúdo dinamicamente sem recarregar a página.

window.route = () => router.route()