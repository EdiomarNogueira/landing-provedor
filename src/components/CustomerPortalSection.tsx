import { ArrowRight } from "lucide-react";
import { customerPortal } from "../data/customerPortal";

export function CustomerPortalSection() {
  return (
    <section id="cliente" className="bg-slate-50 px-6 py-24">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-blue-950 shadow-2xl shadow-blue-950/20">
        <div className="grid lg:grid-cols-[0.9fr_1.4fr]">
          <div className="bg-gradient-to-br from-blue-700 to-cyan-500 p-8 text-white md:p-12">
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-blue-100">
              Já é cliente?
            </span>

            <h2 className="mt-4 text-3xl font-black md:text-5xl">
              Central do Assinante
            </h2>

            <p className="mt-5 text-blue-50">
              Acesse os principais serviços do seu plano de forma rápida.
            </p>

            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-bold uppercase text-blue-700 transition-all duration-300 hover:scale-105 hover:bg-blue-50"
            >
              Acessar portal completo
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="divide-y divide-white/10">
            {customerPortal.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.title}
                  href={item.link}
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    gap-6
                    p-6
                    text-white
                    transition-all
                    duration-300
                    hover:bg-white/10
                    md:p-8
                  "
                >
                  <div className="flex items-center gap-5">
                    <div
                      className="
                        flex
                        size-14
                        items-center
                        justify-center
                        rounded-2xl
                        bg-white/10
                        transition-all
                        duration-300
                        group-hover:bg-white/15
                        group-hover:scale-110
                      "
                    >
                      <Icon
                        size={28}
                        strokeWidth={1.8}
                        className="text-cyan-300"
                      />
                    </div>

                    <div>
                      <h3 className="font-black">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-sm text-blue-100">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <ArrowRight
                    size={22}
                    className="
                      text-blue-200
                      transition-transform
                      duration-300
                      group-hover:translate-x-2
                    "
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}