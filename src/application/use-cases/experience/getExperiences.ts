import { ExperienceRepository } from '../../../domain/interfaces/ExperienceRepository.interface';

export const getExperiences = async (repo: ExperienceRepository) => {
  return await repo.getAll();
}; 