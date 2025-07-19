import { Request, Response } from 'express';
import { HomeHeroRepositoryImpl } from '../../infrastructure/repositories/HomeHeroRepository';
import { getHomeHero } from '../../application/use-cases/homeHero/getHomeHero';
import { updateHomeHero } from '../../application/use-cases/homeHero/updateHomeHero';

const repo = new HomeHeroRepositoryImpl();

export class HomeHeroController {
  static async get(req: Request, res: Response) {
    const hero = await getHomeHero(repo);
    res.json(hero ? hero.props : {});
  }

  static async update(req: Request, res: Response) {
    const data = req.body;
    // Aquí podrías agregar validación de campos si lo deseas
    const updated = await updateHomeHero(repo, data);
    res.json(updated.props);
  }
} 