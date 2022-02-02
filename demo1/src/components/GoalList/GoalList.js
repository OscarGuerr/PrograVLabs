import React from "react";

//importamos css
import './GoalList.css'
const GoalList = (props)=> {
    console.log(props.goals);
    return(
        <ul className="goal-list">
            {props.goals.map((goal) => {
                return <li key={goal.id}> <input type="date"/> <br></br> <br></br> <br></br>{goal.text} <br></br> <input type="checkbox"/>  <checkbox type="checkbox"> Meta Realizada</checkbox> </li>
            })}
      </ul>
    )
}

export default GoalList;