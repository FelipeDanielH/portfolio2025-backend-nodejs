import { HomeEducationRepository } from '../../../domain/interfaces/HomeEducationRepository.interface';
import { HomeEducationProps } from '../../../domain/entities/HomeEducation.entity';

export const updateHomeEducation = async (repo: HomeEducationRepository, education: HomeEducationProps['education']) => {
  return await repo.update(education);
}; 