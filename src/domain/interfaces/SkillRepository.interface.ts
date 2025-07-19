import { SkillEntity, SkillProps } from '../entities/Skill.entity';

export interface SkillRepository {
  getAll(): Promise<SkillEntity[]>;
  create(data: SkillProps): Promise<SkillEntity>;
  update(id: string, data: Partial<SkillProps>): Promise<SkillEntity | null>;
  delete(id: string): Promise<boolean>;
}