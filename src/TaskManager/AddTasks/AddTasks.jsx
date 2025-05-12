import React from "react";
import LessInput from "../../State/StateLessinputs/Lessinputs";
import './AddTasks.css'
import FullInput from "../../State/Statefullinputs/FullInput";

const AddTasks = ({onClose, onAdd, setTask}) => {
    
    const addNameForOnChangeInput = (text) => {
        console.log (text);
    }
    return (
        <div className="add-tasks-container">
            <form className="add-tasks-container__add-task-form" onSubmit={(e) => {
                e.preventDefault();
                onAdd(e.target);
            }}>
                <div className="add-tasks-maintaner">
                    <p className="label">Исполнитель</p>
                    <div className='mainteiner-info-container'>
                    <LessInput placeholder="Ваше имя" type='text' name={'name'} onChangeProps={addNameForOnChangeInput} className='maiteiner-item'/>
                    <LessInput placeholder="Вашу фамилию" type='text' name={'surname'} onChangeProps={addNameForOnChangeInput} className='maiteiner-item'/>
                    <LessInput placeholder="Ваше отчество" type='text' name={'lastname'} onChangeProps={addNameForOnChangeInput} className='maiteiner-item'/>
                    </div>
                </div>
                <div>
                    <p className="label">Введите дату рождения</p>
                    <FullInput name={'date'} localType='date'/>
                </div>
                <div>
                    <p className="label">Описание задачи</p>
                    <FullInput name={'dec'} localType='text-area' placeholder='введите описание задачи'/>
                </div>
                <button className="btn form-btn" onClick={() => (onAdd())}>
                    Добавить
                </button>
                <button className="btn form-btn" onClick={() => (onClose)}>
                    Отмена
                </button>
            </form>

        </div>
    )
}
export default AddTasks;