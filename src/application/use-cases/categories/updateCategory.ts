import { CategoryRepository } from '../../../domain/interfaces/CategoryRepository.interface';
import { CategoryProps } from '../../../domain/entities/Category.entity';

export const updateCategory = async (repo: CategoryRepository, id: string, data: Partial<CategoryProps>) => {
  return await repo.update(id, data);
}; 