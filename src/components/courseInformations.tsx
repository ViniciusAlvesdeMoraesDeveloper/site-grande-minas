"use client";
import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle,
  Award,
  Users,
  Target,
  Info,
  ChevronLeft,
} from "lucide-react";
import { CourseCardProps } from "./courseCards";
import { useState, useCallback } from "react";
import Modal from "./modalContactsCourses/modal";
import SubscriptionForm from "./modalContactsCourses/SubscriptionForm";
import { submitSubscription } from "./lib/api";

// --- Definição de Tipos (Interfaces) ---
export interface CourseSection {
  title: string;
  content: string;
}
export interface CourseInformationsProps {
  title: string;
  sections: CourseSection[];
  img?: { src: string; alt: string };
  whatYouWillLearn?: string[];
  depoiments?: { texto: string; autor: string; cargo: string };
}
interface ComponentProps {
  course: CourseInformationsProps;
  cardData?: CourseCardProps;
}

// --- Componente Principal ---
export default function CourseInformations({
  course,
  cardData,
}: ComponentProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<"form" | "loading" | "success">(
    "form"
  );

  const openModal = () => {
    setFormStatus("form");
    setIsModalOpen(true);
  };
  const closeModal = useCallback(() => setIsModalOpen(false), []);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormStatus("loading");

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    const whatsapp = formData.get("whatsapp") as string;
    const interestArea = formData.get("interestArea") as string;

    const subscriptionData = {
      fullerName: name,
      phone: whatsapp.replace(/\D/g, ""),
      areaOfInterest: interestArea,
      enterpriseId: 1,
    };

    try {
      await submitSubscription(subscriptionData);
      setFormStatus("success");
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
      alert(
        "Houve um problema ao enviar sua inscrição. Por favor, tente novamente."
      );
      setFormStatus("form");
    }
  };

  return (
    <div className="relative bg-white min-h-screen text-[#7A1C1C] font-sans overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-red-500/5 via-red-700/5 to-transparent pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative max-w-5xl mx-auto p-4 sm:p-6 md:p-8 z-10">
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
        <div className="bg-white rounded-xl p-8 shadow-lg shadow-red-900/20">
          <header className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="flex flex-col gap-4">
              <span className="font-semibold text-red-600">
                {cardData?.subTitle}
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-red-900 tracking-tight">
                {course.title}
              </h1>
              <p className="text-lg text-red-800/80">
                Transforme sua carreira com um curso prático, focado no mercado
                e com certificado reconhecido.
              </p>
              {cardData && (
                <div className="flex items-center gap-2 text-yellow-500 mt-2">
                  {Array.from({ length: cardData.rating }).map((_, index) => (
                    <span key={index} className="text-2xl">
                      ★
                    </span>
                  ))}
                  <span className="text-sm text-red-700 font-medium">
                    ({cardData.rating}.0 de 5 estrelas)
                  </span>
                </div>
              )}
            </div>
            <div className="relative">
              {course.img && (
                <div className="aspect-square relative rounded-2xl overflow-hidden shadow-lg shadow-red-900/20">
                  <Image
                    src={course.img.src}
                    alt={course.img.alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
              )}
              <button
                onClick={openModal}
                className="mt-6 w-full flex flex-col items-center justify-center gap-1 bg-red-700 text-white p-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-[0_0_15px_rgba(185,28,28,0.4)] hover:shadow-[0_0_25px_rgba(185,28,28,0.7)] hover:scale-105"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle size={22} />
                  <span>Quero me Inscrever</span>
                </div>
                <span className="text-xs font-normal opacity-80">
                  Vagas limitadas!
                </span>
              </button>
            </div>
          </header>
        </div>
        <main className="mt-16 md:mt-24 space-y-8">
          <div className="bg-white rounded-xl p-8 shadow-lg shadow-red-900/20">
            <h2 className="text-2xl font-bold text-red-700 mb-4 flex items-center gap-3">
              <Info /> Sobre o Curso
            </h2>
            <p className="text-red-900/90 leading-relaxed">
              Este curso foi desenhado para fornecer um conhecimento aprofundado
              e prático sobre <strong>{course.title}</strong>. Com uma abordagem
              focada em projetos reais, você desenvolverá as habilidades
              essenciais que o mercado de trabalho exige. Nossa metodologia
              combina teoria e prática para garantir uma experiência de
              aprendizado completa e eficaz.
            </p>
          </div>
          {course.whatYouWillLearn && course.whatYouWillLearn.length > 0 && (
            <div className="bg-white rounded-xl p-8 shadow-lg shadow-red-900/20">
              <h2 className="text-2xl font-bold text-red-700 mb-6 flex items-center gap-3">
                <Award /> O que você vai aprender
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {course.whatYouWillLearn.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle
                      className="text-red-600 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <span className="text-red-900">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {course.sections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg shadow-red-900/20"
            >
              <h2 className="text-2xl font-bold text-red-700 mb-4 flex items-center gap-3">
                {section.title.includes("Objetivo") ? <Target /> : <Users />}
                {section.title}
              </h2>
              <p className="text-red-900/90 leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
          {course.depoiments && (
            <div className="bg-white rounded-xl p-8 shadow-lg shadow-red-900/20">
              <blockquote className="text-center">
                <p className="text-xl italic text-red-900">
                  {course.depoiments.texto}
                </p>
                <footer className="mt-6">
                  <p className="font-bold text-red-700">
                    {course.depoiments.autor}
                  </p>
                  <p className="text-sm text-red-600">
                    {course.depoiments.cargo}
                  </p>
                </footer>
              </blockquote>
            </div>
          )}
        </main>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <SubscriptionForm
          status={formStatus}
          onSubmit={handleFormSubmit}
          onCancel={closeModal}
          selectedContent={course.title}
        />
      </Modal>
    </div>
  );
}
