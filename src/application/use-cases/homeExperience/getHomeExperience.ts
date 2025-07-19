import { HomeExperienceRepository } from '../../../domain/interfaces/HomeExperienceRepository.interface';

export const getHomeExperience = async (repo: HomeExperienceRepository) => {
  return await repo.get();
}; 