import axios from 'axios';
import { User } from '../../models/createUserDTO';


const API_URL = 'https://boasorte.teddybackoffice.com.br';

const corsProxy = 'https://thingproxy.freeboard.io/fetch/';


const isProduction = import.meta.env.MODE === 'production';


export const getUsers = async (page: number, limit: number) => {
  if (isProduction) {

    try {
      const response = await fetch('/clients.json');
      if (!response.ok) {
        throw new Error('Erro ao carregar o arquivo JSON');
      }
      const data = await response.json();

   
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      const paginatedClients = data.clients.slice(startIndex, endIndex);

      return {
        clients: paginatedClients,
        currentPage: page,
        totalPages: Math.ceil(data.clients.length / limit),
      };
    } catch (error) {
      console.error('Erro ao buscar os dados locais em produção', error);
      throw error;
    }
  } else {
 
    try {
      const response = await axios.get(corsProxy + `${API_URL}/users?page=${page}&limit=${limit}`);
      return response.data; 
    } catch (error) {
      console.error('Erro ao buscar os dados da API', error);
      throw error;
    }
  }
};




export const createUser = async (userData: User) => {
  try {
    const response = await axios.post(corsProxy + `${API_URL}/users`, userData);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar o usuário', error);
    throw error;
  }
};

export const updateUser = async (userId: number, userData: Partial<User>) => {
  try {
    const response = await axios.patch(corsProxy + `${API_URL}/users/${userId}`, userData);

    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar o usuário', error);
    throw error;
  }
};



export const deleteUser = async (userId: number): Promise<void> => {
  try {
    await axios.delete(corsProxy + `${API_URL}/users/${userId}`);
  } catch (error) {
    console.error('Erro ao excluir o usuário', error);
    throw error;
  }
};
