class Info {
    constructor({target}) {

    }
    setState({name, number}) {

    }
    getStructor() {
        return (`
        <div id="profile">
            <div class="user-info">
            <div class="profile-pic"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/584938/bg_33.png">
            </div>
            <div class="username">
                <div class="name"><span class="verified"></span>@John Doe</div>
                <div class="about">Frontend developer and coffee lover</div>
            </div>
            </div>
        </div>`)
    }
}
