import { AboutRepository } from '../../../domain/interfaces/AboutRepository.interface';
import { AboutProps } from '../../../domain/entities/About.entity';

export const updateAbout = async (repo: AboutRepository, id: string, data: Partial<AboutProps>) => {
  return await repo.update(id, data);
};