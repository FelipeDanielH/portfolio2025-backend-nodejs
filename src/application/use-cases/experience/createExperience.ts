import { ExperienceRepository } from '../../../domain/interfaces/ExperienceRepository.interface';
import { ExperienceProps } from '../../../domain/entities/Experience.entity';

export const createExperience = async (repo: ExperienceRepository, data: ExperienceProps) => {
  return await repo.create(data);
};