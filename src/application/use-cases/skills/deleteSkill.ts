import { SkillRepository } from '../../../domain/interfaces/SkillRepository.interface';

export const deleteSkill = async (repo: SkillRepository, id: string) => {
  return await repo.delete(id);
}; 