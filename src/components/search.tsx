import { Search } from "lucide-react";
import { TextEffect } from "@/components/ui/text-effect";

// As props 'activeFilter' e 'onFilterChange' foram removidas.
interface SearchSectionProps {
  searchTerm: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchSection({
  searchTerm,
  onSearchChange,
}: SearchSectionProps) {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-12 sm:py-16 text-center">
      <TextEffect
        as="h2"
        preset="fade-in-blur"
        delay={0.3}
        className="text-4xl md:text-5xl font-bold text-zinc-800 tracking-tight"
      >
        Encontre seu Curso Ideal
      </TextEffect>

      <TextEffect
        as="p"
        per="line"
        preset="fade-in-blur"
        delay={0.6}
        className="max-w-2xl mx-auto mt-4 text-lg text-zinc-600"
      >
        Explore nossa ampla gama de cursos e encontre o que melhor se adapta aos
        seus objetivos profissionais.
      </TextEffect>

      {/* Barra de Busca */}
      <div className="relative mt-10">
        <div className="flex w-full max-w-3xl mx-auto rounded-xl bg-white shadow-lg shadow-zinc-300/40 overflow-hidden ring-1 ring-zinc-200 focus-within:ring-2 focus-within:ring-red-600 transition-all duration-300">
          <input
            type="text"
            placeholder="Buscar por nome do curso..."
            className="flex-grow w-full px-5 py-4 bg-transparent text-lg outline-none text-zinc-800 placeholder-zinc-400"
            value={searchTerm}
            onChange={onSearchChange}
          />
          <button className="bg-red-700 px-6 text-white flex items-center justify-center hover:bg-red-800 transition-colors">
            <Search size={24} />
          </button>
        </div>
      </div>

      {/* A DIV com os botões de filtro foi completamente removida daqui */}
    </div>
  );
}
