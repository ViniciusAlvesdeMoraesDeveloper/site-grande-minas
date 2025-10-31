
import { AspectRatio } from "@/components/ui/aspect-ratio"; 
import { Briefcase, Library, Rocket } from "lucide-react";
import Image from "next/image";
import { TextEffect } from "@/components/ui/text-effect"; 
import { Metadata } from 'next'; 
import { SobreNosGrandeMinas } from "@/components/PageContent/SobrenosClient";



export const metadata: Metadata = {
  title: "Sobre Nós | Colégio Técnico TecMinas",
  description:
    "O Colégio Técnico TecMinas é referência em educação técnica e profissionalizante em Minas Gerais. Conheça nossa filosofia, metodologia e compromisso com a empregabilidade.",
  keywords: [
    "Sobre TecMinas",
    "Educação Técnica MG",
    "Colégio Profissionalizante",
    "História TecMinas",
  ],
  openGraph: {
    title: "Sobre o Colégio Técnico TecMinas",
    description:
      "Transformando potencial em profissão. Educação técnica que conecta teoria e prática.",
    url: "https://colegiotecminas.com.br/sobre-nos",
    siteName: "TecMinas",
    images: [
      {
        url: "https://colegiotecminas.com.br/images/sobre.jpg",
        width: 1200,
        height: 630,
        alt: "Sobre o Colégio Técnico TecMinas",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

const highlights = [
  {
    icon: <Library className="w-8 h-8 text-red-600" />,
    value: "+60 Cursos",
    label: "Técnicos e Profissionalizantes",
  },
  {
    icon: <Briefcase className="w-8 h-8 text-red-600" />,
    value: "94%",
    label: "de Empregabilidade",
  },
  {
    icon: <Rocket className="w-8 h-8 text-red-600" />,
    value: "Inovação",
    label: "e Foco no Mercado",
  },
];

export default function SobreNosPage(){
  return <SobreNosGrandeMinas/>;
}


