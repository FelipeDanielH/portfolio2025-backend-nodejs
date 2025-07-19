import { HomeSkillsRepository } from '../../../domain/interfaces/HomeSkillsRepository.interface';

export const getHomeSkills = async (repo: HomeSkillsRepository) => {
  return await repo.get();
}; 