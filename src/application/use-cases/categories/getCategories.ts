import { CategoryRepository } from '../../../domain/interfaces/CategoryRepository.interface';

export const getCategories = async (repo: CategoryRepository) => {
  return await repo.getAll();
}; 