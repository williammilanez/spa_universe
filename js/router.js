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
        const { pathname } = window.location
        const route = this.routes[pathname] || this.routes[404]

        fetch(route)
            .then(data => {
                if (!data.ok) throw new Error('Page not found')
                return data.text()
            })

            .then(html => {
                document.querySelector('#app').innerHTML = html

                // alterar a imagem de fundo com base na rota
                const body = document.body
                switch (pathname) {
                    case '/':
                        body.style.backgroundImage = "url('./images/mountains-universe-1.png')"
                        break
                    case '/the_universe':
                        body.style.backgroundImage = "url('./images/mountains-universe-2.png')"
                        break
                    case '/exploration':
                        body.style.backgroundImage = "url('./images/mountains-universe-3.png')"
                        break
                    default:
                        body.style.backgroundImage = "none"
                        break
                }

                body.style.backgroundSize = 'cover'
                body.style.backgroundPosition = 'center'
                body.style.backgroundRepeat = 'no-repeat'
                body.style.height = '100vh'
            })

            .catch(() => {
                // caso o fetch falhe, redireciona para 404
                window.location.href = '/pages/404.html'
            })
    }
}