"use client";

import { useState } from "react";
import { Send, CheckCircle, Loader2, X } from "lucide-react";

// --- Componentes de estado (sem alterações na aparência) ---
const LoadingState = () => (
  <div className="flex flex-col items-center justify-center h-80 text-center">
    <Loader2 className="h-12 w-12 text-red-700 animate-spin" />
    <p className="mt-4 text-lg font-medium text-zinc-600">
      Enviando seus dados...
    </p>
  </div>
);

const SuccessState = ({ onClose }: { onClose: () => void }) => (
  <div className="flex flex-col items-center justify-center h-80 text-center">
    <CheckCircle className="h-16 w-16 text-red-700" />
    <h2 className="mt-4 text-3xl font-bold text-zinc-800">
      Inscrição Enviada!
    </h2>
    <p className="mt-2 text-zinc-600">
      Obrigado! Em breve nossa equipe entrará em contato com você.
    </p>
    <button
      onClick={onClose}
      className="mt-8 w-full sm:w-auto px-8 py-3 bg-zinc-800 text-white font-semibold rounded-lg hover:bg-zinc-700 transition-colors"
    >
      Voltar para a página
    </button>
  </div>
);

type SubscriptionFormProps = {
  status: "form" | "loading" | "success";
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onCancel: () => void;
  selectedContent: string;
};

export default function SubscriptionForm({
  status,
  onSubmit,
  onCancel,
  selectedContent,
}: SubscriptionFormProps) {
  const [whatsapp, setWhatsapp] = useState("");
  const [lgpdAccepted, setLgpdAccepted] = useState(false);
  const [showModal, setShowModal] = useState(false);

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
  if (status === "success") return <SuccessState onClose={onCancel} />;

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-zinc-800">Quero me Inscrever</h2>
      <p className="text-zinc-500 mt-2 mb-6">
        Preencha seus dados para garantir sua vaga.
      </p>
      <div className="mb-6">
        <span className="inline-block bg-zinc-100 text-zinc-700 text-sm font-medium px-4 py-1.5 rounded-full">
          Curso: <strong>{selectedContent}</strong>
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

          {/* ✅ Checkbox LGPD estilizado */}
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
            disabled={!lgpdAccepted}
            className="w-full flex-1 px-6 py-3 flex items-center justify-center gap-2 bg-red-700 text-white font-bold rounded-lg shadow-lg hover:bg-red-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send size={18} />
            <span>Enviar Inscrição</span>
          </button>
        </div>
      </form>

      {/* --- Modal LGPD --- */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl p-6 relative">
            <button
              onClick={() => setShowModal(false)}
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
