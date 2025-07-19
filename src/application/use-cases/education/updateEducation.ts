import { EducationRepository } from '../../../domain/interfaces/EducationRepository.interface';
import { EducationProps } from '../../../domain/entities/Education.entity';

export const updateEducation = async (repo: EducationRepository, id: string, data: Partial<EducationProps>) => {
  return await repo.update(id, data);
}; 