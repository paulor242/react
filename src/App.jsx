// function App(){
//   const nume= 1
//   const num=2
//   let numero=1000

//    return(
//      <div>
//        <h1>hola este es la primera practica de suma de dos numeros en react</h1>
//         <p>el resultado de la suma es {nume+num+numero}</p>
//       </div>
//   )
// }
// export default App;


// import './components/TodoList';
// import parse from 'html-react-parser';
// function TodoList() {
//   const tareas = ["Aprender React", "Hacer un proyecto", "Descansar"];
//   const usuario = "Ana";
//   const htmlCrudo = "<p>Este es un <strong>texto en negrita</strong> renderizado con html-react-parser.</p>";
//   const renderConMap = tareas.map((tarea, index) => (
//     <li key={index} className="tarea">{tarea}</li>
//   ));
//   const renderConForEach = [];
//   tareas.forEach((tarea, index) => {
//     renderConForEach.push(
//       <li key={index} className="tarea">{tarea}</li>
//     );
//   });
//   const renderConFor = [];
//   for (let i = 0; i < tareas.length; i++) {
//     renderConFor.push(
//       <li key={i} className="tarea">{tareas[i]}</li>
//     );
//   }
//   return (
//     <>
//       <h2 className="titulo">Lista de Tareas de {usuario}</h2>
//       <div>{parse(htmlCrudo)}</div>
//       <h3>Con map:</h3>
//       <ul>{renderConMap}</ul>
//       <h3>Con forEach:</h3>
//       <ul>{renderConForEach}</ul>
//       <h3>Con for:</h3>
//       <ul>{renderConFor}</ul>
//     </>
//   );
// }
// export default TodoList;


import { useState } from 'react';
import parse from 'html-react-parser';

function TodoList() {
  const [tareas, setTareas] = useState([
    { id: 1, texto: "Aprender React", completada: true },
    { id: 2, texto: "Hacer un proyecto", completada: false },
    { id: 3, texto: "Descansar", completada: true },
  ]);

  const usuario = "paulo";
  const htmlCrudo = "<p>Este es un <strong>texto en negrita</strong> renderizado con html-react-parser.</p>";

  const [nuevaTarea, setNuevaTarea] = useState("");

  // Agregar nueva tarea
  function agregarTarea() {
    if (nuevaTarea.trim() === "") { 
      return;
    }

    const nueva = {
      id: Date.now(),
      texto: nuevaTarea,
      completada: false
    };

    setTareas([...tareas, nueva]);
    setNuevaTarea(""); // limpiar input
  }

  // Manejar click en checkbox
  const manejarClick = (id) => {
    const nuevasTareas = tareas.map(tarea => {
      if (tarea.id === id) {
        return { ...tarea, completada: !tarea.completada };
      }
      return tarea;
    });
    setTareas(nuevasTareas);
  };

  
  return (
    <>
      <h2 className="titulo">Lista de Tareas de {usuario}</h2>
      <div>{parse(htmlCrudo)}</div>

      <ol>
        {tareas.map((tarea) => (
          <li
            key={tarea.id}
            className="tarea"
            style={{ textDecoration: tarea.completada ? "underline" : "none" }}
          >
            <input
              type="checkbox"
              checked={tarea.completada}
              onClick={() => manejarClick(tarea.id)}
              readOnly
            />
            {tarea.texto} (ID: {tarea.id})
          </li>
        ))}
      </ol>

      <input type="text" value={nuevaTarea} onChange={(e) => setNuevaTarea(e.target.value)} placeholder="Escribe una nueva tarea"/> <br></br>
      <button onClick={agregarTarea}>Agregar tarea</button>
    </>
  );
}

export default TodoList;