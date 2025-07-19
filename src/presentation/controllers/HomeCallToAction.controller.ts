import { Request, Response } from 'express';
import { HomeCallToActionRepositoryImpl } from '../../infrastructure/repositories/HomeCallToActionRepository';
import { getHomeCallToAction } from '../../application/use-cases/homeCallToAction/getHomeCallToAction';
import { updateHomeCallToAction } from '../../application/use-cases/homeCallToAction/updateHomeCallToAction';

const repo = new HomeCallToActionRepositoryImpl();

export class HomeCallToActionController {
  static async get(req: Request, res: Response) {
    const cta = await getHomeCallToAction(repo);
    res.json(cta ? cta.props : {});
  }

  static async update(req: Request, res: Response) {
    const data = req.body;
    // Aquí podrías agregar validación de campos si lo deseas
    const updated = await updateHomeCallToAction(repo, data);
    res.json(updated.props);
  }
} 