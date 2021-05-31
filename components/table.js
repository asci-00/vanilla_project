class Table {
<<<<<<< HEAD
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
=======
    constructor({target, column}) {
        this.target = document.getElementById(target)
        this.column = column
    }
    setState(list) {
        this.getStructor()
        //let object = document.getElementById(this.target)
        let view = list.map(item => {
            let tr = document.createElement('tr')
            this.column.forEach((col_name, idx) => {
                let td = document.createElement('td')
>>>>>>> 8f75df4dab6a6c0529c71adb92167efba3be62ff
                td.setAttribute('data-title', col_name)
                td.innerHTML = item[idx]
                tr.appendChild(td)
            })
<<<<<<< HEAD
            tr.addEventListener('click', () => this.clickEvent(_idx))
            return tr
        }); view.forEach(item => this.table.appendChild(item))
    }
    display(flag) { if(this.table) { flag ? this.table.style.display = 'table' : this.table.style.display = 'none' } }
    getStructor() {
        if(this.columns === this.hist) {
            this.hist = this.columns
            return document.getElementById('uniq_table')
        }
        const   table = document.createElement('table'),
                thead = document.createElement('thead'),
                tr = document.createElement('tr')
        this.columns.forEach(col_name => {
            const th = document.createElement('th'); th.innerHTML = col_name
            tr.appendChild(th)
        })
        thead.appendChild(tr); table.appendChild(thead);
        table.id = 'uniq_table'; this.target.innerHTML = ''
        this.target.appendChild(table)
        this.table = table
    }
}
=======
            return tr
        })
    }
    getStructor() {
        let table = document.createElement('table'),
            thead = document.createElement('thead'),
            tr = document.createElement('tr')
        this.column.forEach(col_name => {
            let th = document.createElement('th'); th.innerHTML = col_name
            tr.appendChild(th)
        })
        thead.appendChild(tr); table.appendChild(thead);
        this.target.innerHTML = ''
        this.target.appendChild(table)
    }
}

>>>>>>> 8f75df4dab6a6c0529c71adb92167efba3be62ff
