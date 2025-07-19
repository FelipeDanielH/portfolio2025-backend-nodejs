export interface ProjectLinks {
  demo?: string;
  frontend?: string;
  backend?: string;
  github?: string;
  otros?: { titulo: string; url: string }[];
}

export interface ProjectProps {
  _id?: string;
  nombre: string;
  descripcion: string;
  tecnologias: string[];
  roles?: string[];
  frameworks?: string[];
  lenguajes?: string[];
  herramientas?: string[];
  estado: 'en desarrollo' | 'completado' | 'abandonado';
  año: number;
  imagen?: string;
  links: ProjectLinks;
}

export class ProjectEntity {
  constructor(public props: ProjectProps) {}
}