import { ExperienceEntity, ExperienceProps } from '../entities/Experience.entity';

export interface ExperienceRepository {
  getAll(): Promise<ExperienceEntity[]>;
  create(data: ExperienceProps): Promise<ExperienceEntity>;
  update(id: string, data: Partial<ExperienceProps>): Promise<ExperienceEntity | null>;
  delete(id: string): Promise<boolean>;
}