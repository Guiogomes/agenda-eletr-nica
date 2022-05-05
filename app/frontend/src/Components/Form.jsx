import React, { useEffect, useState } from 'react';
import { createTask } from '../utils/Request';

const Form = () => {
  const [Nome, setNome] = useState('');
  const [Data, setData] = useState('');
  const [Hora, setHora] = useState('');
  const [Titulo, setTitulo] = useState('');

  useEffect(() => {
    
  }, [Nome, Data, Hora, Titulo]);

  const setToDo = async () => {
    const newToDo = await createTask({ Nome, Data, Titulo });
    return newToDo;
  }

  setToDo();

  return(
    <form>
      <label>
        Nome:
        <input
          name={ Nome }
          type='text'
          placeholder='Nome da tarefa'
          onChange={(e) => setNome(e.target.value)}
          value={ Nome }
        />
      </label>
      <label>
        Data:
        <input
          name={ Data }
          type='date'
          placeholder='Data de realização'
          onChange={(e) => setData(e.target.value)}
          value={ Data }
        />
      </label>
      <label>
        Hora:
        <input
          name={ Hora }
          type='hour'
          placeholder='Horário previsto'
          onChange={(e) => setHora(e.target.value)}
          value={ Hora }
        />
      </label>
      <label>
        Titulo:
        <textarea
          name={ Titulo }
          type='text'
          placeholder='Breve descrição'
          maxLength={ 100 }
          onChange={(e) => setTitulo(e.target.value)}
          value={ Titulo }
        />
      </label>
      <button
        type='button'
        onClick={() => setToDo()}
      >
        Criar
      </button>
    </form>
  )
};

export default Form;