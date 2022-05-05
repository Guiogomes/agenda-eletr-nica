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
    const time = new Date(todo.Data);
    const usdate = `${time.getDay().toString().padStart(2,'0')}-${time.getMonth().toString().padStart(2,'0')}-${time
      .getFullYear()}`
    setId(todo.id);
    setNome(todo.Nome);
    setData(usdate);
    setHora(hora);
    setTitulo(todo.Titulo);
    updateToDo();
  }

  const handleDeleteClick = (id) => {
    setId(id)
    deleteToDo();
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
          const data = `${time.getDay().toString().padStart(2,'0')}-${time.getMonth().toString().padStart(2,'0')}-${time
            .getFullYear()}`;
          const hora = `${time.getHours()}:${time.getMinutes().toString().padStart(2,'0')}`;
          return (
            <tr key={toDo.id}>
              <td>{toDo.Nome}</td>
              <td>{data}</td>
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