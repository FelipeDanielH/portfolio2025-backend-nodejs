import { SkillRepository } from '../../../domain/interfaces/SkillRepository.interface';
import { SkillProps } from '../../../domain/entities/Skill.entity';

export const createSkill = async (repo: SkillRepository, data: SkillProps) => {
  return await repo.create(data);
};