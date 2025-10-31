"use client";
import React, { useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button"; // Verifique este caminho
import { cn } from "./lib/utils"; // Verifique este caminho
import { motion, useScroll } from "framer-motion";
import Modal from "./modalContactsCourses/modal"; // Verifique este caminho
import SubscriptionForm from "./modalContactsCourses/SubscriptionForm"; // Verifique este caminho
import { submitSubscription } from "./lib/api"; // Verifique este caminho


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


type FormStatus = "form" | "loading" | "success";

export const Header = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);

  // Usando FormStatus definido acima
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<FormStatus>("form");

  const openModal = () => {
    setFormStatus("form");
    setIsModalOpen(true);
  };

  const closeModal = useCallback(() => setIsModalOpen(false), []);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormStatus("loading");

    try {
      const formData = new FormData(event.currentTarget);
      const data = {
        fullerName: formData.get("name") as string,
        phone: (formData.get("whatsapp") as string).replace(/\D/g, ""),
        areaOfInterest: formData.get("interestArea") as string,
        enterpriseId: 1, 
      };

      console.log("Enviando dados do Header:", data);

      await submitSubscription(data);

      setFormStatus("success");
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
      alert("Houve um problema. Tente novamente.");
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
            "backdrop-blur-2xl bg-white/80 dark:bg-black/60 border-b border-zinc-200 dark:border-zinc-800 shadow-sm"
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
                    src="/logo-grande-minas.png"
                    alt="Grande Minas Logo"
                    fill
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
                      className="relative text-zinc-700 dark:text-zinc-200 hover:text-red-600 transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full"
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
                  className="rounded-full bg-[#FF5B04] text-white transitions hover:bg-green-600 hover:text-white px-6 shadow-lg"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Contato
                </Button>
              </div>

              {/* Botão Menu Mobile */}
              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? "Close Menu" : "Open Menu"}
                className="lg:hidden relative z-50"
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
              className="lg:hidden bg-white dark:bg-black border-t border-zinc-200 dark:border-zinc-800 shadow-md px-6 py-6"
            >
              <ul className="space-y-6 text-lg font-medium">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      onClick={() => setMenuState(false)} // Fecha o menu ao clicar
                      className="block text-zinc-700 dark:text-zinc-200 hover:text-red-600 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                {/* Botão Contato Mobile */}
                <Button
                  onClick={() => {
                    openModal();
                    setMenuState(false); 
                  }}
                  className="w-full rounded-full bg-red-600 hover:bg-red-700 shadow-lg text-white"
                >
                  Contato
                </Button>
              </div>
            </motion.div>
          )}
        </nav>
      </motion.header>

      {/* Renderização do Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <SubscriptionForm
          status={formStatus}
          onSubmit={handleFormSubmit}
          onCancel={closeModal}
          
          selectedContent="Area Desejada"
        />
      </Modal>
    </>
  );
};