export interface HomeContactProps {
  _id?: string;
  email: string;
  telefono: string;
  linkedin: string;
  github?: string;
  portfolio_url?: string;
}

export class HomeContactEntity {
  constructor(public props: HomeContactProps) {}
} 