class Treatment {
    constructor({target}) {
        this.target = document.getElementById(target)
        this.display(false)
    }
    getItemStructor({video, measure}) {
        const   result = document.createElement('div'),
                video_container = document.createElement('div'),
                treatment = document.createElement('div'),
                video = document.createElement('video')

        result.className = 'result'
        video_container.className = 'video'
        treatment.className = 'treatment'

        Object.keys(measure).map(key => {
            const   item = document.createElement('div'),
                    key = document.createElement('div'),
                    value = document.createElement('span')
            key.innerHTML = key; value.innerHTML = measure[key]
            item.appendChild(key); item.appendChild(value)
            treatment.appendChild(item)
        })
        result.appendChild(video)
        result.appendChild(treatment)
        return result
    }
    setState(results) {
        
    }
    display(flag) { flag ? this.target.style.display = 'grid' : this.target.style.display = 'none' }
}