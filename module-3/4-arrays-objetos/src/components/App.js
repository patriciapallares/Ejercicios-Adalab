import '../styles/App.scss';
// datos (constante, json, fetch)
// convertirlo en algo que puede entender la app
// filtrar los datos con FILTER (si necesitáramos)

// añadir datos. Añade un nuevo valor a los datos con (setEstado, spread...)

// pintar listados con MAP

import { useState } from 'react';
import originalData from '../data/tasks.json';

const App = () => {
  const [data, setData] = useState(originalData);
  const [search, setSearch] = useState('');
  const [taskNew, setTaskNew] = useState('');

  const handleSearch = (ev) => {
    setSearch(ev.currentTarget.value);
  }

  const handleTaskNew = (ev) => {

    setTaskNew(ev.currentTarget.value)

  }
  
  const handleForm = (ev) =>  {
    ev.preventDefault();
  }

  const handleAddTask = () => {
    const newTaskObject = {
      task: taskNew,
      completed: false
    }

    // haríamos push pero ya no se puede
    // coge lo que ya tenías y añádele el objeto nuevo
    setData([...data,newTaskObject]);
    setTaskNew("");
  }


   // cojo data y le digo: quédate solo con las tareas que incluyan lo queha escrito la usuaria
  const filteredData = data.filter(dataItem => dataItem.task.toLowerCase().includes(search.toLowerCase()))

  const html = filteredData.map((dataItem, index) => {
    // verificación
    let completedClass = null;
    // si completed=true en cada elemento, añade completedClass
    if (dataItem.completed) {
      completedClass = 'completed';
    }

    return (
      <li className={completedClass} key={index}>
        {dataItem.task}
      </li>
    );
  });

  return (
    <div className='App'>
      <form action='' onSubmit={handleForm}>
        Filtrar por : <input type="text" value={search} onChange={handleSearch}/>
      </form>
      <ul>{html}</ul>
      <form action='' onSubmit={handleForm}>
        Añadir tarea : <input type="text" value={taskNew} onChange={handleTaskNew}/>

        <button onClick={handleAddTask}>Guardar</button>
      </form>
    </div>
  );
};

export default App;
