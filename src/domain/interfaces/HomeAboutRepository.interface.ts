import { HomeAboutEntity, HomeAboutProps } from '../entities/HomeAbout.entity';

export interface HomeAboutRepository {
  get(): Promise<HomeAboutEntity | null>;
  update(about: HomeAboutProps['about']): Promise<HomeAboutEntity>;
} 