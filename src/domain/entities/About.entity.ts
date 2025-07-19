export interface AboutProps {
  _id?: string;
  titulo: string;
  descripcion: string;
  orden: number;
}

export class AboutEntity {
  constructor(public props: AboutProps) {}
}