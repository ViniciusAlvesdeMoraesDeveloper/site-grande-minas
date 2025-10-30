"use client";

import Link from "next/link";
import { Home, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100 px-6">
      {/* Ícone animado */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 15 }}
        className="mb-6"
      >
        <AlertTriangle className="w-20 h-20 text-red-600" />
      </motion.div>

      {/* Código 404 */}
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-7xl font-extrabold text-red-700 drop-shadow-md"
      >
        404
      </motion.h1>

      {/* Texto principal */}
      <motion.p
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-4 text-lg text-zinc-700 text-center max-w-lg"
      >
        Ops! A página que você está procurando não existe ou foi movida.
      </motion.p>

      {/* Botão de voltar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-8"
      >
        <Link
          href="/"
          className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-full font-semibold shadow-lg hover:bg-red-700 transition-all"
        >
          <Home size={20} />
          Voltar para a Página Inicial
        </Link>
      </motion.div>
    </div>
  );
}
