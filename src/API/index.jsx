export const getOrders = () => {
  return fetch("https://dummyjson.com/c/74df-1acd-4d5b-aeec").then((res) => res.json());
};

export const getRevenue = () => {
  return fetch("https://dummyjson.com/c/ef73-e2fc-4f35-be86").then((res) => res.json());
};

export const getInventory = () => {
  return fetch("https://dummyjson.com/c/1662-fed7-4c03-9340").then((res) => res.json());
};

export const getCustomers = () => {
  return fetch("https://dummyjson.com/c/c90b-1fa2-4d83-af01").then((res) => res.json());
};

export const getComments = () => {
  return fetch("https://dummyjson.com/c/c7a3-ef21-4f21-a641").then((res) => res.json());
};
