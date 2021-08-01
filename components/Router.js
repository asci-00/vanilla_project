class Router {
    constructor(element) {
        this.target = document.getElementById(element)
        if(this.target === null) throw { message : `${element} is not dom id` }
    }
    push(url) {
        this.target.innerHTML = ''
        const item = this.router.find(child => child.url === url)

        this.target.appendChild((item ? item.component.getElement() : null/*not found*/))
    }
    appendChild(url, component) {
        if(url && component) this.router.push({url, component})
        else throw { message : 'parameter error' }
    }
    appendChild(items) {
        if(items.length === undefined) items.forEach(child => this.appendChlild(child.url, child.component))
        else this.appendChild(items.url, items.component)
    }
}