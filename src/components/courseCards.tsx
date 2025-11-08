import Link from "next/link";
import Image from "next/image";
import { PlusCircle } from "lucide-react";
import { slugify } from "@/utils/slugify";

export interface CourseCardProps {
  title: string;
  subTitle: string;
  img?: {
    src: string;
    alt: string;
  };
  rating: number;
  flag?: string;
  onSelectCourse?:(title: string) => void;
}

export const metadata = {
  title: "Cursos Técnicos e Profissionalizantes | Colégio Técnico Grandeminas",
  description:
    "Descubra os cursos técnicos e profissionalizantes da Grandeminas: Logística, Enfermagem, Saúde, Administração e muito mais. Ensino de qualidade com alta taxa de empregabilidade.",
  keywords: [
    "Cursos Técnicos",
    "Cursos Profissionalizantes",
    "Curso de Logística",
    "Curso de Enfermagem",
    "Grandeminas Cursos",
  ],
  openGraph: {
    title: "Cursos Técnicos da Grandeminas",
    description:
      "Conheça nossos cursos técnicos e profissionalizantes, preparados para o mercado de trabalho.",
    url: "https://colegiograndeminas.com.br/cursos",
    siteName: "Grandeminas",
    images: [
      {
        url: "https://colegiograndeminas.com.br/images/cursos.jpg",
        width: 1200,
        height: 630,
        alt: "Cursos Técnicos da Grandeminas",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function CourseCard({
  title,
  subTitle,
  img,
  rating,
  flag,
  
}: CourseCardProps) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#E4EEF0] bg-[#E4EEF0] shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#FF5B04]/10">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={img?.src || "/images/placeholder.jpg"}
          alt={img?.alt || "Imagem do curso"}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {flag && (
          <span className="absolute top-3 left-3 rounded-full bg-[#FF5B04] px-3 py-1 text-xs font-semibold text-white shadow-md">
            {flag}
          </span>
        )}
      </div>

      <div className="flex flex-grow flex-col p-6 bg-white"> {/* Mantendo o conteúdo interno branco para contraste, se necessário */}
        <div className="mb-3 flex items-center justify-between">
          <p className="text-sm font-medium text-[#FF5B04]">{subTitle}</p>
          <div className="flex items-center gap-1 text-[#075056]">
            {Array.from({ length: rating }).map((_, index) => (
              <span key={index} className="text-base">
                ★
              </span>
            ))}
          </div>
        </div>
        <h2 className="mb-3 text-xl font-bold leading-snug text-[#16232A] transition-colors duration-300 group-hover:text-[#FF5B04]">
          {title}
        </h2>
        <p className="text-sm text-[#16232A]/70 font-medium"> {/* Usando uma opacidade do Mirage para texto secundário */}
          Curso reconhecido nacionalmente. Avance na sua carreira com
          flexibilidade!
        </p>
        <div className="flex-grow" />
        <Link
          href={`/cursos/${slugify(title)}`}
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#FF5B04] px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#FF5B04]/20 transition-all duration-300 hover:scale-105 hover:bg-orange-600 hover:shadow-xl hover:shadow-[#FF5B04]/30"
        >
          <PlusCircle size={20} className="flex-shrink-0" />
          Ver Mais Detalhes
        </Link>
      </div>
    </div>
  );
}