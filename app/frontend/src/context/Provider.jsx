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
  const [isEdited, setIsEdited] = useState(false);
  const [toDos, setToDos] = useState([]);

  const setToDo = async () => {
    const newToDo = await createTask({ Nome, Data: new Date(`${Data} ${Hora}`), Titulo });
    setNome('');
    setData('');
    setHora('');
    setTitulo('');
    setHidden(true);
    setToDos([...toDos, newToDo]);
  }

  const updateToDo = async () => {
    setHidden(false);
    setIsEdited(true);
  }

  const deleteToDo = async (id) => {
    const leftToDos = toDos.filter(toDo => toDo.id !== id);
    await deleteTask(id);
    setToDos(leftToDos);
  }

  const editToDo = async () => {
    const editedToDoIndex = toDos.findIndex(todo => todo.id === id);
    const newAgenda = [...toDos];
    newAgenda[editedToDoIndex] = {
      ...newAgenda[editedToDoIndex],
      Nome,
      Titulo,
      Data: `${Data} ${Hora}`,
    }
    console.log(newAgenda[editedToDoIndex])
    await editTask(id, newAgenda[editedToDoIndex]);
    setNome('');
    setData('');
    setHora('');
    setTitulo('');
    setHidden(true);
    setToDos(newAgenda);
  }

  const context = {
    toDos,
    setToDos,
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
    editToDo,
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