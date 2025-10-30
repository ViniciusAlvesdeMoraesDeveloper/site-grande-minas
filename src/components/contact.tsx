"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Phone, Mail, Instagram, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
export const metadata = {
  title: "Fale Conosco | Colégio Técnico TecMinas",
  description:
    "Entre em contato com o Colégio Técnico TecMinas. Telefone, WhatsApp, e-mail e endereço em Coronel Fabriciano - MG.",
  keywords: [
    "Contato TecMinas",
    "Telefone TecMinas",
    "E-mail TecMinas",
    "Endereço TecMinas",
  ],
  openGraph: {
    title: "Contato - Colégio Técnico TecMinas",
    description:
      "Fale com nossa equipe e tire suas dúvidas sobre cursos e matrículas.",
    url: "https://colegiotecminas.com.br/contato",
    siteName: "TecMinas",
    images: [
      {
        url: "https://colegiotecminas.com.br/images/contato.jpg",
        width: 1200,
        height: 630,
        alt: "Contato TecMinas",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function Contact() {
  const contacts = [
    {
      icon: <Phone className="w-6 h-6 text-blue-600" />,
      label: "Telefone Suporte",
      value: "(31) 97314-4070",
      href: "tel:+5531973144070",
    },
    {
      icon: <Mail className="w-6 h-6 text-red-500" />,
      label: "E-mail",
      value: "gerenciageraltecminas@gmail.com",
      href: "mailto:gerenciageraltecminas@gmail.com",
    },
    {
      icon: <Instagram className="w-6 h-6 text-pink-500" />,
      label: "Instagram",
      value: "@tecminas.ead",
      href: "https://instagram.com/tecminas.ead",
    },
    {
      icon: <MapPin className="w-6 h-6 text-green-600" />,
      label: "Endereço",
      value:
        "R. Luiz Rodrigues dos Santos, 44 - Todos Os Santos, Cel. Fabriciano - MG",
      href: "https://maps.google.com/?q=R.+Luiz+Rodrigues+dos+Santos,+44+-+Todos+Os+Santos,+Cel.+Fabriciano+-+MG",
    },
  ];

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-xl rounded-3xl p-10 bg-gradient-to-br from-white via-gray-50 to-gray-100 border border-gray-200 mb-20">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-center text-gray-900 tracking-tight">
          Contatos da Empresa
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {contacts.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="flex flex-col items-center justify-center gap-2 p-6 rounded-2xl border border-gray-200 bg-white/70 backdrop-blur-sm shadow-sm hover:shadow-[0_4px_20px_rgba(220,38,38,0.35)] transition-all duration-300"
            >
              <div className="p-3 rounded-full bg-gray-100">{item.icon}</div>
              <p className="text-sm font-semibold text-gray-700">
                {item.label}
              </p>
              {/* Link */}
              <Link
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 text-center text-sm hover:text-red-600 transition-colors"
              >
                {item.value}
              </Link>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
