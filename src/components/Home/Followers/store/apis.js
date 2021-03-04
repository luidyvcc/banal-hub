const API = process.env.REACT_APP_API;

export const apis = {
  getAll: username => fetch(`${API}/users/${username}/followers`)
    .then(res => res.json())
    .catch(err => err)
};
