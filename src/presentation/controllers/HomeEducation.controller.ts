import { Request, Response } from 'express';
import { HomeEducationRepositoryImpl } from '../../infrastructure/repositories/HomeEducationRepository';
import { getHomeEducation } from '../../application/use-cases/homeEducation/getHomeEducation';
import { updateHomeEducation } from '../../application/use-cases/homeEducation/updateHomeEducation';
import { EducationModel } from '../../infrastructure/models/Education.model';

const repo = new HomeEducationRepositoryImpl();

export class HomeEducationController {
  static async get(req: Request, res: Response) {
    const homeEducation = await getHomeEducation(repo);
    res.json(homeEducation ? { education: homeEducation.props.education } : { education: [] });
  }

  static async update(req: Request, res: Response) {
    const { education } = req.body;
    if (!Array.isArray(education)) return res.status(400).json({ message: 'El campo education debe ser un array de IDs.' });
    // Buscar las educaciones y crear snapshots
    const found = await EducationModel.find({ _id: { $in: education } });
    if (found.length !== education.length) return res.status(400).json({ message: 'Uno o más IDs de education no existen.' });
    const snapshots = found.map(e => ({
      _id: String((e._id as any)),
      tipo: e.tipo,
      titulo: e.titulo,
      institucion: e.institucion,
      estado: e.estado,
      fecha_inicio: e.fecha_inicio,
      fecha_fin: e.fecha_fin,
      descripcion: e.descripcion
    }));
    const updated = await updateHomeEducation(repo, snapshots);
    res.json({ education: updated.props.education });
  }
} 