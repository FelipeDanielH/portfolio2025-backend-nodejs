import { Request, Response } from 'express';
import { HomeExperienceRepositoryImpl } from '../../infrastructure/repositories/HomeExperienceRepository';
import { getHomeExperience } from '../../application/use-cases/homeExperience/getHomeExperience';
import { updateHomeExperience } from '../../application/use-cases/homeExperience/updateHomeExperience';
import { ExperienceModel } from '../../infrastructure/models/Experience.model';
import { Types } from 'mongoose';

const repo = new HomeExperienceRepositoryImpl();

export class HomeExperienceController {
  static async get(req: Request, res: Response) {
    const homeExperience = await getHomeExperience(repo);
    res.json(homeExperience ? { experience: homeExperience.props.experience } : { experience: [] });
  }

  static async update(req: Request, res: Response) {
    const { experience } = req.body;
    if (!Array.isArray(experience)) return res.status(400).json({ message: 'El campo experience debe ser un array de IDs.' });
    // Validar que todos los IDs sean ObjectId válidos
    const invalidId = experience.find(id => !Types.ObjectId.isValid(id));
    if (invalidId) return res.status(400).json({ message: `ID inválido: ${invalidId}` });
    // Buscar las experiencias y crear snapshots
    const found = await ExperienceModel.find({ _id: { $in: experience.map(id => new Types.ObjectId(id)) } });
    if (found.length !== experience.length) return res.status(400).json({ message: 'Uno o más IDs de experiencia no existen.' });
    const snapshots = found.map(e => ({
      _id: String((e._id as any)),
      rol: e.rol,
      empresa: e.empresa,
      ubicacion: e.ubicacion,
      fecha_inicio: e.fecha_inicio,
      fecha_fin: e.fecha_fin,
      descripcion: e.descripcion
    }));
    const updated = await updateHomeExperience(repo, snapshots);
    res.json({ experience: updated.props.experience });
  }
} 