const API = process.env.REACT_APP_API;

export const apis = {
  getAll: username => fetch(`${API}/users/${username}/following`)
    .then(res => {
      if (!res.ok) throw res;
      return res.json();
    })
};
