import React, { useEffect, useState } from 'react';
import { readTasks } from '../utils/Request';


const Agenda = () => {
  const [toDos, setToDos] = useState([]);
  useEffect(() => {
    const fetchToDos = async () => {
      const agenda = await readTasks();
      setToDos(agenda);
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
        {toDos.map((toDo) => {
          // Para implementar: função que monta data
          const time = new Date(toDo.Data);          
          const data = `${time.getDay().toString().padStart(2,'0')}
            /${time.getMonth().toString().padStart(2,'0')}/${time.getFullYear()}`;
          const hora = `${time.getHours()}:${time.getMinutes().toString().padStart(2,'0')}`;
          return (
            <tr key={toDo.id}>
              <td>{toDo.Nome}</td>
              <td>{data}</td>
              <td>{hora}</td>
              <td>{toDo.Título}</td>
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