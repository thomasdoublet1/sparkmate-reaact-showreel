const RadioButton = (props) => {
    const { changed, id, isSelected, label, value } = props;
    return (
        <div className="radio-button">
            <input
                id={id}
                onChange={changed}
                value={value}
                type="radio"
                checked={isSelected}
            />
            <label htmlFor={id}>{label}</label>
        </div>
    );
};

export default RadioButton;