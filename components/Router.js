class Router {
    constructor(element) {
        this.target = document.getElementById(element)
        if(this.target === null) throw { message : `${element} is not dom id` }
    }
    changeURL(url) {
        this.target.innerHTML = ''
        const item = this.children.find(child => child.url === url)

        if(item) item.Component.applyDOM()

    }
    appendChild({url, Component}) {
        if(url && Component) this.children.push({url, Component})
        else throw { message : 'parameter error' }
    }
}