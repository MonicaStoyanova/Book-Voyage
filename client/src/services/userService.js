const baseUrl = "http://localhost:3030/users";

export const getAll = async () => {
  const response = await fetch(baseUrl);
  const result = await response.json();

  return result.users;
};

export const getOne = async (userId) => {
  const response = await fetch(`${baseUrl}/${userId}`);
  const result = await response.json();

  return result.user;
};

export const create = async (email, password) => {
  const response = await fetch(`${baseUrl}/register`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const result = await response.json();

  return result;
};
export const login = async (email, password) => {
  const response = await fetch(`${baseUrl}/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const result = await response.json();

  return result;
};

export const logout = async () => {
  const response = await fetch(`${baseUrl}/logout`);
};
export function clearUserData() {
  sessionStorage.removeItem("userData");
}
