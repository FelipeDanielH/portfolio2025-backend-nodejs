export interface HomeCallToActionProps {
  _id?: string;
  titulo: string;
  subtitulo: string;
}

export class HomeCallToActionEntity {
  constructor(public props: HomeCallToActionProps) {}
} 