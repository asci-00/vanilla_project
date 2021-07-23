class Component {
    constructor(element) { 
        this.target = document.getElementById(element)
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
    applyDOM() { /*변경사항 추적후 DOM에 반영 this.child.setState() => child에게 state 전파*/ }
    getElementObject() { return this.root }
}