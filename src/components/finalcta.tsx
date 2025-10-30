import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function FinalCTA() {
  return (
    // A seção agora tem position-relative para conter os elementos de fundo
    <section className="relative w-full bg-gray-900 overflow-hidden">
      {/* Elementos decorativos de fundo para um toque premium */}
      <div aria-hidden className="absolute inset-0 isolate -z-10">
        <div className="absolute left-1/2 top-0 -z-10 h-[50rem] w-[50rem] -translate-x-1/2 rounded-full bg-[radial-gradient(50%_50%_at_50%_0%,rgba(220,38,38,0.15)_0%,rgba(220,38,38,0)_100%)]" />
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Coluna de Texto e Botões */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Pronto para dar o próximo passo na sua carreira?
            </h2>
            <p className="mt-6 text-xl leading-8 text-gray-300">
              A TecMinas é a ponte entre você e o mercado de trabalho. Nossos
              cursos técnicos são desenhados para o sucesso. Fale conosco e
              descubra o caminho ideal para você.
            </p>
            <div className="mt-10 flex items-center justify-center md:justify-start gap-x-4">
              <Button
                size="lg"
                className="bg-red-600 text-white hover:bg-red-700 shadow-lg px-8 py-6 text-base"
              >
                Faça sua Inscrição
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="text-white hover:bg-white/10 px-8 py-6 text-base"
              >
                Converse com um Consultor
              </Button>
            </div>
          </div>

          {/* Coluna da Imagem */}
          <div className="relative w-full h-80 hidden md:block">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
              alt="Estudante feliz olhando para o futuro"
              fill
              className="object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
