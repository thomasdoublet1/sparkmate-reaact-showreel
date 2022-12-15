import React from 'react';

const InputField = (props) => {
    const {id, type, label, placeholder, value} = props
    return (
        <div className={"input-field"}>
            <input id={id} placeholder={placeholder} value={value} type={type}/>
            <label htmlFor={id}>{label}</label>
        </div>
    );
};

export default InputField;