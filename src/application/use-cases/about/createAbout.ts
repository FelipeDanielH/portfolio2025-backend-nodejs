import { AboutRepository } from '../../../domain/interfaces/AboutRepository.interface';
import { AboutProps } from '../../../domain/entities/About.entity';

export const createAbout = async (repo: AboutRepository, data: AboutProps) => {
  return await repo.create(data);
}; 