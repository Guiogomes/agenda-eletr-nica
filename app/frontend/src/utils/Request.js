const url = process.env.REACT_APP_HOSTNAME || 'http://localhost:3001';
const contentType = 'application/json; charset=utf-8';

const createTask = async (data) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': contentType },
    body: JSON.stringify({ ...data }),
  };
  const response = await fetch(`${url}/agenda`, options);
  return response
};

const readTasks = async () => {
  const options = {
    method: 'GET',
    headers: { 'Content-Type': contentType },    
  }
  const response = await fetch(`${url}/agenda`, options);
  return response;
};
