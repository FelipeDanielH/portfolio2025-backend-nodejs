export interface HomeProjectSnapshot {
  _id: string;
  nombre: string;
  descripcion: string;
  tecnologias: string[];
  estado: 'en desarrollo' | 'completado' | 'abandonado';
  año: number;
  imagen?: string;
  links: {
    demo?: string;
    frontend?: string;
    backend?: string;
    github?: string;
  };
}

export interface HomeProjectsProps {
  _id?: string;
  projects: HomeProjectSnapshot[];
}

export class HomeProjectsEntity {
  constructor(public props: HomeProjectsProps) {}
} 