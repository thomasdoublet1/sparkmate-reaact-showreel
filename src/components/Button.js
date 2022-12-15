import React from 'react';

const Button = (props) => {
    return (
        <div className={"clickable button "+props.variant} onClick={props.onClick}>
            {props.title}<i className={"icon"}>{props.icon}</i>
        </div>
    );
};

export default Button;