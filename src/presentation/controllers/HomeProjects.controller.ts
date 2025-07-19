import { Request, Response } from 'express';
import { HomeProjectsRepositoryImpl } from '../../infrastructure/repositories/HomeProjectsRepository';
import { getHomeProjects } from '../../application/use-cases/homeProjects/getHomeProjects';
import { updateHomeProjects } from '../../application/use-cases/homeProjects/updateHomeProjects';
import { ProjectModel } from '../../infrastructure/models/Project.model';

const repo = new HomeProjectsRepositoryImpl();

export class HomeProjectsController {
  static async get(req: Request, res: Response) {
    const homeProjects = await getHomeProjects(repo);
    res.json(homeProjects ? { projects: homeProjects.props.projects } : { projects: [] });
  }

  static async update(req: Request, res: Response) {
    const { projects } = req.body;
    if (!Array.isArray(projects)) return res.status(400).json({ message: 'El campo projects debe ser un array de IDs.' });
    // Buscar los proyectos y crear snapshots
    const found = await ProjectModel.find({ _id: { $in: projects } });
    if (found.length !== projects.length) return res.status(400).json({ message: 'Uno o más IDs de proyectos no existen.' });
    const snapshots = found.map(p => ({
      _id: String((p._id as any)),
      nombre: p.nombre,
      descripcion: p.descripcion,
      tecnologias: p.tecnologias,
      estado: p.estado,
      año: p.año,
      imagen: p.imagen,
      links: {
        demo: p.links?.demo,
        frontend: p.links?.frontend,
        backend: p.links?.backend,
        github: p.links?.github
      }
    }));
    const updated = await updateHomeProjects(repo, snapshots);
    res.json({ projects: updated.props.projects });
  }
} 