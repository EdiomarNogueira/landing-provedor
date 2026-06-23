// src/components/AboutCompanySection.tsx

import { company } from "../data/company";


export function AboutCompanySection() {
  return (
    <section
      id="empresa"
      className="bg-white px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Texto */}
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-blue-600">
              A Empresa
            </span>

            <h2 className="mt-4 text-4xl font-black text-blue-950 md:text-5xl">
              {company.title}
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-zinc-600">
              {company.subtitle}
            </p>

            <p className="mt-4 text-zinc-600">
              Trabalhamos diariamente para oferecer uma conexão rápida,
              estável e segura, garantindo que nossos clientes possam
              estudar, trabalhar, jogar e se comunicar sem interrupções.
            </p>
          </div>

          {/* Métricas */}
          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-3xl bg-blue-50 p-8 text-center">
              <h3 className="text-4xl font-black text-blue-700">
                {company.years}
              </h3>
              <p className="mt-2 text-zinc-600">
                Anos de experiência
              </p>
            </div>

            <div className="rounded-3xl bg-blue-50 p-8 text-center">
              <h3 className="text-4xl font-black text-blue-700">
                {company.clients}
              </h3>
              <p className="mt-2 text-zinc-600">
                Clientes conectados
              </p>
            </div>

            <div className="rounded-3xl bg-blue-50 p-8 text-center">
              <h3 className="text-4xl font-black text-blue-700">
                {company.cities}
              </h3>
              <p className="mt-2 text-zinc-600">
                Cidades atendidas
              </p>
            </div>

            <div className="rounded-3xl bg-blue-50 p-8 text-center">
              <h3 className="text-4xl font-black text-blue-700">
                {company.support}
              </h3>
              <p className="mt-2 text-zinc-600">
                Suporte disponível
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}