import { ExperienceRepository } from '../../../domain/interfaces/ExperienceRepository.interface';

export const deleteExperience = async (repo: ExperienceRepository, id: string) => {
  return await repo.delete(id);
}; 