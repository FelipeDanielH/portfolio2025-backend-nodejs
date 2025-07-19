export interface HomeAboutSnapshot {
  _id: string;
  titulo: string;
  descripcion: string;
  orden: number;
}

export interface HomeAboutProps {
  _id?: string;
  about: HomeAboutSnapshot[];
}

export class HomeAboutEntity {
  constructor(public props: HomeAboutProps) {}
} 