import '../styles/App.scss';
// import { useState } from 'react';
import { useState } from 'react';

// traductor MIMIMI
function App() {
  const [tasks, setTasks] = useState([
    { task: 'Comprar harina, jamón y pan rallado', completed: true },
    { task: 'Hacer croquetas ricas', completed: true },
    { task: 'Ir a la puerta de un gimnasio', completed: false },
    {
      task: 'Comerme las croquetas mirando a la gente que entra en el gimnasio',
      completed: false,
    },
  ]);

  const handleTaskClick = (ev) => {
    // obtén el índice de la tarea sobre la que se ha hecho click
    const clickedTask = ev.currentTarget.id;
    console.log(clickedTask);

    // Invierte la propiedad completed de la tarea sobre la que se haya hecho clic.
    
  };

  const completed = 'completed';
  const notC = '';
  const renderTasks = () => {
    return tasks.map((task, index) => {
      return (
        <li
          onClick={handleTaskClick}
          className={task.completed ? completed : notC}
          key={index}
          id={index}
        >
          {task.task}
        </li>
      );
    });
  };

  return (
    <div>
      <h1>Lista de cosas</h1>
      <ol>{renderTasks()}</ol>
    </div>
  );
}
export default App;
