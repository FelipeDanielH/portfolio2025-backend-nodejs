import { HeroEntity, HeroProps } from '../entities/Home.entity';

export interface HeroRepository {
  get(): Promise<HeroEntity | null>;
  update(data: Partial<HeroProps>): Promise<HeroEntity | null>;
}