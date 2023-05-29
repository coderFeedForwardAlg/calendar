
import {MainStyle1} from './styles/MainStyle';

import ToDo from './ToDo';
import Calendar from './Calendar';
import Auth from './Auth';

// meterial ui stuff 
// import 'date-fns';
// import DateFnsUtils from '@date-io/date-fns' ;
// import {
//     MuiPickersUtilsProvider,
//     KeyboardTimePicker
// } from '@material-ui/pickers';



const Main = () => {
// get list of tasks form firebase 
let tasks = ["run", "clean", "code"]; 
let isCompleted = [true, false, true];


    return ( 
        <div>
            
                <MainStyle1>
                    
                    <ToDo firebaseTasks = {tasks} isCompleted = {isCompleted}/>
                    <Calendar/>
                    {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardTimePicker/>
                    </MuiPickersUtilsProvider> */}
                   <Auth/>

                </MainStyle1>
                
                
        </div>
     );
}
export default Main;