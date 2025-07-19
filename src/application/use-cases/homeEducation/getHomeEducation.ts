import { HomeEducationRepository } from '../../../domain/interfaces/HomeEducationRepository.interface';

export const getHomeEducation = async (repo: HomeEducationRepository) => {
  return await repo.get();
}; 