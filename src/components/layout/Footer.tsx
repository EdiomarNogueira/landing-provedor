import {

  Phone,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-blue-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.15),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(34,211,238,0.10),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Empresa */}
          <div>
            <h3 className="text-2xl font-black">
              Nome Provedor
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-blue-100">
              Internet fibra óptica com velocidade, estabilidade e
              atendimento de qualidade para sua casa e empresa.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <h4 className="font-bold text-white">
              Navegação
            </h4>

            <ul className="mt-4 space-y-3 text-sm text-blue-100">
              <li>
                <a href="#inicio" className="transition hover:text-white">
                  Início
                </a>
              </li>

              <li>
                <a href="#planos" className="transition hover:text-white">
                  Planos
                </a>
              </li>

              <li>
                <a href="#beneficios" className="transition hover:text-white">
                  Benefícios
                </a>
              </li>

              <li>
                <a href="#cobertura" className="transition hover:text-white">
                  Cobertura
                </a>
              </li>

              <li>
                <a href="#duvidas" className="transition hover:text-white">
                  Dúvidas
                </a>
              </li>
            </ul>
          </div>

          {/* Cliente */}
          <div>
            <h4 className="font-bold text-white">
              Área do Cliente
            </h4>

            <ul className="mt-4 space-y-3 text-sm text-blue-100">
              <li>
                <a href="#" className="transition hover:text-white">
                  Segunda via
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Abrir chamado
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Teste de velocidade
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Central do Assinante
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-bold text-white">
              Contato
            </h4>

            <ul className="mt-4 space-y-4 text-sm text-blue-100">
              <li className="flex items-center gap-3">
                <Phone size={16} />
                (77) 3333-3333
              </li>

              <li className="flex items-center gap-3">
                <MessageCircle size={16} />
                (77) 99999-9999
              </li>

              <li className="flex items-center gap-3">
                <Mail size={16} />
                contato@provedor.com.br
              </li>

              <li className="flex items-center gap-3">
                <MapPin size={16} />
                Vitória da Conquista - BA
              </li>
            </ul>

            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
              >
                <FaYoutube size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-blue-200 md:flex-row">
            <p>
              © {new Date().getFullYear()} Nome Provedor.
              Todos os direitos reservados.
            </p>

            <div className="flex gap-6">
              <a href="#" className="transition hover:text-white">
                Política de Privacidade
              </a>

              <a href="#" className="transition hover:text-white">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}