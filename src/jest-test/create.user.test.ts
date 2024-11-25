import axios from 'axios';
import { createUser } from '../services/api/userService';

jest.mock('axios');
const mockAxios = axios as jest.Mocked<typeof axios>;

describe('Função criar usuario!', () => {
  it('Verificar se o user foi criado com sucesso!', async () => {
    const mockUser = { name: 'John Doe', salary: 1000, companyValuation: 5000 };
    const mockResponse = { data: { ...mockUser, id: 1 } };
    mockAxios.post.mockResolvedValue(mockResponse);
    const response = await createUser(mockUser);
    expect(response.name).toBe(mockUser.name);
    expect(response.id).toBe(1);
  });
});
