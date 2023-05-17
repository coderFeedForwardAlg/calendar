
import { useState } from 'react';
import {ToDoStyle1} from './styles/ToDoStyle';
import Task from './Task';
import { InputStyle } from './styles/InputStyle';
const ToDo = () => {

    let newTask = "";

    const [tasks, setTasks] = useState([]);

    const handleToDoSubmit = (event)=>{
        event.preventDefault();
        setTasks([tasks, <Task text={newTask}/>]);
        newTask = "";
        
    }


    return ( 

            <ToDoStyle1>
                To Do List
                <form onSubmit={handleToDoSubmit}>
                    <InputStyle placeholder="add a to do" onChange={(e)=>{
                        newTask = e.target.value;
                        console.log(newTask)
                    }}/>
                </form>
                {tasks}
            </ToDoStyle1>

     );
}
export default ToDo;