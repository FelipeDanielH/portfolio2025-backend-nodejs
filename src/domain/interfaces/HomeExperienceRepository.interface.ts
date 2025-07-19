import { HomeExperienceEntity, HomeExperienceProps } from '../entities/HomeExperience.entity';

export interface HomeExperienceRepository {
  get(): Promise<HomeExperienceEntity | null>;
  update(experience: HomeExperienceProps['experience']): Promise<HomeExperienceEntity>;
} 