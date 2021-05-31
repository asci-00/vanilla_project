class ErrorPage {
    constructor({target, inner}) {
        this.target = document.getElementById(target)
        this.msgBox = document.getElementById(inner)
    }
<<<<<<< HEAD
    setState(message) { this.msgBox.innerHTML = this.message }
    display(flag) { if(this.table) { flag ? this.target.style.display = 'block' : this.target.style.display = 'none' } }
}
=======
    setState(message) { this.message = message }
    enable() {
        this.msgBox.innerHTML = this.message
        this.target.style.display = 'block'
    }
    disable() { this.target.style.display = 'none' }
}

>>>>>>> 8f75df4dab6a6c0529c71adb92167efba3be62ff
