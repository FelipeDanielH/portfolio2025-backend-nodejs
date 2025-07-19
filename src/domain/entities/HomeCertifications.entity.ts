export interface HomeCertificationSnapshot {
  _id: string;
  titulo: string;
  institucion: string;
  estado: 'En curso' | 'Completado' | 'Abandonado';
  fecha_inicio?: string;
  fecha_fin?: string | null;
}

export interface HomeCertificationsProps {
  _id?: string;
  certifications: HomeCertificationSnapshot[];
}

export class HomeCertificationsEntity {
  constructor(public props: HomeCertificationsProps) {}
} 