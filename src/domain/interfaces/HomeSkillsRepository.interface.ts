import { HomeSkillsEntity, HomeSkillsProps } from '../entities/HomeSkills.entity';

export interface HomeSkillsRepository {
  get(): Promise<HomeSkillsEntity | null>;
  update(skills: string[]): Promise<HomeSkillsEntity>;
} 