

import {TaskStyle1} from './styles/TaskStyle';
import { TaskStyle2 } from './styles/TaskStyle';

import { CheckBox } from './styles/CheckBox';
import { useEffect, useState } from 'react';


const Task = (props) => {

    let completed = props.isCompleted; 

    const finishTask = () =>{
        if(completed){
            setTask(<TaskStyle1 >
                <CheckBox onClick={ finishTask}/>
                {props.text}
            </TaskStyle1>);
            completed = false;
        }else{
        setTask( <TaskStyle2 >
                    <CheckBox onClick={ finishTask}/>
                    {props.text}
                </TaskStyle2>);
                completed = true;
        }
        // firbase remove task here !?!?  
    }

    const [task, setTask] = useState(  <TaskStyle1>
                                            <CheckBox onClick={ finishTask}/>
                                            {props.text}
                                        </TaskStyle1>
                                    );

        // make sure that completed tasks are marded as completed 
    useEffect(
        ()=>{
            if(completed){
                setTask(
                    <TaskStyle2 >
                            <CheckBox onClick={ finishTask}/>
                            {props.text}
                        </TaskStyle2>);
                        completed = true;
            }
        }, []
    )
    
    return ( 
        <div>
            {task}
        </div>
       

     );
}
export default Task;