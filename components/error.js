class ErrorPage {
    constructor({target, inner}) {
        this.target = document.getElementById(target)
        this.msgBox = document.getElementById(inner)
    }
    setState(message) { this.message = message }
    enable() {
        this.msgBox.innerHTML = this.message
        this.target.style.display = 'block'
    }
    disable() { this.target.style.display = 'none' }
}

