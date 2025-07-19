import { TechEntity, TechProps } from '../entities/Tech.entity';

export interface TechRepository {
  getAll(): Promise<TechEntity[]>;
  create(data: TechProps): Promise<TechEntity>;
  update(id: string, data: Partial<TechProps>): Promise<TechEntity | null>;
  delete(id: string): Promise<boolean>;
} 