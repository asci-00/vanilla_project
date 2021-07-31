function setAttributes(target, attrs) { for(attr in attrs) { target.setAttribute(attr, attrs[attr]) } }
const searchHandling = async (val, error_container, info_container, table_container) => {
    const info = await Api('/hospital', {id : val})
    if(info.status === 200) {
        error_container.disable()
        const data = await info.json()
        const list = await Api('/patient/list', {hospitalId : val})
        console.log(data)
        //table.setState(info.PatientList)

    } else {
        error_container.setState(`${info.status} ERROR`)
        error_container.enable()
    }
}
class switchView {
    constructor({components}) { this.components = components }
    display(component) {
        this.components.foreach(com => {
            if(com === component) com.display()
            else com.hide()
        })
    }
}