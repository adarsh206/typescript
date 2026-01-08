import { useState, type ChangeEvent, type FormEvent, type KeyboardEvent, type MouseEvent } from "react"


export function FormExample(){

    const [name, setName] = useState('');
    const [color, setColor] = useState('red');

    function handleNameChange(event : ChangeEvent<HTMLInputElement>){

        setName(event.currentTarget.value)
        setName(event.target.value)
    }

    function handleButtonClick(event : MouseEvent<HTMLButtonElement>){

        event.preventDefault()
    }

    function handleKeyDown(event : KeyboardEvent<HTMLInputElement>){

        if(event.key === "Enter"){
            console.log("Enter Pressed");
        }

       // event.key === 'Enter' -> do this or else do that
    }

    function handleColorChange(event : ChangeEvent<HTMLSelectElement>){

        setColor(event.target.value);

    }

    function handleFinalFormSubmit(event : FormEvent<HTMLFormElement>){

        event.preventDefault();
        // submit the form

    }

    return (
        <form onSubmit={handleFinalFormSubmit}>
            <input value={name} placeholder="Enter Your Name" onChange={handleNameChange} onKeyDown={handleKeyDown}/>

            <select value={color} onChange={handleColorChange}>
                <option value='red'>Red</option>
                <option value='blue'>Blue</option>
            </select>

            <button type="submit" onClick={handleButtonClick}>Click</button>
            <h1>{color}</h1>
        </form>
    )
}