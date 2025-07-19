import { HomeRepository } from '../../../domain/interfaces/HomeRepository.interface';

export const deleteHome = async (repo: HomeRepository) => {
  return await repo.delete();
}; 