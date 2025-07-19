import { Request, Response } from 'express';
import { HomeAboutRepositoryImpl } from '../../infrastructure/repositories/HomeAboutRepository';
import { getHomeAbout } from '../../application/use-cases/homeAbout/getHomeAbout';
import { updateHomeAbout } from '../../application/use-cases/homeAbout/updateHomeAbout';
import { AboutModel } from '../../infrastructure/models/About.model';

const repo = new HomeAboutRepositoryImpl();

export class HomeAboutController {
  static async get(req: Request, res: Response) {
    const homeAbout = await getHomeAbout(repo);
    res.json(homeAbout ? { about: homeAbout.props.about } : { about: [] });
  }

  static async update(req: Request, res: Response) {
    const { about } = req.body;
    if (!Array.isArray(about)) return res.status(400).json({ message: 'El campo about debe ser un array de IDs.' });
    // Buscar los about y crear snapshots
    const found = await AboutModel.find({ _id: { $in: about } });
    if (found.length !== about.length) return res.status(400).json({ message: 'Uno o más IDs de about no existen.' });
    const snapshots = found.map(a => ({
      _id: String((a._id as any)),
      titulo: a.titulo,
      descripcion: a.descripcion,
      orden: a.orden
    }));
    const updated = await updateHomeAbout(repo, snapshots);
    res.json({ about: updated.props.about });
  }
} 