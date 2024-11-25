import axios from 'axios';
import { User } from '../../models/createUserDTO';


const API_URL = 'https://backend-micro-frontend-8288.vercel.app';


export const getUsers = async (page: number, limit: number) => {
  try {
     const response = await axios.get(`${API_URL}/users?page=${page}&limit=${limit}`);

    console.log(response)
    return response.data; 
  } catch (error) {
    console.error('Erro ao buscar os dados da API', error);
    throw error;
  }
};




export const createUser = async (userData: User) => {

  try {
    const response = await axios.post(`${API_URL}/users`, userData);

    return response.data;
  } catch (error) {
    console.error('Erro ao criar o usuário', error);
    throw error;
  }
};

export const updateUser = async (userId: number, userData: Partial<User>) => {
  try {
    const response = await axios.patch(`${API_URL}/users/${userId}`, userData);

    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar o usuário', error);
    throw error;
  }
};



export const deleteUser = async (userId: number): Promise<void> => {
  try {
    await axios.delete(`${API_URL}/users/${userId}`);
  } catch (error) {
    console.error('Erro ao excluir o usuário', error);
    throw error;
  }
};
