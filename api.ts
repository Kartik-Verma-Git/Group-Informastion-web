const API_BASE = "http://localhost:5000/api";

export const apiRequest = async (
  url: string,
  method: string,
  body?: any,
  token?: string
) => {
  const res = await fetch(`${API_BASE}${url}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` })
    },
    body: body ? JSON.stringify(body) : undefined
  });

  return res.json();
};
