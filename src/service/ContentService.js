const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080';
const API_URL = `${BASE_URL}/content`;

export const getFeaturedContentByType = async (type) => {
  const response = await fetch(`${API_URL}/featured/${type}`);
  const data = await response.json();

  console.log();
  if (!response.ok) {
    alert(data.message);
  }
  return data;
};

export const getAllContentsByType = async (type) => {
  const response = await fetch(`${API_URL}/all/${type}`);
  const data = await response.json();

  console.log();
  if (!response.ok) {
    alert(data.message);
  }
  return data;
};

export const getContentsById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  const data = await response.json();

  console.log();
  if (!response.ok) {
    alert(data.message);
  }
  return data;
};

export const getAllContentsByTypeAndSearch = async (type, searchObj) => {
  const response = await fetch(`${API_URL}/all/${type}/${searchObj}`);
  const data = await response.json();

  return data;
};