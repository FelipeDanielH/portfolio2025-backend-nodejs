import { TechRepository } from '../../../domain/interfaces/TechRepository.interface';

export const getTechs = async (repo: TechRepository) => {
  return await repo.getAll();
}; 