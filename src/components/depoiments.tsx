import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

// --- DADOS ADAPTADOS PARA GRANDE MINAS: TÉCNICOS EAD POR COMPETÊNCIA E EJA ---
const testimonials = [
  {
    id: 1,
    name: "Marta Silva",
    role: "Proprietária - Salão Beleza & Estética",
    company: "Certificação por Competência",
    course: "Técnico em Estética",
    rating: 5,
    text: "Trabalho há 15 anos na área, mas sentia falta do diploma para abrir meu próprio negócio com mais segurança. Com o Técnico por Competência, validei toda a minha experiência e consegui meu registro em 30 dias. A Grande Minas transformou meu sonho em realidade de forma rápida e legalizada!",
    salary: "Negócio Próprio", // Alterado para refletir o público de autônomos
    timeToJob: "30 dias (Diploma)", // Tempo para obter a certificação
    avatar: "MS",
  },
  {
    id: 2,
    name: "Pedro Henrique",
    role: "Líder de Equipe",
    company: "Construções R. S. LTDA",
    course: "Técnico em Edificações",
    rating: 5,
    text: "Sou mestre de obras há anos. O curso EAD por Competência foi perfeito, pois não tive que parar de trabalhar. Usei minha vivência para conseguir o diploma e, com ele, fui promovido a Líder de Equipe. Pude finalmente dar o próximo passo na minha carreira sem complicações.",
    salary: "R$ 4.100+", // Salário de promoção, mais realista para a região e modalidade
    timeToJob: "45 dias (Promoção)",
    avatar: "PH",
  },
  {
    id: 3,
    name: "Ana Carla Santos",
    role: "Retomada de Estudos",
    company: "Conclusão do Ensino Médio",
    course: "EJA - Ensino Médio",
    rating: 5,
    text: "Interrompi meus estudos há 20 anos. O EJA da Grande Minas me deu a flexibilidade para finalizar o Ensino Médio de forma tranquila, no meu tempo, conciliando com o trabalho e a família. Agora posso prestar concursos e buscar um futuro melhor para meus filhos. É nunca é tarde para recomeçar!",
    salary: "Nova Perspectiva", // Foco na oportunidade, não apenas no dinheiro
    timeToJob: "6 meses (EJA)",
    avatar: "AC",
  },
  {
    id: 4,
    name: "Júlio César",
    role: "Técnico em Refrigeração",
    company: "Prestador de Serviços Autônomo",
    course: "Técnico em Refrigeração e Climatização",
    rating: 5,
    text: "A modalidade EAD me permitiu estudar no meu próprio ritmo. Já tinha a prática, mas o diploma deu a credibilidade que faltava para fechar contratos maiores e com empresas. Agora sou um Técnico registrado, autônomo e com agenda cheia!",
    salary: "R$ 5.500 (Estimado)",
    timeToJob: "2 meses (Certificação)",
    avatar: "JC",
  },
  {
    id: 5,
    name: "Eliane Souza",
    role: "Recém-Concluinte (EJA + Técnico)",
    company: "Em Busca do Primeiro Emprego Técnico",
    course: "Técnico em Secretariado",
    rating: 5,
    text: "Concluí o Ensino Médio pelo EJA e já emendei o Técnico EAD. Foi uma jornada desafiadora, mas a equipe da Grande Minas me deu todo o suporte. Ter o diploma técnico abre portas que antes estavam fechadas para mim. Estou confiante na minha nova busca de emprego!",
    salary: "Em Construção",
    timeToJob: "Início da Carreira",
    avatar: "ES",
  },
  {
    id: 6,
    name: "Roberto Almeida",
    role: "Promoção Interna",
    company: "Indústria Metalúrgica do Vale",
    course: "Técnico em Mecânica Industrial",
    rating: 5,
    text: "Trabalhava como auxiliar e sabia que precisava do Técnico para crescer. Com o curso por competência, validei meus anos de chão de fábrica e consegui a promoção que eu tanto queria. O processo é sério e super rápido. Recomendo para quem tem pressa de crescer!",
    salary: "R$ 3.850",
    timeToJob: "1 mês (Certificação)",
    avatar: "RA",
  },
];

