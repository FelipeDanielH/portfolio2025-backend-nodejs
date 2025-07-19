import { EducationEntity, EducationProps } from '../entities/Education.entity';

export interface EducationRepository {
  getAll(): Promise<EducationEntity[]>;
  create(data: EducationProps): Promise<EducationEntity>;
  update(id: string, data: Partial<EducationProps>): Promise<EducationEntity | null>;
  delete(id: string): Promise<boolean>;
}