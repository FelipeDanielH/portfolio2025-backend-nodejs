import { Request, Response } from 'express';
import { HomeSkillsRepositoryImpl } from '../../infrastructure/repositories/HomeSkillsRepository';
import { getHomeSkills } from '../../application/use-cases/homeSkills/getHomeSkills';
import { updateHomeSkills } from '../../application/use-cases/homeSkills/updateHomeSkills';

const repo = new HomeSkillsRepositoryImpl();

export class HomeSkillsController {
  static async get(req: Request, res: Response) {
    const homeSkills = await getHomeSkills(repo);
    res.json(homeSkills ? { skills: homeSkills.props.skills } : { skills: [] });
  }

  static async update(req: Request, res: Response) {
    const { skills } = req.body;
    if (!Array.isArray(skills)) return res.status(400).json({ message: 'El campo skills debe ser un array de IDs.' });
    const updated = await updateHomeSkills(repo, skills);
    res.json({ skills: updated.props.skills });
  }
} 