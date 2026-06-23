"use client";

import { motion } from "framer-motion";
import { testimonials } from "../data/testimonials";

export function TestimonialsSection() {
  return (
    <section
      id="depoimentos"
      className="relative overflow-hidden bg-blue-950 px-6 py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.35),transparent_30%),radial-gradient(circle_at_80%_75%,rgba(34,211,238,0.22),transparent_32%)]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.45 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-sm font-bold uppercase tracking-[0.3em] text-blue-300">
            Depoimentos
          </span>

          <h2 className="mt-3 text-3xl font-black text-white md:text-5xl">
            Clientes que confiam na nossa conexão
          </h2>

          <p className="mt-4 text-blue-100">
            Veja a opinião de quem usa nossa internet no dia a dia.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{
                opacity: 0,
                y: 50,
                x: index % 2 === 0 ? -24 : 24,
                scale: 0.96,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                x: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.55,
                delay: index * 0.12,
                ease: "easeOut",
              }}
              viewport={{ once: false, amount: 0.35 }}
              className="rounded-3xl border border-white/10 bg-white/10 p-7 shadow-lg shadow-blue-950/20 backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:bg-white/15 hover:shadow-xl"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="text-lg text-yellow-400">
                  {"★".repeat(item.rating)}
                </div>

                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-blue-100">
                  {item.city}
                </span>
              </div>

              <p className="text-sm leading-relaxed text-blue-50">
                “{item.text}”
              </p>

              <div className="mt-8 border-t border-white/10 pt-5">
                <h3 className="font-bold text-white">{item.name}</h3>
                <p className="text-sm text-blue-200">Cliente residencial</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}