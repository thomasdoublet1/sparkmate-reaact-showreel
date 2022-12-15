import React, {useState} from 'react';
import Button from "../../components/Button";
import RadioButton from "../../components/inputs/RadioButton";
import Checkbox from "../../components/inputs/Checkbox";

const VariantSelector = () => {

    const [variant, setVariant] = useState("primary");
    const [hasIcon, setHasIcon] = useState(false);

    const variantChangeHandler = (e) => {
        setVariant(e.target.value);
    };

    return (
        <div className={"variant-selector"}>
            <div className={"component-preview-container"}>
                <Button icon={hasIcon && "➝"} Button title={"This is a Button"} variant={variant}/>
            </div>
            <div className={"selection-section-container"}>
                <div className={"selection-section variants-selection"}>
                    <h1>Variants</h1>
                    <br/>
                    <div className="input-btn-container">
                        <RadioButton
                            changed={variantChangeHandler}
                            id="1"
                            isSelected={variant === "primary"}
                            label="Primary"
                            value="primary"
                        />

                        <RadioButton
                            changed={variantChangeHandler}
                            id="2"
                            isSelected={variant === "secondary"}
                            label="Secondary"
                            value="secondary"
                        />

                        <RadioButton
                            changed={variantChangeHandler}
                            id="3"
                            isSelected={variant === "tertiary"}
                            label="Tertiary"
                            value="tertiary"
                        />
                    </div>
                </div>
                <div className={"selection-section"}>
                    <h1>Options</h1><br/>
                    <div className="input-btn-container">
                        <Checkbox
                            changed={()=>setHasIcon(!hasIcon)}
                            id="1"
                            isSelected={hasIcon}
                            label="Icon"
                            value="icon"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VariantSelector;