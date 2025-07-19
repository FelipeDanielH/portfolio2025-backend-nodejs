import { HomeSkillsRepository } from '../../../domain/interfaces/HomeSkillsRepository.interface';

export const updateHomeSkills = async (repo: HomeSkillsRepository, skills: string[]) => {
  return await repo.update(skills);
}; 