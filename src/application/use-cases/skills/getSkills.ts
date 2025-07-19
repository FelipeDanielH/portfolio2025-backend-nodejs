import { SkillRepository } from '../../../domain/interfaces/SkillRepository.interface';

export const getSkills = async (repo: SkillRepository) => {
  return await repo.getAll();
}; 