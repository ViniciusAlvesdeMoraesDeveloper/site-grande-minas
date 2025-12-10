'use client';

import React, { useState } from 'react';


export default function SistecPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const benefits = [
    {
      title: "Certificação Oficial Reconhecida",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: "from-orange-500 to-orange-600",
      description: "Diplomas com validade em todo território nacional"
    },
    {
      title: "Conformidade e Auditoria MEC",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      color: "from-green-500 to-green-600",
      description: "Regularidade comprovada nas auditorias ministeriais"
    },
    {
      title: "Transparência e Segurança de Dados",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      color: "from-purple-500 to-purple-600",
      description: "Proteção e sigilo das informações cadastrais"
    },
    {
      title: "Credibilidade e Validação Nacional",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      color: "from-orange-500 to-orange-600",
      description: "Reconhecimento em todo o Brasil"
    }
  ];

  const stats = [
    { value: "500+", label: "ALUNOS CERTIFICADOS", icon: "👨‍🎓" },
    { value: "98%", label: "TAXA DE APROVAÇÃO", icon: "📈" },
    { value: "5 ★", label: "AVALIAÇÃO MÉDIA", icon: "⭐" }
  ];

  const faqs = [
    {
      question: "O que significa estar registrado no SISTEC?",
      answer: "Significa que nossa instituição está regularizada perante o Ministério da Educação, podendo emitir certificados válidos em todo território nacional."
    },
    {
      question: "Como posso verificar o registro?",
      answer: "Basta acessar o portal oficial do SISTEC/MEC e buscar pelo CNPJ ou nome da instituição na consulta pública."
    },
    {
      question: "Todos os cursos são reconhecidos?",
      answer: "Sim, todos os cursos oferecidos estão devidamente registrados e autorizados pelo MEC através do SISTEC."
    },
    {
      question: "Os certificados têm validade nacional?",
      answer: "Sim, todos os certificados emitidos são válidos em todo território brasileiro e seguem os requisitos legais."
    }
  ];

  const verificationSteps = [
    "Acesse o portal oficial do SISTEC/MEC.",
    "Clique em 'Consulta Pública de Unidade de Ensino.'",
    "Selecione a Localização: Na página de consulta, escolha o Estado e, em seguida, o Município onde a instituição de ensino está localizada.",
    "Confira os dados de registro e cursos ofertados."
  ];

  return (
    <main id='sistec' className="min-h-screen bg-gradient-to-b from-white to-gray-50 mt-10">
      <div className="container mx-auto px-4 py-8 max-w-6xl">

        {/* Header Section */}
        <header className="text-center">

          <div className="inline-flex items-center gap-2 bg-orange-700  text-white px-6 py-2 rounded-full mb-6 shadow-lg">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="font-bold">REGISTRO ATIVO</span>
          </div>


          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Somos Aprovados pelo <span className="text-orange-600">SISTEC-MEC</span>
          </h1>


          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Qualidade Certificada e Transparente: Nossa instituição possui registro e está em plena conformidade com o SISTEC/MEC. Isso é a sua garantia de uma certificação oficial e reconhecida nacionalmente, atestando a máxima qualidade em cada etapa de sua formação.          </p>

          {/* CTA Button */}
          <a
            href="#verificar"
            className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <span>Verificar no SISTEC</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">


          <div className="lg:col-span-2 space-y-8">


            <section>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:border-orange-200 transition-all duration-300 hover:shadow-xl"
                  >
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${benefit.color} text-white mb-4`}>
                      {benefit.icon}
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </section>


            <div className="border-t border-gray-200 my-8"></div>


            <section className="bg-gradient-to-r from-gray-50 to-white rounded-2xl shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-5xl font-black text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                    <div className="text-2xl mt-2">{stat.icon}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-gray-700 text-center">
                  Todos os certificados emitidos seguem os requisitos legais e podem ser validados oficialmente.
                </p>
              </div>
            </section>


            <section className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Dúvidas Frequentes</h2>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-4 py-3 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                    >
                      <span className="font-medium text-gray-900">{faq.question}</span>
                      <svg
                        className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''
                          }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    <div
                      className={`px-4 overflow-hidden transition-all duration-300 ${openFaq === index ? 'py-3 border-t border-gray-100' : 'max-h-0'
                        }`}
                    >
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>


          <div className="space-y-8">


            <section className="bg-gradient-to-br bg-orange-600 rounded-2xl shadow-xl p-6 text-center text-white">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>

              <h3 className="text-2xl font-bold mb-2">SELO DE CONFORMIDADE</h3>
              <h4 className="text-xl font-bold text-yellow-300 mb-6">Aprovação SISTEC-MEC</h4>

              <div className="space-y-4 mb-6">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-black">500+</div>
                  <div className="text-sm text-orange-100">ALUNOS CERTIFICADOS</div>
                </div>

                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-black">98%</div>
                  <div className="text-sm text-orange-100">TAXA DE APROVAÇÃO</div>
                </div>

                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-black">5 ★</div>
                  <div className="text-sm text-orange-100">AVALIAÇÃO MÉDIA</div>
                </div>
              </div>

              <p className="text-orange-100 text-sm italic">
                Certificação válida em todo território nacional
              </p>
            </section>


            <section
              id="verificar"
              className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl shadow-lg p-6 border border-green-100"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                Portal SISTEC/MEC
              </h3>

              <p className="text-gray-700 mb-6">
                Consulta Pública (Unidade de Ensino)
              </p>

              <a
                href="https://sistec.mec.gov.br/consultapublica"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-4 rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300 mb-6"
              >
                <span className="flex items-center justify-center gap-2">
                  Verificar agora
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </span>
              </a>

              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">Como verificar:</h4>
                <ol className="space-y-2">
                  {verificationSteps.map((step, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <span className="text-gray-700 text-sm">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-6 pt-6 border-t border-green-200">
                <p className="text-gray-600 text-sm">
                  <strong>CNPJ para consulta:</strong> 63.110.658/0001-76
                </p>
                <p className="text-gray-600 text-sm mt-1">
                  <strong>Registro ativo desde:</strong> 2023
                </p>
              </div>
            </section>


            <section className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Informações de Contato</h3>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-orange-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-medium text-gray-700">E-mail institucional</p>
                    <a href="mailto:sistec@empresa.com" className="text-orange-600 hover:text-orange-800">
                      sistec@empresa.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-orange-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-medium text-gray-700">Horário de Atendimento</p>
                    <p className="text-gray-600">Segunda a Sexta, 8h às 18h</p>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>


        <footer className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>
            Esta página demonstra nosso compromisso com a transparência e conformidade legal.
            Os dados apresentados são atualizados regularmente conforme determina o MEC.
          </p>
          <p className="mt-2">
            Última atualização: Dezembro 2024 | SISTEC/MEC - Sistema de Informações da Educação Profissional e Tecnológica
          </p>
        </footer>
      </div>
    </main>
  );
}