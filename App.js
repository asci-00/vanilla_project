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