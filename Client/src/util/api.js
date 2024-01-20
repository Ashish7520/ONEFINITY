import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/task",
});

export const getAllTasks = async () => {
  try {
    const response = await api.get("/");
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const addTask = async (title) => {
  try {
    const response = await api.post("/", { title });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateTask = async (id, completed) => {
  try {
    const response = await api.put(`/${id}`, { completed });
    console.log(response.data[0]);
    return response.data[0];
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteTask = async (id) => {
  try {
    await api.delete(`/${id}`);
  } catch (error) {
    console.error(error);
    throw error;
  }
};
