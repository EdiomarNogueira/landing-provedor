import {
  Headphones,
  House,
  MapPin,
  MessageCircle,
  Rocket,
  Wifi,
} from "lucide-react";

export function HeroInternet() {
  const features = [
    {
      label: "Fibra \nem casa",
      icon: House,
    },
    {
      label: "Suporte local\nespecializado",
      icon: Headphones,
    },
    {
      label: "Instalação\nrápida",
      icon: Rocket,
    },
    {
      label: "Wi-Fi de alta\nperformance",
      icon: Wifi,
    },
  ];

  return (
    <section id="inicio" className="relative overflow-hidden">
      <div
        className="
          relative min-h-[620px] bg-cover bg-no-repeat
          bg-[position:62%_center]
          sm:min-h-[640px] sm:bg-[position:58%_center]
          lg:min-h-[700px] lg:bg-center
        "
        style={{
          backgroundImage: "url('/images/hero-internet.png')",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-blue-950/45 lg:bg-transparent" />

        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/85 to-blue-950/20 lg:from-blue-950/95 lg:via-blue-950/70 lg:to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/20 to-transparent" />

        <div
          className="
            relative mx-auto flex min-h-[620px] max-w-7xl items-center
            px-5 pb-14 pt-28
            sm:min-h-[640px] sm:px-8
            lg:min-h-[700px] lg:px-6 lg:pt-24
          "
        >
          <div className="w-full max-w-[640px] text-white">
            <h1 className="text-[clamp(2.5rem,9vw,5rem)] font-black leading-[0.95] tracking-tight">
              INTERNET
              <span className="block text-blue-400">FIBRA ÓPTICA</span>
            </h1>

            <h2 className="mt-4 text-[clamp(1.6rem,6vw,3.4rem)] font-black leading-tight tracking-tight">
              ULTRA VELOCIDADE
              <span className="block text-blue-300">PARA SUA CASA</span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-blue-50 sm:text-lg lg:text-xl">
              Navegue, trabalhe, assista e jogue com uma conexão rápida,
              estável e feita para acompanhar sua rotina.
            </p>

            <div className="mt-7 grid max-w-xl grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-4 sm:gap-x-6">
              {features.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="group flex items-center gap-3"
                  >
                    <Icon
                      size={28}
                      strokeWidth={1.8}
                      className="text-blue-400 transition-all duration-300 group-hover:scale-110 group-hover:text-cyan-300"
                    />

                    <span className="whitespace-pre-line text-xs font-semibold leading-tight text-white sm:text-sm">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a
                href="#cobertura"
                className="flex w-full items-center justify-center gap-3 rounded-lg bg-blue-500 px-6 py-4 text-sm font-bold uppercase text-white shadow-lg shadow-blue-950/30 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-400 hover:shadow-xl active:scale-95 sm:w-auto sm:px-8"
              >
                <MapPin size={18} strokeWidth={2.2} />
                Consultar cobertura
              </a>

              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-3 rounded-lg bg-green-500 px-6 py-4 text-sm font-bold uppercase text-white shadow-lg shadow-green-950/30 transition-all duration-300 hover:-translate-y-1 hover:bg-green-400 hover:shadow-xl active:scale-95 sm:w-auto sm:px-8"
              >
                <MessageCircle size={18} strokeWidth={2.2} />
                Contratar agora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}