"use client";
import CourseCard from "@/components/courseCards";
import HeroSection from "@/components/hero-section";
import CardsPosMain from "@/utils/cardsPosMain";
import { useState } from "react";
import SearchSection from "@/components/search";
import { Header } from "@/components/header";
import Depoiments from "@/components/depoiments";
import Contact from "@/components/contact";
import CurseEja from "@/components/curseEJA";
import { X } from "lucide-react";

const INITIAL_VISIBLE_COURSES = 6;
const COURSES_INCREMENT = 3;
const WHATSAPP_TARGET = "5531973309678";

// Defina as áreas disponíveis
const AREAS_DE_INTERESSE = [
  "Tecnologia da Informação",
  "Saúde",
  "Segurança do Trabalho",
  "Administração",
  "Logística",
  "Meio Ambiente",
  "Eletrotécnica",
  "Mineração",
  "Soldagem",
  "Enfermagem",
  "Outras áreas"
];

export default function Home() {
  const allCourses = CardsPosMain();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedCourseTitle, setSelectedCourseTitle] = useState("");
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  const [formStatus, setFormStatus] = useState<"form" | "loading" | "success">("form");

  // Prioridade de Cursos
  const priorityTitles = [
    "Técnico em Segurança do Trabalho - Por Competência",
    "Técnico em Enfermagem - Por Competência",
    "Técnico em Eletrotécnica - Por Competência",
    "Técnico em Logística - Por Competência",
    "Técnico em Mineração - Por Competência",
    "Técnico em Soldagem - Por Competência",
  ];

  const priorityCourses = allCourses.filter((c) =>
    priorityTitles.includes(c.title)
  );

  const otherCourses = allCourses.filter(
    (c) => !priorityTitles.includes(c.title)
  );

  const orderedCourses = [...priorityCourses, ...otherCourses];

  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COURSES);

  const filteredCourses = orderedCourses.filter((course) => {
    const searchTermLower = searchTerm.toLowerCase();
    return (
      (course.title || "").toLowerCase().includes(searchTermLower) ||
      (course.subTitle || "").toLowerCase().includes(searchTermLower)
    );
  });

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + COURSES_INCREMENT);
  };

  const handleCourseSelection = (title: string) => {
    setSelectedCourseTitle(title);
    setSelectedAreas([]); // Reset áreas ao selecionar novo curso
    setFormStatus("form");
    setIsFormOpen(true);
  };

  const handleAreaToggle = (area: string) => {
    setSelectedAreas(prev => {
      if (prev.includes(area)) {
        return prev.filter(a => a !== area);
      } else {
        return [...prev, area];
      }
    });
  };

  const handleWhatsAppSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormStatus("loading");

    try {
      const formData = new FormData(event.currentTarget);
      const name = formData.get('name') as string;
      const userWhatsapp = formData.get('whatsapp') as string;
      const email = formData.get('email') as string;

      // Formatar áreas selecionadas
      const areasText = selectedAreas.length > 0
        ? `\n*Áreas de Interesse:* ${selectedAreas.join(', ')}`
        : '';

      const message = `Olá! Meu nome é ${name}, e meu telefone é ${userWhatsapp}.${email ? `\n*Email: ${email}` : ''}\n\nQuero me inscrever no curso: ${selectedCourseTitle}.${areasText}\n\nGostaria de mais informações sobre este curso.`;

      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_TARGET}&text=${encodedMessage}`;

      window.open(whatsappUrl, '_blank');
      setFormStatus("success");
    } catch (error) {
      console.error("Erro ao processar a submissão do WhatsApp:", error);
      setFormStatus("form");
    }
  };

  const handleFormCancel = () => {
    setIsFormOpen(false);
    setSelectedCourseTitle("");
    setSelectedAreas([]);
    setFormStatus("form");
  }

  return (
    <>
      <Header />
      <div id="inicio" className="pt-24">
        <HeroSection />
      </div>
      <div className="my-10 sm:my-24" />
      <div id="sobrenos">
        {/* Seu conteúdo sobre nós */}
      </div>

      <SearchSection
        searchTerm={searchTerm}
        onSearchChange={(e) => setSearchTerm(e.target.value)}
      />

      <hr className="max-w-5xl mx-auto border-slate-200" />
      <section id="cursos" className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-orange-600 mb-8 text-center">
            Nossos Cursos Técnicos Por Competência
          </h2>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {filteredCourses.slice(0, visibleCount).map((course, i) => (
              <CourseCard
                key={i}
                {...course}
                onSelectCourse={handleCourseSelection}
              />
            ))}
          </div>

          {visibleCount < filteredCourses.length && (
            <div className="mt-12 text-center">
              <button
                onClick={handleShowMore}
                className="bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-orange-700 transition-all duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                Mostrar Mais Cursos
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Modal do Formulário */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b">
              <h3 className="text-lg font-semibold">Inscrever-se no Curso</h3>
              <button
                onClick={handleFormCancel}
                className="text-gray-500 hover:text-gray-700"
              >
                Clique <X size={24} />
              </button>
            </div>

            <form onSubmit={handleWhatsAppSubmit} className="p-6">
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-2">Curso selecionado:</p>
                <p className="font-semibold text-orange-600">{selectedCourseTitle}</p>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Seu nome completo"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  WhatsApp *
                </label>
                <input
                  type="tel"
                  name="whatsapp"
                  required
                  inputMode="numeric"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="31973309678"
                  onInput={(e) => {
                    e.currentTarget.value = e.currentTarget.value.replace(/\D/g, '');
                  }}
                />
                <p className="text-xs text-gray-500 mt-1">Apenas números, sem DDD ou parênteses</p>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="seu@email.com"
                />
              </div>

              {/* Campo de Áreas de Interesse */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Áreas de Interesse (opcional)
                </label>
                <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto">
                  {AREAS_DE_INTERESSE.map((area) => (
                    <label
                      key={area}
                      className="flex items-center space-x-2 p-2 border border-gray-300 rounded-md hover:bg-gray-50 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedAreas.includes(area)}
                        onChange={() => handleAreaToggle(area)}
                        className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                      />
                      <span className="text-sm">{area}</span>
                    </label>
                  ))}
                </div>
                {selectedAreas.length > 0 && (
                  <p className="text-xs text-gray-500 mt-2">
                    Selecionadas: {selectedAreas.join(', ')}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={formStatus === "loading"}
                className="w-full bg-orange-600 text-white py-3 px-4 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formStatus === "loading" ? "Enviando..." : "Enviar para WhatsApp"}
              </button>
            </form>
          </div>
        </div>
      )}

      <CurseEja />
      <Depoiments />
      <div id="contato">
        <Contact />
      </div>
    </>
  );
}