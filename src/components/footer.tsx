import { Phone, Mail, MapPin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    // Fundo escuro para um visual premium
    <footer className="bg-[#111827] text-[#F9FAFB]">
      <div className="container mx-auto px-4 py-16">
        {/* Grid principal com 4 colunas para um layout completo e balanceado */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Coluna 1: Logo e Redes Sociais */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#DC2626] rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">TecMinas</h3>
                <p className="text-xs text-[#9CA3AF]">
                  Educação Técnica de Excelência
                </p>
              </div>
            </div>
            <p className="text-sm text-[#9CA3AF] leading-relaxed">
              Transformando vidas através da educação. Há mais de 5 anos
              formando os melhores profissionais do mercado.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://www.instagram.com/tecminas.ead/"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-[#9CA3AF] hover:text-[#DC2626] cursor-pointer transition-colors" />
              </a>
            </div>
          </div>

          {/* Coluna 2: Cursos Principais */}
          <div>
            <h4 className="font-semibold text-white mb-4">Cursos</h4>
            <ul className="space-y-3 text-sm text-[#9CA3AF]">
              <li>
                <a
                  href="#cursos"
                  className="hover:text-[#DC2626] transition-colors"
                >
                  Área da Saúde
                </a>
              </li>
              <li>
                <a
                  href="#cursos"
                  className="hover:text-[#DC2626] transition-colors"
                >
                  Administração & Gestão
                </a>
              </li>
              <li>
                <a
                  href="#cursos"
                  className="hover:text-[#DC2626] transition-colors"
                >
                  Tecnologia e Informática
                </a>
              </li>
              <li>
                <a
                  href="#cursos"
                  className="hover:text-[#DC2626] transition-colors"
                >
                  Engenharia & Manutenção
                </a>
              </li>
              <li>
                <a
                  href="#cursos"
                  className="hover:text-[#DC2626] transition-colors"
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
                  href="#sobrenos"
                  className="hover:text-[#DC2626] transition-colors"
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#DC2626] transition-colors">
                  Contato
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#DC2626] transition-colors"
                ></a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#DC2626] transition-colors"
                ></a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#DC2626] transition-colors"
                ></a>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Informações de Contato */}
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
                  href="mailto:gerenciageraltecminas@gmail.comm"
                  className="hover:text-[#DC2626] transition-colors"
                >
                  gerenciageraltecminas@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5" />
                <a
                  href="tel:+5531973144070"
                  className="hover:text-[#DC2626] transition-colors"
                >
                  (31) 97314-4070
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Barra de Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-[#9CA3AF]">
            © {new Date().getFullYear()} TecMinas. Todos os direitos reservados.
          </p>
          <p className="text-sm text-[#9CA3AF]">
            CNPJ: 61.481.601/0001-58 | Credenciada pelo MEC
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
