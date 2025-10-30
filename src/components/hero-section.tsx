"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    //Correcao a tag relative corrige o erro de responsividade
    <section className="relative w-full h-[600px] overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <picture>
          <source
            srcSet="/imagesWebp/768x690.webp"
            media="(max-width: 768px)"
          />
          <source
            srcSet="/imagesWebp/1024x600.webp"
            media="(min-width: 769px) and (max-width: 1023px)"
          />
          <source
            srcSet="/imagesWebp/1920x600.webp"
            media="(min-width: 1024px) and (max-width: 1920px)"
          />
          <source
            srcSet="/imagesWebp/1940x600.webp"
            media="(min-width: 1921px)"
          />
          <Image
            src="/imagesWebp/1920x600.webp"
            alt="Hero Background"
            className="object-bottom"
            fill
          />
        </picture>
      </div>
      <div className="relative z-10 flex flex-col items-center md:items-start justify-end h-full text-center md:text-left p-4 sm:p-8 md:px-20">
        <div className="flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12 hidden md:block">
          <Button
            asChild
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-8 py-6 "
          >
            <Link href="/#cursos">Comece agora</Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-transparent border-white hover:bg-white text-white font-bold text-lg px-8 py-6"
          >
            <Link href="/#cursos">Cursos</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
