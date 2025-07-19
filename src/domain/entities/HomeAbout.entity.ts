export interface HomeAboutProps {
  _id?: string;
  about: string[];
}

export class HomeAboutEntity {
  constructor(public props: HomeAboutProps) {}
} 