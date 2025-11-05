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


// --- DEFINIÇÃO DO COMPONENTE DE FORMULÁRIO (SubscriptionForm) ---

// 🎯 PROPS CORRIGIDAS: Todos os campos do dropdown agora são OPCIONAIS
type SubscriptionFormProps = {
  status: "form" | "loading" | "success";
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onCancel: () => void;
  selectedContent: string; // Título do Curso (Modo Inscrição) ou Nome da Área (Modo Contato)

  // PROPS OPCIONAIS PARA O DROPDOWN (Usadas apenas no Modo Contato Geral):
  areaSelecionada?: AreaDoCurso | null;
  isAreasOpen?: boolean;
  setIsAreasOpen?: (state: boolean) => void;
  handleAreaSelect?: (area: AreaDoCurso) => void;
  dropdownRef?: React.RefObject<HTMLDivElement | null>;
};


// DEFINIÇÃO DO COMPONENTE SubscriptionForm (Exportado como default)
export default function SubscriptionForm({
  status,
  onSubmit,
  onCancel,
  selectedContent,
  // Desestruturando as props opcionais
  areaSelecionada,
  isAreasOpen,
  setIsAreasOpen,
  handleAreaSelect,
  dropdownRef,
}: SubscriptionFormProps) {
  const [whatsapp, setWhatsapp] = useState("");
  const [lgpdAccepted, setLgpdAccepted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // 🎯 Lógica de Inerência CORRIGIDA: Se as funções de área existirem, é o Modo Contato por Área.
  const isGeneralContactMode = typeof handleAreaSelect === 'function';
  const isCourseEnrollmentMode = !isGeneralContactMode;


  // Função de formatação de WhatsApp (mantida)
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
    <div className="text-center">
      <h2 className="text-3xl font-bold text-zinc-800">
        {isCourseEnrollmentMode ? "Quero me Inscrever" : "Entre em Contato"}
      </h2>
      <p className="text-zinc-500 mt-2 mb-6">
        {isCourseEnrollmentMode
          ? "Preencha seus dados para garantir sua vaga."
          : "Preencha o formulário e entraremos em contato via WhatsApp."
        }
      </p>

      {/* AQUI: Renderiza o status do item selecionado (Curso ou Área) */}
      <div className="mb-6">
        <span className="inline-block bg-zinc-100 text-zinc-700 text-sm font-medium px-4 py-1.5 rounded-full">
          {isCourseEnrollmentMode ? "Curso:" : "Área Selecionada:"} <strong>{selectedContent}</strong>
        </span>
      </div>

      <form onSubmit={onSubmit} className="text-left">
        <div className="space-y-5">
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
              className="w-full px-4 py-3 bg-zinc-100 border-2 border-transparent rounded-lg placeholder:text-zinc-400 focus:outline-none focus:bg-white focus:border-red-500 focus:ring-4 focus:ring-red-500/20 transition-all"
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
              className="w-full px-4 py-3 bg-zinc-100 border-2 border-transparent rounded-lg placeholder:text-zinc-400 focus:outline-none focus:bg-white focus:border-red-500 focus:ring-4 focus:ring-red-500/20 transition-all"
              placeholder="(00) 00000-0000"
              value={whatsapp}
              onChange={handleWhatsappChange}
            />
          </div>

          {/* 🎯 AQUI: Renderiza o campo de seleção de área APENAS se estiver no Modo Contato Geral */}
          {isGeneralContactMode && (
            <div>
              <div className="mt-4">
                <label className="flex items-center gap-3 cursor-pointer select-none">
                  {/* 🎯 INÍCIO: CAMPO DE SELEÇÃO DE ÁREA (Dropdown) */}
                  <div className="relative w-full" ref={dropdownRef as React.RefObject<HTMLDivElement>}>
                    <label className="block text-sm font-medium text-zinc-600 mb-1">
                      Área de Interesse <span className="text-red-500">*</span>
                    </label>

                    {/* Input que funciona como o campo de seleção */}
                    <input
                      type="text"
                      readOnly // Apenas para leitura
                      value={areaSelecionada ? areaSelecionada.nome : 'Clique para escolher a área...'}
                      // Uso seguro da função opcional
                      onClick={() => setIsAreasOpen && isAreasOpen !== undefined && setIsAreasOpen(!isAreasOpen)}
                      className={`w-full px-4 py-3 bg-zinc-100 border-2 rounded-lg placeholder:text-zinc-400 
                            focus:outline-none focus:bg-white focus:border-red-500 focus:ring-4 focus:ring-red-500/20 
                            transition-all cursor-pointer ${!areaSelecionada ? 'text-zinc-400' : 'text-zinc-800'}`}
                      required
                    />

                    {/* A Lista de Áreas (Dropdown) */}
                    {isAreasOpen && (
                      <div className="absolute z-10 mt-1 w-full bg-white shadow-xl max-h-60 rounded-lg ring-1 ring-black ring-opacity-10 overflow-auto border border-zinc-200">
                        {DADOS_AREAS.map((area) => (
                          <div
                            key={area.id}
                            // Uso seguro da função opcional
                            onClick={() => handleAreaSelect && handleAreaSelect(area)}
                            className={`p-3 cursor-pointer text-sm transition font-medium ${areaSelecionada?.id === area.id
                              ? 'bg-red-100 text-red-700'
                              : 'text-zinc-800 hover:bg-zinc-50'
                              }`}
                          >
                            {area.nome}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </label>
              </div>
            </div>
          )}

          {/* ✅ Checkbox LGPD estilizado (Mantido) */}
          <div className="mt-4">
            <label className="flex items-center gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={lgpdAccepted}
                onChange={(e) => setLgpdAccepted(e.target.checked)}
                className="peer hidden"
                required
              />
              {/* Caixa customizada */}
              <span
                className="w-5 h-5 flex items-center justify-center rounded-md border-2 border-zinc-300 bg-white 
                peer-checked:bg-red-700 peer-checked:border-red-700 transition-colors duration-200"
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

              {/* Texto do termo */}
              <span className="text-sm text-zinc-700">
                Eu li e aceito os{" "}
                <button
                  type="button"
                  onClick={() => setShowModal(true)}
                  className="text-red-700 font-medium hover:underline"
                >
                  Termos de Privacidade
                </button>
                .
              </span>
            </label>
          </div>
        </div>

        {/* Botões */}
        <div className="flex items-center gap-4 pt-8">
          <button
            type="button"
            onClick={onCancel}
            className="w-full sm:w-auto px-6 py-3 text-zinc-600 font-semibold rounded-lg hover:bg-zinc-100 transition-colors"
          >
            Cancelar
          </button>
          <button
            type="submit"
            // Validação: precisa aceitar LGPD E (se for Contato Geral, precisa ter Área selecionada)
            disabled={!lgpdAccepted || (isGeneralContactMode && !areaSelecionada)}
            className="w-full flex-1 px-6 py-3 flex items-center justify-center gap-2 bg-red-700 text-white font-bold rounded-lg shadow-lg hover:bg-red-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send size={18} />
            <span>{isCourseEnrollmentMode ? "Enviar Inscrição" : "Enviar Contato"}</span>
          </button>
        </div>
      </form>

      {/* --- Modal LGPD (Mantido) --- */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl p-6 relative">
            <button
              onClick={() => setShowModal(false)}
              aria-label="Fechar Modal"
              className="absolute top-3 right-3 text-zinc-500 hover:text-zinc-800"
            >
              <X size={22} />
            </button>
            <h2 className="text-2xl font-bold text-zinc-800 mb-4">
              Lei Geral de Proteção de Dados (LGPD)
            </h2>
            <div className="text-sm text-zinc-600 max-h-80 overflow-y-auto space-y-4">
              <p>
                A LGPD (Lei nº 13.709/2018) dispõe sobre o tratamento de dados
                pessoais, inclusive nos meios digitais, por pessoa natural ou
                jurídica, com o objetivo de proteger os direitos fundamentais de
                liberdade, privacidade e o livre desenvolvimento da
                personalidade da pessoa natural.
              </p>
              <p>
                Ao aceitar, você autoriza o uso dos seus dados fornecidos neste
                formulário para fins de inscrição, comunicação e contato por
                nossa equipe.
              </p>
              <p>
                Para mais detalhes, acesse a lei completa no{" "}
                <a
                  href="https://www.gov.br/cidadania/pt-br/acesso-a-informacao/lgpd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-700 font-medium hover:underline"
                >
                  site oficial do Governo
                </a>
                .
              </p>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="px-6 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800 transition"
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

// --- FIM DO SubscriptionForm / INÍCIO DO AreaContactModal ---

// Interface para o componente principal (AreaContactModal)
interface AreaContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSendMessage: (mensagemCompleta: string) => void;
}

// COMPONENTE PARA O MODO CONTATO GERAL COM SELEÇÃO DE ÁREA
export const AreaContactModal: React.FC<AreaContactModalProps> = ({ isOpen, onClose, onSendMessage }) => {
  // Estados do modal (mantidos)
  const [areaSelecionada, setAreaSelecionada] = useState<AreaDoCurso | null>(null);
  const [isAreasOpen, setIsAreasOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"form" | "loading" | "success">("form");

  // Handler para seleção da área (mantido)
  const handleAreaSelect = useCallback((area: AreaDoCurso) => {
    setAreaSelecionada(area);
    setIsAreasOpen(false); // Fecha a lista após a seleção
  }, []);

  // Efeito para fechar o dropdown ao clicar fora (mantido)
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

  // Função de Submissão que será passada para o SubscriptionForm (mantida)
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // A validação de 'areaSelecionada' é crítica neste modo
    if (!areaSelecionada) {
      console.error('Por favor, selecione uma Área de Interesse.');
      return;
    }

    // Obtenção dos dados do formulário
    const form = event.currentTarget;
    const nome = (form.elements.namedItem('name') as HTMLInputElement).value;
    const whatsapp = (form.elements.namedItem('whatsapp') as HTMLInputElement).value;


    setStatus("loading");

    // LÓGICA DE CONSTRUÇÃO DA MENSAGEM COM A ÁREA SELECIONADA
    const mensagemFinal = `Olá! Meu nome é ${nome.trim()} (WhatsApp: ${whatsapp}) e tenho interesse na área de *${areaSelecionada.nome}*. Gostaria de informações sobre os cursos desta área.`;

    setTimeout(() => {
      onSendMessage(mensagemFinal); // Chama a função que envia (WhatsApp/API)
      setStatus("success");
    }, 1500);
  };

  // Handler de cancelamento/fechamento (mantido)
  const handleCancel = () => {
    setStatus("form"); // Reseta o status
    onClose(); // Fecha o modal
  };

  if (!isOpen) return null;

  // O modal envolve o formulário
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl p-6 relative">
        <button
          onClick={handleCancel}
          aria-label="Fechar Modal"
          className="absolute top-3 right-3 text-zinc-500 hover:text-zinc-800 transition"
        >
          <X size={22} />
        </button>

        {/* Renderiza o formulário principal, passando todas as props de área */}
        <SubscriptionForm
          status={status}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
          selectedContent={areaSelecionada ? areaSelecionada.nome : "Selecione a Área"}

          // PROPS PARA ATIVAR O MODO CONTATO GERAL
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

// --- ESTADOS DE CARREGAMENTO E SUCESSO (Mantidos) ---

const LoadingState = () => (
  <div className="flex flex-col items-center justify-center h-80 text-center">
    <Loader2 className="h-12 w-12 text-red-700 animate-spin" />
    <p className="mt-4 text-lg font-medium text-zinc-600">
      Enviando seus dados...
    </p>
  </div>
);

const SuccessState = ({ onCancel }: { onCancel: () => void }) => (
  <div className="flex flex-col items-center justify-center h-80 text-center">
    <CheckCircle className="h-16 w-16 text-red-700" />
    <h2 className="mt-4 text-3xl font-bold text-zinc-800">
      Mensagem Enviada!
    </h2>
    <p className="mt-2 text-zinc-600">
      Obrigado! Em breve nossa equipe entrará em contato com você.
    </p>
    <button
      onClick={onCancel}
      className="mt-8 w-full sm:w-auto px-8 py-3 bg-zinc-800 text-white font-semibold rounded-lg hover:bg-zinc-700 transition-colors"
    >
      Voltar
    </button>
  </div>
);
