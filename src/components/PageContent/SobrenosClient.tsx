'use client';

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Briefcase, Library, Rocket } from "lucide-react";
import Image from "next/image";
import { TextEffect } from "@/components/ui/text-effect";


const blazeOrange = "#FF5B04";
const mirage = "#16232A";
const mirageOpaque = "#16232A]/70"; 
const wildSand = "#E4EEF0";

const highlights = [
  {
    icon: <Library className={`w-8 h-8 text-[${blazeOrange}]`} />,
    value: "+60 Cursos",
    label: "Técnicos e Profissionalizantes",
  },
  {
    icon: <Briefcase className={`w-8 h-8 text-[${blazeOrange}]`} />,
    value: "94%",
    label: "de Empregabilidade",
  },
  {
    icon: <Rocket className={`w-8 h-8 text-[${blazeOrange}]`} />,
    value: "Inovação",
    label: "e Foco no Mercado",
  },
];

export function SobreNosGrandeMinas() {
  return (
    <section id="sobre" className="w-full bg-white py-16 md:py-24 mt-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className={`text-4xl font-bold tracking-tight text-[${mirage}] sm:text-5xl`}>
            <TextEffect as="span" preset="fade-in-blur" speedSegment={0.3}>
              Colégio Técnico
            </TextEffect>
            <TextEffect
              as="span"
              preset="fade-in-blur"
              speedSegment={0.3}
              delay={0.4}
              className={`text-[${blazeOrange}]`}
            >
              {" Grande Minas"}
            </TextEffect>
          </h1>

          <TextEffect
            as="h2"
            per="line"
            preset="fade-in-blur"
            speedSegment={0.3}
            delay={0.6}
            className={`mt-6 text-2xl font-bold text-[${mirage}]`}
          >
            QUEM SOMOS:
          </TextEffect>

          <TextEffect
            as="p"
            per="line"
            preset="fade-in-blur"
            speedSegment={0.3}
            delay={0.8}
            className={`mt-6 text-xl leading-8 text-[${mirageOpaque}]`}
          >
            O Colégio Técnico Grande Minas é a sua instituição de ensino parceira,
            dedicada à aceleração profissional e à conquista de títulos formais.
            Somos a solução estratégica para quem busca reconhecimento de sua experiência
            e a conclusão rápida de etapas essenciais da formação.
          </TextEffect>
        </div>

        
        <div className={`bg-white rounded-2xl p-8 border border-[${wildSand}] shadow-lg mb-20`}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
            {highlights.map((item) => (
              <div key={item.value} className="flex flex-col items-center">
                {item.icon}
                <div className={`text-3xl font-bold text-[${blazeOrange}] mt-2`}>
                  {item.value}
                </div>
                <div className={`text-sm text-[${mirageOpaque}] mt-1`}>{item.label}</div>
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
              className={`text-3xl font-bold tracking-tight text-[${mirage}]`}
            >
              Nossa Abordagem: Duas Soluções Estratégicas
            </TextEffect>

            <div className="mt-6 space-y-6">
              <div>
                <h3 className={`text-xl font-bold text-[${blazeOrange}] mb-2`}>
                  Certificação Técnica por Competência
                </h3>
                <p className={`text-lg leading-8 text-[${mirageOpaque}]`}>
                  Somos especialistas em validar o conhecimento prático. Transformamos
                  o know-how adquirido ao longo de anos de trabalho em um Diploma Técnico
                  oficial, válido e reconhecido pelo MEC e em todo o território nacional.
                </p>
              </div>

              <div>
                <h3 className={`text-xl font-bold text-[${blazeOrange}] mb-2`}>
                  EJA EaD Acelerado
                </h3>
                <p className={`text-lg leading-8 text-[${mirageOpaque}]`}>
                  Oferecemos o caminho rápido e flexível para a conclusão do Ensino
                  Fundamental e/ou Ensino Médio. Com nossa modalidade EAD, o adulto
                  trabalhador pode retomar os estudos em seu próprio ritmo, obtendo
                  o certificado de conclusão de forma ágil,
                  <strong> essencial para o avanço em concursos, faculdades e no mercado de trabalho.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <TextEffect
              as="h2"
              preset="fade-in-blur"
              speedSegment={0.3}
              className={`text-3xl font-bold tracking-tight text-[${mirage}]`}
            >
              Metodologia Validada e Reconhecida
            </TextEffect>

            <div className="mt-6 space-y-6">
              <div>
                <h3 className={`text-xl font-bold text-[${blazeOrange}] mb-2`}>
                  Base Legal Sólida
                </h3>
                <p className={`text-lg leading-8 text-[${mirageOpaque}]`}>
                  <strong>Eliminamos a necessidade de longos anos de retorno à sala de aula tradicional,
                    amparados integralmente pela Lei de Diretrizes e Bases da Educação (LDB).</strong>
                  Nossa atuação é 100% legal e respaldada pela legislação educacional brasileira.
                </p>
              </div>

              <div>
                <h3 className={`text-xl font-bold text-[${blazeOrange}] mb-2`}>
                  Resultados Imediatos
                </h3>
                <p className={`text-lg leading-8 text-[${mirageOpaque}]`}>
                  <strong>O Colégio Técnico Grande Minas: O caminho legal e direto para o seu próximo nível profissional.</strong>
                  Conectamos sua experiência prática com a certificação formal, acelerando sua ascensão profissional.
                </p>
              </div>
            </div>
          </div>

          <AspectRatio ratio={4 / 3}>
            <Image
              src="https://images.pexels.com/photos/8423079/pexels-photo-8423079.jpeg?_gl=1*12d1e4x*_ga*MTcxNzA2Mzc4OC4xNzU1NjI1MjMx*_ga_8JE65Q40S6*czE3NjIyODcwMDEkbzE5JGcxJHQxNzYyMjg3MDUzJGo4JGwwJGgw"
              alt="Metodologia educacional da Grande Minas"
              fill
              className="rounded-lg object-cover shadow-lg"
            />
          </AspectRatio>
        </div>

        {/* Seção de Diferencial */}
        <div className="bg-white rounded-2xl p-8 border border-[${wildSand}] shadow-lg">
          <TextEffect
            as="h2"
            preset="fade-in-blur"
            speedSegment={0.3}
            className={`text-3xl font-bold tracking-tight text-[${mirage}] text-center mb-8`}
          >
            Nosso Diferencial
          </TextEffect>

          <div className="max-w-4xl mx-auto">
            <TextEffect
              as="p"
              per="line"
              preset="fade-in-blur"
              speedSegment={0.3}
              delay={0.4}
              className={`text-xl leading-8 text-[${mirageOpaque}] text-center`}
            >
              Na Grande Minas, valorizamos seu tempo e sua história. Garantimos um processo
              ágil, seguro e legal para que você conquiste seu título para promoções,
              concursos ou registro no Conselho Profissional (CREA/CFT).
            </TextEffect>

            <TextEffect
              as="p"
              per="line"
              preset="fade-in-blur"
              speedSegment={0.3}
              delay={0.8}
              className={`text-2xl font-bold text-[${blazeOrange}] text-center mt-8`}
            >
              Grande Minas: Seu Grande Salto em Competências
            </TextEffect>
          </div>
        </div>
      </div>
    </section>
  );
}