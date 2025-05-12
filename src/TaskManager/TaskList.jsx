import React from "react";

const TasksList = (tasks) => {
    return (
        <div className="tasks-container">
            <p>Task List</p>
            {tasks.map((task, index) => {
                return(
                    <div key={index}>
                        <p>{index + 1}</p>
                        <p>{task.name}</p>
                        <p>{task.surname}</p>
                        <p>{task.lastname}</p>
                            <div>
                                {task.dec}
                            </div>
                    </div>    
                    
)
            })}
        </div>
    )
};
export default TasksList;