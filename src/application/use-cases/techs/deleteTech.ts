import { TechRepository } from '../../../domain/interfaces/TechRepository.interface';

export const deleteTech = async (repo: TechRepository, id: string) => {
  return await repo.delete(id);
}; 