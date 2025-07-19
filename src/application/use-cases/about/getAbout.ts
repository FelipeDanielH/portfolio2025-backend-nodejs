import { AboutRepository } from '../../../domain/interfaces/AboutRepository.interface';

export const getAbout = async (repo: AboutRepository) => {
  return await repo.getAll();
};