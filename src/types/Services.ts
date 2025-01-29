import { ReactNode } from "react";

export type Service = {
  name: string; // Nome do serviço
  idealFor: string; // Frase explicando para quem ou para que é ideal
  includes: string[]; // Lista do que está incluído
  whatsappButton: {
    text: string,
    url: string,
  },
  deliveryTime?: string; // Tempo médio de entrega (ex.: "Até 7 dias úteis")
  icon?: string; // Ícone representativo do serviço
  additionalInfo?: string; // Informações extras ou diferenciais do serviço
};

export type LPServiceType = {
  titulo: string;
  descricao: string;
  preco?: number;
  icone: JSX.Element;
}

export type ListItem = {
  title: string;
  items: ReactNode[];
};