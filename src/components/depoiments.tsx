import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Juliana Martins",
    role: "Especialista em Instrumentação Cirúrgica",
    company: "Hospital Sírio-Libanês",
    course: "Técnico em Enfermagem",
    rating: 5,
    text: "O curso técnico foi a base para a minha especialização. Hoje atuo em cirurgias complexas em um dos melhores hospitais do país. A formação sólida que recebi foi essencial para essa conquista.",
    salary: "R$ 3.200",
    timeToJob: "3 meses",
    avatar: "JM",
  },
  {
    id: 2,
    name: "Lucas Ferreira",
    role: "Desenvolvedor de Software Pleno",
    company: "Itaú Unibanco",
    course: "Técnico em Desenvolvimento de Sistemas",
    rating: 5,
    text: "Saí do curso direto para o mercado, atuando na modernização de sistemas de um dos maiores bancos da América Latina. A metodologia focada em projetos práticos me preparou para os desafios reais do dia a dia.",
    salary: "R$ 6.000",
    timeToJob: "Durante o curso",
    avatar: "LF",
  },
  {
    id: 3,
    name: "Beatriz Almeida",
    role: "Coordenadora de Segurança do Trabalho",
    company: "Embraer",
    course: "Técnico em Segurança do Trabalho",
    rating: 5,
    text: "Comecei como técnica e em menos de 2 anos fui promovida. Hoje lidero projetos de segurança em uma gigante da aviação. A profissão é vital e muito valorizada por empresas sérias.",
    salary: "R$ 3.000",
    timeToJob: "1 mês",
    avatar: "BA",
  },
  {
    id: 4,
    name: "Roberto Dias",
    role: "Especialista em Robótica Industrial",
    company: "Volkswagen",
    course: "Técnico em Automação Industrial",
    rating: 5,
    text: "Sempre fui apaixonado por robôs. O curso me colocou na vanguarda da Indústria 4.0, programando e mantendo os robôs que montam carros. O salário e as oportunidades são incríveis.",
    salary: "R$ 8.620",
    timeToJob: "2 meses",
    avatar: "RD",
  },
  {
    id: 5,
    name: "Vanessa Cruz",
    role: "Corretora de Imóveis de Alto Padrão",
    company: "Bossa Nova Sotheby's",
    course: "Técnico em Transações Imobiliárias",
    rating: 5,
    text: "O curso me deu a credencial (CRECI) e as técnicas de negociação que eu precisava. Hoje, trabalho com imóveis de luxo e meu ganho mensal com comissões supera qualquer expectativa que eu tinha.",
    salary: "R$ 4.546",
    timeToJob: "45 dias",
    avatar: "VC",
  },
  {
    id: 6,
    name: "Guilherme Matos",
    role: "Técnico em Radiologia (Tomografia/Ressonância)",
    company: "Fleury Medicina e Saúde",
    course: "Técnico em Radiologia",
    rating: 5,
    text: "Foquei em aprender sobre equipamentos de alta tecnologia e hoje sou especialista em exames de imagem complexos. É uma área da saúde com alta demanda por profissionais qualificados e com excelente remuneração.",
    salary: "R$ 7.800",
    timeToJob: "2 meses",
    avatar: "GM",
  },
];

const Depoiments = () => {
  // Cor vermelha principal para consistência
  const primaryRed = "#DC2626"; // Um vermelho mais refinado (Tailwind red-600)

  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Badge sutil, sem cor forte para não tirar o foco do título */}
          <Badge variant="secondary" className="font-semibold mb-4">
            💬 Histórias de sucesso
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Veja o que nossos alunos
            <span style={{ color: primaryRed }} className="block">
              conquistaram depois do curso
            </span>
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto mb-8">
            Mais de{" "}
            <strong style={{ color: primaryRed }}>2.500 profissionais</strong>{" "}
            já transformaram suas carreiras conosco. Veja alguns depoimentos
            reais de quem conseguiu emprego na área de tecnologia.
          </p>

          {/* Imagem de sucesso */}
          <div className="relative max-w-2xl mx-auto mb-8">
            <Image
              src="/tg.webp"
              width={700}
              height={400}
              alt="Alunos formados comemorando sucesso"
              className="w-full h-64 object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl"></div>
            <div className="absolute bottom-4 left-4 bg-white/90 p-3 rounded-lg shadow-md backdrop-blur-sm">
              <div className="text-sm font-semibold text-gray-900">
                Turma 2025.1
              </div>
              <div className="text-xs text-gray-500">
                96% empregados em até 3 meses
              </div>
            </div>
          </div>
        </div>

        {/* Grid de Depoimentos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              // AQUI ESTÁ A ALTERAÇÃO: Sombra mais suave e com cor de brilho vermelho
              className="bg-white transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-red-500/20 border border-gray-200"
            >
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4"
                      style={{ fill: primaryRed, color: primaryRed }}
                    />
                  ))}
                </div>

                <div className="relative mb-6 flex-grow">
                  {/* Ícone de aspas bem sutil */}
                  <Quote className="absolute -top-2 -left-2 w-6 h-6 text-gray-100" />
                  <p className="text-gray-500 leading-relaxed pl-4">
                    {testimonial.text}
                  </p>
                </div>

                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-tr from-red-600 to-red-500 rounded-full flex items-center justify-center shadow-md">
                      <span className="text-white font-bold text-sm">
                        {testimonial.avatar}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      {/* Cargo em vermelho para dar destaque à conquista */}
                      <div
                        className="text-sm font-medium"
                        style={{ color: primaryRed }}
                      >
                        {testimonial.role}
                      </div>
                      <div className="text-xs text-gray-500">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Métricas de sucesso com borda neutra */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <div className="text-gray-500">Salário inicial</div>
                      {/* Salário em cor escura para legibilidade, o valor já chama atenção */}
                      <div className="font-bold text-gray-900">
                        {testimonial.salary}
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-500">Tempo para emprego</div>
                      <div className="font-bold text-gray-900">
                        {testimonial.timeToJob}
                      </div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <Badge variant="outline" className="text-xs">
                      {testimonial.course}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Depoiments;
