import React, { useState } from "react";

const FullInput = ({localType, placeholder, propsName}) => {
    const [isValid, setIsValid] = useState(false);
    const [disabled, setDisabled] = useState(false);

    const isValitDate = (date) => {
        setDisabled(date.split('-')[0] > 2005);
    }
    switch (localType) {
        case 'date':
            return (
                <>
                {disabled && <label>Вы младше 18 лет, к сожалению задача Вам недоступна</label>}
                <input name={propsName} type='date' className={isValid ? 'is-not-valid' : 'valid'} onChange={(e) => isValitDate(e.target.value)}/>
                </>
            );
        case 'password':
            return (
                <input name={propsName} type='password' className={isValid ? 'valid' : 'is-not-valid'}/>
            );
        case 'text-area':
            return (
                <textarea name={propsName} placeholder={placeholder} className='textarea'>

                </textarea>
            )
    }
};

export default FullInput;