const Depoiments = () => {
  const primaryColor = "#FF5B04";
  const primaryText = "#16232A";
  const neutralBackground = "#E4EEF0";

  return (
    <section id="depoimentos" className={`py-20 bg-[${neutralBackground}]`}>
      <div className="container mx-auto px-4">
        {/* Header ADAPTADO */}
        <div className="text-center mb-16">
          {/* Badge sutil */}
          <Badge variant="secondary" className="font-semibold mb-4 bg-gray-100 text-[#16232A]">
            🚀 Histórias de Flexibilidade e Conquista
          </Badge>
          <h2 className={`text-3xl lg:text-5xl font-bold text-[${primaryText}] mb-6`}>
            O que nossos alunos
            <span style={{ color: primaryColor }} className="block">
              dizem sobre a Grande Minas
            </span>
          </h2>
          <p className={`text-xl text-[${primaryText}]/70 max-w-3xl mx-auto mb-8`}>
            De Certificação por Competência à Conclusão do EJA: veja
            depoimentos reais de quem está avançando na carreira e na vida com a
            flexibilidade do nosso EAD.
          </p>

          
          <div className="relative max-w-2xl mx-auto mb-8">
            <Image
              src="/alunos-formando.webp" 
              width={700}
              height={400}
              alt="Alunos formados comemorando sucesso"
              className="w-full h-64 object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl"></div>
            <div className="absolute bottom-4 left-4 bg-white/90 p-3 rounded-lg shadow-md backdrop-blur-sm">
              <div className={`text-sm font-semibold text-[${primaryText}]`}>
                Sua experiência vale um diploma!
              </div>
              <div className="text-xs text-gray-500">
                O caminho mais rápido para a sua certificação técnica.
              </div>
            </div>
          </div>
        </div>

        {/* Grid de Depoimentos (A estrutura da grid é mantida) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              // AQUI ESTÁ A ALTERAÇÃO: Sombra com cor de brilho Blaze Orange
              className={`bg-white transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-[${primaryColor}]/20 border border-[${neutralBackground}]`}
            >
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4"
                      // Usando Deep Sea Green para as estrelas, se a intenção é diferenciar (HEX 075056)
                      style={{ fill: "#075056", color: "#075056" }}
                    />
                  ))}
                </div>

                <div className="relative mb-6 flex-grow">
                  {/* Ícone de aspas sutil, em uma cor clara do fundo */}
                  <Quote className={`absolute -top-2 -left-2 w-6 h-6 text-[${neutralBackground}]`} />
                  <p className={`text-[${primaryText}]/70 leading-relaxed pl-4`}>
                    {testimonial.text}
                  </p>
                </div>

                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 bg-gradient-to-tr from-[${primaryColor}] to-orange-600 rounded-full flex items-center justify-center shadow-md`}>
                      <span className="text-white font-bold text-sm">
                        {testimonial.avatar}
                      </span>
                    </div>
                    <div>
                      <div className={`font-semibold text-[${primaryText}]`}>
                        {testimonial.name}
                      </div>
                      {/* Cargo em Blaze Orange para dar destaque à conquista */}
                      <div
                        className="text-sm font-medium"
                        style={{ color: primaryColor }}
                      >
                        {testimonial.role}
                      </div>
                      <div className="text-xs text-gray-500">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Métricas de sucesso com borda Wild Sand */}
                <div className="mt-4 pt-4 border-t border-[${neutralBackground}]">
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <div className="text-gray-500">Conquista Financeira</div>
                      {/* Salário em Mirage para legibilidade */}
                      <div className={`font-bold text-[${primaryText}]`}>
                        {testimonial.salary}
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-500">Tempo de Conquista</div>
                      <div className={`font-bold text-[${primaryText}]`}>
                        {testimonial.timeToJob}
                      </div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <Badge variant="outline" className={`text-xs border-[${primaryText}] text-[${primaryText}]`}>
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