

// controlled components/elements -> which is controlled by states like useState
// use controlled one for complex logic, live validation, cross field logic, derive some kind of UI from the value
// uncontrolled components/elements -> which doesn't controlled by states and only controlled by window objects or window elements like ref
// use uncontrolled one for simple thing like form submit, no re-rendering required or less re-rendering required

import { useRef, useState, type FormEvent } from "react";


function getString(fd : FormData, key : string) : string | null {
    const result = fd.get(key)

    return typeof result === 'string' ? result : null;
}

function getNumber(fd : FormData, key : string) : number | null {
    const extractStringValueFirst = getString(fd, key);

    
    if(extractStringValueFirst === null) return null;

    const convertToNumber = Number(extractStringValueFirst)

    return Number.isFinite(convertToNumber) ? convertToNumber : null;
}



export function UncontrolledForm(){

    const [val, setVal] = useState<string | undefined>(undefined)

    const formRef = useRef<HTMLFormElement | null>(null);

    function handleFormSubmit(e : FormEvent<HTMLFormElement>){

        e.preventDefault();

        const fd = new FormData(e.currentTarget);
        const extractName = getString(fd, 'name') ?? 'No Name';
        const extractNumber = getNumber(fd, 'age');
    }

    return (
        <form onSubmit={handleFormSubmit} ref={formRef}>
            <input name="name" defaultValue="Guest" />
            <input type="number" name="age" defaultValue="18" min={0}/>
            <button type="submit">Submit</button>
            <input value={val}/>
        </form>
    )
}