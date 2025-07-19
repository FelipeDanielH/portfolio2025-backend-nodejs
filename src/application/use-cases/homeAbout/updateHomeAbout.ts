import { HomeAboutRepository } from '../../../domain/interfaces/HomeAboutRepository.interface';

export const updateHomeAbout = async (repo: HomeAboutRepository, about: string[]) => {
  return await repo.update({ about });
}; 