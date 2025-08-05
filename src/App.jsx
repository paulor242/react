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


import TodoList from "./components/TodoList";

function App(){
  return(
    <div> 
      <h1>mi aplicacion react</h1>
      <h2>las tareas que tienes pendiente</h2>
      <TodoList/>
      
      {/* <h2 className="titulo">este es intentando la suma</h2>
      <Suma/>       */}
    </div>
    
  )
}
export default App;
