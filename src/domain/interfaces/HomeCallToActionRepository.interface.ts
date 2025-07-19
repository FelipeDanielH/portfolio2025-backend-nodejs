import { HomeCallToActionEntity, HomeCallToActionProps } from '../entities/HomeCallToAction.entity';

export interface HomeCallToActionRepository {
  get(): Promise<HomeCallToActionEntity | null>;
  update(data: HomeCallToActionProps): Promise<HomeCallToActionEntity>;
} 