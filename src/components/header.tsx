"use client";
import React, { useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "./lib/utils";
import { motion, useScroll } from "framer-motion";
import Modal from "./modalContactsCourses/modal";

interface MenuItem {
  name: string;
  href: string;
}

const menuItems: MenuItem[] = [
  { name: "Início", href: "/#inicio" },
  { name: "Sobre Nós", href: "/sobre-nos" },
  { name: "Cursos", href: "/#cursos" },
  { name: "Contato", href: "/#contato" },
];

const WHATSAPP_TARGET = "5531973309678";

// Defina as áreas disponíveis
const AREAS_DE_INTERESSE = [
  "Tecnologia da Informação",
  "Saúde",
  "Segurança do Trabalho",
  "Administração",
  "Logística",
  "Meio Ambiente",
  "Eletrotécnica",
  "Mineração",
  "Soldagem",
  "Enfermagem",
  "Outras áreas"
];

type FormStatus = "form" | "loading" | "success";

export const Header = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<FormStatus>("form");
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);

  const openModal = () => {
    setFormStatus("form");
    setSelectedAreas([]);
    setIsModalOpen(true);
  };

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedAreas([]);
  }, []);

  const handleAreaToggle = (area: string) => {
    setSelectedAreas(prev => {
      if (prev.includes(area)) {
        return prev.filter(a => a !== area);
      } else {
        return [...prev, area];
      }
    });
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormStatus("loading");

    try {
      const formData = new FormData(event.currentTarget);
      const name = formData.get('name') as string;
      const userWhatsapp = formData.get('whatsapp') as string;
      const email = formData.get('email') as string;

      // Formatar áreas selecionadas
      const areasText = selectedAreas.length > 0
        ? `\n*Áreas de Interesse:* ${selectedAreas.join(', ')}`
        : '';

      const message = `Olá! Meu nome é ${name}, e meu Telefone é ${userWhatsapp}.Este é meu e-mail: ${email ? `\n*Email: ${email}` : ''}\n\nEstou entrando em contato pois tenho interesse na área: ${areasText}\n\nGostaria de mais informações sobre os cursos ofertados.`;

      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_TARGET}&text=${encodedMessage}`;

      window.open(whatsappUrl, '_blank');
      setFormStatus("success");

    } catch (error) {
      console.error("Erro ao processar a submissão do WhatsApp no Header:", error);
      setFormStatus("form");
    }
  };

  const { scrollY } = useScroll();
  React.useEffect(() => {
    let lastScroll = 0;
    return scrollY.on("change", (latest) => {
      if (latest > lastScroll && latest > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScroll = latest;
    });
  }, [scrollY]);

  const handleLinkClick = () => {
    if (menuState) {
      setMenuState(false);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed top-0 left-0 z-50 w-full"
      >
        <nav
          data-state={menuState && "active"}
          className={cn(
            "backdrop-blur-2xl bg-[#125472] border-b border-blue-400/30 shadow-sm"
          )}
        >
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex items-center justify-between py-4">
              {/* Logo */}
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-3"
                onClick={handleLinkClick}
              >
                <div className="relative w-40 h-20">
                  <Image
                    src="/logo.png"
                    alt="Grande Minas Logo"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
              </Link>

              {/* Menu Desktop */}
              <ul className="hidden lg:flex gap-10 font-medium text-[16px]">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="relative text-white hover:text-orange-500 transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full"
                      onClick={handleLinkClick}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Botão WhatsApp Desktop */}
              <div className="hidden lg:flex">
                <Button
                  onClick={openModal}
                  className="rounded-full bg-orange-500 hover:bg-orange-600 text-white transitions px-6 shadow-lg hover:shadow-orange-500/25"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Contato
                </Button>
              </div>

              {/* Botão Menu Mobile */}
              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? "Close Menu" : "Open Menu"}
                className="lg:hidden relative z-50 text-white hover:text-orange-300 transition-colors"
              >
                {menuState ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Menu Mobile */}
          {menuState && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-[#0f4760] border-t border-blue-400/30 shadow-md px-6 py-6"
            >
              <ul className="space-y-6 text-lg font-medium">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      onClick={() => setMenuState(false)}
                      className="block text-white hover:text-amber-300 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button
                  onClick={() => {
                    openModal();
                    setMenuState(false);
                  }}
                  className="w-full rounded-full bg-amber-500 hover:bg-amber-600 shadow-lg text-white"
                >
                  Contato
                </Button>
              </div>
            </motion.div>
          )}
        </nav>
      </motion.header>

      {/* Usando o componente Modal existente */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-center p-6 border-b">
            <h3 className="text-lg font-semibold">Entre em Contato</h3>
            <button
              onClick={closeModal}
              className="text-gray-500 hover:text-gray-700"
            >
              Fechar <X size={24} />
            </button>
          </div>

          <form onSubmit={handleFormSubmit} className="p-6">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nome Completo *
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Seu nome completo"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                WhatsApp *
              </label>
              <input
                type="tel"
                name="whatsapp"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="(00) 00000-0000"
                onInput={(e) => {
                  let value = e.currentTarget.value.replace(/\D/g, '');

                  if (value.length <= 11) {
                    if (value.length > 2) {
                      value = `(${value.substring(0, 2)}) ${value.substring(2)}`;
                    }
                    if (value.length > 7) {
                      value = `${value.substring(0, 10)}-${value.substring(10)}`;
                    }
                  }

                  e.currentTarget.value = value;
                }}
              />
              <p className="text-xs text-gray-500 mt-1">Digite apenas números</p>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="seu@email.com"
              />
            </div>

            {/* Campo de Áreas de Interesse */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Áreas de Interesse (opcional)
              </label>
              <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto p-1">
                {AREAS_DE_INTERESSE.map((area) => (
                  <label
                    key={area}
                    className="flex items-center space-x-2 p-2 border border-gray-300 rounded-md hover:bg-gray-50 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedAreas.includes(area)}
                      onChange={() => handleAreaToggle(area)}
                      className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                    />
                    <span className="text-sm">{area}</span>
                  </label>
                ))}
              </div>
              {selectedAreas.length > 0 && (
                <p className="text-xs text-gray-500 mt-2">
                  Selecionadas: {selectedAreas.join(', ')}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={formStatus === "loading"}
              className="w-full bg-orange-500 text-white py-3 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {formStatus === "loading" ? "Enviando..." : "Enviar para WhatsApp"}
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
};