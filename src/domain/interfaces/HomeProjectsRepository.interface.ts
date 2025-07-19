import { HomeProjectsEntity, HomeProjectsProps } from '../entities/HomeProjects.entity';

export interface HomeProjectsRepository {
  get(): Promise<HomeProjectsEntity | null>;
  update(projects: HomeProjectsProps['projects']): Promise<HomeProjectsEntity>;
} 