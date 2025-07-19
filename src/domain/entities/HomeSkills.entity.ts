export interface HomeSkillsProps {
  _id?: string;
  skills: string[];
}

export class HomeSkillsEntity {
  constructor(public props: HomeSkillsProps) {}
} 