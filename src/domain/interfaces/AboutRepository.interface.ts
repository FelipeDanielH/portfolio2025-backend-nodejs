import { AboutEntity, AboutProps } from '../entities/About.entity';

export interface AboutRepository {
  getAll(): Promise<AboutEntity[]>;
  create(data: AboutProps): Promise<AboutEntity>;
  update(id: string, data: Partial<AboutProps>): Promise<AboutEntity | null>;
  delete(id: string): Promise<boolean>;
}