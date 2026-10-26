const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080';
const API_URL = `${BASE_URL}/user`;

export const registerUser = async (formData) => {
  const response = await fetch(`${API_URL}`, {
    method: 'POST',
    headers : {
        'content-type' : 'application/json'
    } ,
    body: JSON.stringify(formData)
  });
  const data = await response.json();

  console.log();
  if (!response.ok) {
    alert(data.message);
  } else {
    alert(data.message);
  return data;
  }
};


export const loginUser = async (formData) => {
  const response = await fetch(`${API_URL}/authenticate`, {
    method: 'POST',
    headers : {
        'content-type' : 'application/json'
    } ,
    body: JSON.stringify(formData)
  });
  const data = await response.json();

  console.log();
  if (!response.ok) {
    alert(data.message);
  }
  return data;
};