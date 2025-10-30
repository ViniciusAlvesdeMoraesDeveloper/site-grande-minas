"use client";

import { useParams } from "next/navigation";
import CardsPosMain from "@/utils/cardsPosMain";
import StoragedCoursesInfo from "@/utils/storagedCoursesInfo";
import { slugify } from "@/utils/slugify";
import { CourseInformationsProps } from "@/components/courseInformations";
import CourseInformations from "@/components/courseInformations";
import CourseCard from "@/components/courseCards";
import Link from "next/link";
import { ChevronLeft } from "lucide-react"; // Usando um ícone mais limpo

export default function CursosSlugPage() {
  const { slug } = useParams<{ slug: string }>();
  const decodedSlug = decodeURIComponent(slug || "");

  const allCoursesForCards = CardsPosMain();
  const filteredByCategory = allCoursesForCards.filter(
    (course) => slugify(course.subTitle) === decodedSlug
  );

  // --- 1. PÁGINA DE CATEGORIA DE CURSOS ---
  if (filteredByCategory.length > 0) {
    return (
      // Fundo premium: um cinza muito sutil para dar profundidade
      <div className="bg-zinc-50 min-h-screen">
        <div className="p-8 max-w-7xl mx-auto">
          {/* Botão "Voltar" refinado e consistente */}
          <Link
            href="/"
            className="group mb-12 inline-flex items-center gap-1.5 text-zinc-600 hover:text-red-700 transition-colors duration-300 font-semibold"
          >
            <ChevronLeft
              size={20}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            Voltar para Início
          </Link>

          {/* Título com cores da marca e tipografia premium */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-zinc-800 leading-tight">
            Explore os melhores cursos de{" "}
            {/* Efeito de texto em gradiente para um toque premium */}
            <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
              {filteredByCategory[0].subTitle}
            </span>
          </h1>
          <p className="text-zinc-600 text-lg mb-12 max-w-3xl">
            Aprimore suas habilidades com cursos reconhecidos e conteúdo de alta
            qualidade. Escolha abaixo e invista no seu futuro!
          </p>

          {/* Grid com os cards dos cursos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredByCategory.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  const allCourseDetails = StoragedCoursesInfo();
  const course = allCourseDetails.find(
    (c: CourseInformationsProps) => slugify(c.title) === decodedSlug
  );

  if (course) {
    const cardData = allCoursesForCards.find((c) => c.title === course.title);
    // Este componente já possui seu próprio estilo premium, então o mantemos.
    return <CourseInformations course={course} cardData={cardData} />;
  }

  // --- 3. PÁGINA DE ERRO 404 ---
  return (
    <div className="bg-zinc-50 flex flex-col items-center justify-center min-h-screen text-center p-6">
      <h1 className="text-4xl font-bold text-zinc-800">
        Página não encontrada!
      </h1>
      <p className="text-zinc-600 mt-3 mb-8 max-w-md">
        O conteúdo que você procura não existe ou foi movido. Verifique o
        endereço digitado e tente novamente.
      </p>

      {/* Botão de ação primário usando as cores da marca */}
      <Link
        href="/"
        className="group inline-flex items-center gap-2 bg-red-700 hover:bg-red-800 text-white
          px-6 py-3 rounded-lg font-bold text-base transition-all duration-300 hover:scale-105 shadow-lg shadow-red-500/20 hover:shadow-xl hover:shadow-red-500/30"
      >
        <ChevronLeft
          size={20}
          className="transition-transform duration-300 group-hover:-translate-x-1"
        />
        Voltar para Início
      </Link>
    </div>
  );
}
