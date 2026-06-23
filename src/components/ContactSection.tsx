import {
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";

import { contactInfo } from "../data/contactInfo";

export function ContactSection() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-slate-950 px-6 py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.25),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(34,211,238,0.15),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-[0.3em] text-blue-300">
            Fale Conosco
          </span>

          <h2 className="mt-3 text-3xl font-black text-white md:text-5xl">
            Estamos prontos para atender você
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Entre em contato pelo canal que preferir ou envie uma mensagem
            diretamente pelo formulário.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <a
            href={`tel:${contactInfo.phone}`}
            className="group rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:bg-white/15"
          >
            <Phone
              size={52}
              strokeWidth={1.7}
              className="text-blue-400 transition duration-300 group-hover:scale-110"
            />

            <h3 className="mt-5 text-xl font-black text-white">
              Ligue Agora
            </h3>

            <p className="mt-2 text-blue-100">
              {contactInfo.phone}
            </p>
          </a>

          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            className="group rounded-3xl border border-green-500/20 bg-green-500/10 p-8 backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:bg-green-500/15"
          >
            <MessageCircle
              size={52}
              strokeWidth={1.7}
              className="text-green-400 transition duration-300 group-hover:scale-110"
            />

            <h3 className="mt-5 text-xl font-black text-white">
              WhatsApp
            </h3>

            <p className="mt-2 text-green-100">
              {contactInfo.whatsapp}
            </p>
          </a>

          <a
            href={`mailto:${contactInfo.email}`}
            className="group rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:bg-white/15"
          >
            <Mail
              size={52}
              strokeWidth={1.7}
              className="text-cyan-400 transition duration-300 group-hover:scale-110"
            />

            <h3 className="mt-5 text-xl font-black text-white">
              E-mail
            </h3>

            <p className="mt-2 text-blue-100">
              {contactInfo.email}
            </p>
          </a>
        </div>

        <div className="mt-12 rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-md">
          <form className="grid gap-6 md:grid-cols-2">
            <input
              type="text"
              placeholder="Seu nome"
              className="h-14 rounded-xl border border-white/10 bg-white/10 px-4 text-white outline-none placeholder:text-blue-200 focus:border-blue-400"
            />

            <input
              type="email"
              placeholder="Seu e-mail"
              className="h-14 rounded-xl border border-white/10 bg-white/10 px-4 text-white outline-none placeholder:text-blue-200 focus:border-blue-400"
            />

            <input
              type="tel"
              placeholder="Seu telefone"
              className="h-14 rounded-xl border border-white/10 bg-white/10 px-4 text-white outline-none placeholder:text-blue-200 focus:border-blue-400 md:col-span-2"
            />

            <textarea
              placeholder="Digite sua mensagem..."
              rows={5}
              className="rounded-xl border border-white/10 bg-white/10 p-4 text-white outline-none placeholder:text-blue-200 focus:border-blue-400 md:col-span-2"
            />

            <button
              type="submit"
              className="h-14 rounded-xl bg-blue-600 font-bold uppercase text-white transition-all duration-300 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/30 md:col-span-2"
            >
              Enviar mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}