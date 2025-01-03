const routes = {
    "/": "/pages/home.html",
    "/the_universe": "/pages/the_universe.html",
    "/exploration": "/pages/exploration.html",
    404: "/pages/404.html",
}

function route(event) {
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, "", event.target.href)

    handle()
}

function handle() {
    // const { pathname } = window.location.pathname
    
    const { pathname } = window.location // desestruturando o objeto
    // "window.location" é um objeto JS que contém informações sobre a URL atual da página, como o protocolo, hostname, pathname, query strings, etc.
    // A desestruturação está extraindo a propriedade "pathname" desse objeto e armazenando seu valor na variável pathname.

    const route = routes[pathname] || routes[404]
    // console.log("antes do fetch")

    fetch(route)
    .then(data => data.text())
    .then(html => {
        document.querySelector('#app').innerHTML = html
    })
}

handle()

window.onpopstate = () => handle() // serve para monitorar eventos de navegação no histórico do navegador, como os cliques nos botões "voltar" ou "avançar"
// O "onpopstate" pode ser usado em:
// aplicações que usam navegação baseada em JS, como SPA.
// para manter a URL sincronizada com o estado da aplicação.
// para manipular conteúdo dinamicamente sem recarregar a página.

window.route = () => route()