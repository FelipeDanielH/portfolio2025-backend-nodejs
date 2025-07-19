import { HomeExperienceRepository } from '../../../domain/interfaces/HomeExperienceRepository.interface';
import { HomeExperienceProps } from '../../../domain/entities/HomeExperience.entity';

export const updateHomeExperience = async (repo: HomeExperienceRepository, experience: HomeExperienceProps['experience']) => {
  return await repo.update(experience);
}; 