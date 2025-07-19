import { CategoryEntity, CategoryProps } from '../entities/Category.entity';

export interface CategoryRepository {
  getAll(): Promise<CategoryEntity[]>;
  create(data: CategoryProps): Promise<CategoryEntity>;
  update(id: string, data: Partial<CategoryProps>): Promise<CategoryEntity | null>;
  delete(id: string): Promise<boolean>;
} 