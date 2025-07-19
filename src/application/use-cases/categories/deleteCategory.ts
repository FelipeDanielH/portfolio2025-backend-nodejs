import { CategoryRepository } from '../../../domain/interfaces/CategoryRepository.interface';

export const deleteCategory = async (repo: CategoryRepository, id: string) => {
  return await repo.delete(id);
}; 