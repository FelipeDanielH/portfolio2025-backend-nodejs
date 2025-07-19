import { EducationRepository } from '../../../domain/interfaces/EducationRepository.interface';

export const getEducations = async (repo: EducationRepository) => {
  return await repo.getAll();
}; 