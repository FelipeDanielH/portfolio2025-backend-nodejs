export interface SkillConcept {
  nombre: string;
  aprendido: boolean;
  _id?: string;
}

export interface SkillProps {
  _id?: string;
  categoria_id: string;
  tecnologia: string;
  nivel: 'Básico' | 'Intermedio' | 'Avanzado' | 'Experto';
  puntuacion: number;
  descripcion?: string;
  conceptos?: SkillConcept[];
  orden?: number;
}

export class SkillEntity {
  constructor(public props: SkillProps) {}
}