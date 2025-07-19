export interface HomeExperienceSnapshot {
  _id: string;
  rol: string;
  empresa: string;
  ubicacion: string;
  fecha_inicio: string;
  fecha_fin?: string | null;
  descripcion: string;
  orden: number;
}

export interface HomeExperienceProps {
  _id?: string;
  experience: HomeExperienceSnapshot[];
}

export class HomeExperienceEntity {
  constructor(public props: HomeExperienceProps) {}
} 