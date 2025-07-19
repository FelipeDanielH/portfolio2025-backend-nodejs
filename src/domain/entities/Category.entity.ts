export interface CategoryProps {
  _id?: string;
  nombre: string;
  orden: number;
}

export class CategoryEntity {
  constructor(public props: CategoryProps) {}
} 