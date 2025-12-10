'use client';

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Briefcase, Library, Rocket, FileText, CheckCircle } from "lucide-react";
import Image from "next/image";
import { TextEffect } from "@/components/ui/text-effect";

export function SobreNosGrandeMinas() {
  return (
    <section id="sobre" className="w-full bg-white py-16 md:py-24 mt-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-[#16232A] sm:text-5xl">
            <TextEffect as="span" preset="fade-in-blur" speedSegment={0.3}>
              Colégio Técnico
            </TextEffect>
            <TextEffect
              as="span"
              preset="fade-in-blur"
              speedSegment={0.3}
              delay={0.4}
              className="text-[#FF5B04]"
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
            className="mt-6 text-2xl font-bold text-[#16232A]"
          >
            QUEM SOMOS:
          </TextEffect>

          <TextEffect
            as="p"
            per="line"
            preset="fade-in-blur"
            speedSegment={0.3}
            delay={0.8}
            className="mt-6 text-xl leading-8 text-[#16232A]/70"
          >
            O Colégio Técnico Grande Minas é a sua instituição de ensino parceira,
            dedicada à aceleração profissional e à conquista de títulos formais.
            Somos a solução estratégica para quem busca reconhecimento de sua experiência
            e a conclusão rápida de etapas essenciais da formação.
          </TextEffect>
        </div>

        <div className="bg-white rounded-2xl p-8 border border-[#E4EEF0] shadow-lg mb-20">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
            {[
              {
                icon: <Library className="w-8 h-8 text-[#FF5B04]" />,
                value: "+60 Cursos",
                label: "Técnicos e Profissionalizantes",
              },
              {
                icon: <Briefcase className="w-8 h-8 text-[#FF5B04]" />,
                value: "94%",
                label: "de Empregabilidade",
              },
              {
                icon: <Rocket className="w-8 h-8 text-[#FF5B04]" />,
                value: "Inovação",
                label: "e Foco no Mercado",
              },
            ].map((item) => (
              <div key={item.value} className="flex flex-col items-center">
                {item.icon}
                <div className="text-3xl font-bold text-[#FF5B04] mt-2">
                  {item.value}
                </div>
                <div className="text-sm text-[#16232A]/70 mt-1">{item.label}</div>
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
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </AspectRatio>

          <div className="pl-0 md:pl-8">
            <TextEffect
              as="h2"
              preset="fade-in-blur"
              speedSegment={0.3}
              className="text-3xl font-bold tracking-tight text-[#16232A]"
            >
              Nossa Abordagem: Duas Soluções Estratégicas
            </TextEffect>

            <div className="mt-6 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#FF5B04] mb-2">
                  Certificação Técnica por Competência
                </h3>
                <p className="text-lg leading-8 text-[#16232A]/70">
                  Somos especialistas em validar o conhecimento prático. Transformamos
                  o know-how adquirido ao longo de anos de trabalho em um Diploma Técnico
                  oficial, válido e reconhecido pelo MEC e em todo o território nacional.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#FF5B04] mb-2">
                  EJA EaD Acelerado
                </h3>
                <p className="text-lg leading-8 text-[#16232A]/70">
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
            <div className="flex items-center mb-6">
              <FileText className="w-8 h-8 text-[#FF5B04] mr-3" />
              <TextEffect
                as="h2"
                preset="fade-in-blur"
                speedSegment={0.3}
                className="text-3xl font-bold tracking-tight text-[#16232A]"
              >
                Reconhecimento Oficial: O Seu Diploma Técnico por Competência
              </TextEffect>
            </div>

            <div className="mt-6 space-y-6">
              <div>
                <p className="text-lg leading-8 text-[#16232A]/70">
                  Ao concluir sua Certificação por Competência com a Grande Minas, você recebe um 
                  <strong> Diploma Técnico que comprova sua experiência e é reconhecido pelo MEC</strong>, 
                  válido em todo o território nacional. Este documento atesta sua expertise prática 
                  e é amplamente aceito no mercado de trabalho, concursos públicos e conselhos profissionais. 
                  Além disso, ele é a prova concreta de que anos de dedicação no campo de trabalho foram formalizados.
                </p>
              </div>

              <div>
                <p className="text-lg leading-8 text-[#16232A]/70">
                  Para sua total segurança, o Diploma é registrado no 
                  <strong> SISTEC (Sistema Nacional de Informações da Educação Profissional e Tecnológica)</strong>. 
                  Isso garante que seu investimento em educação trará o retorno merecido, abrindo portas 
                  para novas oportunidades e crescimento na carreira.
                </p>
              </div>

              <div>
                <p className="text-lg leading-8 text-[#16232A]/70">
                  Nosso processo destaca-se pela <strong>rapidez, credibilidade e total rigor legal</strong>, 
                  garantindo que você tenha o título que faz a diferença.
                </p>
                
                <div className="mt-4 space-y-3">
                  <h4 className="text-lg font-bold text-[#16232A]">
                    Sendo assim, ao finalizar a Certificação, o profissional estará habilitado para:
                  </h4>
                  
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#FF5B04] mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-[#16232A]/80">
                        <strong>Registro nos Conselhos de Classe (CREA/CFT).</strong>
                      </span>
                    </div>
                    
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#FF5B04] mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-[#16232A]/80">
                        <strong>Progressão de carreira e acesso a cargos técnicos.</strong>
                      </span>
                    </div>
                    
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#FF5B04] mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-[#16232A]/80">
                        <strong>Participação em certames e concursos públicos.</strong>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
          <div className="relative w-full h-full min-h-[400px]">
            <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg border-2 border-[#E4EEF0] bg-gradient-to-br from-[#16232A]/5 to-[#FF5B04]/5 flex items-center justify-center">
              <Image
                src="/diploma.webp"
                alt="Diploma Técnico por Competência - Reconhecido pelo MEC e registrado no SISTEC"
                width={800}
                height={800}
                className="object-contain w-full h-full p-4"
                sizes="(max-width: 768px) 100vw, 50vw"
                onError={(e) => {
                  
                  const img = e.currentTarget;
                  img.src = 'https://via.placeholder.com/800x800/16232A/FFFFFF?text=Diploma+Técnico+Grande+Minas';
                  img.className = 'object-cover w-full h-full rounded-lg';
                }}
              />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-white/90 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <FileText className="w-16 h-16 text-[#FF5B04] mb-4" />
                <h3 className="text-xl font-bold text-[#16232A]">Diploma Técnico por Competência</h3>
                <p className="text-[#16232A]/70 mt-2">
                  Reconhecido pelo MEC • Registrado no SISTEC • Válido nacionalmente
                </p>
              </div>
            </div>
            <p className="text-center text-sm text-gray-500 mt-2 italic">
              Diploma Técnico oficial com registro no SISTEC e reconhecimento MEC
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <TextEffect
              as="h2"
              preset="fade-in-blur"
              speedSegment={0.3}
              className="text-3xl font-bold tracking-tight text-[#16232A]"
            >
              Metodologia Validada e Reconhecida
            </TextEffect>

            <div className="mt-6 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#FF5B04] mb-2">
                  Base Legal Sólida
                </h3>
                <p className="text-lg leading-8 text-[#16232A]/70">
                  <strong>Eliminamos a necessidade de longos anos de retorno à sala de aula tradicional,
                    amparados integralmente pela Lei de Diretrizes e Bases da Educação (LDB).</strong>
                  Nossa atuação é 100% legal e respaldada pela legislação educacional brasileira.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#FF5B04] mb-2">
                  Resultados Imediatos
                </h3>
                <p className="text-lg leading-8 text-[#16232A]/70">
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
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </AspectRatio>
        </div>

        
        <div className="bg-white rounded-2xl p-8 border border-[#E4EEF0] shadow-lg">
          <TextEffect
            as="h2"
            preset="fade-in-blur"
            speedSegment={0.3}
            className="text-3xl font-bold tracking-tight text-[#16232A] text-center mb-8"
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
              className="text-xl leading-8 text-[#16232A]/70 text-center"
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
              className="text-2xl font-bold text-[#FF5B04] text-center mt-8"
            >
              Grande Minas: Seu Grande Salto em Competências!
            </TextEffect>
          </div>
        </div>
      </div>
    </section>
  );
}