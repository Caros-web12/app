import React from "react";
import LessInput from "../../State/StateLessinputs/Lessinputs";
import './AddTasks.css'
import FullInput from "../../State/Statefullinputs/FullInput";

const AddTasks = () => {
    
    const addNameForOnChangeInput = (text) => {
        console.log (text);
    }
    return (
        <div className="add-tasks-container">
            <form className="add-tasks-container__add-task-form">
                <div className="add-tasks-maintaner">
                    <p>Исполнитель</p>
                    <LessInput placeholder="Ваше имя" type='text' onChangeProps={addNameForOnChangeInput}/>
                    <LessInput placeholder="Вашу фамилию" type='text' onChangeProps={addNameForOnChangeInput}/>
                    <LessInput placeholder="Ваше отчество" type='text' onChangeProps={addNameForOnChangeInput}/>
                </div>
                <div>
                    <FullInput localType='date'/>
                </div>
            </form>

        </div>
    )
}
export default AddTasks;