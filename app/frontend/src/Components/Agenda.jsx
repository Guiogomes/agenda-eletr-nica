import React, { useContext, useEffect } from 'react';
import { MyContext } from '../context/Provider';
import { readTasks } from '../utils/Request';


const Agenda = () => {
  const {
    setId,
    updateToDo,
    deleteToDo,
    setNome,
    setData,
    setHora,
    setTitulo,
    toDos,
    setToDos,
  } = useContext(MyContext);
  
  useEffect(() => {
    const fetchToDos = async () => {
      const agenda = await readTasks();
      setToDos(agenda);
    }
    fetchToDos();
  }, [setToDos]);

  const handleEditClick = (todo, hora) => {
    setId(todo.id);
    setNome(todo.Nome);
    setData(todo.Data.slice(0,10));
    setHora(hora);
    setTitulo(todo.Titulo);
    updateToDo();
  }

  const handleDeleteClick = (id) => {
    deleteToDo(id);
  }

  return(
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Data</th>
          <th>Hora</th>
          <th>Título</th>
          <th>Editar</th>
          <th>Excluir</th>
        </tr>
      </thead>
      <tbody>
        {toDos.map((toDo) => {
          // Para implementar: função que monta data
          const time = new Date(toDo.Data);
          console.log(toDo.Data)
          const hora = `${time.getHours()}:${time.getMinutes().toString().padStart(2,'0')}`;
          return (
            <tr key={toDo.id}>
              <td>{toDo.Nome}</td>
              <td>{toDo.Data.slice(0,10)}</td>
              <td>{hora}</td>
              <td>{toDo.Titulo}</td>
              <td>
                <button
                  onClick={() => handleEditClick(toDo, hora) }
                >
                  Editar
                </button>
              </td>
              <td>
                <button
                onClick={() => handleDeleteClick(toDo.id)}
                >
                  Excluir
                </button>
              </td>
            </tr>
          )          
        })}
      </tbody>
    </table>
  );
}

export default Agenda;