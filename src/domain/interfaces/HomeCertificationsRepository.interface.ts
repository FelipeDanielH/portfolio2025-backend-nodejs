import { HomeCertificationsEntity, HomeCertificationsProps } from '../entities/HomeCertifications.entity';

export interface HomeCertificationsRepository {
  get(): Promise<HomeCertificationsEntity | null>;
  update(certifications: HomeCertificationsProps['certifications']): Promise<HomeCertificationsEntity>;
} 