import { useEffect, useState } from "react";

// Componente para representar un ítem de la lista
// Creado como funcion con declaración clásica

function ListItem({ id, completado, texto, cambiaValor }) {
  return (
    <li>
      <input
        className="form-check-input"
        type="checkbox"
        checked={completado}
        id={`check-${id}`}
        onChange={() => cambiaValor()}
      />
      <span> {texto}</span>
    </li>
  );
}

function NewItemsForm({ agregarTarea }) {
  const [nuevoTexto, setNuevoTexto] = useState("");

  const manejarClick = () => {
    if (nuevoTexto.trim() !== "") {
      agregarTarea(nuevoTexto);
      setNuevoTexto(""); 
    }
  };

  return (
    <div style={{ margin: "10px 0" }}>
      <input
        type="text"
        placeholder="Nueva tarea..."
        value={nuevoTexto}
        onChange={(e) => setNuevoTexto(e.target.value)}
      />
      <button onClick={manejarClick}>Agregar</button>
    </div>
  );
}

// Componente principal de la lista de tareas
// Creado como función con expresión de función flecha
export const TodoList = () => {
  const [tareas, setTareas] = useState([
    { id: 1, completado: true, texto: "Aprender HTML" },
    { id: 2, completado: false, texto: "Aprender CSS" },
  ]);

  const [ultimaHoraDeCambios, setUltimaHoraDeCambios] = useState("");

  useEffect(() => {
    const cambio = new Date().toLocaleTimeString();
    setUltimaHoraDeCambios(cambio);
  }, [tareas]);

  const cambiaTareaPorId = (id) => {
    setTareas((arregloPrevio) => {
      return arregloPrevio.map((tarea) => {
        if (tarea.id === id) {
          return { ...tarea, completado: !tarea.completado };
        }
        return tarea;
      });
    });
  };

  const agregarNuevaTarea = (texto) => {
    const nuevaTarea = {
      id: Date.now(),
      completado: false,
      texto: texto,
    };
    
    setTareas((prev) => [...prev, nuevaTarea]);
  };

  return (
    <>
      <div>
        <h1>Todo list</h1>

        <NewItemsForm agregarTarea={agregarNuevaTarea} />

        <ul>
          {tareas.map((tarea) => (
            <ListItem
              key={tarea.id}
              id={tarea.id}
              completado={tarea.completado}
              texto={tarea.texto}
              cambiaValor={() => cambiaTareaPorId(tarea.id)}
            />
          ))}
        </ul>
      </div>
      <div>Ultimo cambio: {ultimaHoraDeCambios}</div>
    </>
  );
};

export default TodoList;
