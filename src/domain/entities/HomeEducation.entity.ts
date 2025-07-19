export interface HomeEducationSnapshot {
  _id: string;
  tipo: 'formacion' | 'certificacion';
  titulo: string;
  institucion: string;
  estado: 'En curso' | 'Completado' | 'Abandonado';
  fecha_inicio?: string;
  fecha_fin?: string | null;
  descripcion?: string;
}

export interface HomeEducationProps {
  _id?: string;
  education: HomeEducationSnapshot[];
}

export class HomeEducationEntity {
  constructor(public props: HomeEducationProps) {}
} 