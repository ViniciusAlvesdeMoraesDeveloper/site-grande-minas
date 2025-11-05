'use client'

import { GraduationCap, ArrowRight, Smartphone } from "lucide-react";


export default function CourseEja() {
    
    const whatsappNumber = '31973309678';
    
    const whatsappMessage = encodeURIComponent("Olá! Gostaria de mais informações sobre o Curso EJA a Distância da Grande Minas TEC.");
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    return (
        <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    {/* Ícone de destaque */}
                    <GraduationCap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    
                    {/* Título Principal */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
                        Curso EJA a Distância
                    </h1>
                    
                    {/* Subtítulo/Descrição Profissional */}
                    <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Não deixe que a falta do diploma de Ensino Médio limite seu futuro. 
                        Com o EJA a Distância da Grande Minas TEC, você retoma seus estudos no seu ritmo, 
                        estuda onde e quando quiser e conquista seu certificado em tempo recorde.
                    </p>
                    <p className="mt-2 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-medium">
                         Abra portas para a faculdade, concursos e melhores vagas de trabalho, conciliando tudo com sua rotina!
                    </p>
                </div>

                {/* Área do Botão - Mais Profissional e Focado na Ação */}
                <div className="mt-10 flex justify-center">
                    <a 
                        href={whatsappLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-green-600 hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50"
                    >
                        {/* Ícone do WhatsApp */}
                        <Smartphone className="w-5 h-5 mr-2" />
                        Fale Conosco pelo WhatsApp
                        {/* Ícone de Seta para indicar ação */}
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                </div>
                
                {/* Informação de Suporte Adicional (opcional) */}
                <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
                    <p>Atendimento rápido e personalizado para tirar todas as suas dúvidas.</p>
                </div>
            </div>
        </section>
    );
}