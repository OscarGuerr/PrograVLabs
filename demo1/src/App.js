import React, {useState} from 'react';

//importar componentes
import GoalList from './components/GoalList/GoalList.js'
import NewGoal from './components/NewGoal/NewGoal.js'
import './App.css';

function App() {

  //Creamos hook para update de datos
  const [weekGoals, setweekGoals] = useState([
    {id: 'wg1', text: 'Bañar a los perros.'},
    {id: 'wg2', text: 'Leer el capitulo 2 del libro.'},
    {id: 'wg3', text: 'Hacer 3 dias de ejercicio.'},
    {id: 'wg4', text: 'Hacer la tarea del curso'}
  ]);

  const addNewGoHandler = (newGoal) => {
    setweekGoals(weekGoals.concat(newGoal));
    console.log(weekGoals);
  }

  return (
    <div>
      <h2 className="goals-title"> Objetivos de la Semana</h2>
      <NewGoal onAddGoal ={addNewGoHandler} /> {/* Componente para agregar nueva meta */}
      <GoalList goals={weekGoals} /> {/* Importamos componente Lista de Metas */}
    </div>
  );
}

export default App;
