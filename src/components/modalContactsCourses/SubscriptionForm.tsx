"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Send, CheckCircle, Loader2, X } from "lucide-react";

// Tipagem para a Área do Curso
type AreaDoCurso = {
  id: number;
  nome: string;
}

const DADOS_AREAS: AreaDoCurso[] = [
  { id: 1, nome: "Gestão e Negócios" },
  { id: 2, nome: "Saúde" },
  { id: 3, nome: "Meio Ambiente" },
  { id: 4, nome: "Controle e Processos Industriais" },
  { id: 5, nome: "Informação e Comunicação" },
  { id: 6, nome: "Infraestrutura" },
  { id: 7, nome: "Turismo" },
  { id: 8, nome: "Industrial" }
];

type SubscriptionFormProps = {
  status: "form" | "loading" | "success";
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onCancel: () => void;
  selectedContent: string; 
  areaSelecionada?: AreaDoCurso | null;
  isAreasOpen?: boolean;
  setIsAreasOpen?: (state: boolean) => void;
  handleAreaSelect?: (area: AreaDoCurso) => void;
  dropdownRef?: React.RefObject<HTMLDivElement | null>;
};

export default function SubscriptionForm({
  status,
  onSubmit,
  onCancel,
  selectedContent,
  areaSelecionada,
  isAreasOpen,
  setIsAreasOpen,
  handleAreaSelect,
  dropdownRef,
}: SubscriptionFormProps) {
  const [whatsapp, setWhatsapp] = useState("");
  const [lgpdAccepted, setLgpdAccepted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const isGeneralContactMode = typeof handleAreaSelect === 'function';
  const isCourseEnrollmentMode = !isGeneralContactMode;

  // Converter explicitamente para boolean
  const ariaExpanded = Boolean(isAreasOpen);

  const handleWhatsappChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/\D/g, "");
    let formattedValue = rawValue;

    if (rawValue.length > 2) {
      formattedValue = `(${rawValue.substring(0, 2)}) ${rawValue.substring(2)}`;
    }
    if (rawValue.length > 7) {
      formattedValue = `(${rawValue.substring(0, 2)}) ${rawValue.substring(
        2,
        rawValue.length > 10 ? 7 : 6
      )}-${rawValue.substring(rawValue.length > 10 ? 7 : 6)}`;
    }

    setWhatsapp(formattedValue);
  };

  if (status === "loading") return <LoadingState />;
  if (status === "success") return <SuccessState onCancel={onCancel} />;

  return (
    <div className="text-center w-full">
      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-zinc-800">
          {isCourseEnrollmentMode ? "Quero me Inscrever" : "Entre em Contato"}
        </h1>
        <p className="text-zinc-500 mt-2 text-sm sm:text-base">
          {isCourseEnrollmentMode
            ? "Preencha seus dados para garantir sua vaga."
            : "Preencha o formulário e entraremos em contato via WhatsApp."
          }
        </p>
      </div>

      {/* Selected Content Badge */}
      <div className="mb-6 sm:mb-8">
        <span className="inline-block bg-zinc-100 text-zinc-700 text-sm px-3 sm:px-4 py-1.5 rounded-full max-w-full truncate">
          {isCourseEnrollmentMode ? "Curso:" : "Área Selecionada:"} <strong>{selectedContent}</strong>
        </span>
      </div>

      {/* Form */}
      <form onSubmit={onSubmit} className="text-left w-full">
        <div className="space-y-4 sm:space-y-5">
          {/* Nome */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-zinc-600 mb-1"
            >
              Nome Completo <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              aria-required="true"
              title="Digite seu nome completo"
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-zinc-100 border-2 border-transparent rounded-lg placeholder:text-zinc-400 focus:outline-none focus:bg-white focus:border-red-500 focus:ring-2 sm:focus:ring-4 focus:ring-red-500/20 transition-all text-sm sm:text-base"
              placeholder="Seu nome completo"
            />
          </div>

          {/* WhatsApp */}
          <div>
            <label
              htmlFor="whatsapp"
              className="block text-sm font-medium text-zinc-600 mb-1"
            >
              WhatsApp <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="whatsapp"
              name="whatsapp"
              required
              aria-required="true"
              title="Digite seu número de WhatsApp com DDD"
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-zinc-100 border-2 border-transparent rounded-lg placeholder:text-zinc-400 focus:outline-none focus:bg-white focus:border-red-500 focus:ring-2 sm:focus:ring-4 focus:ring-red-500/20 transition-all text-sm sm:text-base"
              placeholder="(00) 00000-0000"
              value={whatsapp}
              onChange={handleWhatsappChange}
            />
          </div>

          {/* Área de Interesse (apenas para contato geral) */}
          {isGeneralContactMode && (
            <div>
              <label 
                htmlFor="area-interesse"
                className="block text-sm font-medium text-zinc-600 mb-1"
              >
                Área de Interesse <span className="text-red-500">*</span>
              </label>
              <div className="relative w-full" ref={dropdownRef}>
                <button
                  type="button"
                  id="area-interesse"
                  onClick={() => setIsAreasOpen?.(!isAreasOpen)}
                  className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-zinc-100 border-2 rounded-lg text-left focus:outline-none focus:bg-white focus:border-red-500 focus:ring-2 sm:focus:ring-4 focus:ring-red-500/20 transition-all text-sm sm:text-base ${
                    !areaSelecionada ? 'text-zinc-400' : 'text-zinc-800'
                  }`}
                  
                >
                  {areaSelecionada ? areaSelecionada.nome : 'Clique para escolher a área...'}
                </button>

                {isAreasOpen && (
                  <div 
                    id="area-options-list"
                    role="listbox"
                    aria-labelledby="area-interesse"
                    className="absolute z-10 mt-1 w-full bg-white shadow-xl max-h-48 sm:max-h-60 rounded-lg ring-1 ring-black ring-opacity-10 overflow-auto border border-zinc-200"
                  >
                    {DADOS_AREAS.map((area) => (
                      <button
                        key={area.id}
                        type="button"
                        role="option"
                        onClick={() => handleAreaSelect?.(area)}
                        className={`w-full text-left p-2 sm:p-3 cursor-pointer text-sm transition font-medium ${
                          areaSelecionada?.id === area.id
                            ? 'bg-red-100 text-red-700'
                            : 'text-zinc-800 hover:bg-zinc-50'
                        }`}
                      >
                        {area.nome}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* LGPD Checkbox */}
          <div className="pt-2">
            <label className="flex items-start gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={lgpdAccepted}
                onChange={(e) => setLgpdAccepted(e.target.checked)}
                className="peer hidden"
                required
                aria-required="true"
                aria-describedby="lgpd-description"
              />
              
              <span
                className="w-5 h-5 flex-shrink-0 flex items-center justify-center rounded-md border-2 border-zinc-300 bg-white 
                  peer-checked:bg-red-700 peer-checked:border-red-700 transition-colors duration-200 mt-0.5"
                aria-hidden="true"
              >
                {lgpdAccepted && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </span>

              <span id="lgpd-description" className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
                Eu li e aceito os{" "}
                <button
                  type="button"
                  onClick={() => setShowModal(true)}
                  className="text-red-700 font-medium hover:underline inline-block"
                  aria-label="Ler os Termos de Privacidade"
                >
                  Termos de Privacidade
                </button>
                .
              </span>
            </label>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-6 sm:pt-8">
          <button
            type="button"
            onClick={onCancel}
            className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 text-zinc-600 font-semibold rounded-lg hover:bg-zinc-100 transition-colors border border-zinc-300 sm:border-none text-sm sm:text-base"
            aria-label="Cancelar e fechar o formulário"
          >
            Cancelar
          </button>
          <button
            type="submit"
            disabled={!lgpdAccepted || (isGeneralContactMode && !areaSelecionada)}
            className="w-full flex-1 px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-center gap-2 bg-red-700 text-white font-bold rounded-lg shadow-lg hover:bg-red-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
            aria-label={isCourseEnrollmentMode ? "Enviar inscrição" : "Enviar contato"}
          >
            <Send size={16} className="sm:w-4 sm:h-4" aria-hidden="true" />
            <span>{isCourseEnrollmentMode ? "Enviar Inscrição" : "Enviar Contato"}</span>
          </button>
        </div>
      </form>

      {/* LGPD Modal */}
      {showModal && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="lgpd-modal-title"
        >
          <div className="bg-white w-full max-w-lg rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 relative max-h-[90vh] flex flex-col">
            <button
              onClick={() => setShowModal(false)}
              aria-label="Fechar modal de Termos de Privacidade"
              className="absolute top-2 right-2 sm:top-3 sm:right-3 text-zinc-500 hover:text-zinc-800 z-10"
            >
              <X size={20} className="sm:w-6 sm:h-6" aria-hidden="true" />
            </button>
            
            <h2 id="lgpd-modal-title" className="text-xl sm:text-2xl font-bold text-zinc-800 mb-3 sm:mb-4 pr-8">
              Lei Geral de Proteção de Dados (LGPD)
            </h2>
            
            <div className="text-xs sm:text-sm text-zinc-600 overflow-y-auto flex-1 space-y-3 sm:space-y-4 pr-2">
              <p className="leading-relaxed">
                A LGPD (Lei nº 13.709/2018) dispõe sobre o tratamento de dados
                pessoais, inclusive nos meios digitais, por pessoa natural ou
                jurídica, com o objetivo de proteger os direitos fundamentais de
                liberdade, privacidade e o livre desenvolvimento da
                personalidade da pessoa natural.
              </p>
              <p className="leading-relaxed">
                Ao aceitar, você autoriza o uso dos seus dados fornecidos neste
                formulário para fins de inscrição, comunicação e contato por
                nossa equipe.
              </p>
              <p className="leading-relaxed">
                Para mais detalhes, acesse a lei completa no{" "}
                <a
                  href="https://www.gov.br/cidadania/pt-br/acesso-a-informacao/lgpd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-700 font-medium hover:underline"
                  aria-label="Site oficial do Governo sobre LGPD (abre em nova janela)"
                >
                  site oficial do Governo
                </a>
                .
              </p>
            </div>
            
            <div className="mt-4 sm:mt-6 flex justify-end pt-3 border-t border-zinc-200">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 sm:px-6 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800 transition text-sm sm:text-base"
                aria-label="Fechar termos de privacidade"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

interface AreaContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSendMessage: (mensagemCompleta: string) => void;
}

export const AreaContactModal: React.FC<AreaContactModalProps> = ({ isOpen, onClose, onSendMessage }) => {
  const [areaSelecionada, setAreaSelecionada] = useState<AreaDoCurso | null>(null);
  const [isAreasOpen, setIsAreasOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"form" | "loading" | "success">("form");

  const handleAreaSelect = useCallback((area: AreaDoCurso) => {
    setAreaSelecionada(area);
    setIsAreasOpen(false);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsAreasOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!areaSelecionada) {
      alert('Por favor, selecione uma Área de Interesse.');
      return;
    }

    const form = event.currentTarget;
    const nome = (form.elements.namedItem('name') as HTMLInputElement).value;
    const whatsapp = (form.elements.namedItem('whatsapp') as HTMLInputElement).value;

    setStatus("loading");

    const mensagemFinal = `Olá! Meu nome é ${nome.trim()} (WhatsApp: ${whatsapp}) e tenho interesse na área de *${areaSelecionada.nome}*. Gostaria de informações sobre os cursos desta área.`;

    setTimeout(() => {
      onSendMessage(mensagemFinal);
      setStatus("success");
    }, 1500);
  };

  const handleCancel = () => {
    setStatus("form");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-3 sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="bg-white w-full max-w-lg rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6 relative max-h-[95vh] overflow-y-auto">
        <button
          onClick={handleCancel}
          aria-label="Fechar modal de contato"
          className="absolute top-2 right-2 sm:top-3 sm:right-3 text-zinc-500 hover:text-zinc-800 transition z-10"
        >
          <X size={20} className="sm:w-6 sm:h-6" aria-hidden="true" />
        </button>

        <div id="modal-title" className="sr-only">
          Formulário de Contato por Área de Interesse
        </div>

        <SubscriptionForm
          status={status}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
          selectedContent={areaSelecionada ? areaSelecionada.nome : "Selecione a Área"}
          areaSelecionada={areaSelecionada}
          isAreasOpen={isAreasOpen}
          setIsAreasOpen={setIsAreasOpen}
          handleAreaSelect={handleAreaSelect}
          dropdownRef={dropdownRef}
        />
      </div>
    </div>
  );
};

const LoadingState = () => (
  <div className="flex flex-col items-center justify-center h-64 sm:h-80 text-center p-4">
    <Loader2 className="h-10 w-10 sm:h-12 sm:w-12 text-red-700 animate-spin" aria-hidden="true" />
    <p className="mt-4 text-base sm:text-lg font-medium text-zinc-600">
      Enviando seus dados...
    </p>
  </div>
);

const SuccessState = ({ onCancel }: { onCancel: () => void }) => (
  <div className="flex flex-col items-center justify-center h-64 sm:h-80 text-center p-4">
    <CheckCircle className="h-12 w-12 sm:h-16 sm:w-16 text-red-700" aria-hidden="true" />
    <h2 className="mt-4 text-xl sm:text-3xl font-bold text-zinc-800">
      Mensagem Enviada!
    </h2>
    <p className="mt-2 text-zinc-600 text-sm sm:text-base">
      Obrigado! Em breve nossa equipe entrará em contato com você.
    </p>
    <button
      onClick={onCancel}
      className="mt-6 sm:mt-8 w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-zinc-800 text-white font-semibold rounded-lg hover:bg-zinc-700 transition-colors text-sm sm:text-base"
      aria-label="Voltar para a página anterior"
    >
      Voltar
    </button>
  </div>
);