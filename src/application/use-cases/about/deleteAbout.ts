import { AboutRepository } from '../../../domain/interfaces/AboutRepository.interface';

export const deleteAbout = async (repo: AboutRepository, id: string) => {
  return await repo.delete(id);
}; 