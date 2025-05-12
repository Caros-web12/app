import React, { useState } from "react";
import AddTasks from "./AddTasks/AddTasks.jsx";

const TaskManager = () => {
    
    const [addTaskIsOpened, setAddTaskIsOpened] = useState(false);

    const [TasksList, setTaskList] = useState([]);
    const [task, setTask] = useState({});

    const OnCloseAddTask = () => {
        setAddTaskIsOpened(false);
    }

    const onAdd = (e) => {
        const obj = (Object.values(e.target).reduce((obj, field) => { obj[field.name] = field.value; return obj }, {}));
        setTask(obj);
        setTaskList(...TasksList, obj);

        }

    

    return (
        <div className='tasks-container'>
            {addTaskIsOpened &&<div className="middle-ware-for-pop-up"></div>}
            <button className='btn tasks-container__add-task-button' onClick={() => setAddTaskIsOpened (!addTaskIsOpened)}>
                Добавить задачу
                </button>
            {addTaskIsOpened && <AddTasks onClose={OnCloseAddTask} onAdd={onAdd}/>}
            <TasksList tasks={TasksList | []}/>
        </div>
    )
}
export default  TaskManager;