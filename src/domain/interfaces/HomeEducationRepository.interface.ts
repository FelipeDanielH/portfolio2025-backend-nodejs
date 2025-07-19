import { HomeEducationEntity, HomeEducationProps } from '../entities/HomeEducation.entity';

export interface HomeEducationRepository {
  get(): Promise<HomeEducationEntity | null>;
  update(education: HomeEducationProps['education']): Promise<HomeEducationEntity>;
} 