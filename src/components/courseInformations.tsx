"use client";
import {
  CheckCircle,
  Award,
  Users,
  Target,
  Info,
  ChevronLeft,
  X,
  Loader2,
  Send,
  Sparkles,
} from "lucide-react";
import { useState, useCallback, useMemo } from "react";
import Image from "next/image"; // Importe o Image do Next.js

interface CourseCardProps {
  subTitle: string;
  rating: number;
}

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

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex justify-center items-center p-4 transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl p-6 w-full max-w-lg shadow-2xl relative transform transition-transform duration-300 scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-2 rounded-full text-[#16232A]/70 hover:bg-[#FF5B04]/10 hover:text-[#FF5B04] transition-colors"
          aria-label="Fechar"
        >
          <X size={24} />
        </button>
        {children}
      </div>
    </div>
  );
};

interface SubscriptionFormProps {
  status: "form" | "loading" | "success";
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onCancel: () => void;
  selectedContent: string;
}

const SubscriptionForm = ({
  status,
  onSubmit,
  onCancel,
  selectedContent,
}: SubscriptionFormProps) => {

  const renderContent = useMemo(() => {
    switch (status) {
      case "success":
        return (
          <div className="text-center p-6 space-y-4">
            <Sparkles className="mx-auto text-[#075056]" size={48} />
            <h3 className="text-2xl font-bold text-[#16232A]">Sucesso!</h3>
            <p className="text-[#16232A]/80">
              Sua solicitação de inscrição foi enviada ao WhatsApp. Por favor, confira a nova aba para finalizar o contato.
            </p>
            <button
              onClick={onCancel}
              className="mt-4 w-full bg-[#FF5B04] text-white p-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              Entendido!
            </button>
          </div>
        );
      case "loading":
        return (
          <div className="text-center p-8 space-y-4">
            <Loader2 className="mx-auto animate-spin text-[#FF5B04]" size={40} />
            <h3 className="text-xl font-semibold text-[#16232A]">
              Preparando envio...
            </h3>
          </div>
        );
      case "form":
      default:
        return (
          <form onSubmit={onSubmit} className="space-y-4">
            <h3 className="text-2xl font-bold text-[#16232A]">
              Inscrição: {selectedContent}
            </h3>
            <p className="text-sm text-[#16232A]/80">
              Preencha o formulário para ser redirecionado(a) ao WhatsApp e garantir sua vaga.
            </p>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#16232A] mb-1">
                Nome Completo
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#FF5B04] focus:border-[#FF5B04]"
              />
            </div>
            <div>
              <label htmlFor="whatsapp" className="block text-sm font-medium text-[#16232A] mb-1">
                WhatsApp (com DDD)
              </label>
              <input
                id="whatsapp"
                name="whatsapp"
                type="tel"
                required
                placeholder="(xx) xxxxx-xxxx"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#FF5B04] focus:border-[#FF5B04]"
              />
            </div>
            <div>
              <label htmlFor="interestArea" className="block text-sm font-medium text-[#16232A] mb-1">
                Área de Interesse
              </label>
              <input
                id="interestArea"
                name="interestArea"
                type="text"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#FF5B04] focus:border-[#FF5B04]"
              />
            </div>
            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={onCancel}
                className="px-4 py-2 text-[#16232A]/70 hover:text-[#16232A] transition-colors rounded-lg"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="flex items-center gap-2 bg-[#FF5B04] text-white p-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
              >
                <Send size={18} /> Enviar para WhatsApp
              </button>
            </div>
          </form>
        );
    }
  }, [status, onSubmit, onCancel, selectedContent]);

  return renderContent;
};

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


  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormStatus("loading");

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    const whatsapp = formData.get("whatsapp") as string;
    const interestArea = formData.get("interestArea") as string;

    const targetPhone = "5531973309678";


    const message = `Olá! Gostaria de me inscrever no curso de *${course.title}*.
\n*Nome:* ${name}
\n*Telefone:* ${whatsapp}
\n*Área de Interesse:* ${interestArea}`;


    const whatsappUrl = `https://wa.me/${targetPhone}?text=${encodeURIComponent(message)}`;


    window.open(whatsappUrl, "_blank");


    setFormStatus("success");

  };


  const SimpleLink = ({ href, className, children }: { href: string, className: string, children: React.ReactNode }) => (
    <a href={href} className={className}>{children}</a>
  );

  // Componente Image atualizado para usar o Next.js Image
  const SimpleImage = ({ src, alt, fill, className }: { src: string, alt: string, fill?: boolean, className: string }) => (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      className={className}
      style={fill ? { objectFit: 'cover' } : {}}
    />
  );

  return (
    <div className="relative bg-white min-h-screen text-[#16232A] font-sans overflow-hidden mt-22">
      <div
        className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-[#FF5B04]/5 via-[#FF5B04]/5 to-transparent pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative max-w-5xl mx-auto p-4 sm:p-6 md:p-8 z-10">
        <SimpleLink
          href="/"
          className="group inline-flex items-center gap-2 bg-[#FF5B04] hover:bg-orange-600 text-white
          px-6 py-3 rounded-lg font-bold text-base transition-all duration-300 hover:scale-105 shadow-lg shadow-[#FF5B04]/20 hover:shadow-xl hover:shadow-[#FF5B04]/30"
        >
          <ChevronLeft
            size={20}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
          Voltar para Início
        </SimpleLink>
        <div className="bg-white rounded-xl p-8 shadow-lg shadow-[#16232A]/20">
          <header className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="flex flex-col gap-4">
              <span className="font-semibold text-[#FF5B04]">
                {cardData?.subTitle}
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-[#16232A] tracking-tight">
                {course.title}
              </h1>
              <p className="text-lg text-[#16232A]/80">
                Transforme sua carreira com um curso prático, focado no mercado
                e com certificado reconhecido.
              </p>
              {cardData && (
                <div className="flex items-center gap-2 text-[#075056] mt-2">
                  {Array.from({ length: cardData.rating }).map((_, index) => (
                    <span key={index} className="text-2xl">
                      ★
                    </span>
                  ))}
                  <span className="text-sm text-[#FF5B04] font-medium">
                    ({cardData.rating}.0 de 5 estrelas)
                  </span>
                </div>
              )}
            </div>
            <div className="relative">
              {course.img && (
                <div className="aspect-square relative rounded-2xl overflow-hidden shadow-lg shadow-[#16232A]/20">
                  <SimpleImage
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
                className="mt-6 w-full flex flex-col items-center justify-center gap-1 bg-[#FF5B04] text-white p-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-[0_0_15px_rgba(255,91,4,0.4)] hover:shadow-[0_0_25px_rgba(255,91,4,0.7)] hover:scale-105"
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
          <div className="bg-white rounded-xl p-8 shadow-lg shadow-[#16232A]/20">
            <h2 className="text-2xl font-bold text-[#FF5B04] mb-4 flex items-center gap-3">
              <Info /> Sobre o Curso
            </h2>
            <p className="text-[#16232A]/90 leading-relaxed">
              Este curso foi desenhado para fornecer um conhecimento aprofundado
              e prático sobre <strong>{course.title}</strong>. Com uma abordagem
              focada em projetos reais, você desenvolverá as habilidades
              essenciais que o mercado de trabalho exige. Nossa metodologia
              combina teoria e prática para garantir uma experiência de
              aprendizado completa e eficaz.
            </p>
          </div>
          {course.whatYouWillLearn && course.whatYouWillLearn.length > 0 && (
            <div className="bg-white rounded-xl p-8 shadow-lg shadow-[#16232A]/20">
              <h2 className="text-2xl font-bold text-[#FF5B04] mb-6 flex items-center gap-3">
                <Award /> O que você vai aprender
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {course.whatYouWillLearn.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle
                      className="text-[#FF5B04] mt-1 flex-shrink-0"
                      size={20}
                    />
                    <span className="text-[#16232A]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {course.sections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg shadow-[#16232A]/20"
            >
              <h2 className="text-2xl font-bold text-[#FF5B04] mb-4 flex items-center gap-3">
                {section.title.includes("Objetivo") ? <Target /> : <Users />}
                {section.title}
              </h2>
              <p className="text-[#16232A]/90 leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
          {course.depoiments && (
            <div className="bg-white rounded-xl p-8 shadow-lg shadow-[#16232A]/20">
              <blockquote className="text-center">
                <p className="text-xl italic text-[#16232A]">
                  {course.depoiments.texto}
                </p>
                <footer className="mt-6">
                  <p className="font-bold text-[#FF5B04]">
                    {course.depoiments.autor}
                  </p>
                  <p className="text-sm text-[#FF5B04]/80">
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