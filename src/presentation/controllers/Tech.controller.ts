import { Request, Response } from 'express';
import { TechRepositoryImpl } from '../../infrastructure/repositories/TechRepository';
import { getTechs } from '../../application/use-cases/techs/getTechs';
import { createTech } from '../../application/use-cases/techs/createTech';
import { updateTech } from '../../application/use-cases/techs/updateTech';
import { deleteTech } from '../../application/use-cases/techs/deleteTech';

const repo = new TechRepositoryImpl();

// DTOs
export interface TechResponseDTO {
  _id?: string;
  tipo: 'lenguaje' | 'framework' | 'rol' | 'herramienta';
  nombre: string;
  icono?: string;
}
export interface TechRequestDTO {
  tipo: 'lenguaje' | 'framework' | 'rol' | 'herramienta';
  nombre: string;
  icono?: string;
}

export class TechController {
  static async getAll(req: Request, res: Response) {
    const techs = await getTechs(repo);
    const response: TechResponseDTO[] = techs.map(t => t.props);
    res.json(response);
  }

  static async create(req: Request, res: Response) {
    const dto: TechRequestDTO = req.body;
    const created = await createTech(repo, dto);
    const response: TechResponseDTO = created.props;
    res.status(201).json(response);
  }

  static async update(req: Request, res: Response) {
    const dto: Partial<TechRequestDTO> = req.body;
    const updated = await updateTech(repo, req.params.id, dto);
    if (!updated) return res.status(404).json({ message: 'Tech no encontrada.' });
    const response: TechResponseDTO = updated.props;
    res.json(response);
  }

  static async delete(req: Request, res: Response) {
    const deleted = await deleteTech(repo, req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Tech no encontrada.' });
    res.json({ message: 'Tech eliminada correctamente' });
  }
} 