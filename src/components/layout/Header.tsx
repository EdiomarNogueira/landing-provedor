export function Header() {
    const navLink =
        "relative transition-all duration-300 ease-out hover:-translate-y-0.5 hover:text-blue-100 after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-white after:transition-all after:duration-300 hover:after:w-full";

    return (
        <header className="sticky top-0 z-50 w-full overflow-hidden border-b border-white/20 bg-gradient-to-r from-blue-950 via-blue-700 to-cyan-500 shadow-lg shadow-blue-950/20 backdrop-blur">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255, 255, 255, 0.25),transparent_25%),radial-gradient(circle_at_80%_0%,rgba(24, 37, 112, 0.35),transparent_30%)]" />

            <div className="absolute inset-0 animate-pulse bg-white/5" />

            <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
                <a href="#" className="text-xl font-bold text-white">
                    Nome Provedor
                </a>

                <nav className="hidden items-center gap-8 text-sm font-medium text-white md:flex">
                    <a href="#inicio" className={navLink}>
                        Início
                    </a>
                    <a href="#planos" className={navLink}>
                        Planos
                    </a>
                    <a href="#beneficios" className={navLink}>
                        Benefícios
                    </a>
                    <a href="#cobertura" className={navLink}>
                        Cobertura
                    </a>
                    <a href="#duvidas" className={navLink}>
                        Dúvidas
                    </a>
                    <a href="#empresa" className={navLink}>
                        A Empresa
                    </a>
                </nav>

                <a
                    href="https://wa.me/5500000000000"
                    className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-blue-700 shadow-lg shadow-blue-950/30 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:bg-blue-50 hover:shadow-xl active:translate-y-0 active:scale-95"
                >
                    Contratar agora
                </a>
            </div>
        </header>
    );
}