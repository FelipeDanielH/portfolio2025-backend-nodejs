import { Request, Response } from 'express';
import { HomeContactRepositoryImpl } from '../../infrastructure/repositories/HomeContactRepository';
import { getHomeContact } from '../../application/use-cases/homeContact/getHomeContact';
import { updateHomeContact } from '../../application/use-cases/homeContact/updateHomeContact';

const repo = new HomeContactRepositoryImpl();

export class HomeContactController {
  static async get(req: Request, res: Response) {
    const contact = await getHomeContact(repo);
    res.json(contact ? contact.props : {});
  }

  static async update(req: Request, res: Response) {
    const data = req.body;
    // Aquí podrías agregar validación de campos si lo deseas
    const updated = await updateHomeContact(repo, data);
    res.json(updated.props);
  }
} 