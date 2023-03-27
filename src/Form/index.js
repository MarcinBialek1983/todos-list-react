import { useState } from "react";
import "./style.css"

const Form = ({addNewTask}) => {
const [ newTaskContet, setNewTaskContent ] = useState("");

const onFormSubmit = (event) => {
    event.preventDefault();
    addNewTask(newTaskContet.trim());
    setNewTaskContent("");
}
    return (
        <form 
        className="form"
        onSubmit={onFormSubmit}>
            <input 
            className="form__input" 
            placeholder="Co jest do zrobienia?"
            value={newTaskContet}
            onChange={({target}) => setNewTaskContent(target.value)} />
            <button className="form__button">Dodaj zadanie</button>
        </form>
    )
};

export default Form;