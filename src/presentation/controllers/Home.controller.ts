import { Request, Response } from 'express';
import { HeroRepositoryImpl } from '../../infrastructure/repositories/HomeRepository';
import { getHero } from '../../application/use-cases/home/getHome';
import { updateHero } from '../../application/use-cases/home/updateHome';

const repo = new HeroRepositoryImpl();

export class HeroController {
  static async getHero(req: Request, res: Response) {
    const hero = await getHero(repo);
    if (!hero) return res.status(404).json({ message: 'No se encontró información del hero.' });
    res.json(hero.props);
  }

  static async updateHero(req: Request, res: Response) {
    const updated = await updateHero(repo, req.body);
    if (!updated) return res.status(404).json({ message: 'No se encontró información para actualizar.' });
    res.json(updated.props);
  }
}