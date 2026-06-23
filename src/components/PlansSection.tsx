"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { internetPlans } from "../data/internetPlans";

export function PlansSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section
      ref={sectionRef}
      id="planos"
      className="relative bg-zinc-50 lg:h-[220vh]"
    >
      <div className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:items-center lg:overflow-hidden">
        <div className="mx-auto w-full max-w-7xl px-6 py-20">
          <div className="mb-12 text-center">
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-blue-600">
              Nossos planos
            </span>

            <h2 className="mt-3 text-3xl font-black text-blue-950 md:text-5xl">
              Escolha a velocidade ideal
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-zinc-600">
              Planos pensados para casa, trabalho, estudos, streaming e jogos
              online.
            </p>
          </div>

          {/* Desktop com scroll horizontal */}
          <motion.div
            style={{ x }}
            className="hidden gap-6 lg:flex lg:w-[200%]"
          >
            {internetPlans.map((plan) => (
              <PlanCard key={plan.name} plan={plan} />
            ))}
          </motion.div>

          {/* Mobile/tablet normal */}
          <div className="grid gap-6 md:grid-cols-2 lg:hidden">
            {internetPlans.map((plan) => (
              <PlanCard key={plan.name} plan={plan} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PlanCard({
  plan,
}: {
  plan: {
    name: string;
    speed: string;
    price: string;
    highlight: boolean;
    benefits: string[];
  };
}) {
  return (
    <article
      className={`
        relative flex min-h-[420px] flex-col rounded-3xl border bg-white p-8 shadow-xl transition-all duration-300
        hover:-translate-y-2 hover:shadow-2xl
        lg:w-[calc((100%-3rem)/6)]
        ${
          plan.highlight
            ? "border-blue-500 shadow-blue-500/20"
            : "border-zinc-200 shadow-zinc-200/70"
        }
      `}
    >
      {plan.highlight && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-green-500 px-5 py-2 text-xs font-bold uppercase text-white">
          Mais escolhido
        </span>
      )}

      <p className="text-sm font-bold uppercase text-blue-600">{plan.name}</p>

      <h3 className="mt-3 text-4xl font-black text-blue-950">
        {plan.speed}
      </h3>

      <div className="mt-6 flex items-end gap-1 text-blue-950">
        <span className="mb-2 text-sm font-bold">R$</span>
        <strong className="text-5xl font-black">{plan.price}</strong>
        <span className="mb-2 text-sm font-semibold text-zinc-500">/mês</span>
      </div>

      <ul className="mt-8 space-y-3 text-sm text-zinc-700">
        {plan.benefits.map((benefit) => (
          <li key={benefit} className="flex items-center gap-3">
            <span className="flex size-5 items-center justify-center rounded-full bg-blue-100 text-xs text-blue-700">
              ✓
            </span>
            {benefit}
          </li>
        ))}
      </ul>

      <a
        href="https://wa.me/5500000000000"
        className={`
          mt-auto flex justify-center rounded-xl px-6 py-4 text-sm font-bold uppercase transition-all duration-300 active:scale-95
          ${
            plan.highlight
              ? "bg-blue-600 text-white hover:bg-blue-500"
              : "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
          }
        `}
      >
        Contratar agora
      </a>
    </article>
  );
}