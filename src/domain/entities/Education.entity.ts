export interface EducationLink {
  titulo: string;
  url: string;
}

export interface EducationProps {
  _id?: string;
  tipo: 'formacion' | 'certificacion';
  titulo: string;
  institucion: string;
  estado: 'En curso' | 'Completado' | 'Abandonado';
  fecha_inicio?: string;
  fecha_fin?: string | null;
  descripcion?: string;
  aprendizajes?: string[];
  certificado_url?: string;
  links_relevantes?: EducationLink[];
}

export class EducationEntity {
  constructor(public props: EducationProps) {}
}