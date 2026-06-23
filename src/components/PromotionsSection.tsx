import { MessageCircle } from "lucide-react";
import { promotions } from "../data/promotions";

export function PromotionsSection() {
  return (
    <section
      id="promocoes"
      className="relative overflow-hidden bg-slate-50 px-6 py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(59,130,246,0.12),transparent_28%),radial-gradient(circle_at_85%_70%,rgba(34,211,238,0.16),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.3em] text-blue-600">
            Promoções
          </span>

          <h2 className="mt-3 text-3xl font-black text-blue-950 md:text-5xl">
            Ofertas para você se conectar hoje
          </h2>

          <p className="mt-4 text-zinc-600">
            Aproveite condições especiais para contratar sua internet fibra
            óptica com mais economia.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {promotions.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-3xl border border-blue-100 bg-white p-7 shadow-lg shadow-blue-950/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-blue-500/10 transition duration-300 group-hover:bg-blue-500/20" />

                <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-xs font-bold uppercase text-blue-700">
                  {item.badge}
                </span>

                <div className="mt-8">
                  <Icon
                    size={56}
                    strokeWidth={1.7}
                    className="text-blue-600 transition duration-300 group-hover:scale-110 group-hover:text-cyan-500"
                  />
                </div>

                <h3 className="mt-6 text-2xl font-black text-blue-950">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                  {item.description}
                </p>

                <a
                  href="https://wa.me/5500000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-4 text-sm font-bold uppercase text-white transition-all duration-300 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/30 active:scale-95"
                >
                  <MessageCircle size={18} />
                  Aproveitar oferta
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}