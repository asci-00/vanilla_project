class ErrorPage extends Component{
    constructor({target, inner}) {
        this.target = document.getElementById(target)
        this.msgBox = document.getElementById(inner)
    }
    setState(message) { this.msgBox.innerHTML = message }
    display(flag) { 
        if(this.target) { 
            flag ? this.target.style.display = 'block' : this.target.style.display = 'none' 
        }
    }
}