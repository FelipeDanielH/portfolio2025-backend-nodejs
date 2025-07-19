import { TechRepository } from '../../../domain/interfaces/TechRepository.interface';
import { TechProps } from '../../../domain/entities/Tech.entity';

export const updateTech = async (repo: TechRepository, id: string, data: Partial<TechProps>) => {
  return await repo.update(id, data);
}; 