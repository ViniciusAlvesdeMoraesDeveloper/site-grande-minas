'use client';

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Briefcase, Library, Rocket } from "lucide-react";
import Image from "next/image";
import { TextEffect } from "@/components/ui/text-effect";
import { Metadata } from 'next';

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

export function SobreNosGrandeMinas() {
  return (
    <section id="sobre" className="w-full bg-white py-16 md:py-24 mt-10">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            <TextEffect as="span" preset="fade-in-blur" speedSegment={0.3}>
              Sobre Nós:
            </TextEffect>
            <TextEffect
              as="span"
              preset="fade-in-blur"
              speedSegment={0.3}
              delay={0.4}
              className="text-red-600"
            >
              {" Grande Minas"}
            </TextEffect>
          </h1>

          <TextEffect
            as="p"
            per="line"
            preset="fade-in-blur"
            speedSegment={0.3}
            delay={0.8}
            className="mt-6 text-xl leading-8 text-gray-600"
          >
            Comprometidos em transformar vidas através da educação. A Grande Minas
            oferece Cursos Técnicos de excelência e a chance de concluir os estudos
            rapidamente com o EJA (Educação de Jovens e Adultos), abrindo novos caminhos para o futuro.
          </TextEffect>
        </div>

        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg mb-20">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
            {highlights.map((item) => (
              <div key={item.value} className="flex flex-col items-center">
                {item.icon}
                <div className="text-3xl font-bold text-red-600 mt-2">
                  {item.value}
                </div>
                <div className="text-sm text-gray-500 mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <AspectRatio ratio={4 / 3}>
            <Image
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
              alt="Alunos da Grande Minas colaborando em um projeto"
              fill
              className="rounded-lg object-cover shadow-lg"
            />
          </AspectRatio>

          <div className="pl-0 md:pl-8">
            <TextEffect
              as="h2"
              preset="fade-in-blur"
              speedSegment={0.3}
              className="text-3xl font-bold tracking-tight text-gray-900"
            >
              Nossa Filosofia: Educação que Conecta com o Mercado
            </TextEffect>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Acreditamos que o conhecimento só tem valor quando aplicado na prática.
              Por isso, nossa metodologia é focada em projetos reais, desafios
              do mercado e parcerias com empresas locais, garantindo que nossos
              alunos saiam não apenas com um diploma, mas com experiência
              relevante.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}