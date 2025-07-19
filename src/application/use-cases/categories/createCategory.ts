import { CategoryRepository } from '../../../domain/interfaces/CategoryRepository.interface';
import { CategoryProps } from '../../../domain/entities/Category.entity';

export const createCategory = async (repo: CategoryRepository, data: CategoryProps) => {
  return await repo.create(data);
}; 