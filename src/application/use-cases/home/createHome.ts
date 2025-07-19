import { HomeRepository } from '../../../domain/interfaces/HomeRepository.interface';
import { HomeProps } from '../../../domain/entities/Home.entity';

export const createHome = async (repo: HomeRepository, data: HomeProps) => {
  return await repo.create(data);
}; 