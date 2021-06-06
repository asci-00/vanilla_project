class Info {
    constructor({target, name_id, number_id}) {
        this.target = document.getElementById(target)
        this.name = document.getElementById(name_id)
        this.number = document.getElementById(number_id)
    }
    setState({name, number}) {
        this.name.innerHTML = name
        this.number.innerHTML = number
    }
    display(flag) { if(this.target) { 
        flag ? this.target.style.display = 'block' : this.target.style.display = 'none' }
    }
}