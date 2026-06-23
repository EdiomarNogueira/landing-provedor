import { benefits } from "../data/benefits";

export function BenefitsSection() {
  return (
    <section
      id="beneficios"
      className="relative overflow-hidden bg-blue-950 px-6 py-24 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.35),transparent_30%),radial-gradient(circle_at_80%_70%,rgba(34,211,238,0.25),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.3em] text-blue-300">
            Benefícios
          </span>

          <h2 className="mt-3 text-3xl font-black md:text-5xl">
            Muito mais que internet
          </h2>

          <p className="mt-5 text-blue-100 md:text-lg">
            Conectividade, estabilidade, suporte e tecnologia para sua casa,
            trabalho e entretenimento.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="
                  group
                  rounded-3xl
                  border border-white/10
                  bg-white/10
                  p-7
                  backdrop-blur
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:bg-white/15
                  hover:shadow-2xl
                  hover:shadow-blue-950/30
                "
              >
                <div
                  className="
                    flex size-16 items-center justify-center
                    rounded-2xl
                    bg-white/15
                    transition-all
                    duration-300
                    group-hover:scale-110
                    group-hover:bg-white/20
                  "
                >
                  <Icon
                    size={34}
                    strokeWidth={1.8}
                    className="text-cyan-300"
                  />
                </div>

                <h3 className="mt-6 text-xl font-black">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-blue-100">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}