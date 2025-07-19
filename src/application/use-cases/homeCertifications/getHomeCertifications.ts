import { HomeCertificationsRepository } from '../../../domain/interfaces/HomeCertificationsRepository.interface';

export const getHomeCertifications = async (repo: HomeCertificationsRepository) => {
  return await repo.get();
}; 