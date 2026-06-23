import {
  Gift,
  Rocket,
  BadgePercent,
} from "lucide-react";

export const promotions = [
  {
    title: "Instalação grátis",
    description: "Contrate hoje e não pague taxa de instalação.",
    badge: "Oferta especial",
    icon: Rocket,
  },
  {
    title: "Primeiro mês com desconto",
    description: "Ganhe desconto na primeira mensalidade do plano escolhido.",
    badge: "Por tempo limitado",
    icon: BadgePercent,
  },
  {
    title: "Indique e ganhe",
    description: "Indique um amigo e receba desconto na sua próxima fatura.",
    badge: "Cliente ganha",
    icon: Gift,
  },
];