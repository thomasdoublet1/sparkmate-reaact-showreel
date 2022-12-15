import React from 'react';

const Checkbox = (props) => {
    const { changed, id, isSelected, label, value } = props;
    return (
        <div className="checkbox">
            <input
                id={id}
                onChange={changed}
                value={value}
                type="checkbox"
                checked={isSelected}
            />
            <label htmlFor={id}>{label}</label>
        </div>
    );
};

export default Checkbox;