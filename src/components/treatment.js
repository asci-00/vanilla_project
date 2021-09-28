class Video {
    constructor({target, filename, onError}) {
        this.target = target
        this.filename = filename
        this.onError = onError
        this.render()
    }
    render() {
        const source = document.createElement('source')
        Api(`/treatment/info/${this.filename}`).then( res => {
            if(res.status) {
                console.log()
                this.onError(`${res.status} ERROR`)
            } else {
                setAttributes(source, { src : res, type : 'video/mp4' })
                this.target.appendChild(source)
            }
        })
    }
}

class Treatment {
    constructor({target, error}) {
        this.resultBox = document.createElement('div')
        this.target = document.getElementById(target)
        this.resultBox.className = 'result-box'
        this.error = error
        this.display(false)
    }
    onFetchError(msg) {
        if(msg) {
            this.display(false)
            this.error.setState(msg)
            this.error.display(true)
        } else this.error.display(true)
    }
    getItemStructor(video, measure) {
        const   result = document.createElement('div'),
                treatment = document.createElement('div'),
                video_tag = document.createElement('video'),
                video_container = document.createElement('div')
        
        result.className = 'result'
        treatment.className = 'treatment'
        video_container.className = 'video'
        new Video({
            target : video_tag,
            filename : video.fileName,
            onError : msg => { this.onFetchError(msg) }
        })

        Object.keys(measure).forEach(_key => { 
            const   key = document.createElement('div'),
                    item = document.createElement('div'),
                    value = document.createElement('span')
            item.className='item'
            key.innerHTML = _key; value.innerHTML = measure[_key]
            item.appendChild(key); item.appendChild(value)
            treatment.appendChild(item)
        })

        result.appendChild(video_tag); result.appendChild(treatment)
        return result
    }
    setState(results) {
        results.forEach(res => { 
            const {file, ...args} = res
            const child = this.getItemStructor(file, args)
            this.resultBox.appendChild(child)
        })
        this.target.appendChild(this.resultBox)
        this.display(true)
    }
    display(flag) { flag ? this.resultBox.style.display = 'grid' : this.resultBox.style.display = 'none' }
}