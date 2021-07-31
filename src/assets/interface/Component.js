class Component {
    constructor(element) {
        this.target = document.getElementById(element)
        this.component = null
        if(this.target === null) throw { message : `${element} is not dom id` }
    }
    constructor(element, state) {
        this(element)
        this.state = state
    }
    setState(state) {
        this.state = {...this.state, state}
        this.applyDOM()
    }
    getElement() { return this.component }
}