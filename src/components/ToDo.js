
import { useState } from 'react';
import {ToDoStyle1} from './styles/ToDoStyle';
import Task from './Task';
import { InputStyle } from './styles/InputStyle';
const ToDo = () => {

    let nextid = 0;
    const [newTask, setNewTask] = useState("");
    const [tasks, setTasks] = useState([]);

    const handleToDoSubmit = (event)=>{
        event.preventDefault();

        // add to list of tasks 
        setTasks([
            ...tasks,
            {id: nextid++, text: newTask} 
          ]);
    }

    

    return ( 

            <ToDoStyle1>
                To Do List
                <form onSubmit={handleToDoSubmit}>
                    <InputStyle placeholder="add a to do" onChange={(e)=>{
                        setNewTask(e.target.value);
                        console.log(newTask)
                    }}/>
                </form>
                {/* put the list of tasks into the Task componant */}
                {tasks.map(tasks => (
                    <Task key={tasks.id} text={tasks.text} > </Task>
                ))}
            </ToDoStyle1>

     );
}
export default ToDo;