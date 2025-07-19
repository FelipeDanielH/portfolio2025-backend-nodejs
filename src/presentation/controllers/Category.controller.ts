import { Request, Response } from 'express';
import { CategoryRepositoryImpl } from '../../infrastructure/repositories/CategoryRepository';
import { getCategories } from '../../application/use-cases/categories/getCategories';
import { createCategory } from '../../application/use-cases/categories/createCategory';
import { updateCategory } from '../../application/use-cases/categories/updateCategory';
import { deleteCategory } from '../../application/use-cases/categories/deleteCategory';
import { CategoryModel } from '../../infrastructure/models/Category.model';

const repo = new CategoryRepositoryImpl();

// DTOs
export interface CategoryResponseDTO {
  _id?: string;
  nombre: string;
  orden: number;
}
export interface CategoryRequestDTO {
  nombre: string;
  orden: number;
}

export class CategoryController {
  static async getAll(req: Request, res: Response) {
    const categories = await getCategories(repo);
    const response: CategoryResponseDTO[] = categories.map(c => ({ _id: c.props._id, nombre: c.props.nombre, orden: c.props.orden }));
    res.json(response);
  }

  static async create(req: Request, res: Response) {
    const dto: CategoryRequestDTO = req.body;
    // Validar unicidad de 'orden'
    const exists = await CategoryModel.findOne({ orden: dto.orden });
    if (exists) {
      return res.status(400).json({ message: 'Ya existe una categoría con ese orden.' });
    }
    const created = await createCategory(repo, dto);
    const response: CategoryResponseDTO = { _id: created.props._id, nombre: created.props.nombre, orden: created.props.orden };
    res.status(201).json(response);
  }

  static async update(req: Request, res: Response) {
    const dto: Partial<CategoryRequestDTO> = req.body;
    // Validar unicidad de 'orden' (ignorando la propia categoría)
    if (dto.orden !== undefined) {
      const exists = await CategoryModel.findOne({ orden: dto.orden, _id: { $ne: req.params.id } });
      if (exists) {
        return res.status(400).json({ message: 'Ya existe una categoría con ese orden.' });
      }
    }
    const updated = await updateCategory(repo, req.params.id, dto);
    if (!updated) return res.status(404).json({ message: 'Categoría no encontrada.' });
    const response: CategoryResponseDTO = { _id: updated.props._id, nombre: updated.props.nombre, orden: updated.props.orden };
    res.json(response);
  }

  static async delete(req: Request, res: Response) {
    const deleted = await deleteCategory(repo, req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Categoría no encontrada.' });
    res.json({ message: 'Categoría eliminada correctamente' });
  }
} 