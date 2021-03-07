const API = process.env.REACT_APP_API;

export const apis = {
  fetchProfile: username => fetch(`${API}/users/${username}`)
    .then(res => {
      if (!res.ok) throw res;
      return res.json();
    })
};
