import { HomeCallToActionRepository } from '../../../domain/interfaces/HomeCallToActionRepository.interface';

export const getHomeCallToAction = async (repo: HomeCallToActionRepository) => {
  return await repo.get();
}; 