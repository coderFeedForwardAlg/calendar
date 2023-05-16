
import {MainStyle1} from './styles/MainStyle';
import { ToDoStyle1 } from './styles/ToDoStyle';
import { TaskStyle1 } from './styles/TaskStyle';

import ToDo from './ToDo';
import Task from './Task';

const Main = () => {
    return ( 
        <div>
                <MainStyle1>
                    <ToDo/>
                </MainStyle1>
                
        </div>
     );
}
export default Main;