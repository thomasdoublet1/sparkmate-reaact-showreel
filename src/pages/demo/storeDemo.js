import React from 'react';
import Button from "../../components/Button";
import InputField from "../../components/inputs/InputField";

const StoreDemo = () => {

    const onSubmit = ()=>{

    }

    return (
        <div className={"store-demo"}>
            <h1>Save Something in the store</h1>
            <InputField id={1} type={"text"} placeholder={"Write a prompt"} value={"Spark"}/>
            <Button onClick={"onSubmit"} variant="primary" title={"Save the prompt in the Store"}/>

            <p>The current prompt in the store is</p>
        </div>
    );
};

export default StoreDemo;