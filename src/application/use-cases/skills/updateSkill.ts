import { SkillRepository } from '../../../domain/interfaces/SkillRepository.interface';
import { SkillProps } from '../../../domain/entities/Skill.entity';

export const updateSkill = async (repo: SkillRepository, id: string, data: Partial<SkillProps>) => {
  return await repo.update(id, data);
}; 