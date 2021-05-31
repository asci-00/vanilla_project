class ErrorPage {
    constructor({target, inner}) {
        this.target = document.getElementById(target)
        this.msgBox = document.getElementById(inner)
    }
    setState(message) { this.msgBox.innerHTML = this.message }
    display(flag) { if(this.table) { flag ? this.target.style.display = 'block' : this.target.style.display = 'none' } }
}