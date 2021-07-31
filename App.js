class App extends Component{
    constructor() {}
    get url() {

    }
}

const app = new App()
app.appendChild(    //app의 state 중 props에 해당되는것만 component의 props에 전달
    Router.registComponent({

    }),
    ['url', ]   //props
)

{/* <nav id="search"></nav>
<div id="profile">
    <div class="user-info">
    <div class="profile-pic"><img src="assets/img/profile.png">
    </div>
    <div class="username">
        <div class="name">
            <span class="verified" id="hName"></span>
        </div>
        <div class="about" id="number"></div>
    </div>
    </div>
</div>
<section id="wrap">
    <div id="title"></div>
    <section id="content"></section>
</section>
<div id="err"><div class="fof"><h1 id="err-message"></h1></div></div> */}