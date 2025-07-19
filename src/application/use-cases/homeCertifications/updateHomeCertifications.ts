import { HomeCertificationsRepository } from '../../../domain/interfaces/HomeCertificationsRepository.interface';
import { HomeCertificationsProps } from '../../../domain/entities/HomeCertifications.entity';

export const updateHomeCertifications = async (repo: HomeCertificationsRepository, certifications: HomeCertificationsProps['certifications']) => {
  return await repo.update(certifications);
}; 