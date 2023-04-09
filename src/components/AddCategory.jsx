import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('');
    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSumit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length > 2) {
            onNewCategory(inputValue);
            setInputValue('');
        }
    };

    return (
        <form onSubmit={onSumit} action="">
            <input
                type="text"
                placeholder="Buscar gifts"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
};