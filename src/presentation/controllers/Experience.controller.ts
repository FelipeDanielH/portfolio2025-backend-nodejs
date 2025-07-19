import { Request, Response } from 'express';
import { ExperienceRepositoryImpl } from '../../infrastructure/repositories/ExperienceRepository';
import { getExperiences } from '../../application/use-cases/experience/getExperiences';
import { createExperience } from '../../application/use-cases/experience/createExperience';
import { updateExperience } from '../../application/use-cases/experience/updateExperience';
import { deleteExperience } from '../../application/use-cases/experience/deleteExperience';
import { ExperienceModel } from '../../infrastructure/models/Experience.model';

const repo = new ExperienceRepositoryImpl();

// DTOs
export interface ExperienceResponseDTO {
  _id?: string;
  rol: string;
  empresa: string;
  ubicacion: string;
  modalidad?: 'Remoto' | 'Presencial' | 'Híbrido';
  equipo?: string;
  sector?: string;
  fecha_inicio: string;
  fecha_fin?: string;
  descripcion: string;
  responsabilidades?: string[];
  logros?: string[];
  tecnologias?: string[];
  orden: number;
}
export interface ExperienceRequestDTO {
  rol: string;
  empresa: string;
  ubicacion: string;
  modalidad?: 'Remoto' | 'Presencial' | 'Híbrido';
  equipo?: string;
  sector?: string;
  fecha_inicio: string;
  fecha_fin?: string;
  descripcion: string;
  responsabilidades?: string[];
  logros?: string[];
  tecnologias?: string[];
  orden: number;
}

export class ExperienceController {
  static async getAll(req: Request, res: Response) {
    const experiences = await getExperiences(repo);
    const response: ExperienceResponseDTO[] = experiences.map(e => e.props);
    res.json(response);
  }

  static async create(req: Request, res: Response) {
    const dto: ExperienceRequestDTO = req.body;
    // Validar unicidad de 'orden'
    const exists = await ExperienceModel.findOne({ orden: dto.orden });
    if (exists) {
      return res.status(400).json({ message: 'Ya existe una experiencia con ese orden.' });
    }
    const created = await createExperience(repo, dto);
    const response: ExperienceResponseDTO = created.props;
    res.status(201).json(response);
  }

  static async update(req: Request, res: Response) {
    const dto: Partial<ExperienceRequestDTO> = req.body;
    // Validar unicidad de 'orden' (ignorando la propia experiencia)
    if (dto.orden !== undefined) {
      const exists = await ExperienceModel.findOne({ orden: dto.orden, _id: { $ne: req.params.id } });
      if (exists) {
        return res.status(400).json({ message: 'Ya existe una experiencia con ese orden.' });
      }
    }
    const updated = await updateExperience(repo, req.params.id, dto);
    if (!updated) return res.status(404).json({ message: 'Experiencia no encontrada.' });
    const response: ExperienceResponseDTO = updated.props;
    res.json(response);
  }

  static async delete(req: Request, res: Response) {
    const deleted = await deleteExperience(repo, req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Experiencia no encontrada.' });
    res.json({ message: 'Experiencia eliminada correctamente' });
  }
}