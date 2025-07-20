import { Request, Response } from 'express';
import { HomeAboutRepositoryImpl } from '../../infrastructure/repositories/HomeAboutRepository';
import { getHomeAbout } from '../../application/use-cases/homeAbout/getHomeAbout';
import { updateHomeAbout } from '../../application/use-cases/homeAbout/updateHomeAbout';

const repo = new HomeAboutRepositoryImpl();

export class HomeAboutController {
  static async get(req: Request, res: Response) {
    const homeAbout = await getHomeAbout(repo);
    res.json(homeAbout ? { about: homeAbout.props.about } : { about: '' });
  }

  static async update(req: Request, res: Response) {
    const { about } = req.body;
    if (typeof about !== 'string' || !about.trim()) {
      return res.status(400).json({ message: 'El campo about debe ser un string no vacío.' });
    }
    const updated = await updateHomeAbout(repo, about.trim());
    res.json({ about: updated.props.about });
  }
} 