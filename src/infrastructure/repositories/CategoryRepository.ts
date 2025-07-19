import { CategoryRepository } from '../../domain/interfaces/CategoryRepository.interface';
import { CategoryEntity, CategoryProps } from '../../domain/entities/Category.entity';
import { CategoryModel } from '../models/Category.model';

export class CategoryRepositoryImpl implements CategoryRepository {
  async getAll(): Promise<CategoryEntity[]> {
    const docs = await CategoryModel.find();
    return docs.map(doc => new CategoryEntity({ ...doc.toObject(), _id: String(doc._id) }));
  }

  async create(data: CategoryProps): Promise<CategoryEntity> {
    const doc = new CategoryModel(data);
    await doc.save();
    return new CategoryEntity({ ...doc.toObject(), _id: String(doc._id) });
  }

  async update(id: string, data: Partial<CategoryProps>): Promise<CategoryEntity | null> {
    const doc = await CategoryModel.findByIdAndUpdate(id, data, { new: true });
    return doc ? new CategoryEntity({ ...doc.toObject(), _id: String(doc._id) }) : null;
  }

  async delete(id: string): Promise<boolean> {
    const doc = await CategoryModel.findByIdAndDelete(id);
    return !!doc;
  }
} 