import React, {useState} from "react";

import './NewGoal.css';

const NewGoal = (props) =>{
    const [inputText, setInputText] = useState('');

    const newGoalHandler = (event) => {
        event.preventDefault();
        const newGoal = {
            id: 'wg' + Math.floor(Math.random() * 100).toString(),
            text: inputText
             
            
        
        }

        props.onAddGoal(newGoal);
        setInputText = ('');
    
    }

    const textChangeHandler = (event) => {
        setInputText(event.target.value);
    }

    return(
        <form className="new-goal" onSubmit={newGoalHandler}> 
            <input type="text" value={inputText} onChange={textChangeHandler} />
            <button type="submit"> Nueva Meta</button>
            
        </form>
    );
};

export default NewGoal;