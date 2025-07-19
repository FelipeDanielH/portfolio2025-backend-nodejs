import { TechRepository } from '../../../domain/interfaces/TechRepository.interface';
import { TechProps } from '../../../domain/entities/Tech.entity';

export const createTech = async (repo: TechRepository, data: TechProps) => {
  return await repo.create(data);
}; 