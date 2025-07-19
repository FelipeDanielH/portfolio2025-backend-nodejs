import { Request, Response } from 'express';
import { SkillRepositoryImpl } from '../../infrastructure/repositories/SkillRepository';
import { getSkills } from '../../application/use-cases/skills/getSkills';
import { createSkill } from '../../application/use-cases/skills/createSkill';
import { updateSkill } from '../../application/use-cases/skills/updateSkill';
import { deleteSkill } from '../../application/use-cases/skills/deleteSkill';

const repo = new SkillRepositoryImpl();

// DTOs
export interface SkillConceptDTO {
  nombre: string;
  aprendido: boolean;
  _id?: string;
}
export interface SkillResponseDTO {
  _id?: string;
  categoria_id: string;
  tecnologia: string;
  nivel: 'Básico' | 'Intermedio' | 'Avanzado' | 'Experto';
  puntuacion: number;
  descripcion?: string;
  conceptos?: SkillConceptDTO[];
  orden?: number;
}
export interface SkillRequestDTO {
  categoria_id: string;
  tecnologia: string;
  nivel: 'Básico' | 'Intermedio' | 'Avanzado' | 'Experto';
  puntuacion: number;
  descripcion?: string;
  conceptos?: SkillConceptDTO[];
  orden?: number;
}

export class SkillController {
  static async getAll(req: Request, res: Response) {
    const skills = await getSkills(repo);
    const response: SkillResponseDTO[] = skills.map(s => s.props);
    res.json(response);
  }

  static async create(req: Request, res: Response) {
    const dto: SkillRequestDTO = req.body;
    const created = await createSkill(repo, dto);
    const response: SkillResponseDTO = created.props;
    res.status(201).json(response);
  }

  static async update(req: Request, res: Response) {
    const dto: Partial<SkillRequestDTO> = req.body;
    const updated = await updateSkill(repo, req.params.id, dto);
    if (!updated) return res.status(404).json({ message: 'Skill no encontrada.' });
    const response: SkillResponseDTO = updated.props;
    res.json(response);
  }

  static async delete(req: Request, res: Response) {
    const deleted = await deleteSkill(repo, req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Skill no encontrada.' });
    res.json({ message: 'Skill eliminada correctamente' });
  }
}