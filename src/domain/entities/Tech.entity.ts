export interface TechProps {
  _id?: string;
  tipo: 'lenguaje' | 'framework' | 'rol' | 'herramienta';
  nombre: string;
  icono?: string;
}

export class TechEntity {
  constructor(public props: TechProps) {}
} 