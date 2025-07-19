import { EducationRepository } from '../../../domain/interfaces/EducationRepository.interface';
import { EducationProps } from '../../../domain/entities/Education.entity';

export const createEducation = async (repo: EducationRepository, data: EducationProps) => {
  return await repo.create(data);
};