import { ExperienceRepository } from '../../../domain/interfaces/ExperienceRepository.interface';
import { ExperienceProps } from '../../../domain/entities/Experience.entity';

export const updateExperience = async (repo: ExperienceRepository, id: string, data: Partial<ExperienceProps>) => {
  return await repo.update(id, data);
}; 