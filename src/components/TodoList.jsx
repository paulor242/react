/*import './todolist.css';
import parse from 'html-react-parser';
function TodoList(){
    const tareas=["aprender react", "matematicas","sociales", "tomar un descanso ","tomar un descanso ","tomar un descanso "];
    const usuario="paulo";
    const htmlCrudo="<p> este es un <strong> texto en negrita </strong> renderizaro con dangerousySetInnerHTML</p>"

    return(
        <div>
            <h2 className='titulo'>lista de tareas de {usuario}</h2>
        
            <div >{parse(htmlCrudo)}</div>
        
            <ul>
                {tareas.map((tarea, index)=>(
                    <li key={index} className='tarea' id='tarea'>{tarea}</li>
                ))}
            </ul>

        </div>
    );
}

export default TodoList;*/



/*
import './TodoList.css';
import parse from 'html-react-parser';
function TodoList(){
    const tareas=["sociales", "crear un proyecto en react", "hacer un proyecto"];
    const usuario = "paulo";
    const htmlCrudo="<p> este es un <strong> texto en negrita </strong> renderizaro con dangerousySetInnerHTML</p>"  
    const renderMensaje=()=>{
        switch(tareas,length){
        case 0:
            return <p>no hay tareas asta el momento</p>;
        case 1: 
            return <p>hay una tarea pendiente {tareas}</p>  
        case 2: 
            return <p>hay dos tarea pendiente {tareas}</p>
        default:
            return <p>tienes muchas tareas pendiente {tareas}</p>    
        }
    };

    return(
        <div>
            <h2 className='titulo'> Lista de tareas{usuario}</h2>
            <div>{parse(htmlCrudo)}</div>
            {renderMensaje()}

            {/* {tareas.length=== 0 ?(
                <p>no hay tareas pendientes.</p>
            ):(
                <ul>
                    {tareas.map ((tarea, index)=> (
                        <li key={index} className='tarea' >{tarea}</li>
                    ))}
                </ul>
                
            )} }

            {tareas.map((tarea, index)=>(
                <li key={index} className='tarea'>{tarea}</li>
            ))
            }
        </div>
    );
}

export default TodoList;
*/




export const formatearEstadoTarea = (completada) => {
    return completada ? "Completada" : "Pendiente";
};
    export const contarTareasCompletadas = (tareas) => {
    return tareas.filter((tarea) => tarea.completada).length;
};

