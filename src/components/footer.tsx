import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import PoliticaPrivacidade from "@/app/politica-de-privacidade/page";
import Link from "next/link";

const Footer = () => {
  return (

    <footer className="bg-[#111827] text-[#F9FAFB]">
      <div className="container mx-auto px-4 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Coluna 1: Logo e Redes Sociais */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#FF5B04] rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">GM</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Grande Minas</h3>
                <p className="text-xs text-[#9CA3AF]">
                  Educação Técnica de Excelência
                </p>
              </div>
            </div>
            <p className="text-sm text-[#9CA3AF] leading-relaxed">
              O Colégio Técnico Grande Minas é a solução para o profissional que busca o reconhecimento de sua experiência. Valide seu conhecimento em um Diploma Técnico oficial, ou conclua o Ensino Médio com nosso EJA EaD Acelerado.
              Grande Minas: Seu Grande Salto em Competências.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://www.instagram.com/grandeminas.ead?igsh=YzJrbHoyM2Ricnpp&utm_source=qr"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-[#9CA3AF] hover:text-[#FF5B04] cursor-pointer transition-colors" />
              </a>
            </div>

            <div className="flex space-x-4 pt-2">
              <a
                href="https://www.facebook.com/share/14R1iPUTdP1/?mibextid=wwXIfr"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-[#9CA3AF] hover:text-[#FF5B04] cursor-pointer transition-colors" />
              </a>
            </div>
          </div>

          {/* Coluna 2: Cursos Principais */}
          <div>
            <h4 className="font-semibold text-white mb-4">Cursos</h4>
            <ul className="space-y-3 text-sm text-[#9CA3AF]">
              <li>
                <a
                  href="/#cursos"
                  className="hover:text-[#FF5B04] transition-colors"
                >
                  Área da Saúde
                </a>
              </li>
              <li>
                <a
                  href="/#cursos"
                  className="hover:text-[#FF5B04] transition-colors"
                >
                  Administração & Gestão
                </a>
              </li>
              <li>
                <a
                  href="/#cursos"
                  className="hover:text-[#FF5B04] transition-colors"
                >
                  Tecnologia e Informática
                </a>
              </li>
              <li>
                <a
                  href="/#cursos"
                  className="hover:text-[#FF5B04] transition-colors"
                >
                  Engenharia & Manutenção
                </a>
              </li>
              <li>
                <a
                  href="/#cursos"
                  className="hover:text-[#FF5B04] transition-colors"
                >
                  Construção e Infraestrutura
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Links Úteis */}
          <div>
            <h4 className="font-semibold text-white mb-4">Links Úteis</h4>
            <ul className="space-y-3 text-sm text-[#9CA3AF]">
              <li>
                <a
                  href="/sobre-nos"
                  className="hover:text-[#FF5B04] transition-colors"
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="/#contato" className="hover:text-[#FF5B04] transition-colors">
                  Contato
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#FF5B04] transition-colors"
                ></a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#FF5B04] transition-colors"
                ></a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#FF5B04] transition-colors"
                ></a>
              </li>
            </ul>
          </div>


          <div>
            <h4 className="font-semibold text-white mb-4">Entre em Contato</h4>
            <ul className="space-y-4 text-sm text-[#9CA3AF]">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>
                  R. Luiz Rodrigues dos Santos, 44 - Todos Os Santos, Cel.
                  Fabriciano - MG
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5" />
                <a
                  href="mailto: grandeminas.tec@gmail.com"
                  className="hover:text-[#FF5B04] transition-colors"
                >
                  gerenciageraltecminas@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5" />
                <a
                  href="tel:+5531973309678"
                  className="hover:text-[#FF5B04] transition-colors"
                >
                  (31) 973309678
                </a>
              </li>
            </ul>
          </div>
        </div>


        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

            {/* Container vazio à esquerda para balancear o layout */}
            <div className="w-full md:w-1/3 order-1 md:order-1"></div>

            {/* Copyright - centralizado */}
            <div className="text-center w-full md:w-1/3 order-2 md:order-2">
              <p className="text-sm text-[#9CA3AF]">
                © {new Date().getFullYear()} GrandeMinas. Todos os direitos reservados.
              </p>
              <p className="text-sm text-[#9CA3AF]">
                CNPJ: 63.110.658/0001-76 | Credenciada pelo MEC
              </p>
            </div>

            {/* Política de Privacidade - lado direito */}
            <div className="text-center md:text-right w-full md:w-1/3 order-3 md:order-3">
              <Link
                href="/politica-de-privacidade"
                className="text-sm text-[#9CA3AF] hover:text-[#FF5B04] transition-colors"
              >
                Política de Privacidade
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;