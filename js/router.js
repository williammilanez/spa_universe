export class Router {
    routes = {}

    add(routeName, page) {
        this.routes[routeName] = page
    }

    route(event) {
        event = event || window.event;
        event.preventDefault();
    
        const anchor = event.target.closest('a'); // encontra o elemento <a> mais próximo
        if (!anchor) return; // garante que há um link válido
    
        const href = anchor.getAttribute('href');
        window.history.pushState({}, "", href);
        this.handle();
    }

    handle() {
        const { pathname } = window.location
        const route = this.routes[pathname] || this.routes[404]

        fetch(route)
        .then(data => data.text())
        .then(html => {
            document.querySelector('#app').innerHTML = html
        })
    }
}