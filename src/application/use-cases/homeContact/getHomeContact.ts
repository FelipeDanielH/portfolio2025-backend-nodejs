import { HomeContactRepository } from '../../../domain/interfaces/HomeContactRepository.interface';

export const getHomeContact = async (repo: HomeContactRepository) => {
  return await repo.get();
}; 