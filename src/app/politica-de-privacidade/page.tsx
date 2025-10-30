"use client";
import { ShieldCheck, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PoliticaPrivacidade() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-zinc-50 py-16 px-6">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        {/* Cabeçalho */}
        <div className="flex items-center gap-3 mb-8">
          <ShieldCheck className="w-10 h-10 text-red-700" />
          <h1 className="text-3xl font-bold text-zinc-800">
            Política de Privacidade
          </h1>
        </div>

        <p className="text-zinc-600 mb-6">
          Sua privacidade é muito importante para nós. Esta Política de
          Privacidade descreve como coletamos, usamos e protegemos suas
          informações em conformidade com a Lei Geral de Proteção de Dados (LGPD
          – Lei nº 13.709/2018).
        </p>

        {/* Seções */}
        <div className="space-y-6 text-zinc-700 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-zinc-800 mb-2">
              1. Dados que coletamos
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Nome completo</li>
              <li>Telefone / WhatsApp</li>
              <li>E-mail (quando informado)</li>
              <li>Área de interesse ou curso escolhido</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-800 mb-2">
              2. Como utilizamos seus dados
            </h2>
            <p>Os dados coletados serão utilizados exclusivamente para:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Entrar em contato sobre sua inscrição.</li>
              <li>Enviar informações relevantes sobre cursos e eventos.</li>
              <li>Atender solicitações de suporte.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-800 mb-2">
              3. Compartilhamento de dados
            </h2>
            <p>
              Não compartilhamos seus dados pessoais com terceiros, exceto
              quando exigido por lei ou para prestação dos serviços contratados.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-800 mb-2">
              4. Segurança
            </h2>
            <p>
              Adotamos medidas técnicas e organizacionais para proteger seus
              dados contra acessos não autorizados, perda ou divulgação
              indevida.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-800 mb-2">
              5. Seus direitos
            </h2>
            <p>
              Você tem direito a acessar, corrigir, excluir ou solicitar a
              portabilidade dos seus dados. Para exercer esses direitos, entre
              em contato conosco pelo e-mail{" "}
              <a
                href="mailto:contato@seudominio.com"
                className="text-red-700 font-medium hover:underline"
              >
                gerenciageraltecminas@gmail.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-800 mb-2">
              6. Alterações nesta política
            </h2>
            <p>
              Podemos atualizar esta Política de Privacidade periodicamente.
              Recomendamos que você a consulte regularmente para estar sempre
              informado.
            </p>
          </section>
        </div>

        {/* Rodapé */}
        <div className="mt-10 flex items-center justify-between">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 px-6 py-2 rounded-lg bg-zinc-100 text-zinc-700 font-medium hover:bg-zinc-200 transition"
          >
            <ArrowLeft size={18} />
            Voltar
          </button>
          <span className="text-sm text-zinc-500">
            Última atualização: Setembro/2025
          </span>
        </div>
      </div>
    </div>
  );
}
