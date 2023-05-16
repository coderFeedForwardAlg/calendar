
import {ToDoStyle1} from './styles/ToDoStyle';
import Task from './Task';
const ToDo = () => {

    const tasks = [
        <Task text="first task"/>,
        <Task text="first task"/>,
        <Task text="first task"/>
    ]


    return ( 
        <div>
                <ToDoStyle1>to do list
                    {tasks}
                </ToDoStyle1>
      </div>
     );
}
export default ToDo;