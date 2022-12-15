import React, {useEffect, useState} from 'react';
import Button from "../../components/Button";
import InputField from "../../components/inputs/InputField";
import store from "../../reducers/store";

const StoreDemo = () => {

    let [currentStoredPrompt, setCurrentStoredPrompt] = useState("");
    let [prompt, setPrompt] = useState("Spark");
    let [updating, setUpdating] = useState(false);

    useEffect(() => {
        setCurrentStoredPrompt(store.getState()?.content);
    }, [updating])


    const onSubmit = ()=>{
        store.dispatch({type:"test", payload: prompt});
        setUpdating(!updating);
    }


    return (
        <div className={"store-demo"}>
            <h1>Save Something in the store</h1>
            <InputField id={1} type={"text"} placeholder={"Write a prompt"} value={prompt} onChange={(e) => setPrompt(e.target.value)} onEnter={() => onSubmit()}/>
            <Button onClick={() => onSubmit()} variant="primary" title={"Save the prompt in the Store"}/>

            <p>Prompt saved in the store : {currentStoredPrompt}</p>
        </div>
    );
};

export default StoreDemo;