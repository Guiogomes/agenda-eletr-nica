import PropTypes from 'prop-types';
import React, { createContext, useState } from 'react';
import { createTask, deleteTask, editTask } from '../utils/Request';

export const MyContext = createContext();

export function Provider({ children }) {
  const [Nome, setNome] = useState('');
  const [Data, setData] = useState('');
  const [Hora, setHora] = useState('');
  const [Titulo, setTitulo] = useState('');
  const [hidden, setHidden] = useState(true);
  const [id, setId] = useState(1);

  const setToDo = async () => {
    const newToDo = await createTask({ Nome, Data: new Date(`${Data}${Hora}`), Titulo });
    return newToDo;
  }

  const updateToDo = async () => {
    const updatedToDo = await editTask({ Nome, Data: new Date(`${Data}${Hora}`), Titulo });
    return updatedToDo;
  }

  const deleteToDo = async () => {
    const deletedToDo = await deleteTask(id);
    return deletedToDo;
  }

  const context = {
    Nome,
    setNome,
    Data,
    setData,
    hidden,
    setHidden,
    Hora,
    setHora,
    Titulo,
    setTitulo,
    setId,
    setToDo,
    updateToDo,
    deleteToDo,
  };

  return (
    <MyContext.Provider value={ context }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};