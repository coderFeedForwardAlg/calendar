
import { useState } from 'react';
import {ToDoStyle1} from './styles/ToDoStyle';
import Task from './Task';
import { InputStyle } from './styles/InputStyle';


const ToDo = (props) => {


    let nextid = 0;
    const [newTask, setNewTask] = useState("");

    // add tasks from firease 
    // get nesisary info into array and put it into OG tasks 
    let arr = [];
    for(let i = 0; i < props.firebaseTasks.length; i++){
        arr.push({id: nextid++, text: props.firebaseTasks[i], isCompleted: props.isCompleted[i]})
    }
    const [tasks, setTasks] = useState(arr);



    const handleToDoSubmit = (event)=>{
        event.preventDefault();
        // add to list of tasks
        //refrence: https://react.dev/learn/updating-arrays-in-state
        setTasks([
            ...tasks,
            {id: nextid++, text: newTask, isCompleted: false} 
          ]);
          
    }

    

    return ( 

            <ToDoStyle1>
                To Do List
                <form onSubmit={handleToDoSubmit}>
                    <InputStyle placeholder="add a task" onChange={(e)=>{
                        setNewTask(e.target.value);
                    }}/>
                </form>
                {/* put the list of tasks into the Task componant */}
                {tasks.map(task => (
                    <Task key={task.id} text={task.text} isCompleted = {task.isCompleted}/>
                ))}
            </ToDoStyle1>

     );
}
export default ToDo;