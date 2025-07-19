export interface HomeHeroProps {
  _id?: string;
  nombre: string;
  titulo: string;
  claim: string;
  telefono: string;
  ubicacion: string;
  email: string;
  linkedin: string;
  cv: string;
  boton_contacto: string;
}

export class HomeHeroEntity {
  constructor(public props: HomeHeroProps) {}
} 