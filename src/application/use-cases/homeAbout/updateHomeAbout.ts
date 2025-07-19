import { HomeAboutRepository } from '../../../domain/interfaces/HomeAboutRepository.interface';
import { HomeAboutProps } from '../../../domain/entities/HomeAbout.entity';

export const updateHomeAbout = async (repo: HomeAboutRepository, about: HomeAboutProps['about']) => {
  return await repo.update(about);
}; 