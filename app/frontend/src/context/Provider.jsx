import PropTypes from 'prop-types';
import React, { createContext, useState } from 'react';
import { createTask, deleteTask } from '../utils/Request';

export const MyContext = createContext();

export function Provider({ children }) {
  const [Nome, setNome] = useState('');
  const [Data, setData] = useState('');
  const [Hora, setHora] = useState('');
  const [Titulo, setTitulo] = useState('');
  const [hidden, setHidden] = useState(true);
  const [id, setId] = useState(1);
  const [isEdited, setIsEdited] = useState(false);

  const setToDo = async () => {
    const newToDo = await createTask({ Nome, Data: new Date(`${Data} ${Hora}`), Titulo });
    setNome('');
    setData('');
    setHora('');
    setTitulo('');
    return newToDo;
  }

  const updateToDo = async () => {
    setHidden(false);
    setIsEdited(true);
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
    isEdited,
    setIsEdited,
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