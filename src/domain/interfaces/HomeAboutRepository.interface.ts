import { HomeAboutEntity, HomeAboutProps } from '../entities/HomeAbout.entity';

export interface HomeAboutRepository {
  get(): Promise<HomeAboutEntity | null>;
  update(data: { about: string[] }): Promise<HomeAboutEntity | null>;
} 