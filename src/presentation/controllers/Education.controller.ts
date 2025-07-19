import { Request, Response } from 'express';
import { EducationRepositoryImpl } from '../../infrastructure/repositories/EducationRepository';
import { getEducations } from '../../application/use-cases/education/getEducations';
import { createEducation } from '../../application/use-cases/education/createEducation';
import { updateEducation } from '../../application/use-cases/education/updateEducation';
import { deleteEducation } from '../../application/use-cases/education/deleteEducation';

const repo = new EducationRepositoryImpl();

// DTOs
export interface EducationLinkDTO {
  titulo: string;
  url: string;
}
export interface EducationResponseDTO {
  _id?: string;
  tipo: 'formacion' | 'certificacion';
  titulo: string;
  institucion: string;
  estado: 'En curso' | 'Completado' | 'Abandonado';
  fecha_inicio?: string;
  fecha_fin?: string | null;
  descripcion?: string;
  aprendizajes?: string[];
  certificado_url?: string;
  links_relevantes?: EducationLinkDTO[];
}
export interface EducationRequestDTO {
  tipo: 'formacion' | 'certificacion';
  titulo: string;
  institucion: string;
  estado: 'En curso' | 'Completado' | 'Abandonado';
  fecha_inicio?: string;
  fecha_fin?: string | null;
  descripcion?: string;
  aprendizajes?: string[];
  certificado_url?: string;
  links_relevantes?: EducationLinkDTO[];
}

export class EducationController {
  static async getAll(req: Request, res: Response) {
    const educations = await getEducations(repo);
    const response: EducationResponseDTO[] = educations.map(e => e.props);
    res.json(response);
  }

  static async create(req: Request, res: Response) {
    const dto: EducationRequestDTO = req.body;
    const created = await createEducation(repo, dto);
    const response: EducationResponseDTO = created.props;
    res.status(201).json(response);
  }

  static async update(req: Request, res: Response) {
    const dto: Partial<EducationRequestDTO> = req.body;
    const updated = await updateEducation(repo, req.params.id, dto);
    if (!updated) return res.status(404).json({ message: 'Entrada no encontrada.' });
    const response: EducationResponseDTO = updated.props;
    res.json(response);
  }

  static async delete(req: Request, res: Response) {
    const deleted = await deleteEducation(repo, req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Entrada no encontrada.' });
    res.json({ message: 'Entrada eliminada correctamente' });
  }
}