"use client";

import { useState } from "react";
import { coverageAreas } from "../data/coverageAreas";

export function CoverageSearch() {
  const [city, setCity] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [result, setResult] = useState<null | boolean>(null);

  const selectedCity = coverageAreas.find((item) => item.city === city);

  function handleSearch() {
    if (!city || !neighborhood) {
      setResult(null);
      return;
    }

    const hasCoverage = coverageAreas.some(
      (item) =>
        item.city === city && item.neighborhoods.includes(neighborhood)
    );

    setResult(hasCoverage);
  }

  return (
    <section id="cobertura" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl rounded-3xl bg-blue-950 p-8 text-white shadow-2xl shadow-blue-950/20">
        <div className="mb-8 text-center">
          <span className="text-sm font-bold uppercase tracking-[0.3em] text-blue-300">
            Consulte sua região
          </span>

          <h2 className="mt-3 text-3xl font-black md:text-5xl">
            Consulte a cobertura
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Verifique se nossos planos de fibra óptica estão disponíveis para
            sua cidade e bairro.
          </p>
        </div>

        <div className="grid gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur md:grid-cols-[1fr_1fr_auto]">
          <select
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
              setNeighborhood("");
              setResult(null);
            }}
            className="h-14 rounded-xl border border-white/20 bg-white px-4 text-sm font-medium text-zinc-800 outline-none"
          >
            <option value="">Selecione sua cidade</option>
            {coverageAreas.map((item) => (
              <option key={item.city} value={item.city}>
                {item.city}
              </option>
            ))}
          </select>

          <select
            value={neighborhood}
            onChange={(e) => {
              setNeighborhood(e.target.value);
              setResult(null);
            }}
            disabled={!selectedCity}
            className="h-14 rounded-xl border border-white/20 bg-white px-4 text-sm font-medium text-zinc-800 outline-none disabled:cursor-not-allowed disabled:opacity-60"
          >
            <option value="">Selecione seu bairro</option>
            {selectedCity?.neighborhoods.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

          <button
            onClick={handleSearch}
            className="h-14 rounded-xl bg-green-500 px-8 text-sm font-bold uppercase text-white transition-all duration-300 hover:-translate-y-1 hover:bg-green-400 active:scale-95"
          >
            Verificar
          </button>
        </div>

        {result === true && (
          <div className="mt-6 rounded-2xl border border-green-400/30 bg-green-500/15 p-5 text-center">
            <h3 className="text-xl font-bold text-green-300">
              Temos cobertura na sua região!
            </h3>
            <p className="mt-2 text-green-50">
              Você já pode contratar um dos nossos planos de internet fibra
              óptica.
            </p>
          </div>
        )}

        {result === false && (
          <div className="mt-6 rounded-2xl border border-yellow-400/30 bg-yellow-500/15 p-5 text-center">
            <h3 className="text-xl font-bold text-yellow-300">
              Ainda não atendemos essa região
            </h3>
            <p className="mt-2 text-yellow-50">
              Mas você pode deixar seu contato para avisarmos quando a cobertura
              chegar.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}