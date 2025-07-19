import { HomeContactRepository } from '../../../domain/interfaces/HomeContactRepository.interface';
import { HomeContactProps } from '../../../domain/entities/HomeContact.entity';

export const updateHomeContact = async (repo: HomeContactRepository, data: HomeContactProps) => {
  return await repo.update(data);
}; 