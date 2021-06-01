class Table {
    constructor({target}) { 
        this.target = document.getElementById(target) 
        this.columns = []
        this.hist = []
        this.clickEvent = () => {}
    }
    setColumns(columns) { this.columns = columns }
    setClickEvent(handler) { this.clickEvent = handler }
    setState(list) {
        this.getStructor()
        const view = list.map((item, _idx) => {
            const tr = document.createElement('tr')
            this.columns.forEach((col_name, idx) => {
                const td = document.createElement('td')
                td.setAttribute('data-title', col_name)
                td.innerHTML = item[col_name]
                tr.appendChild(td)
            })
            tr.addEventListener('click', () => this.clickEvent(_idx))
            return tr
        }); view.forEach(item => this.table.appendChild(item))
    }
    display(flag) { if(this.table) { flag ? this.table.style.display = 'table' : this.table.style.display = 'none' } }
    setTitle(title) { this.title = title }
    getStructor() {
        if(this.columns === this.hist) {
            this.hist = this.columns
            return document.getElementById('uniq_table')
        }

        const   table = document.createElement('table'),
                thead = document.createElement('thead'),
                title = document.createElement('div'),
                tr = document.createElement('tr')

        this.columns.forEach(col_name => {
            const th = document.createElement('th'); th.innerHTML = col_name
            tr.appendChild(th)
        })
        title.innerHTML = this.title
        title.className = 'title'
        thead.appendChild(tr); table.appendChild(thead);
        table.id = 'uniq_table'; this.target.innerHTML = ''
        this.target.appendChild(title)
        this.target.appendChild(table)
        this.table = table
    }
}