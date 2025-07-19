import { HomeContactEntity, HomeContactProps } from '../entities/HomeContact.entity';

export interface HomeContactRepository {
  get(): Promise<HomeContactEntity | null>;
  update(data: HomeContactProps): Promise<HomeContactEntity>;
} 