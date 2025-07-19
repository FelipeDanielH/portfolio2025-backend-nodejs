import { EducationRepository } from '../../../domain/interfaces/EducationRepository.interface';

export const deleteEducation = async (repo: EducationRepository, id: string) => {
  return await repo.delete(id);
}; 