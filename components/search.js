class Search {
    constructor({target, onSubmit}) {
        this.onSubmit = onSubmit
        this.target = document.getElementById(target)
        this.target.innerHTML = ''
        this.setInputForm()
    }
    setInputForm() {
        let container = document.createElement('div'),
            text = document.createElement('input'),
            button = document.createElement('input')
        container.className = 'search-wrap'
        setAttributes(text, {
            type : 'text',
            class : 'input',
            placeholder : 'input hospital id',
        });
        setAttributes(button, {
            type : 'button',
            class : 'close-btn',
            value : 'search',
        }); button.addEventListener('click', () => this.onSubmit(text.value))
        container.appendChild(text)
        container.appendChild(button)
        this.target.appendChild(container)
    }
}