class Table {
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
                td.setAttribute('data-title', col_name)
                td.innerHTML = item[idx]
                tr.appendChild(td)
            })
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

