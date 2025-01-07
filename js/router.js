export class Router {
    routes = {}

    add(routeName, page) {
        this.routes[routeName] = page
    }

    route(event) {
        event = event || window.event
        event.preventDefault()
    
        window.history.pushState({}, "", event.target.href)
    
        this.handle()
    }

    handle() {
        // const { pathname } = window.location.pathname
        
        const { pathname } = window.location // desestruturando o objeto
        // "window.location" é um objeto JS que contém informações sobre a URL atual da página, como o protocolo, hostname, pathname, query strings, etc.
        // A desestruturação está extraindo a propriedade "pathname" desse objeto e armazenando seu valor na variável pathname.
    
        const route = this.routes[pathname] || this.routes[404]
        // console.log("antes do fetch")
    
        fetch(route)
        .then(data => data.text())
        .then(html => {
            document.querySelector('#app').innerHTML = html
        })
    }
}