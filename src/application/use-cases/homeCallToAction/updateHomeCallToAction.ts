import { HomeCallToActionRepository } from '../../../domain/interfaces/HomeCallToActionRepository.interface';
import { HomeCallToActionProps } from '../../../domain/entities/HomeCallToAction.entity';

export const updateHomeCallToAction = async (repo: HomeCallToActionRepository, data: HomeCallToActionProps) => {
  return await repo.update(data);
}; 