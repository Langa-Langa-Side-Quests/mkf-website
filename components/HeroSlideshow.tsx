"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";

const slides = [
  { src: "/gallery/img1.jpg", alt: "Mama Kevina Foundation community work" },
  { src: "/gallery/img3.jpg", alt: "Mama Kevina Comprehensive Secondary School" },
  { src: "/gallery/img4.jpg", alt: "School engagement and activities" },
  { src: "/gallery/img7.jpg", alt: "Sister Clare Mary Busingye with scholarship children" },
  { src: "/gallery/img6.jpg", alt: "School gardening project" },
];

const SLIDE_DURATION = 6000;

export default function HeroSlideshow() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[88vh] min-h-[560px] overflow-hidden">
      {/* Background slideshow layers */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: idx === active ? 1 : 0 }}
          aria-hidden={idx !== active}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={idx === 0}
            sizes="100vw"
            className={`object-cover ${idx === active ? "animate-kenburns" : ""}`}
          />
        </div>
      ))}

      {/* Gradient overlay for readability (brand blue/slate) */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/80 via-blue-900/55 to-slate-950/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-transparent to-transparent" />

      {/* Foreground content */}
      <div className="relative z-10 h-full container mx-auto px-4 flex flex-col justify-center items-center text-center text-white">
        <span className="inline-block text-emerald-300 font-bold tracking-widest text-xs uppercase px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 animate-in fade-in slide-in-from-bottom-3 duration-700">
          Ugandan Indigenous NGO
        </span>

        <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
          Empowering Society to Break the{" "}
          <span className="text-emerald-300">Cycle of Poverty</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-blue-50/90 max-w-2xl mx-auto font-normal leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          Mama Kevina Foundation actively works to improve the lives of vulnerable communities — particularly girls, young women, and youth — by advancing education and vocational skills in Tororo District.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
          <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg">
            <Link href="/work" className="flex items-center gap-2">
              Our Core Programs <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white/40 text-black hover:bg-white/10 hover:text-white backdrop-blur-sm">
            <Link href="/about">Read Our Story</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white/40 text-black hover:bg-white/10 hover:text-white backdrop-blur-sm">
            <Link href="/team" className="flex items-center gap-2">
              <Heart className="h-4 w-4" /> Meet Our Team
            </Link>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === active ? "w-8 bg-emerald-400" : "w-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}