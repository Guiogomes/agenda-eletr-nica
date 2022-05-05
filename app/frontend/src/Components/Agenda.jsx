import React, { useEffect, useState } from 'react';
import { readTasks } from '../utils/Request';

const Agenda = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchToDos = async () => {
      const agenda = await readTasks();
      setTodos(agenda);
    }
    fetchToDos();
  }, []);

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
        {todos.map((todo) => {
          // Para implementar: função que monta data
          const time = new Date(todo.Data);          
          const data = `${time.getDay().toString().padStart(2,'0')}
            /${time.getMonth().toString().padStart(2,'0')}/${time.getFullYear()}`;
          const hora = `${time.getHours()}:${time.getMinutes().toString().padStart(2,'0')}`;
          return (
            <tr key={todo.id}>
              <td>{todo.Nome}</td>
              <td>{data}</td>
              <td>{hora}</td>
              <td>{todo.Título}</td>
              <td>
                <button>Editar</button>
              </td>
              <td>
                <button>Excluir</button>
              </td>
            </tr>
          )          
        })}
      </tbody>
    </table>
  );
}

export default Agenda;