export interface ExperienceProps {
  _id?: string;
  rol: string;
  empresa: string;
  ubicacion: string;
  modalidad?: 'Remoto' | 'Presencial' | 'Híbrido';
  equipo?: string;
  sector?: string;
  fecha_inicio: string;
  fecha_fin?: string;
  descripcion: string;
  responsabilidades?: string[];
  logros?: string[];
  tecnologias?: string[];
  orden: number;
}

export class ExperienceEntity {
  constructor(public props: ExperienceProps) {}
}