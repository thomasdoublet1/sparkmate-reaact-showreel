import React from 'react';
import {keyboard} from "@testing-library/user-event/dist/keyboard";

const InputField = (props) => {
    const {id, type, label, placeholder, value, onChange, onEnter} = props;

    const handleChange = (event) => {
        if(event.key === 'Enter')
            onEnter();
    }



    return (
        <div className={"input-field"}>
            <input onid={id} placeholder={placeholder} value={value} type={type} onChange={onChange} onKeyPress={handleChange}/>
            <label htmlFor={id}>{label}</label>
        </div>
    );
};

export default InputField;