import { Request, Response } from 'express';
import { ProjectRepositoryImpl } from '../../infrastructure/repositories/ProjectRepository';
import { getProjects } from '../../application/use-cases/projects/getProjects';
import { createProject } from '../../application/use-cases/projects/createProject';
import { updateProject } from '../../application/use-cases/projects/updateProject';
import { deleteProject } from '../../application/use-cases/projects/deleteProject';

const repo = new ProjectRepositoryImpl();

// DTOs
export interface ProjectLinksDTO {
  demo?: string;
  frontend?: string;
  backend?: string;
  github?: string;
  otros?: { titulo: string; url: string }[];
}
export interface ProjectResponseDTO {
  _id?: string;
  nombre: string;
  descripcion: string;
  tecnologias: string[];
  roles?: string[];
  frameworks?: string[];
  lenguajes?: string[];
  herramientas?: string[];
  estado: 'en desarrollo' | 'completado' | 'abandonado';
  año: number;
  imagen?: string;
  links: ProjectLinksDTO;
}
export interface ProjectRequestDTO {
  nombre: string;
  descripcion: string;
  tecnologias: string[];
  roles?: string[];
  frameworks?: string[];
  lenguajes?: string[];
  herramientas?: string[];
  estado: 'en desarrollo' | 'completado' | 'abandonado';
  año: number;
  imagen?: string;
  links: ProjectLinksDTO;
}

export class ProjectController {
  static async getAll(req: Request, res: Response) {
    const projects = await getProjects(repo);
    const response: ProjectResponseDTO[] = projects.map(p => p.props);
    res.json(response);
  }

  static async create(req: Request, res: Response) {
    const dto: ProjectRequestDTO = req.body;
    const created = await createProject(repo, dto);
    const response: ProjectResponseDTO = created.props;
    res.status(201).json(response);
  }

  static async update(req: Request, res: Response) {
    const dto: Partial<ProjectRequestDTO> = req.body;
    const updated = await updateProject(repo, req.params.id, dto);
    if (!updated) return res.status(404).json({ message: 'Proyecto no encontrado.' });
    const response: ProjectResponseDTO = updated.props;
    res.json(response);
  }

  static async delete(req: Request, res: Response) {
    const deleted = await deleteProject(repo, req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Proyecto no encontrado.' });
    res.json({ message: 'Proyecto eliminado correctamente' });
  }
}