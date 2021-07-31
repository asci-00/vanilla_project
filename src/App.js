import Router from '@/components/Router'

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
export default app
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


// let treatmentID = null, 
            //     hospitalID = null, 
            //     patientIDX = null, 
            //     patientList = null, 
            //     treatmentList = null

            // const   setHospitalID = id => {  hospitalID = id; rendering('patients') },
            //         setPatientIDX = idx => { patientIDX = idx; rendering('treatments') },
            //         setTreatmentID = id => { treatmentID = id; rendering('treatment-detail') }

            // const   table = new Table({ target : 'content' }),
            //         error = new ErrorPage({ target : 'err', inner : 'err-message' }),
            //         treatment = new Treatment({ target : 'content', error}),
            //         info = new Info({
            //             target : 'profile',
            //             name_id : 'hName',
            //             number_id : 'number'
            //         }),
            //         search = new Search({
            //             target : 'search',
            //             onSubmit : val => {
            //                 Api('/hospital', {id : val}).then(res => {
            //                     if(res.status) {
            //                         error.setState(`${res.status} ERROR`)
            //                         error.display(true)
            //                     }
            //                     else {
            //                         error.display(false)
            //                         setHospitalID(res.id)
            //                         info.setState({name : res.hospitalName, number : res.tel})
            //                         info.display(true)
            //                     }
            //                 })
            //             }
            //         }), title = document.getElementById('title')

            // const rendering = state => {
            //     switch(state) {
            //         case 'patients':
            //             treatment.display(false)                        
            //             table.setClickEvent(idx => { 
            //                 if(patientList[idx]) setPatientIDX(idx)
            //             })
            //             table.setColumns(['id', 'name', 'residentRegistrationNumber', 'birth', 'phone', 'gender', 'address'])                        
            //             Api('/patient', {hospitalId : hospitalID}).then(res => {
                            
            //                 if(res.state) { 
            //                     error.setState(`${res.state} ERROR`)
            //                     error.display(true)
            //                 } 
            //                 else {
            //                     patientList = res
            //                     title.innerHTML = '환자 목록'
            //                     title.style.display = 'block'
            //                     error.display(false)
            //                     table.setState(patientList.map(data => data['patient']))
            //                 }
            //             }); 
            //             table.display(true)
            //             break
            //         case 'treatments':
            //             treatment.display(false)
            //             table.setClickEvent(idx => { 
            //                 if(patientList[patientIDX]['treatmentDate'][idx]) setTreatmentID(patientList[patientIDX]['treatmentDate'][idx].id)
            //             })
            //             table.setColumns(['id', 'treatmentDate'])
            //             table.setState(patientList[patientIDX]['treatmentDate'])
            //             title.innerHTML = '진료 목록'
            //             title.style.display = 'block'
            //             break
            //         case 'treatment-detail':
            //             table.display(false)                        
            //             Api('/treatment/info', {treatmentId : treatmentID}).then(res => {
            //                 if(res.state) {
            //                     error.setState(`${res.state} ERROR`)
            //                     error.display(true)
            //                 }
            //                 else {
            //                     error.display(false)
            //                     title.innerHTML = '진료 결과'
            //                     title.style.display = 'block'
            //                     treatment.setState(res['analyzes'])
            //                 }
            //             })
            //             break
            //     }
            // }