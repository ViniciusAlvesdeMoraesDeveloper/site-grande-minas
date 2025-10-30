"use client";
import CourseCard from "@/components/courseCards";
import HeroSection from "@/components/hero-section";
import CardsPosMain from "@/utils/cardsPosMain";
import { useState } from "react";
import SearchSection from "@/components/search";
import { Header } from "@/components/header";
import { SobreNosTecMinas } from "@/components/sobrenos";
import Depoiments from "@/components/depoiments";
import Footer from "@/components/footer";
import Contact from "@/components/contact";

const INITIAL_VISIBLE_COURSES = 6; // Quantos cursos aparecem inicialmente (Definir)
const COURSES_INCREMENT = 3; // Quantos cursos são adicionados a cada clique (Definir)

export default function Home() {
  const allCourses = CardsPosMain();

  //Prioridade de Cursos
  const priorityTitles = [
    "Técnico em Segurança do Trabalho - Por Competência",
    "Técnico em Enfermagem - Por Competência",
    "Técnico em Eletrotécnica - Por Competência",
    "Técnico em Logística - Por Competência",
    "Técnico em Mineração - Por Competência",
    "Técnico em Soldagem - Por Competência",
  ];

  // Separar cursos prioritários e o restante
  const priorityCourses = allCourses.filter((c) =>
    priorityTitles.includes(c.title)
  );

  const otherCourses = allCourses.filter(
    (c) => !priorityTitles.includes(c.title)
  );

  // Reordena colocando os prioritários primeiro
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

  return (
    <>
      <Header />
      <div id="inicio" className="pt-24">
        <HeroSection />
      </div>
      <div className="my-10 sm:my-24" />
      <div id="sobrenos">
        <SobreNosTecMinas />
      </div>

      <SearchSection
        searchTerm={searchTerm}
        onSearchChange={(e) => setSearchTerm(e.target.value)}
      />

      <hr className="max-w-5xl mx-auto border-slate-200" />
      <section id="cursos" className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-red-700 mb-8 text-center">
            Nossos Cursos Técnicos Por Competência
          </h2>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {filteredCourses.slice(0, visibleCount).map((course, i) => (
              <CourseCard key={i} {...course} />
            ))}
          </div>

          {visibleCount < filteredCourses.length && (
            <div className="mt-12 text-center">
              <button
                onClick={handleShowMore}
                className="bg-red-700 text-white font-semibold py-3 px-8 rounded-lg hover:bg-red-800 transition-all duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                Mostrar Mais Cursos
              </button>
            </div>
          )}
        </div>
      </section>

      <Depoiments />
      <div id="contato">
        <Contact />
      </div>
      <Footer />
    </>
  );
}
